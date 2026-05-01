import {
  ArrowRight,
  BadgeCheck,
  Flame,
  Rocket,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import CategoryCard from '../components/CategoryCard.jsx'
import GameArtwork from '../components/GameArtwork.jsx'
import GameCard from '../components/GameCard.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { categories, featuredStats, games } from '../data/siteData.js'

const byPopularity = (left, right) => right.popularity - left.popularity
const byNewest = (left, right) => right.releaseRank - left.releaseRank

function countGames(categorySlug) {
  return games.filter((game) => game.categories.includes(categorySlug)).length
}

function HomePage() {
  const featuredGame = games.find((game) => game.slug === 'cyberpunk-2077') ?? games[0]
  const trendingGames = games
    .filter((game) => ['fortnite', 'genshin-impact', 'apex-legends', 'ea-sports-fc-25'].includes(game.slug))
    .sort(byPopularity)
  const freeGames = games.filter((game) => game.priceModel === 'Free').sort(byPopularity).slice(0, 4)
  const latestGames = [...games].sort(byNewest).slice(0, 4)
  const popularCategories = [...categories]
    .sort((left, right) => countGames(right.slug) - countGames(left.slug))
    .slice(0, 6)

  return (
    <div className="space-y-16 pb-8">
      <section className="glass-panel soft-glow relative overflow-hidden rounded-[36px] px-6 py-10 sm:px-8 lg:px-10 lg:py-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(168,85,247,0.24),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(34,211,238,0.18),transparent_26%)]" />
        <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="max-w-2xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/16 bg-cyan-300/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.34em] text-cyan-100">
              <ShieldCheck className="h-4 w-4" />
              Official discovery platform
            </p>
            <h1 className="font-display text-5xl leading-none text-white sm:text-6xl xl:text-7xl">
              Play <span className="text-gradient">Without Limits</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300/80 sm:text-lg">
              Discover official game downloads safely. Browse standout releases, filter by genre or
              platform, and jump straight to verified store pages without touching pirated links.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/games"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,rgba(168,85,247,0.95),rgba(34,211,238,0.95))] px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:brightness-110"
              >
                Browse Games
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#trending"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/14 bg-white/6 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-cyan-300/30 hover:bg-white/10"
              >
                Trending Now
                <Flame className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {featuredStats.map((stat) => (
                <div key={stat.value} className="glass-panel rounded-[24px] p-4">
                  <p className="font-display text-xl text-white">{stat.value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300/74">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <GameArtwork
              title={featuredGame.title}
              subtitle={featuredGame.tagline}
              palette={featuredGame.palette}
              badges={[featuredGame.featureTag, featuredGame.publisher, featuredGame.priceModel]}
              className="h-[420px] rounded-[32px]"
              titleSize="text-4xl sm:text-5xl"
            />

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="glass-panel rounded-[24px] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/76">
                  Trending
                </p>
                <p className="mt-3 font-display text-2xl text-white">{games.length} games</p>
              </div>
              <div className="glass-panel rounded-[24px] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/76">
                  Categories
                </p>
                <p className="mt-3 font-display text-2xl text-white">{categories.length} lanes</p>
              </div>
              <div className="glass-panel rounded-[24px] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/76">
                  Safety
                </p>
                <p className="mt-3 font-display text-2xl text-white">100% official</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="glass-panel rounded-[28px] p-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/12 text-cyan-100">
            <BadgeCheck className="h-5 w-5" />
          </div>
          <h2 className="mt-5 font-display text-2xl text-white">Trusted Redirects</h2>
          <p className="mt-3 text-sm leading-7 text-slate-300/78">
            Each download, play, or website button points to an official publisher, launcher, or
            storefront page.
          </p>
        </div>

        <div className="glass-panel rounded-[28px] p-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-400/12 text-violet-100">
            <Rocket className="h-5 w-5" />
          </div>
          <h2 className="mt-5 font-display text-2xl text-white">Fast Discovery</h2>
          <p className="mt-3 text-sm leading-7 text-slate-300/78">
            Search quickly, filter by platform and genre, then move from browsing to the real source in seconds.
          </p>
        </div>

        <div className="glass-panel rounded-[28px] p-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-fuchsia-400/12 text-fuchsia-100">
            <Sparkles className="h-5 w-5" />
          </div>
          <h2 className="mt-5 font-display text-2xl text-white">Premium UI</h2>
          <p className="mt-3 text-sm leading-7 text-slate-300/78">
            Futuristic glassmorphism, AAA-style gradients, and strong visual hierarchy keep the catalog feeling high-end.
          </p>
        </div>
      </section>

      <section id="trending" className="space-y-8">
        <SectionHeading
          eyebrow="Trending Games"
          title="Hot launches players are clicking right now"
          description="A curated mix of top multiplayer hits, premium story worlds, and live-service favorites with official links only."
          action={
            <Link
              to="/games?sort=popular"
              className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/6 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/30 hover:bg-white/10"
            >
              View All
              <ArrowRight className="h-4 w-4" />
            </Link>
          }
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {trendingGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Top Free Games"
          title="Big free-to-play titles with clean official routes"
          description="Keep the funnel safe for players looking for live-service hits, competitive titles, and mobile-friendly installs."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {freeGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Popular Categories"
          title="Browse the vault your way"
          description="Explore action, racing, strategy, horror, mobile, and more through bold category lanes built for fast scanning."
          action={
            <Link
              to="/categories"
              className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/6 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/30 hover:bg-white/10"
            >
              All Categories
              <ArrowRight className="h-4 w-4" />
            </Link>
          }
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {popularCategories.map((category) => (
            <CategoryCard key={category.slug} category={category} count={countGames(category.slug)} />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Latest Releases"
          title="Fresh additions for players who want something new"
          description="Use the newest sort lane to spotlight the latest featured entries in your curated catalog."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {latestGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default HomePage
