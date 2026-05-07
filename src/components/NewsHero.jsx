import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock, Flame } from 'lucide-react'
import { useGameImage } from './useGameImage.js'
import FallbackArtwork from './FallbackArtwork.jsx'
import { getRelativeTime } from './NewsCard.jsx'

function NewsHero({ article }) {
  if (!article) return null

  const { activeSrc, isLoading, isGradient } = useGameImage(article.image)

  return (
    <section className="relative flex min-h-[70svh] flex-col overflow-hidden border-b border-white/10">
      {/* Background Image */}
      <div className="absolute inset-0">
        {isGradient && (
          <FallbackArtwork
            title={article.title}
            categories={[article.category, article.source]}
            className="absolute inset-0 h-full w-full"
            compact={false}
          />
        )}

        {isLoading && !isGradient && (
          <div className="absolute inset-0 skeleton-shimmer" />
        )}

        {!isGradient && (
          <img
            src={activeSrc}
            alt={article.title}
            loading="eager"
            className={`h-full w-full object-cover object-center ${!isLoading ? 'game-img-loaded' : 'opacity-0'}`}
          />
        )}
      </div>

      {/* Layered Cinematic Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-black/30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(168,85,247,0.18),transparent_50%)]" />

      {/* Content */}
      <div className="relative mx-auto flex w-full max-w-7xl flex-1 items-end px-6 pb-20 pt-36">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          {/* Breaking News Tag */}
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-red-500/40 bg-red-500/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-red-300 backdrop-blur-md">
              <Flame className="h-3 w-3" />
              Latest News
            </span>
            <span className="rounded-full border border-white/14 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md">
              {article.source}
            </span>
            <span className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-slate-300">
              <Clock className="h-3.5 w-3.5" />
              {getRelativeTime(article.pubDate)}
            </span>
          </div>

          <Link to={`/news/${article.slug}`}>
            <h1 className="font-display text-[3.5rem] uppercase leading-[0.9] text-white transition hover:text-cyan-200 sm:text-[4.5rem] lg:text-[5.5rem] drop-shadow-2xl">
              {article.title}
            </h1>
          </Link>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200/90 sm:text-lg drop-shadow-md">
            {article.snippet}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to={`/news/${article.slug}`}
              className="btn-neon inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-black"
            >
              Read Full Story
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default NewsHero
