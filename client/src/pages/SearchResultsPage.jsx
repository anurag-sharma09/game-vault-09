import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Search } from 'lucide-react';
import { useGame } from '../context/GameContext';
import GameCard from '../components/GameCard';
import SkeletonCard from '../components/SkeletonCard';

export default function SearchResultsPage() {
  const [sp] = useSearchParams();
  const q = sp.get('q') || '';
  const { search, searchResults, searchLoading } = useGame();

  useEffect(() => { if (q) search(q); }, [q]);

  return (
    <div className="page" style={{ paddingTop: '88px', paddingBottom: '4rem' }}>
      <Helmet>
        <title>Search: {q} — AntiGravity Games</title>
      </Helmet>
      <div className="container">
        <div style={{ marginBottom: '2rem' }}>
          <div className="section-label">Search Results</div>
          <h1 style={{ fontFamily: 'var(--font-head)', fontWeight: 800, fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', letterSpacing: '-0.03em', marginTop: '0.5rem' }}>
            Results for "<span style={{ color: 'var(--accent)' }}>{q}</span>"
          </h1>
          {!searchLoading && (
            <p style={{ color: 'var(--text-3)', marginTop: '0.375rem', fontSize: '0.875rem' }}>
              {searchResults.length} game{searchResults.length !== 1 ? 's' : ''} found
            </p>
          )}
        </div>

        <div className="game-grid">
          {searchLoading
            ? Array(6).fill(0).map((_, i) => <SkeletonCard key={i} />)
            : searchResults.length === 0
              ? (
                <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '6rem 0', color: 'var(--text-3)' }}>
                  <Search size={48} style={{ margin: '0 auto 1rem', opacity: 0.2 }} />
                  <p style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>No results for "{q}"</p>
                  <p style={{ fontSize: '0.875rem' }}>Try a different keyword or browse by category.</p>
                </div>
              )
              : searchResults.map(g => <GameCard key={g._id} game={g} />)
          }
        </div>
      </div>
    </div>
  );
}
