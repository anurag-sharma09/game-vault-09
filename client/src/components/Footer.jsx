import { Link } from 'react-router-dom';
import { GiGamepad } from 'react-icons/gi';
import { FiGithub, FiTwitter, FiYoutube } from 'react-icons/fi';

const GENRES = ['Action', 'RPG', 'Shooter', 'Strategy', 'Sports', 'Horror', 'Puzzle', 'Adventure'];

export default function Footer() {
  return (
    <footer style={{ background: '#080B14', borderTop: '1px solid #1F2D45', marginTop: '5rem', padding: '3rem 1.5rem 1.5rem' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2.5rem', marginBottom: '2.5rem' }}>
          
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <div style={{ background: 'linear-gradient(135deg, #8B5CF6, #06B6D4)', borderRadius: '8px', padding: '6px', display: 'flex' }}>
                <GiGamepad size={18} color="white" />
              </div>
              <span style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '1.3rem', background: 'linear-gradient(135deg, #8B5CF6, #06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>GameVault</span>
            </div>
            <p style={{ color: '#6B7280', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '1rem' }}>
              Discover, explore, and get redirected to official sources for your favorite games. We never host game files.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {[FiGithub, FiTwitter, FiYoutube].map((Icon, i) => (
                <a key={i} href="#" style={{ color: '#4B5563', background: '#111827', padding: '8px', borderRadius: '8px', display: 'flex', transition: 'color 0.2s, background 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.color='#8B5CF6'; e.currentTarget.style.background='rgba(139,92,246,0.1)'; }}
                  onMouseLeave={e => { e.currentTarget.style.color='#4B5563'; e.currentTarget.style.background='#111827'; }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, color: '#F9FAFB', marginBottom: '1rem', fontSize: '1rem', letterSpacing: '0.05em' }}>CATEGORIES</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {GENRES.map(g => (
                <Link key={g} to={`/category/${g.toLowerCase()}`}
                  style={{ color: '#6B7280', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color='#8B5CF6'}
                  onMouseLeave={e => e.target.style.color='#6B7280'}
                >
                  {g}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, color: '#F9FAFB', marginBottom: '1rem', fontSize: '1rem', letterSpacing: '0.05em' }}>QUICK LINKS</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[['Free Games', '/category/free'], ['Trending', '/'], ['Low-End PC', '/category/low-end'], ['Mobile Games', '/category/mobile'], ['Admin Panel', '/admin/login']].map(([label, path]) => (
                <Link key={label} to={path}
                  style={{ color: '#6B7280', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color='#06B6D4'}
                  onMouseLeave={e => e.target.style.color='#6B7280'}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <div>
            <h4 style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, color: '#F9FAFB', marginBottom: '1rem', fontSize: '1rem', letterSpacing: '0.05em' }}>DISCLAIMER</h4>
            <p style={{ color: '#4B5563', fontSize: '0.8rem', lineHeight: 1.7 }}>
              GameVault does not host or distribute any game files. All "Download" buttons redirect users to official platforms like Steam, Epic Games, or Google Play Store. All trademarks belong to their respective owners.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid #1F2D45', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ color: '#4B5563', fontSize: '0.8rem' }}>© 2024 GameVault. Built with MERN Stack.</p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            {['Privacy', 'Terms', 'Contact'].map(item => (
              <a key={item} href="#" style={{ color: '#4B5563', textDecoration: 'none', fontSize: '0.8rem', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color='#9CA3AF'}
                onMouseLeave={e => e.target.style.color='#4B5563'}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
