import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

export default function AdminLoginPage() {
  const [form, setForm]  = useState({ email: '', password: '' });
  const [show, setShow]  = useState(false);
  const [busy, setBusy]  = useState(false);
  const { adminLogin }   = useAuth();
  const navigate         = useNavigate();

  const submit = async e => {
    e.preventDefault();
    setBusy(true);
    try {
      await adminLogin(form.email, form.password);
      toast.success('Welcome, Admin!');
      navigate('/admin');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Invalid credentials');
    } finally { setBusy(false); }
  };

  return (
    <div style={{ minHeight: '100svh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem', position: 'relative', overflow: 'hidden' }}>
      <Helmet><title>Admin Login — AntiGravity Games</title></Helmet>

      <div style={{ position: 'absolute', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(108,92,231,0.1) 0%, transparent 70%)', top: '-150px', left: '-100px', pointerEvents: 'none' }} />

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        style={{ width: '100%', maxWidth: '400px', position: 'relative', zIndex: 1 }}>

        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ width: '64px', height: '64px', borderRadius: '18px', background: 'linear-gradient(135deg, var(--primary), #9C89FF)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
            <Shield size={28} color="white" />
          </div>
          <h1 style={{ fontFamily: 'var(--font-head)', fontWeight: 800, fontSize: '1.75rem', letterSpacing: '-0.03em', marginBottom: '0.375rem' }}>Admin Panel</h1>
          <p style={{ color: 'var(--text-3)', fontSize: '0.875rem' }}>AntiGravity Games Control Center</p>
        </div>

        <div style={{ background: 'var(--card)', border: '1px solid var(--border-md)', borderRadius: 'var(--r-2xl)', padding: '2rem', boxShadow: 'var(--shadow-lg)' }}>
          <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ position: 'relative' }}>
              <Mail size={16} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-3)', pointerEvents: 'none' }} />
              <input type="email" placeholder="Admin email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} required
                className="input" style={{ paddingLeft: '42px' }} />
            </div>
            <div style={{ position: 'relative' }}>
              <Lock size={16} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-3)', pointerEvents: 'none' }} />
              <input type={show ? 'text' : 'password'} placeholder="Password" value={form.password} onChange={e => setForm(f => ({ ...f, password: e.target.value }))} required
                className="input" style={{ paddingLeft: '42px', paddingRight: '42px' }} />
              <button type="button" onClick={() => setShow(!show)} style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-3)' }}>
                {show ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            <button type="submit" disabled={busy} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '0.875rem', marginTop: '0.5rem', opacity: busy ? 0.7 : 1 }}>
              {busy
                ? <div className="spinner" style={{ width: '18px', height: '18px', borderWidth: '2px', borderTopColor: '#fff' }} />
                : <>Sign In as Admin <ArrowRight size={16} /></>
              }
            </button>
          </form>
          <p style={{ fontSize: '0.78rem', color: 'var(--text-3)', textAlign: 'center', marginTop: '1rem' }}>
            Register first via <code style={{ color: 'var(--primary)', background: 'rgba(108,92,231,0.1)', padding: '2px 6px', borderRadius: '4px' }}>POST /api/auth/register</code>
          </p>
        </div>

        <p style={{ textAlign: 'center', fontSize: '0.78rem', color: 'var(--text-3)', marginTop: '1rem' }}>
          <Link to="/login" style={{ color: 'var(--primary)', fontWeight: 600 }}>← User Login</Link>
        </p>
      </motion.div>
    </div>
  );
}
