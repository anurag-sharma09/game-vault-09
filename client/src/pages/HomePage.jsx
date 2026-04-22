import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FiTrendingUp, FiGift, FiCpu, FiArrowRight, FiStar } from 'react-icons/fi';
import { GiGamepad } from 'react-icons/gi';
import { useGame } from '../context/GameContext';
import GameCard from '../components/GameCard';
import SkeletonCard from '../components/SkeletonCard';

const CATEGORIES = [
  { name: 'Action',      emoji: '⚔️',  color: '#EF4444' },
  { name: 'RPG',         emoji: '🧙',  color: '#8B5CF6' },
  { name: 'Shooter',     emoji: '🎯',  color: '#06B6D4' },
  { name: 'Strategy',    emoji: '♟️',  color: '#F59E0B' },
  { name: 'Sports',      emoji: '⚽',  color: '#10B981' },
  { name: 'Horror',      emoji: '👻',  color: '#6366F1' },
  { name: 'Puzzle',      emoji: '🧩',  color: '#EC4899' },
  { name: 'Adventure',   emoji: '🗺️',  color: '#F97316' },
  { name: 'Simulation',  emoji: '🏗️',  color: '#14B8A6' },
  { name: 'MOBA',        emoji: '🏆',  color: '#A3E635' },
  { name: 'Battle Royale', emoji: '🪂', color: '#FB923C' },
  { name: 'Racing',       emoji: '🏎️',  color: '#F87171' },
  { name: 'Open World',   emoji: '🌍',  color: '#34D399' },
  { name: 'Indie',        emoji: '🎨',  color: '#C084FC' },
];

const SectionHeader = ({ icon: Icon, title, subtitle, color = '#8B5CF6', viewAllLink }) => (
  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
      <div style={{ width: '4px', height: '32px', background: `linear-gradient(180deg, ${color}, transparent)`, borderRadius: '2px' }} />
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Icon size={20} color={color} />
          <h2 style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '1.5rem', fontWeight: 700, color: '#F9FAFB' }}>{title}</h2>
        </div>
        {subtitle && <p style={{ color: '#6B7280', fontSize: '0.82rem', marginTop: '2px' }}>{subtitle}</p>}
      </div>
    </div>
    {viewAllLink && (
      <Link to={viewAllLink} style={{ display: 'flex', alignItems: 'center', gap: '4px', color: color, textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500, padding: '0.35rem 0.75rem', border: `1px solid ${color}30`, borderRadius: '6px', transition: 'background 0.2s' }}>
        View All <FiArrowRight size={14} />
      </Link>
    )}
  </div>
);

const GameRow = ({ games, loading }) => {
  if (loading) return <div className="games-grid">{Array(8).fill(0).map((_, i) => <SkeletonCard key={i} />)}</div>;
  if (!games?.length) return <p style={{ color: '#4B5563', textAlign: 'center', padding: '2rem' }}>No games found.</p>;
  return <div className="games-grid">{games.map(g => <GameCard key={g._id} game={g} />)}</div>;
};

export default function HomePage() {
  const { trending, freeGames, lowEndGames, loading, loadHomepageData } = useGame();

  useEffect(() => {
    loadHomepageData();
  }, []);

  return (
    <>
      <Helmet>
        <title>GameVault — Discover & Download Games</title>
        <meta name="description" content="Explore trending, free, and low-end PC games. Get redirected to official sources like Steam, Epic Games, and Google Play." />
      </Helmet>

      {/* ── Hero Section ──────────────────────────── */}
      <section className="hero-bg" style={{ padding: '5rem 1.5rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        {/* Glow blobs */}
        <div style={{ position: 'absolute', top: '-100px', left: '15%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-80px', right: '15%', width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ position: 'relative', maxWidth: '720px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.3)', borderRadius: '20px', padding: '0.4rem 1rem', marginBottom: '1.5rem', fontSize: '0.82rem', color: '#a78bfa' }}>
            <GiGamepad size={14} /> 30+ Games Available • Official Links Only
          </div>
          <h1 style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 700, lineHeight: 1.1, marginBottom: '1.25rem' }}>
            Discover Your Next{' '}
            <span className="gradient-text">Epic Game</span>
          </h1>
          <p style={{ color: '#9CA3AF', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2rem', maxWidth: '560px', margin: '0 auto 2rem' }}>
            Browse trending, free, and low-end PC games. Every download redirects to the official source — Steam, Epic Games, Play Store, and more.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/category/action" className="btn-primary" style={{ fontSize: '1rem', padding: '0.75rem 2rem' }}>
              <GiGamepad size={18} /> Browse Games
            </Link>
            <Link to="/category/free" className="btn-secondary" style={{ fontSize: '1rem', padding: '0.75rem 2rem' }}>
              <FiGift size={16} /> Free Games
            </Link>
          </div>

          {/* Stats */}
          <div style={{ display: 'flex', gap: '2.5rem', justifyContent: 'center', marginTop: '3rem', flexWrap: 'wrap' }}>
            {[['30+', 'Games Listed'], ['5+', 'Platforms'], ['100%', 'Official Links'], ['Free', 'No Account Needed']].map(([val, label]) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '1.6rem', fontWeight: 700, color: '#8B5CF6' }}>{val}</div>
                <div style={{ color: '#6B7280', fontSize: '0.78rem' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '3rem 1.5rem' }}>

        {/* ── Categories ───────────────────────────── */}
        <section style={{ marginBottom: '4rem' }}>
          <SectionHeader icon={GiGamepad} title="Browse by Genre" color="#8B5CF6" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '0.75rem' }}>
            {CATEGORIES.map(({ name, emoji, color }) => (
              <Link key={name} to={`/category/${name.toLowerCase().replace(' ', '-')}`}
                style={{ textDecoration: 'none', background: '#111827', border: '1px solid #1F2D45', borderRadius: '10px', padding: '1rem 0.75rem', textAlign: 'center', transition: 'all 0.25s ease', display: 'block' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = color; e.currentTarget.style.background = `${color}15`; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#1F2D45'; e.currentTarget.style.background = '#111827'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <div style={{ fontSize: '1.75rem', marginBottom: '0.4rem' }}>{emoji}</div>
                <div style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600, fontSize: '0.9rem', color: '#D1D5DB' }}>{name}</div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Trending ─────────────────────────────── */}
        <section style={{ marginBottom: '4rem' }}>
          <SectionHeader icon={FiTrendingUp} title="Trending Now" subtitle="Most viewed and highest rated games" color="#F97316" viewAllLink="/category/action" />
          <GameRow games={trending} loading={loading && !trending.length} />
        </section>

        {/* ── Free Games ───────────────────────────── */}
        <section style={{ marginBottom: '4rem' }}>
          <SectionHeader icon={FiGift} title="Free to Play" subtitle="Top free games — no purchase required" color="#10B981" viewAllLink="/category/free" />
          <GameRow games={freeGames} loading={loading && !freeGames.length} />
        </section>

        {/* ── Low-End PC ───────────────────────────── */}
        <section style={{ marginBottom: '4rem' }}>
          <SectionHeader icon={FiCpu} title="Low-End PC Games" subtitle="Runs on almost any computer" color="#06B6D4" viewAllLink="/category/low-end" />
          <GameRow games={lowEndGames} loading={loading && !lowEndGames.length} />
        </section>

        {/* ── CTA Banner ───────────────────────────── */}
        <section style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.15), rgba(6,182,212,0.1))', border: '1px solid rgba(139,92,246,0.2)', borderRadius: '16px', padding: '3rem 2rem', textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
            <FiStar size={32} color="#8B5CF6" />
          </div>
          <h2 style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '2rem', fontWeight: 700, marginBottom: '0.75rem' }}>Want to manage game listings?</h2>
          <p style={{ color: '#9CA3AF', marginBottom: '1.5rem', fontSize: '0.95rem' }}>Admin panel lets you add, edit, and remove games. Requires login.</p>
          <Link to="/admin/login" className="btn-primary" style={{ fontSize: '1rem', padding: '0.75rem 2rem' }}>
            Go to Admin Panel
          </Link>
        </section>
      </div>
    </>
  );
}
