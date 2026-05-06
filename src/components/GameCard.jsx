import { motion } from 'framer-motion'
import { ArrowRight, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import GameArtwork from './GameArtwork.jsx'

function GameCard({ game, compact = false }) {
  return (
    <motion.article
      whileHover={{ y: -10 }}
      transition={{ duration: 0.28, ease: 'easeOut' }}
      className="glass-panel group flex h-full flex-col overflow-hidden rounded-[30px]"
    >
      <Link to={`/games/${game.slug}`} className="block">
        <GameArtwork
          title={game.title}
          subtitle={compact ? game.genre : game.tagline}
          imageSrc={game.image}
          alt={`${game.title} cover art`}
          palette={game.palette}
          badges={[game.featureTag, game.platforms[0], game.priceModel]}
          className={compact ? 'h-80 rounded-none' : 'h-72 rounded-none'}
          titleSize={compact ? 'text-3xl' : 'text-[2.2rem]'}
          loading="lazy"
        />
      </Link>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <Link to={`/games/${game.slug}`}>
              <h3 className="line-clamp-2 font-display text-[2rem] uppercase leading-none text-white transition group-hover:text-cyan-100">
                {game.title}
              </h3>
            </Link>
            <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-400">
              {game.genre}
            </p>
          </div>

          <span
            className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] ${
              game.priceModel === 'Free'
                ? 'bg-cyan-400/14 text-cyan-200'
                : game.priceModel === 'Coming Soon'
                  ? 'bg-amber-400/14 text-amber-200'
                  : 'bg-violet-400/14 text-violet-200'
            }`}
          >
            {game.price || game.priceLabel}
          </span>
        </div>

        <p className="line-clamp-3 mt-4 text-sm leading-7 text-slate-300/78">
          {game.description}
        </p>

        <div className="mt-5 flex items-center justify-between text-sm text-slate-300/72">
          <span>{game.store}</span>
          <span className="inline-flex items-center gap-1.5 text-amber-300">
            <Star className="h-4 w-4 fill-current" />
            {game.rating.toFixed(1)}
          </span>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {game.platforms.slice(0, 3).map((platform) => (
            <span
              key={platform}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-300"
            >
              {platform}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-3">
          <Link
            to={`/games/${game.slug}`}
            className="inline-flex flex-1 items-center justify-center rounded-full border border-white/12 bg-white/6 px-4 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:border-cyan-300/26 hover:bg-white/12"
          >
            View Page
          </Link>
          <a
            href={game.official_url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,rgba(168,85,247,0.98),rgba(34,211,238,0.92))] px-4 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-slate-950 transition hover:brightness-110"
          >
            Play Now
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.article>
  )
}

export default GameCard
