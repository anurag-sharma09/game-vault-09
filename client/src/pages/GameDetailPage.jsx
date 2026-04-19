import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FiExternalLink, FiHeart, FiStar, FiMonitor, FiCpu, FiHardDrive } from 'react-icons/fi';
import { GiGamepad } from 'react-icons/gi';
import { fetchGameById } from '../services/api';
import toast from 'react-hot-toast';

const sourceColor = { Steam: '#1b2838', 'Epic Games': '#121212', 'Play Store': '#01875f', 'App Store': '#0071e3', GOG: '#86328a', 'Battle.net': '#009ae4', Origin: '#f56c2d', 'Official Site': '#374151' };
const sourceEmoji = { Steam: '🎮', 'Epic Games': '🎯', 'Play Store': '📱', 'App Store': '🍎', GOG: '💾', 'Battle.net': '⚔️', 'Origin': '🔵', 'Official Site': '🌐' };

const platformStyle = { PC: 'badge-pc', Mobile: 'badge-mobile', Console: 'badge-console', 'Cross-Platform': 'badge-genre' };

const RatingBar = ({ label, value, max = 10 }) => (
  <div style={{ marginBottom: '0.5rem' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px', fontSize: '0.82rem', color: '#9CA3AF' }}>
      <span>{label}</span><span style={{ color: '#8B5CF6' }}>{value}/10</span>
    </div>
    <div style={{ height: '4px', background: '#1F2D45', borderRadius: '2px', overflow: 'hidden' }}>
      <div style={{ height: '100%', width: `${(value / max) * 100}%`, background: 'linear-gradient(90deg, #8B5CF6, #06B6D4)', borderRadius: '2px', transition: 'width 1s ease' }} />
    </div>
  </div>
);

export default function GameDetailPage() {
  const { id } = useParams();
  const [game, setGame]       = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState('');
  const [wishlisted, setWishlisted] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchGameById(id)
      .then((res) => {
        setGame(res.data.data);
        const saved = JSON.parse(localStorage.getItem('gv_wishlist') || '[]');
        setWishlisted(saved.includes(res.data.data._id));
      })
      .catch(() => setError('Game not found'))
      .finally(() => setLoading(false));
  }, [id]);

  const toggleWishlist = () => {
    const saved = JSON.parse(localStorage.getItem('gv_wishlist') || '[]');
    let updated;
    if (saved.includes(game._id)) {
      updated = saved.filter(gid => gid !== game._id);
      toast('Removed from wishlist', { icon: '💔' });
    } else {
      updated = [...saved, game._id];
      toast.success('Added to wishlist!', { icon: '❤️' });
    }
    localStorage.setItem('gv_wishlist', JSON.stringify(updated));
    setWishlisted(!wishlisted);
  };

  const handleDownload = () => {
    toast.success(`Redirecting to ${game.downloadSource}...`);
    setTimeout(() => window.open(game.officialDownloadLink, '_blank', 'noopener,noreferrer'), 400);
  };

  if (loading) {
    return (
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 1.5rem' }}>
        <div className="skeleton" style={{ height: '400px', borderRadius: '16px', marginBottom: '2rem' }} />
        <div className="skeleton" style={{ height: '30px', width: '60%', marginBottom: '1rem' }} />
        <div className="skeleton" style={{ height: '16px', width: '40%' }} />
      </div>
    );
  }

  if (error || !game) {
    return (
      <div style={{ textAlign: 'center', padding: '5rem 1.5rem' }}>
        <GiGamepad size={60} color="#4B5563" style={{ marginBottom: '1rem' }} />
        <h2 style={{ fontFamily: 'Rajdhani', fontSize: '2rem', marginBottom: '0.5rem' }}>Game Not Found</h2>
        <p style={{ color: '#6B7280', marginBottom: '1.5rem' }}>This game may have been removed or the link is invalid.</p>
        <Link to="/" className="btn-primary">← Back to Home</Link>
      </div>
    );
  }

  const stars = Math.round((game.rating / 10) * 5);

  return (
    <>
      <Helmet>
        <title>{game.title} — GameVault</title>
        <meta name="description" content={`${game.description?.slice(0, 155)}...`} />
      </Helmet>

      {/* ── Banner ─────── */}
      <div style={{ position: 'relative', height: '380px', overflow: 'hidden' }}>
        <img src={game.bannerUrl || game.imageUrl} alt={game.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={e => { e.target.src = game.imageUrl; }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(8,11,20,0.1) 0%, rgba(8,11,20,0.98) 100%)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, padding: '2rem 1.5rem', maxWidth: '1200px', width: '100%', margin: '0 auto', right: 0 }}>
          <nav style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '1rem', fontSize: '0.82rem', color: '#6B7280' }}>
            <Link to="/" style={{ color: '#6B7280', textDecoration: 'none' }}>Home</Link>
            <span>/</span>
            <Link to={`/category/${game.genre?.toLowerCase()}`} style={{ color: '#6B7280', textDecoration: 'none' }}>{game.genre}</Link>
            <span>/</span>
            <span style={{ color: '#D1D5DB' }}>{game.title}</span>
          </nav>
          <h1 style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, color: '#F9FAFB', marginBottom: '0.5rem' }}>{game.title}</h1>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {game.platform?.map(p => <span key={p} className={`badge ${platformStyle[p] || 'badge-genre'}`}>{p}</span>)}
            <span className={`badge ${game.isFree ? 'badge-free' : 'badge-paid'}`}>{game.isFree ? 'FREE' : game.price}</span>
          </div>
        </div>
      </div>

      {/* ── Content ─────── */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1.5rem', display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 320px', gap: '2rem' }}>
        
        {/* Left Column */}
        <div>
          {/* Rating */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span className="stars" style={{ fontSize: '1.1rem' }}>{'★'.repeat(stars)}{'☆'.repeat(5 - stars)}</span>
              <span style={{ fontFamily: 'Rajdhani', fontSize: '1.5rem', fontWeight: 700, color: '#F9FAFB' }}>{game.rating}/10</span>
            </div>
            <div style={{ color: '#6B7280', fontSize: '0.85rem' }}>{game.developer} • {game.releaseYear}</div>
            <div style={{ color: '#6B7280', fontSize: '0.85rem' }}><FiStar size={12} style={{ marginRight: '4px' }} />{game.views?.toLocaleString()} views</div>
          </div>

          {/* Rating bar */}
          <div style={{ background: '#111827', borderRadius: '12px', padding: '1.25rem', marginBottom: '1.5rem' }}>
            <RatingBar label="Overall Rating" value={game.rating} />
          </div>

          {/* Description */}
          <div style={{ background: '#111827', borderRadius: '12px', padding: '1.5rem', marginBottom: '1.5rem' }}>
            <h2 style={{ fontFamily: 'Rajdhani', fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.75rem', color: '#8B5CF6' }}>About This Game</h2>
            <p style={{ color: '#D1D5DB', lineHeight: 1.8, fontSize: '0.95rem' }}>{game.description}</p>
          </div>

          {/* Tags */}
          {game.tags?.length > 0 && (
            <div style={{ background: '#111827', borderRadius: '12px', padding: '1.25rem', marginBottom: '1.5rem' }}>
              <h2 style={{ fontFamily: 'Rajdhani', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem', color: '#F9FAFB' }}>Tags</h2>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {game.tags.map(tag => (
                  <span key={tag} style={{ background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.2)', color: '#a78bfa', borderRadius: '20px', padding: '0.25rem 0.75rem', fontSize: '0.78rem' }}>
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* System Requirements */}
          {game.systemRequirements && (
            <div style={{ background: '#111827', borderRadius: '12px', padding: '1.5rem' }}>
              <h2 style={{ fontFamily: 'Rajdhani', fontSize: '1.2rem', fontWeight: 700, marginBottom: '1rem', color: '#F9FAFB', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FiMonitor size={18} color="#06B6D4" /> System Requirements
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                {[['OS', game.systemRequirements.os], ['CPU', game.systemRequirements.cpu], ['RAM', game.systemRequirements.ram], ['GPU', game.systemRequirements.gpu], ['Storage', game.systemRequirements.storage]].map(([key, val]) => (
                  <div key={key} style={{ background: '#0D1117', borderRadius: '8px', padding: '0.75rem' }}>
                    <div style={{ color: '#4B5563', fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>{key}</div>
                    <div style={{ color: '#D1D5DB', fontSize: '0.85rem' }}>{val}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Column — Download Card */}
        <div>
          <div style={{ background: '#111827', borderRadius: '16px', border: '1px solid #1F2D45', padding: '1.5rem', position: 'sticky', top: '80px' }}>
            <img src={game.imageUrl} alt={game.title} style={{ width: '100%', borderRadius: '10px', marginBottom: '1.25rem', objectFit: 'cover', aspectRatio: '16/9' }} onError={e => e.target.style.display = 'none'} />

            <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
              <div style={{ fontFamily: 'Rajdhani', fontSize: '2rem', fontWeight: 700, color: game.isFree ? '#10B981' : '#F97316' }}>
                {game.isFree ? 'FREE' : game.price}
              </div>
              <div style={{ color: '#6B7280', fontSize: '0.82rem' }}>via {game.downloadSource}</div>
            </div>

            <button
              id={`download-btn-${game._id}`}
              onClick={handleDownload}
              className="btn-download"
              style={{ width: '100%', justifyContent: 'center', marginBottom: '0.75rem' }}
            >
              <FiExternalLink size={18} />
              {game.isFree ? 'Play Free' : 'Get on ' + game.downloadSource}
            </button>

            <button
              onClick={toggleWishlist}
              style={{
                width: '100%', background: wishlisted ? 'rgba(236,72,153,0.1)' : 'transparent',
                border: `1px solid ${wishlisted ? '#EC4899' : '#1F2D45'}`, borderRadius: '10px',
                color: wishlisted ? '#EC4899' : '#9CA3AF', padding: '0.65rem', cursor: 'pointer',
                fontFamily: 'Rajdhani', fontWeight: 600, fontSize: '0.95rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', transition: 'all 0.2s',
              }}
            >
              <FiHeart size={16} fill={wishlisted ? '#EC4899' : 'none'} />
              {wishlisted ? 'Wishlisted' : 'Add to Wishlist'}
            </button>

            {/* Meta info */}
            <div style={{ marginTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {[['Developer', game.developer], ['Publisher', game.publisher], ['Genre', game.genre], ['Release', game.releaseYear]].map(([k, v]) => (
                <div key={k} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', paddingBottom: '0.5rem', borderBottom: '1px solid #1F2D45' }}>
                  <span style={{ color: '#6B7280' }}>{k}</span>
                  <span style={{ color: '#D1D5DB', fontWeight: 500 }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
