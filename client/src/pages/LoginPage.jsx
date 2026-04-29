import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Mail, Lock, User, Eye, EyeOff, ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

export default function LoginPage() {
  const [tab, setTab]   = useState('login');
  const [showPw, setSPW] = useState(false);
  const [busy, setBusy] = useState(false);
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const { login, register } = useAuth();
  const navigate = useNavigate();
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const submit = async e => {
    e.preventDefault();
    setBusy(true);
    try {
      if (tab === 'login') {
        await login(form.email, form.password);
        toast.success('Welcome back!');
      } else {
        if (!form.username.trim()) { toast.error('Username required'); setBusy(false); return; }
        await register(form.username, form.email, form.password);
        toast.success('Account created!');
      }
      navigate('/dashboard');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Authentication failed');
    } finally { setBusy(false); }
  };

  return (
    <div style={{ minHeight: '100svh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem', position: 'relative', overflow: 'hidden' }}>
      <Helmet><title>{tab === 'login' ? 'Sign In' : 'Register'} — AntiGravity Games</title></Helmet>

      {/* BG orbs */}
      <div style={{ position: 'absolute', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(108,92,231,0.12) 0%, transparent 70%)', top: '-200px', left: '-100px', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,229,255,0.08) 0%, transparent 70%)', bottom: '-100px', right: '-50px', pointerEvents: 'none' }} />

      <div style={{ width: '100%', maxWidth: '420px', position: 'relative', zIndex: 1 }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '2rem' }}>
          <div style={{ width: '38px', height: '38px', borderRadius: '11px', background: 'linear-gradient(135deg, #6C5CE7, #00E5FF)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Zap size={20} fill="white" color="white" />
          </div>
          <span style={{ fontFamily: 'var(--font-head)', fontWeight: 800, fontSize: '1.3rem', letterSpacing: '-0.03em' }}>
            <span>Anti</span><span style={{ color: 'var(--accent)' }}>Gravity</span>
          </span>
        </Link>

        {/* Card */}
        <div style={{ background: 'var(--card)', border: '1px solid var(--border-md)', borderRadius: 'var(--r-2xl)', padding: '2rem', boxShadow: '0 24px 64px rgba(0,0,0,0.5)' }}>
          {/* Tab switcher */}
          <div style={{ display: 'flex', background: 'var(--surface)', borderRadius: 'var(--r-lg)', padding: '4px', border: '1px solid var(--border)', marginBottom: '1.75rem' }}>
            {['login','register'].map(t => (
              <button key={t} onClick={() => setTab(t)} style={{
                flex: 1, padding: '0.625rem', borderRadius: 'var(--r-md)', fontSize: '0.875rem', fontWeight: 600,
                background: tab === t ? 'var(--primary)' : 'transparent',
                color: tab === t ? '#fff' : 'var(--text-2)',
                boxShadow: tab === t ? 'var(--shadow-primary)' : 'none',
                transition: 'all 0.15s',
              }}>
                {t === 'login' ? 'Sign In' : 'Create Account'}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.form key={tab}
              initial={{ opacity: 0, x: tab === 'login' ? -12 : 12 }}
              animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

              {tab === 'register' && (
                <div style={{ position: 'relative' }}>
                  <User size={16} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-3)', pointerEvents: 'none' }} />
                  <input type="text" placeholder="Username" value={form.username} onChange={e => set('username', e.target.value)} required
                    className="input" style={{ paddingLeft: '42px' }} />
                </div>
              )}

              <div style={{ position: 'relative' }}>
                <Mail size={16} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-3)', pointerEvents: 'none' }} />
                <input type="email" placeholder="Email address" value={form.email} onChange={e => set('email', e.target.value)} required
                  className="input" style={{ paddingLeft: '42px' }} />
              </div>

              <div style={{ position: 'relative' }}>
                <Lock size={16} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-3)', pointerEvents: 'none' }} />
                <input type={showPw ? 'text' : 'password'} placeholder="Password" value={form.password} onChange={e => set('password', e.target.value)} required minLength={6}
                  className="input" style={{ paddingLeft: '42px', paddingRight: '42px' }} />
                <button type="button" onClick={() => setSPW(!showPw)} style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-3)' }}>
                  {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>

              <button type="submit" disabled={busy} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '0.875rem', marginTop: '0.5rem', opacity: busy ? 0.7 : 1 }}>
                {busy
                  ? <div className="spinner" style={{ width: '18px', height: '18px', borderWidth: '2px', borderTopColor: '#fff' }} />
                  : <>{tab === 'login' ? 'Sign In' : 'Create Account'} <ArrowRight size={16} /></>
                }
              </button>
            </motion.form>
          </AnimatePresence>

          <p style={{ textAlign: 'center', fontSize: '0.82rem', color: 'var(--text-3)', marginTop: '1.25rem' }}>
            {tab === 'login' ? "Don't have an account? " : 'Already registered? '}
            <button onClick={() => setTab(tab === 'login' ? 'register' : 'login')} style={{ color: 'var(--primary)', fontWeight: 600 }}>
              {tab === 'login' ? 'Create one' : 'Sign in'}
            </button>
          </p>
        </div>

        <p style={{ textAlign: 'center', fontSize: '0.78rem', color: 'var(--text-3)', marginTop: '1rem' }}>
          Admin? <Link to="/admin/login" style={{ color: 'var(--primary)', fontWeight: 600 }}>Admin Panel →</Link>
        </p>
      </div>
    </div>
  );
}
