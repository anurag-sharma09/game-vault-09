import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Download, Heart, Star, ChevronLeft, Film, Monitor, Smartphone, Tv2, Globe, Calendar, Users } from 'lucide-react';
import { fetchGameById, toggleFavorite, logPlayed, getReviews, addReview } from '../services/api';
import { useAuth } from '../context/AuthContext';
import DownloadModal from '../components/DownloadModal';
import TrailerModal from '../components/TrailerModal';
import ReviewCard from '../components/ReviewCard';
import toast from 'react-hot-toast';

function Stars({ rating, size = 14 }) {
  const n = Math.round((rating / 10) * 5);
  return (
    <div className="flex items-center gap-[2px]">
      {[1,2,3,4,5].map(i => <Star key={i} size={size} fill={i <= n ? '#FFD32A' : 'none'} color={i <= n ? '#FFD32A' : 'var(--text-4)'} />)}
    </div>
  );
}

function Stat({ icon: Icon, label, value }) {
  return (
    <div className="text-center">
      <Icon size={16} color="var(--text-3)" className="mx-auto mb-1" />
      <div className="font-[var(--font-head)] font-bold text-base text-white">{value}</div>
      <div className="text-[0.72rem] text-[#475569]">{label}</div>
    </div>
  );
}

function SysRow({ k, v }) {
  return (
    <div className="flex justify-between items-start py-2.5 border-b border-white/[0.06]">
      <span className="text-[0.8rem] text-[#475569] font-semibold min-w-[80px]">{k}</span>
      <span className="text-[0.8rem] text-white text-right max-w-[55%]">{v}</span>
    </div>
  );
}

const TABS = ['Overview', 'Requirements', 'Reviews'];

export default function GameDetailPage() {
  const { id } = useParams();
  const { isAuthenticated, refreshUser } = useAuth();
  const [game,        setGame]      = useState(null);
  const [loading,     setLoading]   = useState(true);
  const [reviews,     setReviews]   = useState([]);
  const [tab,         setTab]       = useState('Overview');
  const [showDl,      setShowDl]    = useState(false);
  const [showTrailer, setTrailer]   = useState(false);
  const [wishlisted,  setWishlisted] = useState(false);
  const [newReview,   setNewReview] = useState({ rating: 5, comment: '' });
  const [submitting,  setSubmitting] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const [gr, rr] = await Promise.all([fetchGameById(id), getReviews(id)]);
        setGame(gr.data.data);
        setReviews(rr.data.data || []);
        const saved = JSON.parse(localStorage.getItem('ag_wishlist') || '[]');
        setWishlisted(saved.includes(id));
      } catch { toast.error('Game not found'); }
      finally { setLoading(false); }
    })();
  }, [id]);

  const handlePlay = async () => {
    if (!game) return;
    if (isAuthenticated) { try { await logPlayed(id); refreshUser(); } catch (_) {} }
    const url = game.playUrl || game.officialDownloadLink;
    url ? window.open(url, '_blank', 'noopener') : setShowDl(true);
  };

  const handleWishlist = async () => {
    if (isAuthenticated) { try { await toggleFavorite(id); } catch (_) {} }
    const saved = JSON.parse(localStorage.getItem('ag_wishlist') || '[]');
    const next = wishlisted ? saved.filter(x => x !== id) : [...saved, id];
    localStorage.setItem('ag_wishlist', JSON.stringify(next));
    setWishlisted(!wishlisted);
    toast.success(wishlisted ? 'Removed from favorites' : '♥ Added to favorites');
  };

  const submitReview = async () => {
    if (!isAuthenticated) { toast.error('Sign in to leave a review'); return; }
    if (!newReview.comment.trim()) { toast.error('Write a comment'); return; }
    setSubmitting(true);
    try {
      const res = await addReview(id, newReview);
      setReviews(p => [res.data.data, ...p]);
      setNewReview({ rating: 5, comment: '' });
      toast.success('Review posted!');
    } catch (e) { toast.error(e.response?.data?.message || 'Failed'); }
    finally { setSubmitting(false); }
  };

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="spinner" />
    </div>
  );

  if (!game) return (
    <div className="min-h-screen flex items-center justify-center text-[#475569]">
      Game not found.
    </div>
  );

  return (
    <div className="min-h-screen pb-20 w-full overflow-hidden">
      <Helmet>
        <title>{game.title} — AntiGravity Games</title>
        <meta name="description" content={game.description?.slice(0, 155)} />
      </Helmet>

      {/* Banner */}
      <div className="relative h-[clamp(280px,45vw,520px)] overflow-hidden w-full">
        <img src={game.bannerUrl || game.imageUrl} alt={game.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19]/15 via-[#0B0F19]/55 to-[#0B0F19]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F19]/50 to-transparent" />

        <div className="absolute top-20 left-0 right-0 px-6">
          <div className="container">
            <Link to="/games" className="inline-flex items-center gap-1.5 text-[0.82rem] font-semibold px-3 py-1.5 rounded-full backdrop-blur-md border border-white/10 text-white/60 bg-black/40 hover:text-white transition-colors w-fit">
              <ChevronLeft size={14} /> Back to Games
            </Link>
          </div>
        </div>

        {game.trailerUrl && (
          <motion.button whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}
            onClick={() => setTrailer(true)}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-black/60 border-2 border-white/40 backdrop-blur-md flex items-center justify-center transition-colors hover:border-white/80">
            <Film size={26} color="white" />
          </motion.button>
        )}
      </div>

      <div className="container relative z-10 -mt-8 w-full">
        <div className="grid grid-cols-1 gap-8">

          {/* Layout: content left, sidebar right on lg */}
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_340px] gap-8">

            {/* Main */}
            <div className="flex flex-col min-w-0 w-full">
              {/* Title row */}
              <div className="bg-[#111827] border border-white/[0.06] rounded-2xl p-6 mb-6">
                <div className="flex flex-wrap gap-1.5 mb-3.5">
                  <span className="badge badge-primary">{game.genre}</span>
                  {game.isFree && <span className="badge badge-green">Free to Play</span>}
                  {game.isTrending && <span className="badge badge-orange">🔥 Trending</span>}
                  {game.platform?.map(p => <span key={p} className="badge badge-gray">{p}</span>)}
                </div>

                <h1 className="font-[var(--font-head)] font-extrabold text-[clamp(1.8rem,4vw,2.5rem)] tracking-tight mb-2 text-white">{game.title}</h1>

                <div className="flex flex-wrap gap-6 items-center mt-4">
                  <div className="flex items-center gap-2">
                    <Stars rating={game.rating} />
                    <span className="font-[var(--font-head)] font-bold text-[1.1rem] text-white">{game.rating?.toFixed(1)}</span>
                    <span className="text-[#475569] text-[0.82rem]">/ 10</span>
                  </div>
                  <div className="flex gap-6">
                    <Stat icon={Calendar} label="Released" value={game.releaseYear} />
                    <Stat icon={Users} label="Developer" value={game.developer?.split(' ')[0]} />
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex flex-wrap gap-1 bg-[#0B1220] rounded-xl p-1 border border-white/[0.06] mb-6 w-full sm:w-fit">
                {TABS.map(t => (
                  <button key={t} onClick={() => setTab(t)}
                    className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-150 flex-1 sm:flex-none ${
                      tab === t ? 'bg-[#7C3AED] text-white shadow-[0_0_16px_rgba(124,58,237,0.35)]' : 'bg-transparent text-[#94A3B8] hover:text-white'
                    }`}>
                    {t}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {tab === 'Overview' && (
                  <motion.div key="ov" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="bg-[#111827] border border-white/[0.06] rounded-2xl p-6">
                    <p className="text-[#94A3B8] leading-relaxed mb-6">{game.description}</p>
                    {game.tags?.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {game.tags.map(tag => <span key={tag} className="badge badge-gray">#{tag}</span>)}
                      </div>
                    )}
                    {game.screenshots?.length > 0 && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                        {game.screenshots.map((url, i) => (
                          <img key={i} src={url} alt={`Screenshot ${i+1}`} className="rounded-xl object-cover w-full aspect-[16/9]" />
                        ))}
                      </div>
                    )}
                  </motion.div>
                )}

                {tab === 'Requirements' && (
                  <motion.div key="req" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    className="bg-[#111827] border border-white/[0.06] rounded-2xl p-6">
                    <h3 className="font-[var(--font-head)] font-bold text-[0.9rem] text-[#94A3B8] uppercase tracking-widest mb-4">System Requirements</h3>
                    <SysRow k="OS"      v={game.systemRequirements?.os} />
                    <SysRow k="CPU"     v={game.systemRequirements?.cpu} />
                    <SysRow k="RAM"     v={game.systemRequirements?.ram} />
                    <SysRow k="GPU"     v={game.systemRequirements?.gpu} />
                    <SysRow k="Storage" v={game.systemRequirements?.storage} />
                  </motion.div>
                )}

                {tab === 'Reviews' && (
                  <motion.div key="rev" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex flex-col gap-4">
                    {isAuthenticated && (
                      <div className="bg-[#111827] border border-white/[0.06] rounded-2xl p-6">
                        <h4 className="font-[var(--font-head)] font-bold text-[0.95rem] mb-3 text-white">Write a Review</h4>
                        <div className="flex gap-1 mb-3.5">
                          {[1,2,3,4,5].map(n => (
                            <button key={n} onClick={() => setNewReview(r => ({ ...r, rating: n }))} className="text-2xl transition-transform duration-100 hover:scale-125">
                              {n <= newReview.rating ? '★' : '☆'}
                            </button>
                          ))}
                        </div>
                        <textarea value={newReview.comment} onChange={e => setNewReview(r => ({ ...r, comment: e.target.value }))}
                          className="input mb-3" rows={3} placeholder="Share your experience..." />
                        <button onClick={submitReview} disabled={submitting} className={`btn btn-primary btn-sm ${submitting ? 'opacity-60 cursor-not-allowed' : ''}`}>
                          {submitting ? 'Posting...' : 'Post Review'}
                        </button>
                      </div>
                    )}
                    {reviews.length === 0
                      ? <p className="text-[#475569] text-center py-12 text-sm">No reviews yet. Be the first!</p>
                      : reviews.map(r => <ReviewCard key={r._id} review={r} onDeleted={rid => setReviews(p => p.filter(x => x._id !== rid))} />)
                    }
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Sidebar */}
            <div className="w-full">
              <div className="sticky top-[84px]">
                <div className="bg-[#111827] border border-white/[0.06] rounded-2xl overflow-hidden w-full">
                  <img src={game.imageUrl} alt={game.title} className="w-full aspect-[16/9] object-cover" />
                  <div className="p-6 flex flex-col gap-3">
                    <button onClick={handlePlay} className="btn btn-primary w-full justify-center py-3.5">
                      <Play size={16} fill="white" /> Play Now
                    </button>
                    <button onClick={() => setShowDl(true)} className="btn btn-green w-full justify-center py-3.5">
                      <Download size={16} /> Download Game
                    </button>
                    <button onClick={handleWishlist} className={`btn btn-ghost w-full justify-center py-3 ${wishlisted ? 'text-[#FF6B9D] border-[#FF6B9D]/40' : ''}`}>
                      <Heart size={15} fill={wishlisted ? '#FF6B9D' : 'none'} color={wishlisted ? '#FF6B9D' : undefined} />
                      {wishlisted ? 'In Favorites' : 'Add to Favorites'}
                    </button>

                    <div className="border-t border-white/[0.06] mt-2 pt-4 flex flex-col gap-2">
                      {[['Developer', game.developer], ['Publisher', game.publisher], ['Released', game.releaseYear], ['Source', game.downloadSource], ['Price', game.isFree ? 'Free' : game.price]].map(([k,v]) => (
                        <div key={k} className="flex justify-between text-[0.82rem]">
                          <span className="text-[#475569]">{k}</span>
                          <span className="font-semibold text-white">{v}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showDl && <DownloadModal game={game} onClose={() => setShowDl(false)} />}
      {showTrailer && <TrailerModal game={game} onClose={() => setTrailer(false)} />}
    </div>
  );
}
