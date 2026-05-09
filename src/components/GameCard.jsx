import { motion } from 'framer-motion'
import { ArrowRight, Star, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'
import GameArtwork from './GameArtwork.jsx'
import { useStoreData } from '../hooks/useStoreData.js'

function GameCard({ game, compact = false }) {
  const { wishlist, toggleWishlist } = useStoreData()
  const inWishlist = wishlist.includes(game.id)

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="glass-panel group flex h-full flex-col overflow-hidden rounded-[24px] sm:rounded-[30px]"
    >
      <div className="relative aspect-[2/3] overflow-hidden">
        <Link to={`/games/${game.slug}`} className="block h-full w-full">
          <GameArtwork
            title={game.title}
            subtitle={compact ? game.genre : game.tagline}
            imageSrc={game.image}
            alt={`${game.title} cover art`}
            palette={game.palette}
            badges={[]} // Removing badges from image overlay for cleaner mobile look
            className="h-full w-full rounded-none"
            titleSize="hidden" // Hiding the title on the artwork for the card view
            loading="lazy"
            categories={game.categories}
            genres={game.genres}
          />
        </Link>
        
        {/* Price Badge - Top Left */}
        <div className="absolute left-3 top-3 z-10 rounded-full border border-white/14 bg-black/50 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md">
          {game.priceModel === 'Free' ? 'Free' : game.price || game.priceLabel}
        </div>

        {/* Wishlist Button - Top Right */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleWishlist(game.id);
          }}
          className={`absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border backdrop-blur-md transition-all ${
            inWishlist 
              ? 'border-violet-500/50 bg-violet-500/20 text-violet-300 shadow-[0_0_12px_rgba(139,92,246,0.4)]' 
              : 'border-white/10 bg-black/40 text-white/70 hover:border-white/30 hover:bg-black/60 hover:text-white'
          }`}
          title={inWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
        >
          <Heart className={`h-4.5 w-4.5 ${inWishlist ? 'fill-current' : ''}`} />
        </button>

        {/* Info Overlay (Visible on Hover/Touch) */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100 sm:p-5">
           <div className="flex items-center gap-1.5 text-amber-300">
            <Star className="h-3.5 w-3.5 fill-current" />
            <span className="text-xs font-bold">{game.rating.toFixed(1)}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-6">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0 flex-1">
            <Link to={`/games/${game.slug}`}>
              <h3 className="line-clamp-1 font-display text-lg uppercase leading-tight text-white transition group-hover:text-cyan-100 sm:text-2xl">
                {game.title}
              </h3>
            </Link>
            <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-400 sm:text-[10px]">
              {game.genre}
            </p>
          </div>
          
          <span className="shrink-0 text-xs font-bold text-cyan-400 sm:hidden">
            {game.rating.toFixed(1)} ★
          </span>
        </div>

        <p className="line-clamp-2 mt-3 text-xs leading-5 text-slate-300/78 sm:mt-4 sm:text-sm sm:leading-6">
          {game.description}
        </p>

        <div className="mt-auto pt-5">
          <div className="flex gap-2">
            <Link
              to={`/games/${game.slug}`}
              className="inline-flex flex-1 items-center justify-center rounded-full border border-white/12 bg-white/6 px-3 py-2.5 text-[10px] font-bold uppercase tracking-[0.1em] text-white transition hover:border-cyan-300/26 hover:bg-white/12 sm:px-4 sm:py-3 sm:text-xs sm:tracking-[0.16em]"
            >
              Details
            </Link>
            <a
              href={game.official_url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-[linear-gradient(135deg,rgba(168,85,247,0.98),rgba(34,211,238,0.92))] px-3 py-2.5 text-[10px] font-bold uppercase tracking-[0.1em] text-slate-950 transition hover:brightness-110 sm:px-4 sm:py-3 sm:text-xs sm:tracking-[0.16em]"
            >
              Play
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export default GameCard
