import { useState, useEffect } from 'react'
import FallbackArtwork from './FallbackArtwork.jsx'
import { getGameImageUrl, getGameBannerUrl } from '../utils/cloudinary'

/**
 * GameArtwork – the primary image container used in full GameCards.
 *
 * Features:
 * - Integrated Cloudinary CDN mapping based on game title
 * - Animated skeleton shimmer while loading
 * - Smooth fade-in when image successfully loads
 * - Instantly switches to cinematic FallbackArtwork on any error
 * - Never shows broken image icons or blank containers
 * - Maintains exact aspect ratio at all times (no layout shifts)
 */
function GameArtwork({
  title,
  subtitle,
  imageSrc,
  alt,
  palette = ['#8b5cf6', '#22d3ee', '#3b82f6'],
  badges = [],
  className = '',
  titleSize = 'text-2xl sm:text-3xl',
  loading = 'lazy',
  priority = false,
  categories = [],
  genres = [],
  isBanner = false,
}) {
  const [imgStatus, setImgStatus] = useState('loading')
  const [finalSrc, setFinalSrc] = useState('')

  // Resolve image source (Cloudinary vs Local vs Fallback)
  useEffect(() => {
    let resolvedSrc = imageSrc;

    // If imageSrc is a local path or missing, use Cloudinary mapping
    if (!imageSrc || (typeof imageSrc === 'string' && imageSrc.startsWith('/images/'))) {
      resolvedSrc = isBanner 
        ? getGameBannerUrl(title) 
        : getGameImageUrl(title);
    }

    setFinalSrc(resolvedSrc);
    
    if (!resolvedSrc) {
      setImgStatus('gradient')
    } else {
      setImgStatus('loading')
    }
  }, [imageSrc, title, isBanner])

  const showFallback = !imageSrc || imgStatus === 'error' || imgStatus === 'gradient'
  const imageLoaded  = imgStatus === 'loaded'

  return (
    <div
      className={`scan-lines relative overflow-hidden border border-white/12 bg-slate-950 ${className}`}
    >
      {/* ── Fallback: cinematic CSS art ──────────────────────── */}
      {showFallback && (
        <FallbackArtwork
          title={title}
          categories={categories}
          genres={genres}
          className="absolute inset-0 h-full w-full"
          compact={false}
        />
      )}

      {/* ── Skeleton shimmer (while primary image loads) ───── */}
      {imgStatus === 'loading' && !showFallback && (
        <div className="absolute inset-0 skeleton-shimmer" />
      )}

      {/* ── Actual image ─────────────────────────────────────── */}
      {!showFallback && (
        <img
          src={finalSrc}
          alt={alt ?? title}
          loading={loading}
          decoding="async"
          fetchPriority={priority ? 'high' : 'auto'}
          onLoad={() => setImgStatus('loaded')}
          onError={() => setImgStatus('error')}
          className={`absolute inset-0 h-full w-full object-cover object-center ${
            imageLoaded ? 'game-img-loaded' : 'opacity-0'
          }`}
        />
      )}

      {/* ── Overlay layers (work over both image and fallback) ── */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_18%,rgba(255,255,255,0.12),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.06),transparent_22%,rgba(2,6,23,0.78))]" />

      {/* Floating orbs (only over real image to add depth) */}
      {!showFallback && (
        <>
          <div className="hero-orb absolute -left-10 top-1/2 h-36 w-36 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />
          <div className="hero-orb-delay absolute -right-10 top-10 h-28 w-28 rounded-full border border-white/10 bg-white/12 blur-2xl" />
        </>
      )}

      <div className="absolute inset-[1px] rounded-[inherit] border border-white/5" />

      {/* ── Badges + title content ───────────────────────────── */}
      <div className="relative flex h-full flex-col justify-between p-4 sm:p-6">
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {badges.slice(0, 2).filter(Boolean).map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-white/14 bg-black/30 px-2.5 py-0.5 text-[8px] font-bold uppercase tracking-[0.2em] text-white/90 backdrop-blur-md sm:px-3 sm:py-1 sm:text-[10px] sm:tracking-[0.28em]"
            >
              {badge}
            </span>
          ))}
        </div>

        <div className={`max-w-xl ${titleSize === 'hidden' ? 'hidden' : ''}`}>
          <h3 className={`font-display ${titleSize} leading-[1.1] text-white drop-shadow-2xl`}>{title}</h3>
          {subtitle ? (
            <p className="mt-2 line-clamp-2 max-w-lg text-[10px] leading-relaxed text-white/80 drop-shadow-md sm:mt-3 sm:text-sm sm:leading-6 md:text-base">
              {subtitle}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default GameArtwork
