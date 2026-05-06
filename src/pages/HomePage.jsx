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
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { games, categories } from '../data/siteData.js'

/* ─── Framer variants ──────────────────────────────────────── */
const heroStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
}
const heroItem = {
  hidden: { opacity: 0, y: 38 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
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
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

/* ─── Trending Card ───────────────────────────────────────── */
function TrendingCard({ game }) {
  const [imgOk, setImgOk] = useState(true)
  const [loaded, setLoaded] = useState(false)
  return (
    <Link
      to={`/games/${game.slug}`}
      className="card-hover shelf-item relative w-[260px] overflow-hidden rounded-2xl border border-white/10 bg-slate-900 sm:w-[300px]"
    >
      <div className="relative aspect-[2/3] overflow-hidden">
        {/* Skeleton */}
        {!loaded && <div className="absolute inset-0 skeleton-shimmer" />}

        {imgOk ? (
          <img
            src={game.image}
            alt={game.title}
            loading="lazy"
            onLoad={() => setLoaded(true)}
            onError={() => setImgOk(false)}
            className={`card-img h-full w-full object-cover object-center transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at 30% 20%, ${game.palette?.[0] ?? '#8b5cf6'}, transparent 60%), radial-gradient(circle at 80% 80%, ${game.palette?.[1] ?? '#22d3ee'}, transparent 60%)`
            }}
          />
        )}

        {/* Hover dark overlay */}
        <div className="card-overlay absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

        {/* Hover text */}
        <div className="card-text-lift absolute inset-x-0 bottom-0 p-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-cyan-300">
            {game.genre}
          </p>
          <h3 className="mt-1 font-display text-2xl uppercase leading-tight text-white">
            {game.title}
          </h3>
          <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-violet-300">
            View Game <ArrowRight className="h-3 w-3" />
          </span>
        </div>
      </div>
    </Link>
  )
}

/* ─── Section Game Card (grid) ───────────────────────────── */
function GridCard({ game }) {
  const [imgOk, setImgOk] = useState(true)
  const [loaded, setLoaded] = useState(false)
  return (
    <Link
      to={`/games/${game.slug}`}
      className="card-hover group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 transition-all duration-300 hover:border-violet-500/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.18)]"
    >
      <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
        {!loaded && <div className="absolute inset-0 skeleton-shimmer" />}

        {imgOk ? (
          <img
            src={game.banner}
            alt={game.title}
            loading="lazy"
            onLoad={() => setLoaded(true)}
            onError={() => setImgOk(false)}
            className={`card-img h-full w-full object-cover object-center transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${game.palette?.[0] ?? '#4c1d95'}, ${game.palette?.[1] ?? '#0e7490'})`
            }}
          />
        )}

        <div className="card-overlay absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Price tag */}
        <div className="absolute right-3 top-3 rounded-full border border-white/14 bg-black/50 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.3em] text-white backdrop-blur-sm">
          {game.priceModel}
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <p className="truncate font-display text-xl uppercase leading-tight text-white">
              {game.title}
            </p>
            <p className="mt-1 text-xs text-slate-400">{game.genre}</p>
          </div>
          {game.rating && (
            <div className="flex shrink-0 items-center gap-1 rounded-full bg-yellow-400/10 px-2.5 py-1">
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              <span className="text-xs font-bold text-yellow-300">{game.rating}</span>
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
    <section ref={ref} className={`fade-in-section py-20 ${className}`}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.38em] text-violet-400">
              {Icon && <Icon className="h-3.5 w-3.5" />}
              {eyebrow}
            </p>
            <h2 className="mt-3 font-display text-4xl uppercase leading-tight text-white sm:text-5xl">
              {title}
            </h2>
          </div>
          {action && action}
        </div>
        {children}
      </div>
    </section>
  )
}

/* ─── Trending Section ────────────────────────────────────── */
function TrendingSection({ games: trendingGames }) {
  const ref = useFadeIn()
  return (
    <section id="trending" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div ref={ref} className="fade-in-section mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.38em] text-cyan-400">
              <TrendingUp className="h-3.5 w-3.5" />
              Trending Now
            </p>
            <h2 className="mt-3 font-display text-4xl uppercase text-white sm:text-5xl">
              Most Played
            </h2>
          </div>
          <Link
            to="/games?sort=popular"
            className="btn-ghost hidden shrink-0 items-center gap-2 rounded-full border border-white/14 bg-white/6 px-5 py-3 text-sm font-semibold uppercase tracking-widest text-white sm:inline-flex"
          >
            See All <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="shelf">
          {trendingGames.map((game) => (
            <TrendingCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── HomePage ────────────────────────────────────────────── */
function HomePage() {
  const { scrollY } = useScroll()
  const heroImgY     = useTransform(scrollY, [0, 700], [0, 110])
  const heroImgScale = useTransform(scrollY, [0, 700], [1, 1.1])

  const [heroBannerLoaded, setHeroBannerLoaded] = useState(false)

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

  /* shelf: top trending */
  const trending = [...games].sort((a, b) => b.popularity - a.popularity).slice(0, 12)

  /* section: free games */
  const freeGames = games.filter((g) => g.priceModel === 'Free').slice(0, 6)

  /* section: popular */
  const popular = [...games].sort((a, b) => b.popularity - a.popularity).slice(0, 6)

  /* section: new releases */
  const newReleases = [...games].sort((a, b) => b.releaseRank - a.releaseRank).slice(0, 6)

  return (
    <div style={{ background: '#0B0F19' }}>

      {/* ══════════════ HERO ══════════════════════════════════ */}
      <section className="relative flex min-h-[100svh] flex-col">

        {/* Cinematic background */}
        <motion.div
          style={{ y: heroImgY, scale: heroImgScale }}
          className="absolute inset-0 origin-center"
        >
          <img
            src={heroGame.banner}
            alt={`${heroGame.title} hero`}
            loading="eager"
            fetchPriority="high"
            onLoad={() => setHeroBannerLoaded(true)}
            className={`h-full w-full object-cover object-center transition-opacity duration-1000 ${heroBannerLoaded ? 'opacity-100' : 'opacity-0'}`}
          />
          {!heroBannerLoaded && (
            <div className="absolute inset-0 skeleton-shimmer" />
          )}
        </motion.div>

        {/* Layered overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-black/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(168,85,247,0.22),transparent_40%)]" />

        {/* Content */}
        <div className="relative mx-auto flex w-full max-w-7xl flex-1 items-center px-6 pb-28 pt-36">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={heroStagger}
            className="max-w-3xl"
          >
            {/* Label */}
            <motion.div variants={heroItem}>
              <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.4em] text-violet-300 backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5" />
                Game Vault — Official Gaming Platform
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={heroItem}
              className="mt-8 font-display text-[4.5rem] uppercase leading-[0.88] text-white sm:text-[6rem] lg:text-[7.5rem]"
            >
              Play Without{' '}
              <span className="text-neon">Limits</span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              variants={heroItem}
              className="mt-7 max-w-xl text-base leading-8 text-slate-300/80 sm:text-lg"
            >
              Discover every major title in one cinematic space. Official sources, premium artwork,
              and a zero-noise experience built for serious gamers.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={heroItem} className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/games"
                className="btn-neon inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-black"
              >
                Explore Games
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#trending"
                className="btn-ghost inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/8 px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white backdrop-blur-sm"
              >
                <PlayCircle className="h-4 w-4" />
                View Trending
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={heroItem}
              className="mt-14 flex flex-wrap items-center gap-8 border-t border-white/10 pt-8"
            >
              {[
                { value: `${games.length}+`, label: 'Official Games' },
                { value: `${categories.length}`, label: 'Genres' },
                { value: '0', label: 'Pirated Links' },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-display text-3xl uppercase text-white">{s.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-widest text-slate-400">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="scroll-indicator flex flex-col items-center gap-2 text-white/40">
            <ChevronDown className="h-6 w-6" />
            <span className="text-[9px] font-semibold uppercase tracking-[0.4em]">Scroll</span>
          </div>
        </div>
      </section>

      {/* ══════════════ TRENDING NOW SHELF ═══════════════════ */}
      <TrendingSection games={trending} />

      {/* Divider */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* ══════════════ TOP FREE GAMES ════════════════════════ */}
      <Section
        eyebrow="Free To Play"
        icon={Zap}
        title="Top Free Games"
        action={
          <Link
            to="/games?pricing=Free"
            className="btn-ghost hidden shrink-0 items-center gap-2 rounded-full border border-white/14 bg-white/6 px-5 py-3 text-sm font-semibold uppercase tracking-widest text-white sm:inline-flex"
          >
            See All <ArrowRight className="h-4 w-4" />
          </Link>
        }
      >
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {freeGames.map((game) => (
            <GridCard key={game.id} game={game} />
          ))}
        </div>
      </Section>

      {/* ══════════════ POPULAR RIGHT NOW ════════════════════ */}
      <Section
        eyebrow="Popular Right Now"
        icon={Flame}
        title="Community Favourites"
        action={
          <Link
            to="/games?sort=popular"
            className="btn-ghost hidden shrink-0 items-center gap-2 rounded-full border border-white/14 bg-white/6 px-5 py-3 text-sm font-semibold uppercase tracking-widest text-white sm:inline-flex"
          >
            See All <ArrowRight className="h-4 w-4" />
          </Link>
        }
      >
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {popular.map((game) => (
            <GridCard key={game.id} game={game} />
          ))}
        </div>
      </Section>

      {/* ══════════════ NEW RELEASES ══════════════════════════ */}
      <Section
        eyebrow="New Releases"
        icon={Sparkles}
        title="Just Dropped"
        action={
          <Link
            to="/games?sort=new"
            className="btn-ghost hidden shrink-0 items-center gap-2 rounded-full border border-white/14 bg-white/6 px-5 py-3 text-sm font-semibold uppercase tracking-widest text-white sm:inline-flex"
          >
            See All <ArrowRight className="h-4 w-4" />
          </Link>
        }
      >
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {newReleases.map((game) => (
            <GridCard key={game.id} game={game} />
          ))}
        </div>
      </Section>

      {/* ══════════════ CTA BANNER ════════════════════════════ */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            className="relative overflow-hidden rounded-3xl border border-violet-500/20 bg-gradient-to-br from-violet-900/30 via-slate-900 to-cyan-900/20 p-12 text-center lg:p-20"
          >
            {/* bg decoration */}
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-violet-600/20 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-cyan-600/20 blur-3xl" />

            <p className="relative text-[10px] font-bold uppercase tracking-[0.46em] text-violet-400">
              Game Vault
            </p>
            <h2 className="relative mt-5 font-display text-5xl uppercase leading-tight text-white sm:text-6xl lg:text-7xl">
              Your Next Game<br className="hidden sm:block" />{' '}
              <span className="text-neon">Starts Here</span>
            </h2>
            <p className="relative mx-auto mt-6 max-w-xl text-base leading-8 text-slate-300/80">
              Every link points to an official source. No piracy, no mirrors — just premium
              discovery from the world's biggest titles.
            </p>
            <div className="relative mt-10 flex flex-wrap justify-center gap-4">
              <Link
                to="/games"
                className="btn-neon inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-black"
              >
                Browse All Games <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/categories"
                className="btn-ghost inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/6 px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white"
              >
                Explore Categories
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
