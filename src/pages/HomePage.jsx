import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  ArrowRight,
  ChevronDown,
  Flame,
  PlayCircle,
  Sparkles,
  Star,
  TrendingUp,
  Zap,
  Gamepad2,
  Layout,
  Newspaper,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { games, categories } from '../data/siteData.js'
import { useGameImage } from '../components/useGameImage.js'
import FallbackArtwork from '../components/FallbackArtwork.jsx'
import NewsCard from '../components/NewsCard.jsx'
import { getNewsWithImages } from '../services/newsService.js'

/* ─── Framer variants ──────────────────────────────────────── */
const heroStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}
const heroItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

/* ─── Custom hook: fade-in on scroll ─────────────────────── */
function useFadeIn() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('is-visible'); obs.disconnect() } },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

/* ─── Trending Card ───────────────────────────────────────── */
function TrendingCard({ game }) {
  const { activeSrc, isLoading, isGradient } = useGameImage(game.image)

  return (
    <Link
      to={`/games/${game.slug}`}
      className="card-hover shelf-item relative w-[200px] overflow-hidden rounded-2xl border border-white/10 bg-slate-900 sm:w-[280px]"
    >
      <div className="relative aspect-[2/3] overflow-hidden">
        {isGradient && (
          <FallbackArtwork
            title={game.title}
            categories={game.categories}
            genres={game.genres}
            className="absolute inset-0 h-full w-full"
            compact={true}
          />
        )}

        {isLoading && !isGradient && (
          <div className="absolute inset-0 skeleton-shimmer" />
        )}

        {!isGradient && (
          <img
            src={activeSrc}
            alt={game.title}
            loading="lazy"
            className={`card-img absolute inset-0 h-full w-full object-cover object-center ${!isLoading ? 'game-img-loaded' : 'opacity-0'}`}
          />
        )}

        <div className="card-overlay absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

        <div className="card-text-lift absolute inset-x-0 bottom-0 p-4 sm:p-5">
          <p className="text-[9px] font-bold uppercase tracking-[0.24em] text-cyan-400 sm:text-[10px]">
            {game.genre}
          </p>
          <h3 className="line-clamp-1 mt-1 font-display text-lg uppercase leading-tight text-white sm:text-2xl">
            {game.title}
          </h3>
          <span className="mt-2 inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-violet-300 sm:mt-3 sm:text-xs">
            View <ArrowRight className="h-3 w-3" />
          </span>
        </div>
      </div>
    </Link>
  )
}

/* ─── Section Game Card (grid) ───────────────────────────── */
function GridCard({ game }) {
  const { activeSrc, isLoading, isGradient } = useGameImage(game.banner, game.image)

  return (
    <Link
      to={`/games/${game.slug}`}
      className="card-hover group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 transition-all duration-300 hover:border-violet-500/40"
    >
      <div className="relative overflow-hidden aspect-[16/9]">
        {isGradient && (
          <FallbackArtwork
            title={game.title}
            categories={game.categories}
            genres={game.genres}
            className="absolute inset-0 h-full w-full"
            compact={true}
          />
        )}

        {isLoading && !isGradient && (
          <div className="absolute inset-0 skeleton-shimmer" />
        )}

        {!isGradient && (
          <img
            src={activeSrc}
            alt={game.title}
            loading="lazy"
            className={`card-img absolute inset-0 h-full w-full object-cover object-center ${!isLoading ? 'game-img-loaded' : 'opacity-0'}`}
          />
        )}

        <div className="card-overlay absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute right-2.5 top-2.5 rounded-full border border-white/14 bg-black/50 px-2 py-0.5 text-[8px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-sm sm:right-3 sm:top-3 sm:px-3 sm:py-1 sm:text-[9px]">
          {game.priceModel}
        </div>
      </div>

      <div className="p-3.5 sm:p-4">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0 flex-1">
            <p className="truncate font-display text-lg uppercase leading-tight text-white sm:text-xl">
              {game.title}
            </p>
            <p className="mt-1 text-[10px] text-slate-400 sm:text-xs">{game.genre}</p>
          </div>
          {game.rating && (
            <div className="flex shrink-0 items-center gap-1 rounded-full bg-yellow-400/10 px-2 py-0.5 sm:px-2.5 sm:py-1">
              <Star className="h-2.5 w-2.5 fill-yellow-400 text-yellow-400 sm:h-3 sm:w-3" />
              <span className="text-[10px] font-bold text-yellow-300 sm:text-xs">{game.rating}</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}

/* ─── Section wrapper ─────────────────────────────────────── */
function Section({ eyebrow, icon: Icon, title, action, children, className = '' }) {
  const ref = useFadeIn()
  return (
    <section ref={ref} className={`fade-in-section py-12 sm:py-20 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4 sm:mb-12">
          <div className="max-w-[70%]">
            <p className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.3em] text-violet-400 sm:text-[10px] sm:tracking-[0.38em]">
              {Icon && <Icon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />}
              {eyebrow}
            </p>
            <h2 className="mt-2 font-display text-3xl uppercase leading-tight text-white sm:mt-3 sm:text-5xl">
              {title}
            </h2>
          </div>
          {action && <div className="hidden min-[450px]:block">{action}</div>}
        </div>
        {children}
        {action && (
          <div className="mt-8 flex justify-center min-[450px]:hidden">
            {action}
          </div>
        )}
      </div>
    </section>
  )
}

/* ─── Trending Section ────────────────────────────────────── */
function TrendingSection({ games: trendingGames }) {
  const ref = useFadeIn()
  return (
    <section id="trending" className="py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="fade-in-section mb-8 flex items-end justify-between gap-4 sm:mb-12">
          <div>
            <p className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.3em] text-cyan-400 sm:text-[10px] sm:tracking-[0.38em]">
              <TrendingUp className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              Trending Now
            </p>
            <h2 className="mt-2 font-display text-3xl uppercase text-white sm:mt-3 sm:text-5xl">
              Most Played
            </h2>
          </div>
          <Link
            to="/games?sort=popular"
            className="btn-ghost hidden shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-[10px] font-bold uppercase tracking-widest text-white transition hover:bg-white/10 sm:flex sm:px-5 sm:py-3 sm:text-sm"
          >
            See All <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="shelf -mx-4 px-4 sm:mx-0 sm:px-0">
          {trendingGames.map((game) => (
            <TrendingCard key={game.id} game={game} />
          ))}
        </div>
        <div className="mt-8 flex justify-center sm:hidden">
          <Link
            to="/games?sort=popular"
            className="btn-ghost flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-[10px] font-bold uppercase tracking-widest text-white"
          >
            Browse All <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ─── HomePage ────────────────────────────────────────────── */
function HomePage() {
  const { scrollY } = useScroll()
  const [news, setNews] = useState([])

  useEffect(() => {
    async function loadNews() {
      const data = await getNewsWithImages(3)
      setNews(data)
    }
    loadNews()
  }, [])
  const heroImgY     = useTransform(scrollY, [0, 600], [0, 80])
  const heroImgScale = useTransform(scrollY, [0, 600], [1, 1.08])

  /* featured hero game — GTA VI first (local image), then fallbacks */
  const heroGame = (() => {
    const preferred = [
      'grand-theft-auto-vi',
      'cyberpunk-2077',
      'elden-ring',
      'red-dead-redemption-2',
      'god-of-war',
    ]
    for (const slug of preferred) {
      const g = games.find((g) => g.slug === slug)
      if (g?.banner) return g
    }
    return games[0]
  })()

  const { activeSrc: heroSrc, isLoading: heroLoading, isGradient: heroGradient } = useGameImage(heroGame.banner, heroGame.image)

  /* shelf: top trending */
  const trending = [...games].sort((a, b) => b.popularity - a.popularity).slice(0, 12)

  /* sections data */
  const freeGames = games.filter((g) => g.priceModel === 'Free').slice(0, 6)
  const popular = [...games].sort((a, b) => b.popularity - a.popularity).slice(0, 6)
  const newReleases = [...games].sort((a, b) => b.releaseRank - a.releaseRank).slice(0, 6)

  return (
    <div className="bg-[#0B0F19]">

      {/* ══════════════ HERO ══════════════════════════════════ */}
      <section className="relative flex min-h-[90svh] flex-col overflow-hidden sm:min-h-[100svh]">

        {/* Cinematic background */}
        <motion.div
          style={{ y: heroImgY, scale: heroImgScale }}
          className="absolute inset-0 origin-center"
        >
          {heroGradient && (
            <FallbackArtwork
              title={heroGame.title}
              categories={heroGame.categories}
              genres={heroGame.genres}
              className="absolute inset-0 h-full w-full"
              compact={false}
            />
          )}

          {heroLoading && !heroGradient && (
            <div className="absolute inset-0 skeleton-shimmer" />
          )}

          {!heroGradient && (
            <img
              src={heroSrc}
              alt={`${heroGame.title} hero`}
              loading="eager"
              fetchPriority="high"
              className={`absolute inset-0 h-full w-full object-cover object-center ${!heroLoading ? 'game-img-loaded' : 'opacity-0'}`}
            />
          )}
        </motion.div>

        {/* Layered overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/50 to-transparent sm:from-black/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-black/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(168,85,247,0.18),transparent_40%)]" />

        {/* Content */}
        <div className="relative mx-auto flex w-full max-w-7xl flex-1 items-end px-4 pb-12 pt-32 sm:px-6 sm:pb-24 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={heroStagger}
            className="w-full max-w-4xl"
          >
            <motion.div variants={heroItem} className="mb-5 flex flex-wrap items-center gap-2 sm:mb-6 sm:gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-500/40 bg-violet-500/20 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-violet-300 backdrop-blur-md sm:px-3 sm:text-xs sm:tracking-[0.2em]">
                <Sparkles className="h-3 w-3 sm:h-4 sm:w-4" />
                Featured Launch
              </span>
              <span className="rounded-full border border-white/10 bg-white/8 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-white backdrop-blur-md sm:px-3 sm:text-xs sm:tracking-[0.2em]">
                {heroGame.store}
              </span>
            </motion.div>

            <motion.h1
              variants={heroItem}
              className="font-display text-[12vw] uppercase leading-[0.95] text-white drop-shadow-2xl sm:text-[max(4.5rem,7vw)] lg:text-[8rem]"
            >
              {heroGame.title}
            </motion.h1>

            <motion.p
              variants={heroItem}
              className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-200/80 drop-shadow-md sm:mt-6 sm:text-lg lg:text-xl"
            >
              {heroGame.description}
            </motion.p>

            <motion.div variants={heroItem} className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
              <Link
                to={`/games/${heroGame.slug}`}
                className="btn-neon inline-flex items-center justify-center gap-2.5 rounded-full bg-[linear-gradient(135deg,rgba(168,85,247,0.95),rgba(34,211,238,0.95))] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-slate-950 transition hover:scale-[1.02] sm:text-sm sm:tracking-[0.18em]"
              >
                Launch Experience <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#trending"
                className="btn-ghost inline-flex items-center justify-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-white backdrop-blur-sm transition hover:bg-white/10 sm:text-sm sm:tracking-[0.18em]"
              >
                <PlayCircle className="h-4 w-4" /> View Trending
              </a>
            </motion.div>

            {/* Stats - Hidden on smallest phones */}
            <motion.div
              variants={heroItem}
              className="mt-12 hidden flex-wrap items-center gap-8 border-t border-white/10 pt-8 min-[450px]:flex sm:mt-14 sm:gap-12"
            >
              {[
                { value: `${games.length}+`, label: 'Titles' },
                { value: `${categories.length}`, label: 'Genres' },
                { value: 'Official', label: 'Verified' },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-display text-2xl uppercase text-white sm:text-3xl">{s.value}</p>
                  <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-slate-400 sm:text-xs">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 sm:bottom-8">
          <div className="flex flex-col items-center gap-2 text-white/30">
            <ChevronDown className="h-5 w-5 animate-bounce" />
          </div>
        </div>
      </section>

      {/* ══════════════ TRENDING NOW SHELF ═══════════════════ */}
      <TrendingSection games={trending} />

      {/* ══════════════ SECTIONS GRID ═════════════════════════ */}
      
      <Section eyebrow="Free To Play" icon={Zap} title="Top Free Games"
        action={<Link to="/games?pricing=Free" className="btn-ghost flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan-300">See All <ArrowRight className="h-4 w-4" /></Link>}
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {freeGames.map((game) => <GridCard key={game.id} game={game} />)}
        </div>
      </Section>

      <Section eyebrow="Popular Right Now" icon={Flame} title="Community Hits"
        action={<Link to="/games?sort=popular" className="btn-ghost flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan-300">See All <ArrowRight className="h-4 w-4" /></Link>}
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {popular.map((game) => <GridCard key={game.id} game={game} />)}
        </div>
      </Section>

      {/* ══════════════ BROWSE BY GENRE ══════════════════════════ */}
      <Section eyebrow="Discovery" icon={Layout} title="Browse Genres"
        action={<Link to="/categories" className="btn-ghost flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan-300">All Genres <ArrowRight className="h-4 w-4" /></Link>}
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.slice(0, 4).map((cat) => {
            const catGames = games.filter(g => g.categories.includes(cat.slug));
            const repImage = catGames[0]?.image || catGames[0]?.banner;
            return (
              <Link key={cat.slug} to={`/categories/${cat.slug}`}
                className="group relative flex aspect-[2/1] items-end overflow-hidden rounded-2xl border border-white/10 p-5 sm:aspect-[4/3] sm:p-6"
              >
                {repImage && (
                  <img src={repImage} alt="" 
                    className="absolute inset-0 h-full w-full object-cover opacity-30 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-50"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
                <div className="relative z-10">
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-cyan-400">{catGames.length} Games</p>
                  <h3 className="mt-1 font-display text-xl uppercase text-white group-hover:text-cyan-200 transition-colors sm:text-2xl">{cat.name}</h3>
                </div>
              </Link>
            );
          })}
        </div>
      </Section>

      {/* ══════════════ LATEST NEWS ════════════════════════════ */}
      {news.length > 0 && (
        <Section eyebrow="Insights" icon={Newspaper} title="Inside Gaming"
          action={<Link to="/news" className="btn-ghost flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan-300">News Hub <ArrowRight className="h-4 w-4" /></Link>}
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {news.map((article, idx) => <NewsCard key={article.id} article={article} index={idx} />)}
          </div>
        </Section>
      )}

      {/* ══════════════ CTA ════════════════════════════ */}
      <section className="py-12 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-[40px] border border-violet-500/20 bg-gradient-to-br from-violet-900/20 via-slate-900 to-cyan-900/10 p-10 text-center sm:p-20">
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-violet-600/10 blur-[100px]" />
            <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-cyan-600/10 blur-[100px]" />
            
            <p className="relative text-[9px] font-bold uppercase tracking-[0.4em] text-violet-400 sm:text-[10px]">Game Vault</p>
            <h2 className="relative mt-6 font-display text-4xl uppercase leading-[1.1] text-white sm:text-6xl lg:text-7xl">
              Find Your Next <br /> <span className="text-neon">Favorite World</span>
            </h2>
            <div className="relative mt-10 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
              <Link to="/games" className="btn-neon rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-10 py-4.5 text-[11px] font-bold uppercase tracking-widest text-black transition hover:scale-105">
                Browse All Games
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
