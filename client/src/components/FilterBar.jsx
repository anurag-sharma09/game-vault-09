/** FilterBar — platform, genre, free/paid, and sort controls */
export default function FilterBar({ filters, onChange }) {
  const genres    = ['', 'Action', 'RPG', 'Shooter', 'Strategy', 'Sports', 'Horror', 'Puzzle', 'Adventure', 'Simulation', 'Racing', 'Fighting', 'MOBA', 'Battle Royale', 'Indie'];
  const platforms = ['', 'PC', 'Mobile', 'Console', 'Cross-Platform'];
  const sorts     = [{ value: 'rating', label: 'Top Rated' }, { value: 'views', label: 'Most Popular' }, { value: 'newest', label: 'Newest' }, { value: 'title', label: 'A–Z' }];

  const selectStyle = {
    background: '#1A2235', border: '1px solid #1F2D45', borderRadius: '8px',
    color: '#D1D5DB', padding: '0.5rem 0.75rem', fontSize: '0.85rem',
    fontFamily: 'Inter, sans-serif', cursor: 'pointer', outline: 'none',
    transition: 'border-color 0.2s',
  };

  return (
    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center', padding: '1rem 0', marginBottom: '1rem' }}>
      <span style={{ color: '#6B7280', fontSize: '0.85rem', fontWeight: 500, flexShrink: 0 }}>Filter:</span>

      <select id="filter-genre" style={selectStyle} value={filters.genre} onChange={e => onChange({ genre: e.target.value, page: 1 })}>
        {genres.map(g => <option key={g} value={g}>{g || 'All Genres'}</option>)}
      </select>

      <select id="filter-platform" style={selectStyle} value={filters.platform} onChange={e => onChange({ platform: e.target.value, page: 1 })}>
        {platforms.map(p => <option key={p} value={p}>{p || 'All Platforms'}</option>)}
      </select>

      <select id="filter-price" style={selectStyle} value={filters.isFree} onChange={e => onChange({ isFree: e.target.value, page: 1 })}>
        <option value="">Free & Paid</option>
        <option value="true">Free Only</option>
        <option value="false">Paid Only</option>
      </select>

      <select id="filter-sort" style={selectStyle} value={filters.sort} onChange={e => onChange({ sort: e.target.value, page: 1 })}>
        {sorts.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
      </select>

      {/* Active filter pills */}
      {(filters.genre || filters.platform || filters.isFree) && (
        <button
          onClick={() => onChange({ genre: '', platform: '', isFree: '', sort: 'rating', page: 1 })}
          style={{ background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.3)', color: '#EF4444', borderRadius: '20px', padding: '0.3rem 0.8rem', fontSize: '0.78rem', cursor: 'pointer', fontWeight: 500 }}
        >
          ✕ Clear Filters
        </button>
      )}
    </div>
  );
}
