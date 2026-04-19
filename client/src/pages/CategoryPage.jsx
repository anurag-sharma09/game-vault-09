import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useGame } from '../context/GameContext';
import GameCard from '../components/GameCard';
import SkeletonCard from '../components/SkeletonCard';
import FilterBar from '../components/FilterBar';

// Map URL slug → display name and genre filter value
const GENRE_MAP = {
  action: 'Action', rpg: 'RPG', shooter: 'Shooter', strategy: 'Strategy',
  sports: 'Sports', horror: 'Horror', puzzle: 'Puzzle', adventure: 'Adventure',
  simulation: 'Simulation', racing: 'Racing', fighting: 'Fighting',
  moba: 'MOBA', 'battle-royale': 'Battle Royale', indie: 'Indie',
  'open-world': '',
  free: '', 'low-end': '', mobile: '',
};

const TAG_MAP = { 'low-end': 'low-end', 'open-world': 'open-world', free: '', mobile: '' };
const PLATFORM_MAP = { mobile: 'Mobile' };
const FREE_MAP = { free: 'true' };

export default function CategoryPage() {
  const { category } = useParams();
  const { games, loading, pagination, loadGames, setFilters, filters } = useGame();
  const [page, setPage] = useState(1);

  const genreLabel = GENRE_MAP[category] || '';
  const tag        = TAG_MAP[category] || '';
  const platform   = PLATFORM_MAP[category] || '';
  const isFree     = FREE_MAP[category] || '';

  const displayName = category === 'low-end' ? 'Low-End PC Games'
    : category === 'free' ? 'Free Games'
    : category === 'mobile' ? 'Mobile Games'
    : category === 'open-world' ? 'Open World Games'
    : (genreLabel || (category.charAt(0).toUpperCase() + category.slice(1))) + ' Games';

  useEffect(() => {
    const newFilters = { genre: genreLabel, platform, isFree, tag, sort: filters.sort };
    setFilters(newFilters);
    loadGames({ ...newFilters, page: 1 });
    setPage(1);
  }, [category]);

  const handleFilterChange = (changed) => {
    const updated = { ...filters, ...changed };
    setFilters(updated);
    loadGames({ ...updated, page: 1 });
    setPage(1);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
    loadGames({ page: newPage });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Helmet>
        <title>{displayName} — GameVault</title>
        <meta name="description" content={`Browse ${displayName} with official download links to Steam, Epic Games, Play Store, and more.`} />
      </Helmet>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '2rem 1.5rem' }}>
        {/* Page Header */}
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
            <div style={{ width: '4px', height: '32px', background: 'linear-gradient(180deg, #8B5CF6, #06B6D4)', borderRadius: '2px' }} />
            <h1 style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700, color: '#F9FAFB' }}>{displayName}</h1>
          </div>
          {pagination.total > 0 && (
            <p style={{ color: '#6B7280', fontSize: '0.9rem', marginLeft: '1rem' }}>
              Showing {games.length} of {pagination.total} games
            </p>
          )}
        </div>

        <FilterBar filters={filters} onChange={handleFilterChange} />

        {/* Grid */}
        {loading ? (
          <div className="games-grid">{Array(12).fill(0).map((_, i) => <SkeletonCard key={i} />)}</div>
        ) : games.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '5rem 1.5rem' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎮</div>
            <h2 style={{ fontFamily: 'Rajdhani', fontSize: '1.5rem', marginBottom: '0.5rem' }}>No games found</h2>
            <p style={{ color: '#6B7280' }}>Try adjusting your filters.</p>
          </div>
        ) : (
          <div className="games-grid">{games.map(g => <GameCard key={g._id} game={g} />)}</div>
        )}

        {/* Pagination */}
        {pagination.pages > 1 && (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', marginTop: '3rem', flexWrap: 'wrap' }}>
            <button onClick={() => handlePageChange(page - 1)} disabled={page === 1}
              style={{ background: '#111827', border: '1px solid #1F2D45', borderRadius: '8px', padding: '0.5rem 1rem', color: page === 1 ? '#4B5563' : '#D1D5DB', cursor: page === 1 ? 'not-allowed' : 'pointer', fontSize: '0.85rem' }}>
              ← Prev
            </button>
            {Array.from({ length: Math.min(7, pagination.pages) }, (_, i) => {
              const pg = i + 1;
              return (
                <button key={pg} onClick={() => handlePageChange(pg)}
                  style={{ background: pg === page ? '#8B5CF6' : '#111827', border: `1px solid ${pg === page ? '#8B5CF6' : '#1F2D45'}`, borderRadius: '8px', padding: '0.5rem 0.875rem', color: pg === page ? '#fff' : '#D1D5DB', cursor: 'pointer', fontSize: '0.85rem', minWidth: '40px', fontWeight: pg === page ? 700 : 400 }}>
                  {pg}
                </button>
              );
            })}
            <button onClick={() => handlePageChange(page + 1)} disabled={page === pagination.pages}
              style={{ background: '#111827', border: '1px solid #1F2D45', borderRadius: '8px', padding: '0.5rem 1rem', color: page === pagination.pages ? '#4B5563' : '#D1D5DB', cursor: page === pagination.pages ? 'not-allowed' : 'pointer', fontSize: '0.85rem' }}>
              Next →
            </button>
          </div>
        )}
      </div>
    </>
  );
}
