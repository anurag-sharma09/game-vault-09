import { useEffect, useState, useMemo } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowLeft, Clock, ExternalLink, Flame, ShieldCheck } from 'lucide-react'
import { getLiveNews } from '../services/newsService.js'
import { useGameImage } from '../components/useGameImage.js'
import FallbackArtwork from '../components/FallbackArtwork.jsx'
import NewsCard, { getRelativeTime } from '../components/NewsCard.jsx'

const reveal = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
}

function NewsDetailPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  
  const [articles, setArticles] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const { scrollY } = useScroll()
  const bannerY = useTransform(scrollY, [0, 800], [0, 90])
  const bannerScale = useTransform(scrollY, [0, 800], [1, 1.06])

  useEffect(() => {
    async function loadData() {
      setIsLoading(true)
      const data = await getLiveNews()
      setArticles(data)
      setIsLoading(false)
    }
    loadData()
  }, [])

  // Find the current article
  const article = useMemo(() => {
    return articles.find(a => a.slug === slug)
  }, [articles, slug])

  // Get trending sidebar articles (just taking top 4 for now)
  const trendingArticles = useMemo(() => {
    return articles
      .filter(a => a.slug !== slug)
      .slice(0, 4)
  }, [articles, slug])

  const { activeSrc, isLoading: imgLoading, isGradient } = useGameImage(article?.image)

  if (isLoading) {
    return <div className="min-h-screen skeleton-shimmer" />
  }

  if (!article) {
    return (
      <section className="mx-auto max-w-[92rem] px-4 pt-32 sm:px-6 lg:px-10 min-h-screen flex items-center justify-center">
        <div className="glass-panel rounded-[38px] px-6 py-14 text-center sm:px-10">
          <p className="text-[10px] font-semibold uppercase tracking-[0.38em] text-cyan-100/72">
            Not Found
          </p>
          <h1 className="mt-5 font-display text-6xl uppercase leading-none text-white">
            Story Missing
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-slate-300/76">
            The news story you are looking for is no longer available or the link is incorrect.
          </p>
          <button
            onClick={() => navigate('/news')}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,rgba(168,85,247,0.98),rgba(34,211,238,0.92))] px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-slate-950 transition hover:brightness-110"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to News
          </button>
        </div>
      </section>
    )
  }

  return (
    <div className="overflow-hidden bg-[#0B0F19]">
      {/* ── Cinematic Hero Banner ── */}
      <section className="relative min-h-[65svh]">
        <motion.div style={{ y: bannerY, scale: bannerScale }} className="absolute inset-0">
          {isGradient && (
            <FallbackArtwork
              title={article.title}
              categories={[article.category, article.source]}
              className="absolute inset-0 h-full w-full"
              compact={false}
            />
          )}

          {imgLoading && !isGradient && (
            <div className="absolute inset-0 skeleton-shimmer" />
          )}

          {!isGradient && (
            <img
              src={activeSrc}
              alt={article.title}
              loading="eager"
              className={`h-full w-full object-cover object-center transition-opacity duration-700 ${
                !imgLoading ? 'opacity-100' : 'opacity-0'
              }`}
            />
          )}
        </motion.div>
        
        {/* Layered Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/60 to-black/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(168,85,247,0.15),transparent_30%),radial-gradient(circle_at_82%_16%,rgba(34,211,238,0.1),transparent_28%)]" />

        <div className="relative mx-auto flex min-h-[65svh] max-w-7xl items-end px-6 pb-16 pt-32">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-4xl">
            <motion.div variants={reveal} className="mb-6 flex flex-wrap items-center gap-3">
              <button onClick={() => navigate('/news')} className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md transition hover:bg-white/10">
                <ArrowLeft className="h-3 w-3 transition group-hover:-translate-x-1" />
                Back
              </button>
              <span className="rounded-full bg-violet-500/20 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-violet-300 backdrop-blur-md border border-violet-500/30">
                {article.source}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400">
                {article.category}
              </span>
            </motion.div>

            <motion.h1 variants={reveal} className="font-display text-[2.5rem] xs:text-[3rem] sm:text-[4.5rem] lg:text-[6rem] uppercase leading-[0.95] text-white drop-shadow-2xl">
              {article.title}
            </motion.h1>

            <motion.div variants={reveal} className="mt-8 flex items-center gap-4 text-sm font-medium text-slate-300">
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {new Date(article.pubDate).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
              <span className="h-1 w-1 rounded-full bg-white/20" />
              <span>By {article.author || article.source}</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Main Content & Sidebar Layout ── */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_360px]">
          
          {/* Article Reading Area */}
          <motion.article initial="hidden" animate="visible" variants={stagger} className="space-y-8">
            <motion.div variants={reveal} className="glass-panel rounded-[34px] p-8 sm:p-12">
              <h2 className="font-display text-3xl uppercase leading-tight text-white mb-8 border-b border-white/10 pb-6">
                Story Preview
              </h2>
              
              {/* Using article.snippet for a safe preview */}
              <div className="prose prose-invert prose-lg max-w-none text-slate-300 leading-relaxed font-ui">
                <p className="text-xl text-slate-200 leading-relaxed font-medium mb-8">
                  {article.snippet}
                </p>

                <div className="mt-12 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-6 flex flex-col sm:flex-row gap-6 items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Continue Reading on {article.source}</h3>
                    <p className="text-sm text-slate-400">Game Vault provides a seamless preview. Read the full official article directly from the publisher.</p>
                  </div>
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noreferrer"
                    className="shrink-0 inline-flex items-center gap-2 rounded-full bg-cyan-500 text-slate-950 px-6 py-3 text-sm font-bold uppercase tracking-wider transition hover:bg-cyan-400"
                  >
                    Read Full Article
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div variants={reveal} className="flex items-start gap-3 rounded-[24px] border border-emerald-300/14 bg-emerald-300/5 p-6">
              <ShieldCheck className="mt-0.5 h-6 w-6 shrink-0 text-emerald-400" />
              <p className="text-sm leading-7 text-emerald-50/80">
                <strong>Official Source Guarantee:</strong> Game Vault only links to verified, official gaming journalism sources. We ensure a safe, piracy-free environment for all news and content.
              </p>
            </motion.div>
          </motion.article>

          {/* Sidebar */}
          <aside className="space-y-8">
            <div className="glass-panel rounded-[28px] p-6">
              <div className="mb-6 flex items-center gap-2 border-b border-white/10 pb-4">
                <Flame className="h-5 w-5 text-red-500" />
                <h3 className="font-display text-2xl uppercase tracking-wider text-white">Trending Now</h3>
              </div>
              
              <div className="space-y-6">
                {trendingArticles.map((trending) => (
                  <Link key={trending.id} to={`/news/${trending.slug}`} className="group flex gap-4">
                    <div className="h-20 w-24 shrink-0 overflow-hidden rounded-xl border border-white/10">
                      <img 
                        src={trending.image || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='%231e293b'/%3E%3C/svg%3E"} 
                        alt={trending.title}
                        className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <span className="text-[9px] font-bold uppercase tracking-widest text-cyan-400 mb-1">{trending.source}</span>
                      <h4 className="line-clamp-2 text-sm font-medium text-slate-200 transition group-hover:text-violet-300 leading-snug">
                        {trending.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>

        </div>
      </section>
    </div>
  )
}

export default NewsDetailPage
