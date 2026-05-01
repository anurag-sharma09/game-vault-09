import {
  ArrowRight,
  Download,
  Globe,
  PlayCircle,
  ShieldCheck,
  Star,
} from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import GameArtwork from '../components/GameArtwork.jsx'
import GameCard from '../components/GameCard.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { games, getGameBySlug } from '../data/siteData.js'

function GameDetailPage() {
  const { slug } = useParams()
  const game = getGameBySlug(slug)

  if (!game) {
    return (
      <section className="glass-panel rounded-[36px] px-6 py-12 text-center">
        <h1 className="font-display text-4xl text-white">Game not found</h1>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-300/76">
          That title is not in the sample vault yet. Head back to the listing page to continue browsing official game destinations.
        </p>
        <Link
          to="/games"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,rgba(168,85,247,0.95),rgba(34,211,238,0.95))] px-6 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-110"
        >
          Browse Games
          <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    )
  }

  const relatedGames = games
    .filter(
      (candidate) =>
        candidate.slug !== game.slug &&
        candidate.categories.some((category) => game.categories.includes(category)),
    )
    .slice(0, 3)

  return (
    <div className="space-y-10">
      <section className="space-y-6">
        <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
          <Link to="/games" className="transition hover:text-white">
            Games
          </Link>
          <span>/</span>
          <span>{game.title}</span>
        </div>

        <GameArtwork
          title={game.title}
          subtitle={game.tagline}
          palette={game.palette}
          badges={[game.featureTag, game.publisher, game.priceModel]}
          className="h-[420px] rounded-[36px]"
          titleSize="text-4xl sm:text-5xl lg:text-6xl"
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <div className="glass-panel rounded-[28px] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/76">
              Genre
            </p>
            <p className="mt-3 font-display text-2xl text-white">{game.genres.join(' / ')}</p>
          </div>
          <div className="glass-panel rounded-[28px] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/76">
              Rating
            </p>
            <p className="mt-3 inline-flex items-center gap-2 font-display text-2xl text-white">
              <Star className="h-5 w-5 fill-amber-300 text-amber-300" />
              {game.rating.toFixed(1)}
            </p>
          </div>
          <div className="glass-panel rounded-[28px] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/76">
              Publisher
            </p>
            <p className="mt-3 font-display text-2xl text-white">{game.publisher}</p>
          </div>
          <div className="glass-panel rounded-[28px] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/76">
              Platforms
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-300/80">{game.platforms.join(' • ')}</p>
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-6">
          <article className="glass-panel rounded-[32px] p-6 sm:p-8">
            <SectionHeading
              eyebrow="About The Game"
              title={`Why ${game.title} belongs in the vault`}
              description={game.overview}
            />
            <p className="mt-6 text-sm leading-8 text-slate-300/78">{game.vaultNote}</p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {game.highlights.map((highlight) => (
                <div key={highlight} className="rounded-[24px] border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-semibold text-white">{highlight}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="glass-panel rounded-[32px] p-6 sm:p-8">
            <SectionHeading
              eyebrow="Screenshots"
              title="Preview the atmosphere"
              description="These showcase panels are placeholder visuals built into the sample project so the layout stays fully local and production-friendly."
            />

            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {game.screenshots.map((shot) => (
                <GameArtwork
                  key={shot.title}
                  title={shot.title}
                  subtitle={shot.caption}
                  palette={game.palette}
                  badges={[game.title]}
                  className="h-64 rounded-[28px]"
                  titleSize="text-2xl"
                />
              ))}
            </div>
          </article>
        </div>

        <div className="space-y-6">
          <article className="glass-panel rounded-[32px] p-6">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200/76">
              Official Redirects
            </p>
            <div className="space-y-3">
              <a
                href={game.officialUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,rgba(168,85,247,0.95),rgba(34,211,238,0.95))] px-5 py-3.5 text-sm font-semibold text-slate-950 transition hover:brightness-110"
              >
                <Download className="h-4 w-4" />
                Download Officially
              </a>
              <a
                href={game.websiteUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/14 bg-white/6 px-5 py-3.5 text-sm font-semibold text-white transition hover:border-cyan-300/30 hover:bg-white/10"
              >
                <Globe className="h-4 w-4" />
                Visit Website
              </a>
              <a
                href={game.playUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-cyan-300/18 bg-cyan-300/10 px-5 py-3.5 text-sm font-semibold text-cyan-50 transition hover:bg-cyan-300/16"
              >
                <PlayCircle className="h-4 w-4" />
                Play Now
              </a>
            </div>
          </article>

          <article className="glass-panel rounded-[32px] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200/76">
              Quick Facts
            </p>
            <div className="mt-5 space-y-4 text-sm text-slate-300/78">
              <div className="flex items-start justify-between gap-4 border-b border-white/8 pb-4">
                <span>Supported Platform</span>
                <span className="max-w-[13rem] text-right text-white">{game.platforms.join(', ')}</span>
              </div>
              <div className="flex items-start justify-between gap-4 border-b border-white/8 pb-4">
                <span>Official Publisher</span>
                <span className="text-right text-white">{game.publisher}</span>
              </div>
              <div className="flex items-start justify-between gap-4 border-b border-white/8 pb-4">
                <span>Store Coverage</span>
                <span className="max-w-[13rem] text-right text-white">{game.supportedStores.join(', ')}</span>
              </div>
              <div className="flex items-start justify-between gap-4">
                <span>Availability</span>
                <span className="text-right text-white">{game.launchWindow}</span>
              </div>
            </div>
          </article>

          <article className="glass-panel rounded-[32px] p-6">
            <div className="flex items-start gap-3">
              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-emerald-300/12 text-emerald-100">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="font-display text-2xl text-white">Legal-first delivery</p>
                <p className="mt-3 text-sm leading-7 text-slate-300/78">
                  This page is built to redirect players toward official sources only. No cracked installers, no
                  mirrored files, and no illegal download promises are included anywhere in the flow.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Related Picks"
          title="Keep exploring"
          description="Similar genres and category overlaps from the same official-only catalog."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {relatedGames.map((relatedGame) => (
            <GameCard key={relatedGame.id} game={relatedGame} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default GameDetailPage
