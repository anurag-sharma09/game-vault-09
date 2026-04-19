import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FiPlus, FiEdit2, FiTrash2, FiX, FiSave, FiExternalLink, FiSearch } from 'react-icons/fi';
import { GiGamepad } from 'react-icons/gi';
import { useAuth } from '../context/AuthContext';
import { fetchGames, createGame, updateGame, deleteGame } from '../services/api';
import toast from 'react-hot-toast';

const GENRES = ['Action', 'RPG', 'Strategy', 'Sports', 'Horror', 'Puzzle', 'Adventure', 'Simulation', 'Racing', 'Fighting', 'Shooter', 'MOBA', 'Battle Royale', 'Indie'];
const SOURCES = ['Steam', 'Epic Games', 'Play Store', 'App Store', 'GOG', 'Battle.net', 'Origin', 'Official Site'];
const EMPTY = { title: '', description: '', genre: 'Action', platform: [], imageUrl: '', bannerUrl: '', rating: 8, officialDownloadLink: '', downloadSource: 'Steam', tags: '', isFree: false, price: 'Free', developer: '', publisher: '', releaseYear: new Date().getFullYear(), systemRequirements: { os: '', cpu: '', ram: '', gpu: '', storage: '' } };

export default function AdminDashboard() {
  const { admin, isAuthenticated, authLoading, logout } = useAuth();
  const navigate = useNavigate();
  const [games, setGames]           = useState([]);
  const [loading, setLoading]       = useState(true);
  const [modalOpen, setModalOpen]   = useState(false);
  const [editing, setEditing]       = useState(null); // null = create, object = edit
  const [form, setForm]             = useState(EMPTY);
  const [saving, setSaving]         = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    if (!authLoading && !isAuthenticated) navigate('/admin/login');
  }, [authLoading, isAuthenticated]);

  const loadGames = () => {
    setLoading(true);
    fetchGames({ limit: 100 })
      .then(res => setGames(res.data.data))
      .catch(() => toast.error('Failed to load games'))
      .finally(() => setLoading(false));
  };

  useEffect(() => { if (isAuthenticated) loadGames(); }, [isAuthenticated]);

  const openCreate = () => { setEditing(null); setForm(EMPTY); setModalOpen(true); };
  const openEdit   = (g) => {
    setEditing(g);
    setForm({ ...g, tags: g.tags?.join(', ') || '', platform: g.platform || [], systemRequirements: g.systemRequirements || EMPTY.systemRequirements });
    setModalOpen(true);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    const payload = { ...form, tags: form.tags.split(',').map(t => t.trim()).filter(Boolean), rating: parseFloat(form.rating), releaseYear: parseInt(form.releaseYear) };
    try {
      if (editing) {
        await updateGame(editing._id, payload);
        toast.success(`"${form.title}" updated!`);
      } else {
        await createGame(payload);
        toast.success(`"${form.title}" added! 🎮`);
      }
      setModalOpen(false);
      loadGames();
    } catch (err) {
      toast.error(err.response?.data?.message || 'Save failed');
    } finally { setSaving(false); }
  };

  const handleDelete = async (id, title) => {
    if (!window.confirm(`Delete "${title}"? This cannot be undone.`)) return;
    setDeletingId(id);
    try {
      await deleteGame(id);
      toast.success(`"${title}" deleted.`);
      loadGames();
    } catch { toast.error('Delete failed'); }
    finally { setDeletingId(null); }
  };

  const togglePlatform = (p) => {
    setForm(f => ({
      ...f, platform: f.platform.includes(p) ? f.platform.filter(x => x !== p) : [...f.platform, p]
    }));
  };

  const filtered = games.filter(g => g.title.toLowerCase().includes(searchTerm.toLowerCase()));

  if (authLoading) return <div style={{ textAlign: 'center', padding: '5rem', color: '#6B7280' }}>Loading…</div>;

  return (
    <>
      <Helmet><title>Admin Dashboard — GameVault</title></Helmet>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '2rem 1.5rem' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
          <div>
            <h1 style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '2rem', fontWeight: 700, color: '#F9FAFB' }}>Admin Dashboard</h1>
            <p style={{ color: '#6B7280', fontSize: '0.85rem' }}>Welcome, {admin?.username} • {games.length} games total</p>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: '#6B7280', textDecoration: 'none', padding: '0.5rem 1rem', border: '1px solid #1F2D45', borderRadius: '8px', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <GiGamepad size={14} /> View Site
            </Link>
            <button onClick={logout} style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', color: '#EF4444', borderRadius: '8px', padding: '0.5rem 1rem', cursor: 'pointer', fontSize: '0.85rem' }}>Logout</button>
            <button id="btn-add-game" onClick={openCreate} className="btn-primary" style={{ fontSize: '0.9rem', padding: '0.55rem 1.25rem' }}>
              <FiPlus size={16} /> Add Game
            </button>
          </div>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
          {[
            ['Total Games', games.length, '#8B5CF6'],
            ['Free Games', games.filter(g => g.isFree).length, '#10B981'],
            ['Paid Games', games.filter(g => !g.isFree).length, '#F97316'],
            ['Avg Rating', games.length ? (games.reduce((s,g) => s+g.rating,0)/games.length).toFixed(1) : '—', '#06B6D4'],
          ].map(([label, val, color]) => (
            <div key={label} style={{ background: '#111827', border: '1px solid #1F2D45', borderRadius: '12px', padding: '1.25rem', textAlign: 'center' }}>
              <div style={{ fontFamily: 'Rajdhani', fontSize: '2rem', fontWeight: 700, color }}>{val}</div>
              <div style={{ color: '#6B7280', fontSize: '0.82rem' }}>{label}</div>
            </div>
          ))}
        </div>

        {/* Search */}
        <div style={{ position: 'relative', maxWidth: '360px', marginBottom: '1.25rem' }}>
          <FiSearch style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#4B5563' }} size={15} />
          <input id="admin-search" type="text" placeholder="Search games…" className="input-dark" value={searchTerm} onChange={e => setSearchTerm(e.target.value)}
            style={{ width: '100%', paddingLeft: '36px' }} />
        </div>

        {/* Table */}
        <div style={{ background: '#111827', border: '1px solid #1F2D45', borderRadius: '12px', overflow: 'hidden' }}>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #1F2D45', background: '#0D1117' }}>
                  {['Game', 'Genre', 'Platform', 'Rating', 'Free', 'Source', 'Actions'].map(col => (
                    <th key={col} style={{ padding: '0.875rem 1rem', textAlign: 'left', color: '#6B7280', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  Array(6).fill(0).map((_, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid #1F2D45' }}>
                      {Array(7).fill(0).map((__, j) => (
                        <td key={j} style={{ padding: '0.875rem 1rem' }}>
                          <div className="skeleton" style={{ height: '16px', borderRadius: '4px', width: j === 0 ? '140px' : '60px' }} />
                        </td>
                      ))}
                    </tr>
                  ))
                ) : filtered.map(g => (
                  <tr key={g._id} style={{ borderBottom: '1px solid #1F2D45', transition: 'background 0.15s' }}
                    onMouseEnter={e => e.currentTarget.style.background='rgba(139,92,246,0.04)'}
                    onMouseLeave={e => e.currentTarget.style.background='transparent'}>
                    <td style={{ padding: '0.875rem 1rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <img src={g.imageUrl} alt="" style={{ width: '44px', height: '28px', objectFit: 'cover', borderRadius: '4px', flexShrink: 0 }} onError={e => e.target.style.display='none'} />
                        <div>
                          <div style={{ color: '#F9FAFB', fontWeight: 500, fontSize: '0.9rem', whiteSpace: 'nowrap', maxWidth: '180px', overflow: 'hidden', textOverflow: 'ellipsis' }}>{g.title}</div>
                          <div style={{ color: '#4B5563', fontSize: '0.72rem' }}>{g.developer}</div>
                        </div>
                      </div>
                    </td>
                    <td style={{ padding: '0.875rem 1rem' }}><span className="badge badge-genre" style={{ fontSize: '0.65rem' }}>{g.genre}</span></td>
                    <td style={{ padding: '0.875rem 1rem', color: '#9CA3AF', fontSize: '0.82rem' }}>{g.platform?.join(', ')}</td>
                    <td style={{ padding: '0.875rem 1rem' }}><span className="stars" style={{ fontSize: '0.75rem' }}>★</span> <span style={{ color: '#D1D5DB', fontSize: '0.85rem' }}>{g.rating}</span></td>
                    <td style={{ padding: '0.875rem 1rem' }}><span className={`badge ${g.isFree ? 'badge-free' : 'badge-paid'}`} style={{ fontSize: '0.62rem' }}>{g.isFree ? 'Free' : 'Paid'}</span></td>
                    <td style={{ padding: '0.875rem 1rem', color: '#9CA3AF', fontSize: '0.82rem' }}>{g.downloadSource}</td>
                    <td style={{ padding: '0.875rem 1rem' }}>
                      <div style={{ display: 'flex', gap: '6px' }}>
                        <a href={g.officialDownloadLink} target="_blank" rel="noopener noreferrer" title="View official" style={{ background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.2)', borderRadius: '6px', padding: '5px', display: 'flex', color: '#06B6D4' }}><FiExternalLink size={13} /></a>
                        <button id={`edit-${g._id}`} onClick={() => openEdit(g)} style={{ background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.2)', borderRadius: '6px', padding: '5px', display: 'flex', color: '#8B5CF6', cursor: 'pointer' }}><FiEdit2 size={13} /></button>
                        <button id={`delete-${g._id}`} onClick={() => handleDelete(g._id, g.title)} disabled={deletingId === g._id} style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '6px', padding: '5px', display: 'flex', color: '#EF4444', cursor: 'pointer', opacity: deletingId === g._id ? 0.5 : 1 }}><FiTrash2 size={13} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {!loading && filtered.length === 0 && (
              <div style={{ textAlign: 'center', padding: '3rem', color: '#4B5563' }}>No games match "{searchTerm}"</div>
            )}
          </div>
        </div>
      </div>

      {/* ── Modal ─────────────────────────────────── */}
      {modalOpen && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', zIndex: 200, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '2rem 1rem', overflowY: 'auto', backdropFilter: 'blur(4px)' }}>
          <div style={{ background: '#111827', border: '1px solid #1F2D45', borderRadius: '16px', width: '100%', maxWidth: '680px', padding: '2rem', position: 'relative' }}>
            <button onClick={() => setModalOpen(false)} style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'none', border: 'none', color: '#6B7280', cursor: 'pointer', display: 'flex' }}><FiX size={20} /></button>
            <h2 style={{ fontFamily: 'Rajdhani', fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>{editing ? 'Edit Game' : 'Add New Game'}</h2>

            <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                {/* Title */}
                <div style={{ gridColumn: '1/-1' }}>
                  <label style={{ display: 'block', color: '#9CA3AF', fontSize: '0.82rem', marginBottom: '4px' }}>Title *</label>
                  <input id="form-title" type="text" required className="input-dark" style={{ width: '100%' }} value={form.title} onChange={e => setForm({...form, title: e.target.value})} />
                </div>
                {/* Genre */}
                <div>
                  <label style={{ display: 'block', color: '#9CA3AF', fontSize: '0.82rem', marginBottom: '4px' }}>Genre *</label>
                  <select className="input-dark" style={{ width: '100%' }} value={form.genre} onChange={e => setForm({...form, genre: e.target.value})}>
                    {GENRES.map(g => <option key={g} value={g}>{g}</option>)}
                  </select>
                </div>
                {/* Rating */}
                <div>
                  <label style={{ display: 'block', color: '#9CA3AF', fontSize: '0.82rem', marginBottom: '4px' }}>Rating (0–10)</label>
                  <input type="number" min="0" max="10" step="0.1" className="input-dark" style={{ width: '100%' }} value={form.rating} onChange={e => setForm({...form, rating: e.target.value})} />
                </div>
                {/* Platform checkboxes */}
                <div style={{ gridColumn: '1/-1' }}>
                  <label style={{ display: 'block', color: '#9CA3AF', fontSize: '0.82rem', marginBottom: '6px' }}>Platform *</label>
                  <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                    {['PC','Mobile','Console','Cross-Platform'].map(p => (
                      <label key={p} style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', color: form.platform.includes(p) ? '#8B5CF6' : '#9CA3AF', fontSize: '0.88rem' }}>
                        <input type="checkbox" checked={form.platform.includes(p)} onChange={() => togglePlatform(p)} style={{ accentColor: '#8B5CF6' }} /> {p}
                      </label>
                    ))}
                  </div>
                </div>
                {/* Image URL */}
                <div>
                  <label style={{ display: 'block', color: '#9CA3AF', fontSize: '0.82rem', marginBottom: '4px' }}>Image URL *</label>
                  <input type="url" required className="input-dark" style={{ width: '100%' }} value={form.imageUrl} onChange={e => setForm({...form, imageUrl: e.target.value})} />
                </div>
                {/* Download Link */}
                <div>
                  <label style={{ display: 'block', color: '#9CA3AF', fontSize: '0.82rem', marginBottom: '4px' }}>Official Download Link *</label>
                  <input type="url" required className="input-dark" style={{ width: '100%' }} value={form.officialDownloadLink} onChange={e => setForm({...form, officialDownloadLink: e.target.value})} />
                </div>
                {/* Source */}
                <div>
                  <label style={{ display: 'block', color: '#9CA3AF', fontSize: '0.82rem', marginBottom: '4px' }}>Download Source *</label>
                  <select className="input-dark" style={{ width: '100%' }} value={form.downloadSource} onChange={e => setForm({...form, downloadSource: e.target.value})}>
                    {SOURCES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                {/* Free toggle + price */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', color: '#9CA3AF', fontSize: '0.88rem' }}>
                    <input type="checkbox" checked={form.isFree} onChange={e => setForm({...form, isFree: e.target.checked, price: e.target.checked ? 'Free' : form.price})} style={{ accentColor: '#10B981' }} /> Free to Play
                  </label>
                  {!form.isFree && <input placeholder="e.g. $29.99" className="input-dark" style={{ flex: 1, minWidth: '100px' }} value={form.price} onChange={e => setForm({...form, price: e.target.value})} />}
                </div>
                {/* Developer / Publisher */}
                <div>
                  <label style={{ display: 'block', color: '#9CA3AF', fontSize: '0.82rem', marginBottom: '4px' }}>Developer</label>
                  <input className="input-dark" style={{ width: '100%' }} value={form.developer} onChange={e => setForm({...form, developer: e.target.value})} />
                </div>
                <div>
                  <label style={{ display: 'block', color: '#9CA3AF', fontSize: '0.82rem', marginBottom: '4px' }}>Publisher</label>
                  <input className="input-dark" style={{ width: '100%' }} value={form.publisher} onChange={e => setForm({...form, publisher: e.target.value})} />
                </div>
                {/* Tags */}
                <div style={{ gridColumn: '1/-1' }}>
                  <label style={{ display: 'block', color: '#9CA3AF', fontSize: '0.82rem', marginBottom: '4px' }}>Tags (comma-separated)</label>
                  <input className="input-dark" placeholder="free, multiplayer, low-end, …" style={{ width: '100%' }} value={form.tags} onChange={e => setForm({...form, tags: e.target.value})} />
                </div>
                {/* Description */}
                <div style={{ gridColumn: '1/-1' }}>
                  <label style={{ display: 'block', color: '#9CA3AF', fontSize: '0.82rem', marginBottom: '4px' }}>Description *</label>
                  <textarea required rows={3} className="input-dark" style={{ width: '100%', resize: 'vertical' }} value={form.description} onChange={e => setForm({...form, description: e.target.value})} />
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', marginTop: '0.5rem' }}>
                <button type="button" onClick={() => setModalOpen(false)} className="btn-secondary">Cancel</button>
                <button id="form-save-btn" type="submit" className="btn-primary" disabled={saving} style={{ opacity: saving ? 0.7 : 1 }}>
                  <FiSave size={15} /> {saving ? 'Saving…' : (editing ? 'Save Changes' : 'Add Game')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
