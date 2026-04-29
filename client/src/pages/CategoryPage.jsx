import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useGame } from '../context/GameContext';
import GameCard from '../components/GameCard';
import SkeletonCard from '../components/SkeletonCard';

const GENRE_META = {
  action:       { label: 'Action',        emoji: '⚔️',  color: '#FF4757', desc: 'Fast-paced fights, explosions, and intense combat.' },
  rpg:          { label: 'RPG',           emoji: '🧙',  color: '#A89BFF', desc: 'Deep stories, character builds, and epic worlds.' },
  shooter:      { label: 'Shooter',       emoji: '🎯',  color: '#00E5FF', desc: 'Precision aim and competitive multiplayer action.' },
  strategy:     { label: 'Strategy',      emoji: '♟️',  color: '#00D68F', desc: 'Build, plan, and outsmart your opponents.' },
  sports:       { label: 'Sports',        emoji: '⚽',  color: '#FFD32A', desc: 'Football, basketball, racing and more.' },
  racing:       { label: 'Racing',        emoji: '🏎️', color: '#FF7A00', desc: 'High-speed thrills on every kind of track.' },
  indie:        { label: 'Indie',         emoji: '🎨',  color: '#FF6B9D', desc: 'Creative, unique experiences from indie developers.' },
  horror:       { label: 'Horror',        emoji: '👻',  color: '#778CA3', desc: 'Fear, tension, and heart-pounding survival.' },
  puzzle:       { label: 'Puzzle',        emoji: '🧩',  color: '#14B8A6', desc: 'Brainteasers, logic, and satisfying solutions.' },
  adventure:    { label: 'Adventure',     emoji: '🗺️', color: '#8B5CF6', desc: 'Explore vast worlds and discover great stories.' },
  simulation:   { label: 'Simulation',    emoji: '🏙️', color: '#84CC16', desc: 'Build, manage, and simulate everything.' },
  free:         { label: 'Free Games',    emoji: '🆓',  color: '#00D68F', desc: 'High-quality games that cost you nothing.' },
  multiplayer:  { label: 'Multiplayer',   emoji: '🎮',  color: '#6C5CE7', desc: 'Play with or against people around the world.' },
  'battle royale': { label: 'Battle Royale', emoji: '🏆', color: '#00B8D9', desc: 'Last one standing wins — drop in and survive.' },
};

export default function CategoryPage() {
  const { category } = useParams();
  const slug = category?.toLowerCase();
  const meta = GENRE_META[slug] || { label: category, emoji: '🎮', color: 'var(--primary)', desc: 'Browse games in this category.' };
  const { games, loading, loadGames } = useGame();

  useEffect(() => {
    if (slug === 'free') loadGames({ isFree: true });
    else if (slug === 'multiplayer') loadGames({ tag: 'multiplayer' });
    else {
      const MAP = { rpg: 'RPG', 'battle royale': 'Battle Royale' };
      const genre = MAP[slug] || (slug?.charAt(0).toUpperCase() + slug?.slice(1));
      loadGames({ genre });
    }
  }, [slug]);

  return (
    <div className="page pt-[88px] pb-16 w-full overflow-hidden">
      <Helmet>
        <title>{meta.label} Games — AntiGravity Games</title>
        <meta name="description" content={meta.desc} />
      </Helmet>

      <div className="container">
        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="rounded-3xl p-[clamp(1.5rem,4vw,3rem)] mb-10 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 border border-white/5"
          style={{
            background: `linear-gradient(135deg, ${meta.color}18 0%, transparent 70%)`,
            borderColor: `${meta.color}25`
          }}>
          <div className="text-[clamp(2.5rem,6vw,4rem)] shrink-0 leading-none">{meta.emoji}</div>
          <div>
            <h1 className="font-head font-extrabold text-[clamp(1.8rem,4vw,2.5rem)] tracking-tight mb-1.5 text-white">
              {meta.label}
            </h1>
            <p className="text-[#AAB3C5] text-base">{meta.desc}</p>
          </div>
        </motion.div>

        <p className="text-sm text-[#596577] mb-5 text-center sm:text-left">
          {loading ? 'Loading...' : `${games.length} game${games.length !== 1 ? 's' : ''} found`}
        </p>

        <div className="game-grid">
          {loading
            ? Array(8).fill(0).map((_, i) => <SkeletonCard key={i} />)
            : games.length === 0
              ? <div className="col-span-full text-center py-16 text-[#596577]">No games found in this category yet.</div>
              : games.map(g => <GameCard key={g._id} game={g} />)
          }
        </div>
      </div>
    </div>
  );
}
