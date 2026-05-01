import { ArrowRight, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import GameArtwork from './GameArtwork.jsx'

function GameCard({ game }) {
  return (
    <article className="glass-panel group flex h-full flex-col rounded-[28px] p-4 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/26">
      <Link to={`/games/${game.slug}`} className="block">
        <GameArtwork
          title={game.title}
          subtitle={game.tagline}
          palette={game.palette}
          badges={[game.featureTag, game.platforms[0], game.priceModel]}
          className="h-60 rounded-[24px]"
          titleSize="text-2xl"
        />
      </Link>

      <div className="mt-5 flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-4">
          <div>
            <Link to={`/games/${game.slug}`}>
              <h3 className="font-display text-2xl text-white transition group-hover:text-cyan-100">
                {game.title}
              </h3>
            </Link>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
              {game.genres.join(' • ')}
            </p>
          </div>
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] ${
              game.priceModel === 'Free'
                ? 'bg-cyan-400/14 text-cyan-200'
                : 'bg-violet-400/14 text-violet-200'
            }`}
          >
            {game.priceLabel}
          </span>
        </div>

        <p className="line-clamp-3 mt-4 text-sm leading-7 text-slate-300/80">
          {game.shortDescription}
        </p>

        <div className="mt-5 flex items-center justify-between text-sm text-slate-300/74">
          <span>{game.store}</span>
          <span className="inline-flex items-center gap-1.5 text-amber-300">
            <Star className="h-4 w-4 fill-current" />
            {game.rating.toFixed(1)}
          </span>
        </div>

        <p className="mt-3 text-xs uppercase tracking-[0.26em] text-slate-500">
          {game.platforms.slice(0, 3).join(' • ')}
        </p>
      </div>

      <div className="mt-6 flex gap-3">
        <Link
          to={`/games/${game.slug}`}
          className="inline-flex flex-1 items-center justify-center rounded-full border border-white/14 bg-white/6 px-4 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/30 hover:bg-white/12"
        >
          View Details
        </Link>
        <a
          href={game.officialUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,rgba(168,85,247,0.95),rgba(34,211,238,0.95))] px-4 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-110"
        >
          Get Game
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </article>
  )
}

export default GameCard
