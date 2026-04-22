import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FiSearch } from 'react-icons/fi';
import { useGame } from '../context/GameContext';
import GameCard from '../components/GameCard';
import SkeletonCard from '../components/SkeletonCard';

export default function SearchResultsPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const { searchResults, searchLoading, search } = useGame();

  useEffect(() => {
    if (query) search(query);
  }, [query]);

  return (
    <>
      <Helmet>
        <title>Search: "{query}" — GameVault</title>
        <meta name="description" content={`Search results for "${query}" on GameVault`} />
      </Helmet>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '2rem 1.5rem' }}>
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
            <div style={{ width: '4px', height: '32px', background: 'linear-gradient(180deg, #8B5CF6, #06B6D4)', borderRadius: '2px' }} />
            <h1 style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: 700, color: '#F9FAFB' }}>
              Search: <span className="gradient-text">"{query}"</span>
            </h1>
          </div>
          {!searchLoading && (
            <p style={{ color: '#6B7280', fontSize: '0.9rem', marginLeft: '1rem' }}>
              {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} found
            </p>
          )}
        </div>

        {searchLoading ? (
          <div className="games-grid">{Array(8).fill(0).map((_, i) => <SkeletonCard key={i} />)}</div>
        ) : searchResults.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '5rem 1.5rem' }}>
            <FiSearch size={50} color="#4B5563" style={{ marginBottom: '1rem' }} />
            <h2 style={{ fontFamily: 'Rajdhani', fontSize: '1.75rem', marginBottom: '0.75rem' }}>No results for "{query}"</h2>
            <p style={{ color: '#6B7280', lineHeight: 1.6 }}>
              Try a different spelling or browse by{' '}
              <a href="/category/action" style={{ color: '#8B5CF6' }}>category</a>.
            </p>
          </div>
        ) : (
          <div className="games-grid">{searchResults.map(g => <GameCard key={g._id} game={g} />)}</div>
        )}
      </div>
    </>
  );
}
