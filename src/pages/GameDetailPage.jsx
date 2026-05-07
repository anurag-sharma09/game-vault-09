import { useState, useEffect, useMemo } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  Download,
  Globe,
  PlayCircle,
  ShieldCheck,
  Star,
  Heart,
  ChevronLeft,
  Calendar,
  Gamepad2,
  Tag
} from 'lucide-react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import GameCard from '../components/GameCard.jsx'
import GameArtwork from '../components/GameArtwork.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { games, getGameBySlug } from '../data/siteData.js'
import { useGameImage } from '../components/useGameImage.js'
import FallbackArtwork from '../components/FallbackArtwork.jsx'
import { useStoreData } from '../hooks/useStoreData.js'

const reveal = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}

function GameDetailPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const game = getGameBySlug(slug)
  const { wishlist, toggleWishlist, addToHistory } = useStoreData()

  const { scrollY } = useScroll()
  const bannerY = useTransform(scrollY, [0, 800], [0, 150])
  const bannerScale = useTransform(scrollY, [0, 800], [1, 1.1])

  const { activeSrc: bannerSrc, isLoading: bannerLoading, isGradient: bannerGradient } = useGameImage(game?.banner, game?.image)

  useEffect(() => {
    if (game) {
      window.scrollTo({ top: 0, behavior: 'instant' })
      addToHistory(game.id)
    }
  }, [slug, game])

  const inWishlist = game ? wishlist.includes(game.id) : false

  const relatedGames = useMemo(() => {
    if (!game) return []
    return games
      .filter((candidate) => candidate.slug !== game.slug && candidate.categories.some((c) => game.categories.includes(c)))
      .sort((a, b) => b.popularity - a.popularity)
      .slice(0, 4)
  }, [game])

  if (!game) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-[#05070D]">
        <div className="glass-panel rounded-[38px] px-6 py-14 text-center sm:px-10">
          <h1 className="font-display text-6xl uppercase leading-none text-white">Missing Protocol</h1>
          <button onClick={() => navigate('/games')} className="mt-8 btn-neon">Back to Vault</button>
        </div>
      </section>
    )
  }

  return (
    <div className="min-h-screen bg-[#05070D] overflow-x-hidden">
      {/* ── Cinematic Hero ── */}
      <section className="relative flex min-h-[60svh] flex-col justify-end">
        <motion.div style={{ y: bannerY, scale: bannerScale }} className="absolute inset-0 origin-top">
          {bannerGradient && (
            <FallbackArtwork title={game.title} categories={game.categories} className="absolute inset-0 h-full w-full" />
          )}
          {bannerLoading && !bannerGradient && <div className="absolute inset-0 skeleton-shimmer" />}
          {!bannerGradient && (
            <img src={bannerSrc} alt={game.title} className="h-full w-full object-cover object-top opacity-60" />
          )}
        </motion.div>
        
        {/* Layered Store Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#05070D] via-[#05070D]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05070D] via-[#05070D]/40 to-transparent" />

        <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-8 pb-16 pt-32">
          <motion.button onClick={() => navigate('/games')} className="mb-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-white transition">
            <ChevronLeft className="h-4 w-4" /> Back to Store
          </motion.button>
          
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.div variants={reveal} className="flex gap-3 mb-6">
              {game.categories.map(c => (
                <span key={c} className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md">
                  {c}
                </span>
              ))}
            </motion.div>
            <motion.h1 variants={reveal} className="font-display uppercase leading-none text-white drop-shadow-2xl" style={{ fontSize: 'var(--fluid-h1)' }}>
              {game.title}
            </motion.h1>
            <motion.p variants={reveal} className="mt-6 text-lg sm:text-xl leading-8 text-slate-300 drop-shadow-md">
              {game.description}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Store Layout (Main + Sticky Sidebar) ── */}
      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Main Content (Left) */}
          <div className="flex-1 space-y-16 min-w-0 w-full">
            {/* Screenshots Gallery */}
            {game.screenshots && game.screenshots.length > 0 && (
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
                <h2 className="font-display uppercase text-white mb-6" style={{ fontSize: 'var(--fluid-h2)' }}>Gallery</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {game.screenshots.slice(0, 4).map((shot, idx) => (
                    <motion.div key={idx} variants={reveal} className="overflow-hidden rounded-[24px] border border-white/5">
                      <GameArtwork imageSrc={shot.src} title={shot.title} className="aspect-video w-full" compact loading="lazy" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* About Experience */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="glass-panel p-6 sm:p-8 rounded-[32px]">
              <h2 className="font-display uppercase text-white mb-6" style={{ fontSize: 'var(--fluid-h2)' }}>About the Experience</h2>
              <p className="text-slate-300/90 leading-relaxed text-sm sm:text-base">
                {game.vaultNote || "Immerse yourself in this premium experience securely routed through official channels. Game Vault ensures all interactions point exclusively to verified storefronts."}
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {game.highlights?.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3 rounded-2xl bg-white/5 p-4">
                    <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-violet-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-200">{highlight}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* System Requirements */}
            {game.systemRequirements && (
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
                <h2 className="font-display uppercase text-white mb-6" style={{ fontSize: 'var(--fluid-h2)' }}>System Requirements</h2>
                <div className="glass-panel p-8 rounded-[32px] grid gap-6 sm:grid-cols-2">
                  {Object.entries(game.systemRequirements).map(([key, val]) => (
                    <div key={key} className="border-b border-white/5 pb-4">
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400/80 mb-1">{key}</p>
                      <p className="text-sm text-slate-200 font-medium">{val}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Sticky Store Sidebar (Right) */}
          <aside className="w-full lg:w-[380px] shrink-0 space-y-8 lg:sticky lg:top-32">
            
            {/* Action Panel */}
            <div className="glass-panel p-6 rounded-[32px] shadow-2xl shadow-black/50">
              <div className="relative aspect-[16/9] mb-6 overflow-hidden rounded-[20px] border border-white/10">
                <img src={game.image} alt={game.title} className="absolute inset-0 h-full w-full object-cover" />
              </div>

              <div className="flex items-center justify-between mb-6">
                <span className="text-2xl font-display text-white">{game.priceModel === 'Free' ? 'Free to Play' : game.price || 'Premium'}</span>
                {game.rating && (
                  <div className="flex items-center gap-1.5 rounded-full bg-amber-500/10 px-3 py-1 border border-amber-500/20">
                    <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                    <span className="text-sm font-bold text-amber-200">{game.rating.toFixed(1)}</span>
                  </div>
                )}
              </div>

              <div className="space-y-3">
                <a href={game.official_url} target="_blank" rel="noreferrer" className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[linear-gradient(135deg,#a855f7,#22d3ee)] px-4 py-4 text-sm font-bold uppercase tracking-[0.15em] text-black transition hover:brightness-110">
                  <Download className="h-5 w-5" /> Download / Play
                </a>
                <button onClick={() => toggleWishlist(game.id)} className={`flex w-full items-center justify-center gap-2 rounded-2xl border px-4 py-4 text-sm font-bold uppercase tracking-[0.15em] transition ${inWishlist ? 'border-violet-500/50 bg-violet-500/10 text-violet-300' : 'border-white/10 bg-white/5 text-white hover:bg-white/10'}`}>
                  <Heart className={`h-5 w-5 ${inWishlist ? 'fill-current' : ''}`} /> {inWishlist ? 'Saved to Wishlist' : 'Add to Wishlist'}
                </button>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10 space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Developer</span>
                  <span className="text-white font-medium">{game.developer}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Publisher</span>
                  <span className="text-white font-medium">{game.publisher}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Release Date</span>
                  <span className="text-white font-medium">{game.releaseYear}</span>
                </div>
              </div>
            </div>

            {/* Badges / Platforms */}
            <div className="glass-panel p-6 rounded-[28px]">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400/80 mb-4">Platforms</p>
              <div className="flex flex-wrap gap-2">
                {game.platforms.map(p => (
                  <span key={p} className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-slate-300">{p}</span>
                ))}
              </div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400/80 mt-6 mb-4">Tags</p>
              <div className="flex flex-wrap gap-2">
                {game.genres.map(g => (
                  <span key={g} className="rounded-lg bg-black/40 px-3 py-1.5 text-xs font-semibold text-slate-400">#{g}</span>
                ))}
              </div>
            </div>

            {/* Recommendations */}
            {relatedGames.length > 0 && (
              <div className="space-y-4">
                <h3 className="font-display text-2xl uppercase text-white border-b border-white/10 pb-2">Players Also Liked</h3>
                {relatedGames.map(rg => (
                  <Link key={rg.id} to={`/games/${rg.slug}`} className="group flex gap-4 rounded-[20px] p-2 hover:bg-white/5 transition">
                    <img src={rg.image} alt={rg.title} className="h-16 w-16 rounded-xl object-cover" />
                    <div className="flex flex-col justify-center">
                      <span className="line-clamp-1 text-sm font-bold text-slate-200 group-hover:text-cyan-300">{rg.title}</span>
                      <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">{rg.genre}</span>
                    </div>
                  </Link>
                ))}
              </div>
            )}

          </aside>
        </div>
      </section>
    </div>
  )
}

export default GameDetailPage
