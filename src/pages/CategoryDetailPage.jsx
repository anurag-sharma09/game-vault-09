import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowLeft, ArrowRight, Gamepad2, ShieldCheck, Sparkles, Star, Clock, PlayCircle } from 'lucide-react'
import { useParams, useNavigate } from 'react-router-dom'
import { useMemo } from 'react'
import { categoryLookup, games } from '../data/siteData.js'
import GameCard from '../components/GameCard.jsx'
import SectionHeading from '../components/SectionHeading.jsx'

const reveal = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
}

// Aesthetic Theme Mapping based on user's exact requirements
const THEME_MAPPING = {
  fps: {
    bgTheme: "bg-[radial-gradient(circle_at_20%_0%,rgba(15,23,42,0.9),transparent_60%),radial-gradient(circle_at_80%_40%,rgba(30,58,138,0.2),transparent_50%)]",
    primaryGlow: "rgba(59,130,246,0.3)",
    tagline: "Tactical lighting and military contrast",
    accent: "text-blue-400",
    border: "border-blue-500/30"
  },
  racing: {
    bgTheme: "bg-[radial-gradient(circle_at_50%_0%,rgba(217,70,239,0.15),transparent_40%),radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.2),transparent_50%)]",
    primaryGlow: "rgba(217,70,239,0.3)",
    tagline: "Neon motion blur and night-city energy",
    accent: "text-fuchsia-400",
    border: "border-fuchsia-500/30"
  },
  rpg: {
    bgTheme: "bg-[radial-gradient(circle_at_0%_0%,rgba(139,92,246,0.2),transparent_60%),radial-gradient(circle_at_100%_100%,rgba(234,179,8,0.1),transparent_50%)]",
    primaryGlow: "rgba(139,92,246,0.3)",
    tagline: "Fantasy atmosphere with magical glow effects",
    accent: "text-violet-400",
    border: "border-violet-500/30"
  },
  indie: {
    bgTheme: "bg-[radial-gradient(circle_at_50%_50%,rgba(20,184,166,0.15),transparent_70%),radial-gradient(circle_at_0%_100%,rgba(244,63,94,0.1),transparent_50%)]",
    primaryGlow: "rgba(20,184,166,0.3)",
    tagline: "Artistic gradients and experimental vibes",
    accent: "text-teal-400",
    border: "border-teal-500/30"
  },
  sports: {
    bgTheme: "bg-[radial-gradient(circle_at_50%_0%,rgba(250,204,21,0.15),transparent_50%),radial-gradient(circle_at_50%_100%,rgba(34,197,94,0.1),transparent_50%)]",
    primaryGlow: "rgba(250,204,21,0.3)",
    tagline: "Stadium flood lights and energetic highlights",
    accent: "text-yellow-400",
    border: "border-yellow-500/30"
  },
  'open-world': {
    bgTheme: "bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.15),transparent_60%),radial-gradient(circle_at_80%_80%,rgba(14,165,233,0.1),transparent_60%)]",
    primaryGlow: "rgba(16,185,129,0.3)",
    tagline: "Massive vistas and cinematic depth",
    accent: "text-emerald-400",
    border: "border-emerald-500/30"
  },
  action: {
    bgTheme: "bg-[radial-gradient(circle_at_50%_0%,rgba(239,68,68,0.2),transparent_50%),radial-gradient(circle_at_50%_100%,rgba(249,115,22,0.1),transparent_50%)]",
    primaryGlow: "rgba(239,68,68,0.3)",
    tagline: "High-octane explosions and intense combat",
    accent: "text-red-400",
    border: "border-red-500/30"
  },
  strategy: {
    bgTheme: "bg-[radial-gradient(circle_at_80%_0%,rgba(56,189,248,0.15),transparent_50%),radial-gradient(circle_at_20%_100%,rgba(139,92,246,0.1),transparent_50%)]",
    primaryGlow: "rgba(56,189,248,0.3)",
    tagline: "Tactical grids and methodical pacing",
    accent: "text-sky-400",
    border: "border-sky-500/30"
  }
}

function CategoryDetailPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  
  const category = categoryLookup[slug]
  const theme = THEME_MAPPING[slug] || THEME_MAPPING['action']

  const categoryGames = useMemo(() => {
    if (!category) return []
    return games
      .filter((game) => game.categories.includes(slug))
      .sort((a, b) => b.popularity - a.popularity)
  }, [category, slug])

  const { scrollY } = useScroll()
  const bannerY = useTransform(scrollY, [0, 800], [0, 90])

  if (!category) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h1 className="text-white text-3xl">Category Not Found</h1>
      </div>
    )
  }

  return (
    <div className={`min-h-screen bg-[#05070D] ${theme.bgTheme} transition-colors duration-1000`}>
      {/* ── Cinematic Hero ── */}
      <section className="relative flex min-h-[50svh] flex-col justify-end overflow-hidden border-b border-white/5 pb-16 pt-32">
        <motion.div style={{ y: bannerY }} className="absolute inset-0">
          {categoryGames[0] && (
            <img 
              src={categoryGames[0].banner || categoryGames[0].image} 
              alt="" 
              className="h-full w-full object-cover opacity-20"
            />
          )}
          <div className={`absolute inset-0 bg-gradient-to-t from-[#05070D] via-[#05070D]/40 to-transparent`} />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        </motion.div>

        <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-4xl">
            <motion.button 
              variants={reveal}
              onClick={() => navigate('/categories')} 
              className="mb-8 group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md transition hover:bg-white/10"
            >
              <ArrowLeft className="h-3 w-3 transition group-hover:-translate-x-1" />
              All Categories
            </motion.button>
            
            <motion.div variants={reveal} className="flex items-center gap-4">
              <div className={`flex h-16 w-16 items-center justify-center rounded-2xl border ${theme.border} bg-black/40 backdrop-blur-xl`}>
                <Gamepad2 className={`h-8 w-8 ${theme.accent}`} />
              </div>
              <div>
                <p className={`text-[10px] font-bold uppercase tracking-[0.3em] ${theme.accent}`}>
                  {theme.tagline}
                </p>
                <h1 className="font-display uppercase leading-none text-white drop-shadow-2xl" style={{ fontSize: 'var(--fluid-h1)' }}>
                  {category.name}
                </h1>
              </div>
            </motion.div>
            
            <motion.p variants={reveal} className="mt-6 max-w-2xl text-lg text-slate-300/90 leading-relaxed">
              {category.blurb}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Games Grid ── */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
        <div className="mb-12 flex items-center justify-between">
          <SectionHeading
            eyebrow="Curated Collection"
            title={`Top ${category.name} Titles`}
            description={`Explore ${categoryGames.length} official games in the ${category.name} genre.`}
          />
          <div className={`hidden sm:flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-emerald-300`}>
            <ShieldCheck className="h-4 w-4" /> Official Links Only
          </div>
        </div>

        {/* ── Featured Game Panel (The 'Game Panel' requested) ── */}
        {categoryGames[0] && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={reveal}
            className="group relative mb-16 overflow-hidden rounded-[40px] border border-white/10 bg-slate-900/40 backdrop-blur-sm"
          >
            <div className="flex flex-col lg:flex-row">
              {/* Image Side */}
              <div className="relative aspect-video w-full overflow-hidden lg:aspect-auto lg:w-3/5">
                <img
                  src={categoryGames[0].banner || categoryGames[0].image}
                  alt={categoryGames[0].title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/20 to-transparent lg:block hidden" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent lg:hidden block" />
              </div>

              {/* Content Side */}
              <div className="relative flex flex-1 flex-col justify-center p-8 lg:p-12">
                <div className="mb-6 flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-violet-500/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-violet-300 border border-violet-500/20">
                    <Sparkles className="h-3 w-3" />
                    Category Pick
                  </span>
                  <div className="flex items-center gap-1 text-amber-400">
                    <Star className="h-3 w-3 fill-current" />
                    <span className="text-xs font-bold">{categoryGames[0].rating}</span>
                  </div>
                </div>

                <h2 className="font-display text-4xl uppercase leading-none text-white lg:text-6xl">
                  {categoryGames[0].title}
                </h2>
                
                <p className="mt-6 line-clamp-3 text-base leading-relaxed text-slate-300">
                  {categoryGames[0].description}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-6">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-400">
                    <Clock className="h-4 w-4" />
                    {categoryGames[0].releaseRank > 80 ? 'Recent Release' : 'Classic Entry'}
                  </div>
                  <div className="h-1 w-1 rounded-full bg-white/20" />
                  <div className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
                    {categoryGames[0].priceModel}
                  </div>
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  <button 
                    onClick={() => navigate(`/games/${categoryGames[0].slug}`)}
                    className="btn-neon flex items-center gap-2.5 rounded-full bg-white px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-black"
                  >
                    View Experience
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <button 
                    onClick={() => navigate(`/games/${categoryGames[0].slug}`)}
                    className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:bg-white/10"
                  >
                    <PlayCircle className="h-4 w-4" />
                    Gallery
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={stagger} 
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {categoryGames.slice(1).map((game, idx) => (
            <motion.div key={game.id} variants={reveal}>
              <GameCard game={game} />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  )
}

export default CategoryDetailPage
