import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Edit3, Trash2, Search, Shield, LogOut, Save, X, Gamepad2, TrendingUp, Gift, Star } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { fetchGames, createGame, updateGame, deleteGame } from '../services/api';
import toast from 'react-hot-toast';

const EMPTY = {
  title:'', description:'', genre:'Action', platform:[], imageUrl:'', bannerUrl:'', rating:8.0,
  price:'Free', isFree:true, developer:'', publisher:'', releaseYear:new Date().getFullYear(),
  downloadSource:'Steam', officialDownloadLink:'',
  downloadLinks:{pc:'',android:'',ios:'',console:''},
  trailerUrl:'', playUrl:'', isBrowserPlayable:false, tags:'', isTrending:false,
  systemRequirements:{os:'Windows 10 64-bit',cpu:'Intel Core i5',ram:'8 GB',gpu:'NVIDIA GTX 1060',storage:'20 GB'},
};
const GENRES=['Action','RPG','Strategy','Sports','Horror','Puzzle','Adventure','Simulation','Racing','Fighting','Shooter','MOBA','Battle Royale','Indie'];
const PLATS=['PC','Mobile','Console','Cross-Platform','Browser'];
const SOURCES=['Steam','Epic Games','Play Store','App Store','GOG','Battle.net','Origin','Official Site','Xbox','PlayStation'];

function Field({ label, children }) {
  return (
    <div>
      <label style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-3)', display: 'block', marginBottom: '5px' }}>{label}</label>
      {children}
    </div>
  );
}

function In({ value, onChange, type='text', placeholder, min, max, step }) {
  return <input type={type} value={value} onChange={onChange} placeholder={placeholder} min={min} max={max} step={step} className="input" style={{ height: '38px' }} />;
}

export default function AdminDashboard() {
  const { admin, isAdmin, logout } = useAuth();
  const navigate = useNavigate();
  const [games, setGames]     = useState([]);
  const [loading, setLoading] = useState(true);
  const [q, setQ]             = useState('');
  const [view, setView]       = useState('list'); // 'list' | 'form'
  const [editing, setEditing] = useState(null);
  const [form, setForm]       = useState(EMPTY);
  const [busy, setBusy]       = useState(false);
  const [delId, setDelId]     = useState(null);

  useEffect(() => { if (!isAdmin) { navigate('/admin/login'); return; } load(); }, [isAdmin]);

  const load = async () => {
    setLoading(true);
    try { const r = await fetchGames({ limit: 100 }); setGames(r.data.data); }
    catch { toast.error('Failed to load'); }
    finally { setLoading(false); }
  };

  const openNew  = () => { setEditing(null); setForm(EMPTY); setView('form'); };
  const openEdit = g  => {
    setEditing(g);
    setForm({
      ...EMPTY, ...g,
      tags: g.tags?.join(', ') || '',
      downloadLinks: { pc:'', android:'', ios:'', console:'', ...g.downloadLinks },
      systemRequirements: { ...EMPTY.systemRequirements, ...g.systemRequirements },
    });
    setView('form');
  };

  const sf  = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const sdl = (k, v) => setForm(f => ({ ...f, downloadLinks: { ...f.downloadLinks, [k]: v } }));
  const ssr = (k, v) => setForm(f => ({ ...f, systemRequirements: { ...f.systemRequirements, [k]: v } }));
  const togglePlat = p => setForm(f => ({ ...f, platform: f.platform.includes(p) ? f.platform.filter(x => x !== p) : [...f.platform, p] }));

  const save = async () => {
    if (!form.title || !form.description || !form.imageUrl) { toast.error('Title, description, and image are required'); return; }
    setBusy(true);
    try {
      const payload = { ...form, tags: typeof form.tags === 'string' ? form.tags.split(',').map(t => t.trim()).filter(Boolean) : form.tags, rating: Number(form.rating), releaseYear: Number(form.releaseYear) };
      if (editing) { await updateGame(editing._id, payload); toast.success('Game updated!'); }
      else { await createGame(payload); toast.success('Game created!'); }
      load(); setView('list');
    } catch (e) { toast.error(e.response?.data?.message || 'Save failed'); }
    finally { setBusy(false); }
  };

  const del = async id => {
    try { await deleteGame(id); setGames(g => g.filter(x => x._id !== id)); setDelId(null); toast.success('Deleted'); }
    catch { toast.error('Delete failed'); }
  };

  const filtered = games.filter(g => g.title?.toLowerCase().includes(q.toLowerCase()));

  const stats = [
    { icon: Gamepad2,    label: 'Total Games',  value: games.length,                             color: 'var(--primary)' },
    { icon: Gift,        label: 'Free Games',   value: games.filter(g => g.isFree).length,       color: 'var(--green)' },
    { icon: TrendingUp,  label: 'Trending',     value: games.filter(g => g.isTrending).length,   color: 'var(--orange)' },
    { icon: Star,        label: 'Avg Rating',   value: games.length ? (games.reduce((s,g)=>s+(g.rating||0),0)/games.length).toFixed(1) : '—', color: '#FFD32A' },
  ];

  return (
    <div className="page" style={{ paddingTop: '84px', paddingBottom: '4rem' }}>
      <Helmet><title>Admin — AntiGravity Games</title></Helmet>

      <div className="container">
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: 'var(--r-lg)', background: 'linear-gradient(135deg, var(--primary), #9C89FF)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Shield size={20} color="white" />
            </div>
            <div>
              <h1 style={{ fontFamily: 'var(--font-head)', fontWeight: 800, fontSize: '1.5rem', letterSpacing: '-0.02em' }}>Admin Panel</h1>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-3)' }}>Logged in as <span style={{ color: 'var(--primary)' }}>{admin?.username}</span></p>
            </div>
          </div>
          <button onClick={() => { logout(); navigate('/'); }} className="btn btn-ghost btn-sm" style={{ color: 'var(--red)' }}>
            <LogOut size={14} /> Sign Out
          </button>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
          {stats.map(({ icon: Icon, label, value, color }) => (
            <div key={label} style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--r-xl)', padding: '1.25rem' }}>
              <Icon size={18} color={color} style={{ marginBottom: '8px' }} />
              <div style={{ fontFamily: 'var(--font-head)', fontWeight: 800, fontSize: '1.6rem', color }}>{value}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-3)', marginTop: '2px' }}>{label}</div>
            </div>
          ))}
        </div>

        {/* Action bar */}
        <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
          <button onClick={() => setView('list')} className={`btn ${view === 'list' ? 'btn-primary' : 'btn-ghost'} btn-sm`}>
            <Gamepad2 size={14} /> Manage Games
          </button>
          <button onClick={openNew} className={`btn ${view === 'form' && !editing ? 'btn-primary' : 'btn-ghost'} btn-sm`}>
            <Plus size={14} /> Add New Game
          </button>
        </div>

        <AnimatePresence mode="wait">
          {/* List view */}
          {view === 'list' && (
            <motion.div key="list" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div style={{ position: 'relative', maxWidth: '340px', marginBottom: '1rem' }}>
                <Search size={15} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-3)', pointerEvents: 'none' }} />
                <input value={q} onChange={e => setQ(e.target.value)} placeholder="Filter games..." className="input" style={{ paddingLeft: '38px', height: '38px' }} />
              </div>

              <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--r-xl)', overflow: 'hidden' }}>
                <div style={{ overflowX: 'auto' }}>
                  <table className="ag-table">
                    <thead>
                      <tr>
                        <th>Game</th>
                        <th className="hidden-sm">Genre</th>
                        <th className="hidden-sm">Rating</th>
                        <th className="hidden-sm">Price</th>
                        <th style={{ textAlign: 'right' }}>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <style>{`.hidden-sm{} @media(max-width:640px){.hidden-sm{display:none;}}`}</style>
                      {loading
                        ? Array(5).fill(0).map((_, i) => (
                            <tr key={i}><td colSpan={5}><div className="skeleton" style={{ height: '20px', margin: '0 0 4px' }} /></td></tr>
                          ))
                        : filtered.map(g => (
                            <tr key={g._id}>
                              <td>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                  <img src={g.imageUrl} alt="" style={{ width: '48px', height: '32px', objectFit: 'cover', borderRadius: 'var(--r-sm)', flexShrink: 0 }} />
                                  <span style={{ fontWeight: 600, fontSize: '0.875rem' }}>{g.title}</span>
                                </div>
                              </td>
                              <td className="hidden-sm" style={{ color: 'var(--text-3)' }}>{g.genre}</td>
                              <td className="hidden-sm" style={{ color: '#FFD32A', fontWeight: 600 }}>{g.rating}</td>
                              <td className="hidden-sm" style={{ color: g.isFree ? 'var(--green)' : 'var(--text-2)' }}>{g.isFree ? 'Free' : g.price}</td>
                              <td>
                                <div style={{ display: 'flex', gap: '6px', justifyContent: 'flex-end' }}>
                                  <button onClick={() => openEdit(g)} className="btn btn-ghost btn-icon btn-sm" data-tip="Edit">
                                    <Edit3 size={14} />
                                  </button>
                                  <button onClick={() => setDelId(g._id)} className="btn btn-ghost btn-icon btn-sm" style={{ color: 'var(--red)' }} data-tip="Delete">
                                    <Trash2 size={14} />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}

          {/* Form view */}
          {view === 'form' && (
            <motion.div key="form" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--r-2xl)', padding: 'clamp(1rem, 3vw, 2rem)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.75rem' }}>
                <h2 style={{ fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: '1.25rem' }}>{editing ? `Edit: ${editing.title}` : 'Add New Game'}</h2>
                <button onClick={() => setView('list')} style={{ color: 'var(--text-3)', padding: '4px', borderRadius: 'var(--r-sm)' }}><X size={20} /></button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem' }}>
                <Field label="Title *"><In value={form.title} onChange={e=>sf('title',e.target.value)} placeholder="Game title" /></Field>
                <Field label="Genre *">
                  <select value={form.genre} onChange={e=>sf('genre',e.target.value)} className="input select" style={{ height: '38px' }}>
                    {GENRES.map(g=><option key={g} value={g}>{g}</option>)}
                  </select>
                </Field>
                <Field label="Download Source *">
                  <select value={form.downloadSource} onChange={e=>sf('downloadSource',e.target.value)} className="input select" style={{ height: '38px' }}>
                    {SOURCES.map(s=><option key={s} value={s}>{s}</option>)}
                  </select>
                </Field>
                <Field label="Rating (0–10)"><In type="number" value={form.rating} onChange={e=>sf('rating',e.target.value)} min={0} max={10} step={0.1} /></Field>
                <Field label="Price"><In value={form.price} onChange={e=>sf('price',e.target.value)} placeholder="Free or $29.99" /></Field>
                <Field label="Release Year"><In type="number" value={form.releaseYear} onChange={e=>sf('releaseYear',e.target.value)} /></Field>
                <Field label="Developer"><In value={form.developer} onChange={e=>sf('developer',e.target.value)} /></Field>
                <Field label="Publisher"><In value={form.publisher} onChange={e=>sf('publisher',e.target.value)} /></Field>
                <Field label="Trailer YouTube ID"><In value={form.trailerUrl} onChange={e=>sf('trailerUrl',e.target.value)} placeholder="dQw4w9WgXcQ" /></Field>

                <div style={{ gridColumn: '1/-1' }}>
                  <Field label="Description *">
                    <textarea value={form.description} onChange={e=>sf('description',e.target.value)} className="input" rows={3} placeholder="Game description..." />
                  </Field>
                </div>
                <div style={{ gridColumn: '1/-1' }}>
                  <Field label="Image URL *"><In value={form.imageUrl} onChange={e=>sf('imageUrl',e.target.value)} placeholder="https://..." /></Field>
                </div>
                <Field label="Banner URL"><In value={form.bannerUrl} onChange={e=>sf('bannerUrl',e.target.value)} placeholder="https://..." /></Field>
                <Field label="Official Link"><In value={form.officialDownloadLink} onChange={e=>sf('officialDownloadLink',e.target.value)} placeholder="https://..." /></Field>
                <Field label="PC Download"><In value={form.downloadLinks.pc} onChange={e=>sdl('pc',e.target.value)} placeholder="https://..." /></Field>
                <Field label="Android Download"><In value={form.downloadLinks.android} onChange={e=>sdl('android',e.target.value)} placeholder="https://..." /></Field>
                <Field label="iOS Download"><In value={form.downloadLinks.ios} onChange={e=>sdl('ios',e.target.value)} placeholder="https://..." /></Field>
                <Field label="Console Link"><In value={form.downloadLinks.console} onChange={e=>sdl('console',e.target.value)} placeholder="https://..." /></Field>
                <Field label="Browser Play URL"><In value={form.playUrl} onChange={e=>sf('playUrl',e.target.value)} placeholder="https://..." /></Field>
                <Field label="OS"><In value={form.systemRequirements.os} onChange={e=>ssr('os',e.target.value)} /></Field>
                <Field label="CPU"><In value={form.systemRequirements.cpu} onChange={e=>ssr('cpu',e.target.value)} /></Field>
                <Field label="RAM"><In value={form.systemRequirements.ram} onChange={e=>ssr('ram',e.target.value)} /></Field>
                <Field label="GPU"><In value={form.systemRequirements.gpu} onChange={e=>ssr('gpu',e.target.value)} /></Field>
                <Field label="Storage"><In value={form.systemRequirements.storage} onChange={e=>ssr('storage',e.target.value)} /></Field>

                <div style={{ gridColumn: '1/-1' }}>
                  <Field label="Tags (comma separated)"><In value={form.tags} onChange={e=>sf('tags',e.target.value)} placeholder="multiplayer, open-world, free" /></Field>
                </div>

                <div style={{ gridColumn: '1/-1' }}>
                  <label style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-3)', display: 'block', marginBottom: '8px' }}>Platforms</label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {PLATS.map(p => (
                      <button key={p} type="button" onClick={() => togglePlat(p)} className={`btn ${form.platform.includes(p) ? 'btn-primary' : 'btn-ghost'} btn-sm`}>{p}</button>
                    ))}
                  </div>
                </div>

                <div style={{ gridColumn: '1/-1', display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
                  {[['isFree','Free Game'],['isTrending','Trending'],['isBrowserPlayable','Browser Playable']].map(([key, label]) => (
                    <label key={key} style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                      <div className={`toggle ${form[key] ? 'on' : ''}`} onClick={() => sf(key, !form[key])} />
                      <span style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-2)' }}>{label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div style={{ borderTop: '1px solid var(--border)', marginTop: '1.75rem', paddingTop: '1.25rem', display: 'flex', gap: '0.75rem' }}>
                <button onClick={save} disabled={busy} className="btn btn-primary" style={{ opacity: busy ? 0.7 : 1 }}>
                  {busy ? <div className="spinner" style={{ width: '16px', height: '16px', borderWidth: '2px', borderTopColor: '#fff' }} /> : <><Save size={15} /> {editing ? 'Save Changes' : 'Create Game'}</>}
                </button>
                <button onClick={() => setView('list')} className="btn btn-ghost">Cancel</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Delete confirm */}
      <AnimatePresence>
        {delId && (
          <div className="modal-backdrop" onClick={() => setDelId(null)}>
            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              style={{ background: 'var(--card)', border: '1px solid rgba(255,71,87,0.2)', borderRadius: 'var(--r-2xl)', padding: '2rem', maxWidth: '380px', width: '100%', textAlign: 'center', boxShadow: 'var(--shadow-lg)' }}>
              <div style={{ width: '52px', height: '52px', borderRadius: 'var(--r-lg)', background: 'rgba(255,71,87,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                <Trash2 size={22} color="var(--red)" />
              </div>
              <h3 style={{ fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: '1.15rem', marginBottom: '0.5rem' }}>Delete Game?</h3>
              <p style={{ color: 'var(--text-3)', fontSize: '0.875rem', marginBottom: '1.5rem' }}>This action cannot be undone.</p>
              <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center' }}>
                <button onClick={() => del(delId)} className="btn" style={{ background: 'rgba(255,71,87,0.12)', color: 'var(--red)', border: '1px solid rgba(255,71,87,0.3)', padding: '0.625rem 1.5rem', borderRadius: 'var(--r-full)', fontWeight: 600 }}>Delete</button>
                <button onClick={() => setDelId(null)} className="btn btn-ghost">Cancel</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
