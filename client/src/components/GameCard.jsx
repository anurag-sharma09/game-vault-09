import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiHeart, FiStar, FiExternalLink } from 'react-icons/fi';
import { GiGamepad } from 'react-icons/gi';

/** Platform color map */
const platformStyle = (p) => {
  const map = { PC: 'badge-pc', Mobile: 'badge-mobile', Console: 'badge-console', 'Cross-Platform': 'badge-genre' };
  return map[p] || 'badge-genre';
};

/** Source icon map */
const sourceEmoji = { Steam: '🎮', 'Epic Games': '🎯', 'Play Store': '📱', 'App Store': '🍎', GOG: '💾', 'Battle.net': '⚔️', 'Origin': '🔵', 'Official Site': '🌐' };

/** Rating stars (out of 5 displayed) */
const RatingStars = ({ rating }) => {
  const stars = Math.round((rating / 10) * 5);
  return (
    <span className="stars" style={{ fontSize: '0.75rem' }}>
      {'★'.repeat(stars)}{'☆'.repeat(5 - stars)}
      <span style={{ color: '#9CA3AF', fontFamily: 'Inter', fontWeight: 500, marginLeft: '4px', fontSize: '0.72rem' }}>{rating.toFixed(1)}</span>
    </span>
  );
};

export default function GameCard({ game }) {
  const [wishlisted, setWishlisted] = useState(() => {
    const saved = JSON.parse(localStorage.getItem('gv_wishlist') || '[]');
    return saved.includes(game._id);
  });
  const [imgError, setImgError] = useState(false);

  const toggleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const saved = JSON.parse(localStorage.getItem('gv_wishlist') || '[]');
    let updated;
    if (saved.includes(game._id)) {
      updated = saved.filter(id => id !== game._id);
    } else {
      updated = [...saved, game._id];
    }
    localStorage.setItem('gv_wishlist', JSON.stringify(updated));
    setWishlisted(!wishlisted);
  };

  return (
    <Link to={`/game/${game._id}`} style={{ textDecoration: 'none' }}>
      <div className="game-card fade-in-up">
        {/* Image */}
        <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden', background: '#1A2235' }}>
          {!imgError ? (
            <img
              src={game.imageUrl}
              alt={game.title}
              onError={() => setImgError(true)}
              style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
              onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={e => e.target.style.transform = 'scale(1)'}
            />
          ) : (
            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '0.5rem' }}>
              <GiGamepad size={40} color="#4B5563" />
              <span style={{ color: '#4B5563', fontSize: '0.75rem' }}>No image</span>
            </div>
          )}

          {/* Badges overlay */}
          <div style={{ position: 'absolute', top: '8px', left: '8px', display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
            <span className={`badge ${game.isFree ? 'badge-free' : 'badge-paid'}`}>{game.isFree ? 'FREE' : game.price}</span>
          </div>

          {/* Wishlist */}
          <button
            onClick={toggleWishlist}
            id={`wishlist-${game._id}`}
            style={{
              position: 'absolute', top: '8px', right: '8px',
              background: 'rgba(8,11,20,0.75)', border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '50%', padding: '6px', cursor: 'pointer', display: 'flex',
              color: wishlisted ? '#EC4899' : '#9CA3AF', transition: 'color 0.2s, background 0.2s',
              backdropFilter: 'blur(4px)',
            }}
          >
            <FiHeart size={14} fill={wishlisted ? '#EC4899' : 'none'} />
          </button>

          {/* Source badge */}
          <div style={{ position: 'absolute', bottom: '8px', right: '8px', background: 'rgba(8,11,20,0.85)', borderRadius: '6px', padding: '2px 6px', fontSize: '0.7rem', color: '#9CA3AF', backdropFilter: 'blur(4px)' }}>
            {sourceEmoji[game.downloadSource] || '🎮'} {game.downloadSource}
          </div>
        </div>

        {/* Info */}
        <div style={{ padding: '0.875rem' }}>
          <h3 style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '1.05rem', color: '#F9FAFB', marginBottom: '0.4rem', lineHeight: 1.2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {game.title}
          </h3>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
            <RatingStars rating={game.rating} />
            <span className="badge badge-genre" style={{ fontSize: '0.65rem' }}>{game.genre}</span>
          </div>

          {/* Platforms */}
          <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
            {game.platform?.slice(0, 3).map((p) => (
              <span key={p} className={`badge ${platformStyle(p)}`} style={{ fontSize: '0.62rem', padding: '2px 6px' }}>{p}</span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
