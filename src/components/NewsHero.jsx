import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock, Flame, ExternalLink } from 'lucide-react'
import { useGameImage } from './useGameImage.js'
import FallbackArtwork from './FallbackArtwork.jsx'
import { getRelativeTime } from './NewsCard.jsx'

const reveal = {
  hidden: { opacity: 0, y: 38 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
}

function NewsHero({ article }) {
  if (!article) return null
  
  const { activeSrc, isLoading, isGradient } = useGameImage(article.image, null, { 
    title: article.title, 
    type: 'news' 
  })

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
      <div className="relative mx-auto flex h-full w-full max-w-[92rem] flex-1 flex-col justify-end px-4 pb-20 sm:px-6 lg:px-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="w-full max-w-4xl"
        >
          <motion.div variants={reveal} className="mb-6 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-red-500/40 bg-red-500/20 px-3 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-red-300 backdrop-blur-md">
              <Flame className="h-3 w-3 sm:h-4 sm:w-4" />
              Top Story
            </span>
            <span className="rounded-full border border-white/14 bg-white/10 px-3 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md">
              {article.source}
            </span>
            {article.category && (
              <span className="rounded-full border border-white/14 bg-white/10 px-3 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-cyan-300 backdrop-blur-md">
                {article.category}
              </span>
            )}
          </motion.div>

          <motion.h1
            variants={reveal}
            className="font-display uppercase leading-[0.9] text-white drop-shadow-2xl text-[2rem] xs:text-[2.5rem] sm:text-[var(--fluid-h1)]"
          >
            {article.title}
          </motion.h1>

          <motion.p
            variants={reveal}
            className="mt-6 max-w-2xl text-base sm:text-lg lg:text-xl leading-relaxed text-slate-200/90 drop-shadow-md line-clamp-3"
          >
            {article.snippet}
          </motion.p>

          <motion.div variants={reveal} className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={article.link}
              target="_blank"
              rel="noreferrer"
              className="btn-neon inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-slate-950 w-full sm:w-auto justify-center transition hover:bg-cyan-100"
            >
              Read Full Story
              <ExternalLink className="h-4 w-4" />
            </a>
            <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-400">
              <Clock className="h-4 w-4" />
              {getRelativeTime(article.pubDate)}
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default NewsHero

