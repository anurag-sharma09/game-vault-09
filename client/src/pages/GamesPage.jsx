import { useEffect, useState, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Search, X, SlidersHorizontal, ChevronDown } from 'lucide-react';
import { useGame } from '../context/GameContext';
import GameCard from '../components/GameCard';
import SkeletonCard from '../components/SkeletonCard';

const GENRES   = ['All','Action','RPG','Shooter','Strategy','Sports','Racing','Indie','Battle Royale','Simulation','Puzzle','Adventure','Fighting','MOBA','Horror'];
const PLATFORMS= ['All','PC','Mobile','Console','Cross-Platform','Browser'];
const SORTS    = [{ v: 'rating', l: 'Top Rated' }, { v: 'views', l: 'Popular' }, { v: 'newest', l: 'Newest' }, { v: 'title', l: 'A–Z' }];

export default function GamesPage() {
  const [sp]  = useSearchParams();
  const [q,    setQ]     = useState(sp.get('q') || '');
  const [genre,setGenre] = useState('All');
  const [plat, setPlat]  = useState('All');
  const [sort, setSort]  = useState('rating');
  const [free, setFree]  = useState(false);
  const [page, setPage]  = useState(1);
  const [sideOpen, setSideOpen] = useState(false);

  const { games, pagination, loading, loadGames, search, searchResults, searchLoading } = useGame();

  const load = useCallback(() => {
    const p = { page, sort };
    if (genre !== 'All') p.genre = genre;
    if (plat  !== 'All') p.platform = plat;
    if (free) p.isFree = true;
    loadGames(p);
  }, [genre, plat, sort, free, page]);

  useEffect(() => { load(); }, [load]);

  useEffect(() => {
    if (!q.trim()) return;
    const t = setTimeout(() => search(q.trim()), 360);
    return () => clearTimeout(t);
  }, [q]);

  const isSearching = q.trim().length > 1;
  const display = isSearching ? searchResults : games;

  const FilterPill = ({ label, active, onClick, color }) => (
    <button onClick={onClick} className={`px-3.5 py-1.5 rounded-full text-xs font-semibold cursor-pointer border-[1.5px] transition-all duration-150 whitespace-nowrap ${
      active ? 'bg-[#7C3AED]/15 border-[#7C3AED] text-[#7C3AED]' : 'bg-transparent border-white/[0.06] text-[#94A3B8] hover:border-white/[0.12]'
    }`} style={active && color ? { borderColor: color, color: color, background: `${color}18` } : {}}>
      {label}
    </button>
  );

  return (
    <div className="page pt-[88px] pb-20 w-full overflow-hidden">
      <Helmet>
        <title>Browse Games — AntiGravity Games</title>
        <meta name="description" content="Browse all games. Filter by genre, platform, and price." />
      </Helmet>

      <div className="container">
        {/* Header */}
        <div className="mb-8">
          <div className="section-label mb-2">Library</div>
          <h1 className="font-[var(--font-head)] font-extrabold text-[clamp(1.8rem,4vw,2.8rem)] tracking-tight mb-2 text-white">
            Browse All Games
          </h1>
          <p className="text-[#94A3B8]">{pagination.total || '18+'} games across all genres and platforms.</p>
        </div>

        {/* Search + Filter Toggle */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6 flex-wrap">
          <div className="relative flex-1 min-w-[220px]">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#475569] pointer-events-none" />
            <input value={q} onChange={e => { setQ(e.target.value); setPage(1); }} placeholder="Search by title, genre, tag..." className="input pl-10 h-11 w-full" style={{ paddingRight: q ? '38px' : '14px' }} />
            {q && <button onClick={() => setQ('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#596577] hover:text-white"><X size={14} /></button>}
          </div>

          <div className="relative w-full sm:w-auto">
            <select value={sort} onChange={e => { setSort(e.target.value); setPage(1); }} className="input select h-11 pr-9 w-full sm:w-auto min-w-[140px]">
              {SORTS.map(s => <option key={s.v} value={s.v}>{s.l}</option>)}
            </select>
          </div>

          <button onClick={() => setSideOpen(!sideOpen)} className={`btn btn-ghost h-11 gap-1.5 border-[1.5px] w-full sm:w-auto ${sideOpen ? 'border-[#7C3AED] text-[#7C3AED] bg-[#7C3AED]/5' : 'border-white/[0.06] text-[#94A3B8]'}`}>
            <SlidersHorizontal size={16} /> Filters
            <ChevronDown size={14} className={`transition-transform duration-200 ${sideOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Filter panel */}
        {sideOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            className="bg-[#111827] border border-white/[0.06] rounded-xl p-5 mb-6 overflow-hidden">
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-[0.72rem] font-bold tracking-widest uppercase text-[#475569] mb-2.5">Genre</p>
                <div className="flex flex-wrap gap-2">
                  {GENRES.map(g => <FilterPill key={g} label={g} active={genre === g} onClick={() => { setGenre(g); setPage(1); }} />)}
                </div>
              </div>
              <div>
                <p className="text-[0.72rem] font-bold tracking-widest uppercase text-[#596577] mb-2.5">Platform</p>
                <div className="flex flex-wrap gap-2">
                  {PLATFORMS.map(p => <FilterPill key={p} label={p} active={plat === p} onClick={() => { setPlat(p); setPage(1); }} />)}
                </div>
              </div>
              <div className="flex items-center gap-2.5 pt-2">
                <div className={`toggle ${free ? 'on' : ''}`} onClick={() => { setFree(!free); setPage(1); }} />
                <span className="text-sm font-semibold text-[#94A3B8]">Free Games Only</span>
              </div>
            </div>
          </motion.div>
        )}

        {/* Search info */}
        {isSearching && !searchLoading && (
          <p className="text-sm text-[#475569] mb-5">
            {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} for "{q}"
          </p>
        )}

        {/* Grid */}
        <div className="game-grid">
          {(loading || searchLoading)
            ? Array(12).fill(0).map((_, i) => <SkeletonCard key={i} />)
            : display.length === 0
              ? (
                <div className="col-span-full text-center py-20 text-[#475569]">
                  <Search size={40} className="mx-auto mb-4 opacity-30" />
                  <p className="text-[1.1rem] font-semibold mb-2 text-white">No games found</p>
                  <p className="text-sm">Try adjusting your filters or search term.</p>
                </div>
              )
              : display.map(g => <GameCard key={g._id} game={g} />)
          }
        </div>

        {/* Pagination */}
        {!isSearching && pagination.pages > 1 && (
          <div className="flex justify-center flex-wrap gap-2 mt-12">
            {Array.from({ length: pagination.pages }, (_, i) => i + 1).map(p => (
              <button key={p} onClick={() => { setPage(p); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className={`w-10 h-10 rounded-lg font-bold text-sm flex items-center justify-center transition-all ${
                  p === page ? 'bg-[#7C3AED] text-white shadow-[0_0_16px_rgba(124,58,237,0.35)]' : 'bg-[#111827] text-[#94A3B8] border border-white/[0.06] hover:bg-white/5'
                }`}>
                {p}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
