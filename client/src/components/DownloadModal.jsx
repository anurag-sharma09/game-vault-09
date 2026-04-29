import { motion, AnimatePresence } from 'framer-motion';
import { X, Monitor, Smartphone, Tablet, Gamepad2, Globe, ExternalLink } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { logDownload } from '../services/api';
import toast from 'react-hot-toast';
import { useState } from 'react';

const PLATFORMS = [
  { key: 'pc',      label: 'Windows / PC',    icon: Monitor,   color: '#00E5FF' },
  { key: 'android', label: 'Android',          icon: Smartphone,color: '#00D68F' },
  { key: 'ios',     label: 'iPhone / iOS',     icon: Tablet,    color: '#A89BFF' },
  { key: 'console', label: 'Console',           icon: Gamepad2,  color: '#FFD32A' },
  { key: 'browser', label: 'Play in Browser',  icon: Globe,     color: '#FF7A00' },
];

export default function DownloadModal({ game, onClose }) {
  const { isAuthenticated } = useAuth();
  const [busy, setBusy] = useState(false);

  const available = PLATFORMS.filter(p => {
    if (p.key === 'browser') return !!game.playUrl;
    return !!(game.downloadLinks?.[p.key] || game.officialDownloadLink);
  });

  const go = async (p) => {
    if (busy) return;
    setBusy(true);
    const url = p.key === 'browser'
      ? (game.playUrl || game.officialDownloadLink)
      : (game.downloadLinks?.[p.key] || game.officialDownloadLink);

    if (!url) { toast.error(`No ${p.label} link available`); setBusy(false); return; }
    if (isAuthenticated) { try { await logDownload(game._id, p.key); } catch (_) {} }
    toast.success(`Opening ${p.label}...`);
    setTimeout(() => { window.open(url, '_blank', 'noopener'); onClose(); setBusy(false); }, 350);
  };

  return (
    <AnimatePresence>
      <div className="modal-backdrop" onClick={onClose} style={{ zIndex: 200 }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ type: 'spring', damping: 22, stiffness: 280 }}
          onClick={e => e.stopPropagation()}
          style={{
            background: 'var(--card)', border: '1px solid var(--border-md)',
            borderRadius: 'var(--r-2xl)', width: '100%', maxWidth: '440px',
            boxShadow: '0 24px 64px rgba(0,0,0,0.7)',
          }}
        >
          {/* Header */}
          <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img src={game.imageUrl} alt="" style={{ width: '48px', height: '48px', objectFit: 'cover', borderRadius: 'var(--r-md)' }} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ fontSize: '0.7rem', color: 'var(--accent)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '2px' }}>Choose Platform</p>
              <h3 style={{ fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: '1rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{game.title}</h3>
            </div>
            <button onClick={onClose} style={{ color: 'var(--text-3)', padding: '4px', borderRadius: 'var(--r-sm)' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-3)'; e.currentTarget.style.background = 'none'; }}>
              <X size={18} />
            </button>
          </div>

          {/* Platform list */}
          <div style={{ padding: '1rem 1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {available.length === 0 ? (
              <p style={{ textAlign: 'center', color: 'var(--text-3)', padding: '2rem 0', fontSize: '0.875rem' }}>No links available yet.</p>
            ) : available.map(p => {
              const Icon = p.icon;
              return (
                <motion.button
                  key={p.key}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => go(p)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '14px',
                    padding: '0.875rem 1rem', borderRadius: 'var(--r-lg)',
                    background: `${p.color}0D`, border: `1px solid ${p.color}20`,
                    transition: 'all 0.15s', textAlign: 'left', width: '100%',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = `${p.color}18`; e.currentTarget.style.borderColor = `${p.color}40`; }}
                  onMouseLeave={e => { e.currentTarget.style.background = `${p.color}0D`; e.currentTarget.style.borderColor = `${p.color}20`; }}
                >
                  <div style={{ width: '38px', height: '38px', borderRadius: 'var(--r-md)', background: `${p.color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={18} color={p.color} />
                  </div>
                  <span style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-1)', flex: 1 }}>{p.label}</span>
                  <ExternalLink size={14} color="var(--text-3)" />
                </motion.button>
              );
            })}
          </div>

          <div style={{ padding: '0.75rem 1.5rem 1.25rem', borderTop: '1px solid var(--border)' }}>
            <p style={{ fontSize: '0.72rem', color: 'var(--text-3)', textAlign: 'center' }}>
              You'll be redirected to the official source. No files hosted here.
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
