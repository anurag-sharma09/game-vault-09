import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Clock } from 'lucide-react'
import { useGameImage } from './useGameImage.js'
import FallbackArtwork from './FallbackArtwork.jsx'

/**
 * Formats an ISO string to a relative time (e.g., "2 hours ago")
 */
function getRelativeTime(dateString) {
  const date = new Date(dateString)
  const now = new Date()
  const diffInSeconds = Math.floor((now - date) / 1000)

  if (diffInSeconds < 60) return 'Just now'
  
  const diffInMinutes = Math.floor(diffInSeconds / 60)
  if (diffInMinutes < 60) return `${diffInMinutes}m ago`
  
  const diffInHours = Math.floor(diffInMinutes / 60)
  if (diffInHours < 24) return `${diffInHours}h ago`
  
  const diffInDays = Math.floor(diffInHours / 24)
  if (diffInDays < 7) return `${diffInDays}d ago`
  
  return date.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })
}

function NewsCard({ article, index }) {
  const { activeSrc, isLoading, isGradient } = useGameImage(article.image)
  const delay = Math.min(index * 0.05, 0.5) // Stagger effect

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      whileHover={{ y: -8 }}
      className="card-hover group flex h-full flex-col overflow-hidden rounded-[28px] border border-white/10 bg-slate-900/60 backdrop-blur-md transition-all duration-300 hover:border-violet-500/30 hover:shadow-[0_0_40px_rgba(139,92,246,0.15)]"
    >
      <Link to={`/news/${article.slug}`} className="block">
        <div className="relative aspect-[16/10] w-full overflow-hidden">
          {/* Fallback Artwork */}
          {isGradient && (
            <FallbackArtwork
              title={article.title}
              categories={[article.category, article.source]}
              className="absolute inset-0 h-full w-full"
              compact={true}
            />
          )}

          {/* Skeleton Loading */}
          {isLoading && !isGradient && (
            <div className="absolute inset-0 skeleton-shimmer" />
          )}

          {/* Actual Image */}
          {!isGradient && (
            <img
              src={activeSrc}
              alt={article.title}
              loading="lazy"
              className={`card-img absolute inset-0 h-full w-full object-cover object-center ${!isLoading ? 'game-img-loaded' : 'opacity-0'}`}
            />
          )}

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-80" />

          {/* Source & Category Badge */}
          <div className="absolute left-4 top-4 flex gap-2">
            <span className="rounded-full border border-white/14 bg-black/40 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md">
              {article.source}
            </span>
          </div>
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400">
            {article.category}
          </span>
          <span className="flex items-center gap-1.5 text-xs font-medium text-slate-400">
            <Clock className="h-3.5 w-3.5" />
            {getRelativeTime(article.pubDate)}
          </span>
        </div>

        <Link to={`/news/${article.slug}`}>
          <h3 className="line-clamp-2 font-display text-2xl uppercase leading-tight text-white transition group-hover:text-cyan-200">
            {article.title}
          </h3>
        </Link>

        <p className="line-clamp-3 mt-4 text-sm leading-relaxed text-slate-300/80">
          {article.snippet}
        </p>

        <div className="mt-auto pt-6">
          <Link
            to={`/news/${article.slug}`}
            className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-violet-300 transition group-hover:text-cyan-300"
          >
            Read Story <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </motion.article>
  )
}

export { getRelativeTime };
export default NewsCard;
