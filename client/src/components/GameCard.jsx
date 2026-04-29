import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Heart, Play, Download, ExternalLink } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { toggleFavorite } from '../services/api';
import DownloadModal from './DownloadModal';
import toast from 'react-hot-toast';

const GENRE_COLORS = {
  Action: '#FF4757', RPG: '#A78BFA', Shooter: '#00D9FF', Strategy: '#00D68F',
  Sports: '#FFD32A', Racing: '#FF7A00', Indie: '#FF6B9D', Horror: '#94A3B8',
  'Battle Royale': '#00B8D9', Simulation: '#22C55E', Adventure: '#8B5CF6',
  Puzzle: '#14B8A6', Fighting: '#EF4444', MOBA: '#6366F1',
};

function Stars({ rating }) {
  const stars = Math.round((rating / 10) * 5);
  return (
    <div className="flex items-center gap-px">
      {[1,2,3,4,5].map(i => (
        <Star key={i} size={11} fill={i <= stars ? '#FFD32A' : 'none'} color={i <= stars ? '#FFD32A' : '#334155'} />
      ))}
      <span className="text-[0.72rem] text-[#94A3B8] ml-1.5 font-semibold">{rating?.toFixed(1)}</span>
    </div>
  );
}

export default function GameCard({ game }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [wishlisted, setWishlisted] = useState(() => {
    try { return JSON.parse(localStorage.getItem('ag_wishlist') || '[]').includes(game._id); }
    catch { return false; }
  });
  const [showDownload, setShowDownload] = useState(false);
  const color = GENRE_COLORS[game.genre] || '#7C3AED';

  const handleWishlist = async (e) => {
    e.preventDefault(); e.stopPropagation();
    if (isAuthenticated) { try { await toggleFavorite(game._id); } catch (_) {} }
    const saved = JSON.parse(localStorage.getItem('ag_wishlist') || '[]');
    const next = wishlisted ? saved.filter(id => id !== game._id) : [...saved, game._id];
    localStorage.setItem('ag_wishlist', JSON.stringify(next));
    setWishlisted(!wishlisted);
    toast.success(wishlisted ? 'Removed from favorites' : '♥ Added to favorites');
  };

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.35 }}
        className="group flex flex-col cursor-pointer relative h-full rounded-xl overflow-hidden border border-white/[0.06] bg-[#111827] hover:border-white/[0.12] hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#7C3AED]/10 transition-all duration-300"
      >
        {/* Thumbnail */}
        <Link to={`/game/${game._id}`} className="block relative overflow-hidden shrink-0 aspect-[16/9] w-full">
          <img
            src={game.imageUrl}
            alt={game.title}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent opacity-80" />

          {/* Top badges */}
          <div className="absolute top-2.5 left-2.5 flex gap-1.5 flex-wrap">
            <span className="px-2.5 py-0.5 rounded-md text-[0.65rem] font-bold uppercase tracking-wide backdrop-blur-md" style={{ background: `${color}30`, color, border: `1px solid ${color}40` }}>
              {game.genre}
            </span>
            {game.isFree && <span className="px-2.5 py-0.5 rounded-md text-[0.65rem] font-bold uppercase tracking-wide bg-[#00D68F]/20 text-[#00D68F] border border-[#00D68F]/30 backdrop-blur-md">Free</span>}
            {game.isTrending && <span className="px-2.5 py-0.5 rounded-md text-[0.65rem] font-bold uppercase tracking-wide bg-[#FF7A00]/20 text-[#FF7A00] border border-[#FF7A00]/30 backdrop-blur-md">🔥 Hot</span>}
          </div>

          {/* Wishlist */}
          <button
            onClick={handleWishlist}
            className={`absolute top-2.5 right-2.5 w-[30px] h-[30px] rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center transition-all duration-200 border ${wishlisted ? 'border-[#FF6B9D]/50' : 'border-white/10'}`}
          >
            <Heart size={13} fill={wishlisted ? '#FF6B9D' : 'none'} color={wishlisted ? '#FF6B9D' : 'rgba(255,255,255,0.5)'} />
          </button>

          {/* Rating on image */}
          <div className="absolute bottom-2 left-2.5">
            <Stars rating={game.rating} />
          </div>
        </Link>

        {/* Content */}
        <div className="p-3.5 flex flex-col gap-2 flex-1 w-full">
          <div className="w-full">
            <h3 className="font-[var(--font-head)] font-bold text-[0.92rem] mb-0.5 truncate w-full">
              <Link to={`/game/${game._id}`} className="text-white hover:text-[#00D9FF] transition-colors duration-200">
                {game.title}
              </Link>
            </h3>
            <p className="text-[0.75rem] text-[#475569] truncate w-full">{game.developer} · {game.releaseYear}</p>
          </div>

          {/* Price + Platform */}
          <div className="flex items-center justify-between w-full mt-auto">
            <span className={`text-[0.88rem] font-bold font-[var(--font-head)] ${game.isFree ? 'text-[#00D68F]' : 'text-white'}`}>
              {game.isFree ? 'Free to Play' : game.price}
            </span>
            <span className="text-[0.68rem] text-[#475569] bg-white/[0.04] px-2 py-0.5 rounded-md border border-white/[0.06] shrink-0">
              {Array.isArray(game.platform) ? game.platform[0] : game.platform}
            </span>
          </div>

          {/* Buttons */}
          <div className="flex gap-2 w-full mt-1.5">
            <button
              onClick={() => navigate(`/game/${game._id}`)}
              className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg, #7C3AED, #6D28D9)', boxShadow: '0 0 12px rgba(124,58,237,0.25)' }}
            >
              <Play size={12} fill="white" /> Play
            </button>
            <button
              onClick={e => { e.stopPropagation(); setShowDownload(true); }}
              className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold text-[#94A3B8] bg-white/5 border border-white/[0.08] hover:bg-white/10 hover:text-white transition-all duration-300 hover:-translate-y-0.5"
            >
              <Download size={12} /> Get
            </button>
          </div>
        </div>
      </motion.article>

      {showDownload && <DownloadModal game={game} onClose={() => setShowDownload(false)} />}
    </>
  );
}
