import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Clock, Download, Settings, LogOut, Save, Edit2, Gamepad2, Star } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { updateProfile } from '../services/api';
import toast from 'react-hot-toast';

function StatCard({ icon: Icon, value, label, color }) {
  return (
    <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--r-xl)', padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <div style={{ width: '36px', height: '36px', borderRadius: 'var(--r-md)', background: `${color}18`, border: `1px solid ${color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Icon size={16} color={color} />
      </div>
      <div style={{ fontFamily: 'var(--font-head)', fontWeight: 800, fontSize: '1.6rem', lineHeight: 1 }}>{value}</div>
      <div style={{ fontSize: '0.78rem', color: 'var(--text-3)' }}>{label}</div>
    </div>
  );
}

function MiniGame({ game, sub }) {
  if (!game) return null;
  return (
    <Link to={`/game/${game._id || game}`}
      style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '0.75rem', background: 'var(--surface)', borderRadius: 'var(--r-lg)', border: '1px solid var(--border)', transition: 'border-color 0.15s', textDecoration: 'none' }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-md)'; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; }}>
      {game.imageUrl && <img src={game.imageUrl} alt="" style={{ width: '52px', height: '36px', borderRadius: 'var(--r-sm)', objectFit: 'cover', flexShrink: 0 }} />}
      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--text-1)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{game.title}</p>
        <p style={{ fontSize: '0.75rem', color: 'var(--text-3)' }}>{sub}</p>
      </div>
    </Link>
  );
}

const NAV_ITEMS = [
  { key: 'favorites',  label: 'Favorites',        icon: Heart },
  { key: 'recent',     label: 'Recently Played',   icon: Clock },
  { key: 'downloads',  label: 'Downloads',          icon: Download },
  { key: 'settings',   label: 'Settings',           icon: Settings },
];

export default function UserDashboard() {
  const { user, logout, refreshUser } = useAuth();
  const navigate = useNavigate();
  const [tab,  setTab]  = useState('favorites');
  const [edit, setEdit] = useState(false);
  const [form, setForm] = useState({ username: '', bio: '' });
  const [busy, setBusy] = useState(false);

  useEffect(() => { refreshUser(); }, []);
  useEffect(() => {
    if (user) setForm({ username: user.username || '', bio: user.bio || '' });
  }, [user]);

  const save = async () => {
    setBusy(true);
    try { await updateProfile(form); await refreshUser(); setEdit(false); toast.success('Profile saved!'); }
    catch (e) { toast.error(e.response?.data?.message || 'Failed'); }
    finally { setBusy(false); }
  };

  const initial = user?.username?.[0]?.toUpperCase() || 'U';

  return (
    <div className="page" style={{ paddingTop: '88px', paddingBottom: '4rem' }}>
      <Helmet><title>Dashboard — AntiGravity Games</title></Helmet>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '2rem' }} className="dash-grid">
          <style>{`@media(max-width:768px){.dash-grid{grid-template-columns:1fr;}}`}</style>

          {/* Sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {/* Profile card */}
            <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--r-2xl)', padding: '1.5rem', textAlign: 'center' }}>
              <div style={{
                width: '72px', height: '72px', borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--primary), var(--accent))',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 1rem', fontSize: '1.75rem', fontFamily: 'var(--font-head)', fontWeight: 800,
              }}>{initial}</div>
              <h2 style={{ fontFamily: 'var(--font-head)', fontWeight: 800, fontSize: '1.1rem', marginBottom: '2px' }}>{user?.username}</h2>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-3)', marginBottom: '0.5rem' }}>{user?.email}</p>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-2)' }}>{user?.bio || 'No bio yet'}</p>
            </div>

            {/* Nav */}
            <nav style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--r-2xl)', padding: '0.625rem' }}>
              {NAV_ITEMS.map(({ key, label, icon: Icon }) => (
                <button key={key} onClick={() => setTab(key)}
                  className={`sidebar-link ${tab === key ? 'active' : ''}`}
                  style={{ width: '100%' }}>
                  <Icon size={16} /> {label}
                </button>
              ))}
              <div style={{ borderTop: '1px solid var(--border)', marginTop: '0.375rem', paddingTop: '0.375rem' }}>
                <button onClick={() => { logout(); navigate('/'); }} className="sidebar-link" style={{ width: '100%', color: 'var(--red)' }}>
                  <LogOut size={16} /> Sign Out
                </button>
              </div>
            </nav>
          </div>

          {/* Main */}
          <div style={{ minWidth: 0 }}>
            {/* Stats row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '0.875rem', marginBottom: '2rem' }}>
              <StatCard icon={Heart}    value={user?.favorites?.length || 0}       label="Favorites"   color="var(--red)" />
              <StatCard icon={Clock}    value={user?.recentlyPlayed?.length || 0}   label="Played"      color="var(--accent)" />
              <StatCard icon={Download} value={user?.downloadHistory?.length || 0}  label="Downloads"   color="var(--green)" />
              <StatCard icon={Star}     value={user?.recentlyPlayed?.length ? '⭐' : '—'} label="Reviews" color="#FFD32A" />
            </div>

            <AnimatePresence mode="wait">
              {tab === 'favorites' && (
                <motion.div key="fav" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                  <h2 style={{ fontFamily: 'var(--font-head)', fontWeight: 700, marginBottom: '1.25rem' }}>Favorites</h2>
                  {!user?.favorites?.length
                    ? <p style={{ color: 'var(--text-3)', padding: '3rem 0', textAlign: 'center' }}>No favorites yet. Click ♥ on any game!</p>
                    : <div style={{ display: 'grid', gap: '0.625rem' }}>
                        {user.favorites.map(g => <MiniGame key={g._id} game={g} sub={`${g.genre} · ${g.isFree ? 'Free' : g.price}`} />)}
                      </div>
                  }
                </motion.div>
              )}

              {tab === 'recent' && (
                <motion.div key="rec" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                  <h2 style={{ fontFamily: 'var(--font-head)', fontWeight: 700, marginBottom: '1.25rem' }}>Recently Played</h2>
                  {!user?.recentlyPlayed?.length
                    ? <p style={{ color: 'var(--text-3)', padding: '3rem 0', textAlign: 'center' }}>No play history yet.</p>
                    : <div style={{ display: 'grid', gap: '0.625rem' }}>
                        {user.recentlyPlayed.map((e, i) => (
                          <MiniGame key={i} game={e.game} sub={`Played ${new Date(e.playedAt).toLocaleDateString()}`} />
                        ))}
                      </div>
                  }
                </motion.div>
              )}

              {tab === 'downloads' && (
                <motion.div key="dl" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                  <h2 style={{ fontFamily: 'var(--font-head)', fontWeight: 700, marginBottom: '1.25rem' }}>Download History</h2>
                  {!user?.downloadHistory?.length
                    ? <p style={{ color: 'var(--text-3)', padding: '3rem 0', textAlign: 'center' }}>No downloads yet.</p>
                    : <div style={{ display: 'grid', gap: '0.625rem' }}>
                        {user.downloadHistory.map((e, i) => (
                          <MiniGame key={i} game={e.game} sub={`${e.platform?.toUpperCase()} · ${new Date(e.downloadedAt).toLocaleDateString()}`} />
                        ))}
                      </div>
                  }
                </motion.div>
              )}

              {tab === 'settings' && (
                <motion.div key="set" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                  <h2 style={{ fontFamily: 'var(--font-head)', fontWeight: 700, marginBottom: '1.25rem' }}>Profile Settings</h2>
                  <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--r-2xl)', padding: '1.75rem', maxWidth: '480px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div>
                      <label style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-3)', display: 'block', marginBottom: '6px' }}>Username</label>
                      <input value={form.username} onChange={e => setForm(f => ({ ...f, username: e.target.value }))}
                        disabled={!edit} className="input" />
                    </div>
                    <div>
                      <label style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-3)', display: 'block', marginBottom: '6px' }}>Bio</label>
                      <textarea value={form.bio} onChange={e => setForm(f => ({ ...f, bio: e.target.value }))}
                        disabled={!edit} className="input" rows={3} placeholder="Tell us about yourself..." />
                    </div>
                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                      {edit ? (
                        <>
                          <button onClick={save} disabled={busy} className="btn btn-primary btn-sm">
                            <Save size={14} /> {busy ? 'Saving...' : 'Save Changes'}
                          </button>
                          <button onClick={() => { setEdit(false); setForm({ username: user?.username || '', bio: user?.bio || '' }); }} className="btn btn-ghost btn-sm">Cancel</button>
                        </>
                      ) : (
                        <button onClick={() => setEdit(true)} className="btn btn-ghost btn-sm">
                          <Edit2 size={14} /> Edit Profile
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
