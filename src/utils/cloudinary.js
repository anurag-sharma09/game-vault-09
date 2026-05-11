import { slugify } from './slugify';

// This should be set in your .env as VITE_CLOUDINARY_CLOUD_NAME
const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'demo'; 
const BASE_URL = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;

/**
 * Generates a transformed Cloudinary URL.
 * 
 * @param {string} path - The folder and public ID (e.g., 'gamevault/games/elden-ring')
 * @param {Object} options - Transformation options
 * @param {number} options.width - Desired width
 * @param {number} options.height - Desired height
 * @param {string} options.crop - Crop mode (default: 'fill')
 * @param {string} options.gravity - Gravity (default: 'auto')
 * @param {boolean} options.isBanner - If true, applies banner-specific transformations
 * @returns {string} The complete Cloudinary URL
 */
export const getCloudinaryUrl = (path, options = {}) => {
  if (!path) return '';

  // If path is already a full URL, return it (useful for external fallbacks)
  if (path.startsWith('http')) return path;

  const {
    width,
    height,
    crop = 'fill',
    gravity = 'auto',
    isBanner = false
  } = options;

  const transformations = [
    'f_auto', // Auto format (webp, avif)
    'q_auto', // Auto quality
  ];

  if (width) transformations.push(`w_${width}`);
  if (height) transformations.push(`h_${height}`);
  if (crop) transformations.push(`c_${crop}`);
  if (gravity) transformations.push(`g_${gravity}`);

  // Join transformations and build final URL
  return `${BASE_URL}/${transformations.join(',')}/${path}`;
};

/**
 * Helper to get a game poster image URL
 */
export const getGameImageUrl = (title, options = {}) => {
  const slug = slugify(title);
  return getCloudinaryUrl(`gamevault/games/${slug}.webp`, {
    width: 600,
    height: 900, // 2:3 aspect ratio
    ...options
  });
};

/**
 * Helper to get a game banner URL
 */
export const getGameBannerUrl = (title, options = {}) => {
  const slug = slugify(title);
  return getCloudinaryUrl(`gamevault/banners/${slug}.webp`, {
    width: 1920,
    height: 1080,
    ...options
  });
};

/**
 * Helper to get a news image URL
 */
export const getNewsImageUrl = (title, options = {}) => {
  const slug = slugify(title);
  return getCloudinaryUrl(`gamevault/news/${slug}.webp`, {
    width: 800,
    height: 450, // 16:9 aspect ratio
    ...options
  });
};

/**
 * Helper to get a category image URL
 */
export const getCategoryImageUrl = (name, options = {}) => {
  const slug = slugify(name);
  return getCloudinaryUrl(`gamevault/categories/${slug}.webp`, {
    width: 800,
    height: 600,
    ...options
  });
};
