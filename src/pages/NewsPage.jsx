import { useEffect, useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Search, RotateCw } from 'lucide-react'
import { getLiveNews } from '../services/newsService.js'
import NewsCard from '../components/NewsCard.jsx'
import NewsHero from '../components/NewsHero.jsx'
import CategoryTabs from '../components/CategoryTabs.jsx'
import SectionHeading from '../components/SectionHeading.jsx'

function NewsPage() {
  const [articles, setArticles] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [isRefreshing, setIsRefreshing] = useState(false)

  const fetchNews = async (force = false) => {
    if (force) setIsRefreshing(true)
    else setIsLoading(true)

    const data = await getLiveNews(force)
    setArticles(data)
    
    setIsLoading(false)
    setIsRefreshing(false)
  }

  // Initial load
  useEffect(() => {
    fetchNews()
  }, [])

  // Auto refresh every 15 mins
  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchNews(true)
    }, 15 * 60 * 1000)
    return () => clearInterval(intervalId)
  }, [])

  // Filter articles based on search and category
  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory = activeCategory === 'All' || 
        (article.category && article.category.toLowerCase().includes(activeCategory.toLowerCase()))

      const searchLower = searchQuery.toLowerCase()
      const matchesSearch = 
        article.title.toLowerCase().includes(searchLower) ||
        (article.snippet && article.snippet.toLowerCase().includes(searchLower)) ||
        (article.source && article.source.toLowerCase().includes(searchLower))

      return matchesCategory && matchesSearch
    })
  }, [articles, activeCategory, searchQuery])

  const heroArticle = articles.length > 0 
    ? (articles.find(a => a.image && a.image.trim() !== '') || articles[0]) 
    : null
  const gridArticles = articles.length > 0 ? filteredArticles.filter(a => a.id !== heroArticle?.id) : []

  return (
    <div className="min-h-screen bg-[#0B0F19] pt-[80px]">
      {/* ── Breaking News Ticker ── */}
      {articles.length > 0 && (
        <div className="bg-red-500/10 border-b border-red-500/20 overflow-hidden relative flex items-center h-10 w-full z-20 backdrop-blur-md">
          <div className="absolute left-0 top-0 bottom-0 z-30 flex items-center bg-red-500 px-3 sm:px-4 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-white shadow-[10px_0_20px_rgba(239,68,68,0.3)]">
            Breaking News
          </div>
          <div className="flex animate-ticker whitespace-nowrap pl-24 sm:pl-32 items-center">
            {[...articles.slice(0, 5), ...articles.slice(0, 5)].map((article, i) => (
              <div key={`${article.id}-${i}`} className="flex items-center">
                <span className="text-[11px] sm:text-xs font-semibold text-slate-200">{article.title}</span>
                <span className="mx-4 sm:mx-6 h-1 w-1 rounded-full bg-red-500/50" />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Hero Section ── */}
      {isLoading ? (
        <div className="h-[70svh] w-full skeleton-shimmer" />
      ) : (
        <NewsHero article={searchQuery || activeCategory !== 'All' ? null : heroArticle} />
      )}

      {/* ── Main Content Area ── */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        
        {/* Header & Controls */}
        <div className="mb-14 flex flex-col items-center justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Live Feed"
            title="Latest Updates"
            description="Breaking news, reviews, and insights from across the gaming world."
          />
          
          <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
            <div className="relative w-full sm:w-72">
              <input
                type="text"
                placeholder="Search headlines..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full border border-white/10 bg-slate-900/50 py-3.5 pl-12 pr-4 text-sm font-medium text-white placeholder-slate-400 backdrop-blur-md outline-none transition hover:border-violet-500/30 focus:border-violet-500 focus:bg-slate-900 focus:ring-1 focus:ring-violet-500"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            </div>

            <button
              onClick={() => fetchNews(true)}
              disabled={isRefreshing}
              className="flex items-center justify-center rounded-full border border-white/10 bg-slate-900/50 p-3.5 text-slate-400 transition hover:bg-white/10 hover:text-white"
              title="Refresh News"
            >
              <RotateCw className={`h-5 w-5 ${isRefreshing ? 'animate-spin text-cyan-400' : ''}`} />
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <CategoryTabs 
          activeCategory={activeCategory} 
          onSelectCategory={setActiveCategory} 
        />

        {/* Grid Area */}
        {isLoading ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="aspect-[3/4] rounded-[28px] skeleton-shimmer opacity-50" />
            ))}
          </div>
        ) : filteredArticles.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {(searchQuery || activeCategory !== 'All' ? filteredArticles : gridArticles).map((article, idx) => (
              <NewsCard key={article.id} article={article} index={idx} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="rounded-full bg-white/5 p-6 mb-4">
              <Search className="h-10 w-10 text-slate-500" />
            </div>
            <h3 className="font-display text-3xl uppercase text-white">No Stories Found</h3>
            <p className="mt-3 text-slate-400 max-w-md">
              We couldn't find any news matching your criteria. Try adjusting your filters or search terms.
            </p>
          </div>
        )}
      </section>
    </div>
  )
}

export default NewsPage
