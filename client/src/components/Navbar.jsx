import { useState, useCallback, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FiSearch, FiX, FiMenu, FiX as FiClose } from 'react-icons/fi';
import { GiGamepad } from 'react-icons/gi';
import { useGame } from '../context/GameContext';
import { useAuth } from '../context/AuthContext';

const CATEGORIES = ['Action', 'RPG', 'Shooter', 'Strategy', 'Sports', 'Horror', 'Puzzle', 'Adventure', 'Simulation', 'Racing', 'Fighting', 'MOBA', 'Battle Royale', 'Indie'];

export default function Navbar() {
  const [query, setQuery]       = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [catOpen, setCatOpen]   = useState(false);
  const navigate  = useNavigate();
  const location  = useLocation();
  const { search } = useGame();
  const { isAuthenticated, logout } = useAuth();
  const debounceRef = useRef(null);

  const handleSearch = useCallback((e) => {
    const val = e.target.value;
    setQuery(val);
    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      if (val.trim().length > 1) {
        search(val.trim());
        navigate(`/search?q=${encodeURIComponent(val.trim())}`);
      }
    }, 400);
  }, [search, navigate]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      search(query.trim());
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const clearSearch = () => {
    setQuery('');
  };

  return (
    <nav style={{ background: 'rgba(8,11,20,0.95)', backdropFilter: 'blur(12px)', borderBottom: '1px solid #1F2D45', position: 'sticky', top: 0, zIndex: 50 }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', height: '64px', gap: '1.5rem' }}>
        
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', flexShrink: 0 }}>
          <div style={{ background: 'linear-gradient(135deg, #8B5CF6, #06B6D4)', borderRadius: '8px', padding: '6px', display: 'flex' }}>
            <GiGamepad size={20} color="white" />
          </div>
          <span style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '1.4rem', background: 'linear-gradient(135deg, #8B5CF6, #06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            GameVault
          </span>
        </Link>

        {/* Search Bar */}
        <form onSubmit={handleSearchSubmit} style={{ flex: 1, maxWidth: '480px', position: 'relative' }}>
          <FiSearch style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#6B7280', pointerEvents: 'none' }} size={16} />
          <input
            id="navbar-search"
            type="text"
            value={query}
            onChange={handleSearch}
            placeholder="Search games..."
            className="input-dark"
            style={{ width: '100%', paddingLeft: '38px', paddingRight: query ? '36px' : '12px' }}
          />
          {query && (
            <button type="button" onClick={clearSearch} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: '#6B7280', cursor: 'pointer', padding: '2px', display: 'flex' }}>
              <FiX size={14} />
            </button>
          )}
        </form>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', marginLeft: 'auto' }} className="desktop-nav">
          <Link to="/" style={{ color: location.pathname === '/' ? '#8B5CF6' : '#9CA3AF', textDecoration: 'none', padding: '0.4rem 0.75rem', borderRadius: '6px', fontWeight: 500, fontSize: '0.9rem', transition: 'color 0.2s' }}>Home</Link>
          
          {/* Categories Dropdown */}
          <div style={{ position: 'relative' }}>
            <button onClick={() => setCatOpen(!catOpen)} style={{ color: '#9CA3AF', background: 'none', border: 'none', padding: '0.4rem 0.75rem', borderRadius: '6px', fontWeight: 500, fontSize: '0.9rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>
              Categories <span style={{ fontSize: '0.65rem' }}>{catOpen ? '▲' : '▼'}</span>
            </button>
            {catOpen && (
              <div style={{ position: 'absolute', top: '110%', left: 0, background: '#111827', border: '1px solid #1F2D45', borderRadius: '10px', padding: '0.5rem', minWidth: '200px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px', zIndex: 100, boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
                {CATEGORIES.map((cat) => (
                  <Link key={cat} to={`/category/${cat.toLowerCase().replace(' ', '-')}`} onClick={() => setCatOpen(false)}
                    style={{ color: '#D1D5DB', textDecoration: 'none', padding: '0.4rem 0.6rem', borderRadius: '6px', fontSize: '0.82rem', transition: 'background 0.2s, color 0.2s', whiteSpace: 'nowrap' }}
                    onMouseEnter={e => { e.target.style.background='rgba(139,92,246,0.15)'; e.target.style.color='#8B5CF6'; }}
                    onMouseLeave={e => { e.target.style.background='transparent'; e.target.style.color='#D1D5DB'; }}
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/category/free" style={{ color: '#10B981', textDecoration: 'none', padding: '0.3rem 0.75rem', borderRadius: '6px', fontWeight: 600, fontSize: '0.85rem', border: '1px solid rgba(16,185,129,0.3)', background: 'rgba(16,185,129,0.08)' }}>Free</Link>

          {isAuthenticated ? (
            <>
              <Link to="/admin" className="btn-primary" style={{ fontSize: '0.85rem', padding: '0.4rem 1rem' }}>Dashboard</Link>
              <button onClick={logout} style={{ color: '#EF4444', background: 'none', border: '1px solid rgba(239,68,68,0.3)', padding: '0.35rem 0.75rem', borderRadius: '6px', cursor: 'pointer', fontSize: '0.85rem' }}>Logout</button>
            </>
          ) : (
            <Link to="/admin/login" style={{ color: '#9CA3AF', textDecoration: 'none', padding: '0.4rem 0.75rem', fontSize: '0.85rem' }}>Admin</Link>
          )}
        </div>

        {/* Mobile menu toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: 'none', border: 'none', color: '#9CA3AF', cursor: 'pointer', marginLeft: 'auto', display: 'none' }} className="mobile-menu-btn">
          {menuOpen ? <FiClose size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ padding: '1rem 1.5rem', borderTop: '1px solid #1F2D45', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <Link to="/" onClick={() => setMenuOpen(false)} style={{ color: '#D1D5DB', textDecoration: 'none', padding: '0.6rem 0' }}>🏠 Home</Link>
          <Link to="/category/free" onClick={() => setMenuOpen(false)} style={{ color: '#10B981', textDecoration: 'none', padding: '0.6rem 0' }}>🆓 Free Games</Link>
          {CATEGORIES.map(cat => (
            <Link key={cat} to={`/category/${cat.toLowerCase().replace(' ', '-')}`} onClick={() => setMenuOpen(false)} style={{ color: '#9CA3AF', textDecoration: 'none', padding: '0.4rem 0', fontSize: '0.9rem' }}>• {cat}</Link>
          ))}
        </div>
      )}
    </nav>
  );
}
