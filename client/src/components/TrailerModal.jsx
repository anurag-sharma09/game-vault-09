import { motion, AnimatePresence } from 'framer-motion';
import { X, Film } from 'lucide-react';
import { useEffect } from 'react';

export default function TrailerModal({ game, onClose }) {
  useEffect(() => {
    const fn = e => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, [onClose]);

  return (
    <AnimatePresence>
      <div className="modal-backdrop" onClick={onClose} style={{ zIndex: 200 }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.93 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.93 }}
          transition={{ type: 'spring', damping: 24 }}
          onClick={e => e.stopPropagation()}
          style={{
            background: 'var(--card)', border: '1px solid var(--border-md)',
            borderRadius: 'var(--r-2xl)', overflow: 'hidden',
            width: '100%', maxWidth: '900px',
            boxShadow: '0 32px 80px rgba(0,0,0,0.8)',
          }}
        >
          {/* Header */}
          <div style={{ padding: '0.875rem 1.25rem', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Film size={16} color="var(--primary)" />
              <span style={{ fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: '0.95rem' }}>{game.title}</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-3)' }}>— Official Trailer</span>
            </div>
            <button onClick={onClose} style={{ color: 'var(--text-3)', padding: '4px', borderRadius: 'var(--r-sm)' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-3)'; e.currentTarget.style.background = 'none'; }}>
              <X size={18} />
            </button>
          </div>

          {/* Video */}
          <div style={{ position: 'relative', paddingTop: '56.25%', background: '#000' }}>
            <div style={{ position: 'absolute', inset: '30%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div className="spinner" />
            </div>
            <iframe
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none', zIndex: 1 }}
              src={`https://www.youtube.com/embed/${game.trailerUrl}?autoplay=1&rel=0&modestbranding=1&color=white`}
              title={`${game.title} Trailer`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
