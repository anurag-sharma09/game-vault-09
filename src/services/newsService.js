const RSS_FEEDS = [
  { url: 'http://feeds.ign.com/ign/news', source: 'IGN' },
  { url: 'https://www.gamespot.com/feeds/news/', source: 'GameSpot' },
  { url: 'https://www.polygon.com/rss/index.xml', source: 'Polygon' }
];

const CACHE_KEY = 'gamevault_news_cache';
const CACHE_EXPIRY_MS = 15 * 60 * 1000; // 15 minutes

/**
 * Extracts a clean image from content if the thumbnail is missing.
 */
function extractImageFromContent(htmlContent) {
  if (!htmlContent) return null;
  const match = htmlContent.match(/<img[^>]+src="([^">]+)"/);
  return match ? match[1] : null;
}

/**
 * Cleans HTML tags from a string to create a plain text preview.
 */
function cleanContentPreview(htmlContent, maxLength = 180) {
  if (!htmlContent) return '';
  const text = htmlContent.replace(/<[^>]*>?/gm, '').trim();
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
}

/**
 * Parses and normalizes a single article from the RSS2JSON format.
 */
function normalizeArticle(item, sourceName) {
  // Try to find the best image
  const image = item.thumbnail || item.enclosure?.link || extractImageFromContent(item.content) || extractImageFromContent(item.description) || null;
  
  // Create a clean preview snippet
  let snippet = cleanContentPreview(item.description);
  if (!snippet || snippet.length < 20) {
    snippet = cleanContentPreview(item.content);
  }

  // Fallback category logic
  let category = 'Gaming';
  if (item.categories && item.categories.length > 0) {
    if (typeof item.categories === 'string') {
        category = item.categories;
    } else {
        category = item.categories[0];
    }
  }

  // Create deterministic slug
  const slug = item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

  return {
    id: item.guid || slug,
    slug,
    title: item.title,
    image,
    source: sourceName,
    pubDate: new Date(item.pubDate).toISOString(),
    link: item.link,
    author: item.author || sourceName,
    snippet,
    content: item.content, // We will not render this as raw HTML, just use it for the preview page
    category: category,
  };
}

/**
 * Fetches all news feeds, normalizes them, and sorts by date.
 */
async function fetchNewsFromFeeds() {
  const fetchPromises = RSS_FEEDS.map(async (feed) => {
    try {
      const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feed.url)}`);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      
      if (data.status !== 'ok') {
        throw new Error(`API error: ${data.message}`);
      }

      return data.items.map(item => normalizeArticle(item, feed.source));
    } catch (error) {
      console.error(`Failed to fetch news from ${feed.source}:`, error);
      return []; // Return empty array so Promise.all doesn't fail
    }
  });

  const results = await Promise.all(fetchPromises);
  const allArticles = results.flat();

  // Deduplicate by title
  const seenTitles = new Set();
  const uniqueArticles = allArticles.filter(article => {
    if (seenTitles.has(article.title)) return false;
    seenTitles.add(article.title);
    return true;
  });

  // Sort by publish date descending
  return uniqueArticles.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
}

const MOCK_ARTICLES = [
  {
    id: 'mock-1',
    slug: 'gta-vi-leaks-confirmed',
    title: 'Grand Theft Auto VI: New Gameplay Features Leaked',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=2070',
    source: 'Game Vault News',
    pubDate: new Date().toISOString(),
    link: 'https://www.rockstargames.com/vi',
    author: 'Vault Staff',
    snippet: 'Recent leaks suggest that GTA VI will feature a dynamic weather system and more interactive interiors than any previous Rockstar title.',
    category: 'Leaks',
  },
  {
    id: 'mock-2',
    slug: 'ps6-rumors-surface',
    title: 'PlayStation 6: Early Specs and Release Window Rumors',
    image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&q=80&w=2070',
    source: 'TechRadar',
    pubDate: new Date(Date.now() - 3600000).toISOString(),
    link: 'https://www.playstation.com',
    author: 'Jane Doe',
    snippet: 'Industry insiders claim Sony is already in early development of the next generation console, targeting a 2028 release date.',
    category: 'Hardware',
  },
  {
    id: 'mock-3',
    slug: 'elden-ring-dlc-update',
    title: 'Elden Ring: Shadow of the Erdtree Patch Notes Released',
    image: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&q=80&w=2071',
    source: 'IGN',
    pubDate: new Date(Date.now() - 7200000).toISOString(),
    link: 'https://www.ign.com',
    author: 'Mark Smith',
    snippet: 'The latest update for Shadow of the Erdtree brings balance changes to several boss encounters and improves performance on PC.',
    category: 'Updates',
  }
];

/**
 * Main hook/service method for components to call.
 * Uses sessionStorage caching to prevent rate limits and ensure instant loads.
 */
export async function getLiveNews(forceRefresh = false) {
  try {
    if (!forceRefresh) {
      const cached = sessionStorage.getItem(CACHE_KEY);
      if (cached) {
        const { timestamp, data } = JSON.parse(cached);
        const age = Date.now() - timestamp;
        
        if (age < CACHE_EXPIRY_MS && data && data.length > 0) {
          return data;
        }
      }
    }

    const newsData = await fetchNewsFromFeeds();
    
    // Only cache if we actually got data
    if (newsData && newsData.length > 0) {
      sessionStorage.setItem(CACHE_KEY, JSON.stringify({
        timestamp: Date.now(),
        data: newsData
      }));
      return newsData;
    }
    
    // If fetching failed but we have stale cache, use stale cache as fallback
    const staleCached = sessionStorage.getItem(CACHE_KEY);
    if (staleCached) {
        return JSON.parse(staleCached).data;
    }

    // Ultimate fallback to mock data
    return MOCK_ARTICLES;
  } catch (error) {
    console.error("Error in getLiveNews:", error);
    // Try stale cache first
    const staleCached = sessionStorage.getItem(CACHE_KEY);
    if (staleCached) return JSON.parse(staleCached).data;
    
    // Then mock data
    return MOCK_ARTICLES;
  }
}

/**
 * Convenience method to fetch a specific number of articles that strictly have an image.
 * This is useful for high-impact sections like the homepage to ensure visual consistency.
 */
export async function getNewsWithImages(count = 3, forceRefresh = false) {
  const allNews = await getLiveNews(forceRefresh);
  const newsWithImages = allNews.filter(article => article.image && article.image.trim() !== '');
  return newsWithImages.slice(0, count);
}
