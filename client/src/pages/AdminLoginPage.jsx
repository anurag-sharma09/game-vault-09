import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FiLock, FiMail, FiEye, FiEyeOff } from 'react-icons/fi';
import { GiGamepad } from 'react-icons/gi';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

export default function AdminLoginPage() {
  const [form, setForm]         = useState({ email: '', password: '' });
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading]   = useState(false);
  const { login } = useAuth();
  const navigate  = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(form.email, form.password);
      toast.success('Welcome back, Admin! 🎮');
      navigate('/admin');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Invalid credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Admin Login — GameVault</title>
      </Helmet>

      <div style={{ minHeight: '85vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem 1.5rem', background: 'radial-gradient(ellipse at center, rgba(139,92,246,0.08) 0%, transparent 60%)' }}>
        <div style={{ width: '100%', maxWidth: '420px' }}>
          {/* Logo */}
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div style={{ display: 'inline-flex', background: 'linear-gradient(135deg, #8B5CF6, #06B6D4)', borderRadius: '16px', padding: '16px', marginBottom: '1rem' }}>
              <GiGamepad size={36} color="white" />
            </div>
            <h1 style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '2rem', fontWeight: 700, marginBottom: '0.25rem' }}>Admin Login</h1>
            <p style={{ color: '#6B7280', fontSize: '0.9rem' }}>GameVault Control Panel</p>
          </div>

          <div style={{ background: '#111827', border: '1px solid #1F2D45', borderRadius: '16px', padding: '2rem' }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* Email */}
              <div>
                <label htmlFor="admin-email" style={{ display: 'block', color: '#9CA3AF', fontSize: '0.85rem', marginBottom: '0.5rem', fontWeight: 500 }}>Email Address</label>
                <div style={{ position: 'relative' }}>
                  <FiMail style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#4B5563' }} size={16} />
                  <input id="admin-email" type="email" required className="input-dark" placeholder="admin@gamevault.com"
                    value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                    style={{ width: '100%', paddingLeft: '38px' }}
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label htmlFor="admin-password" style={{ display: 'block', color: '#9CA3AF', fontSize: '0.85rem', marginBottom: '0.5rem', fontWeight: 500 }}>Password</label>
                <div style={{ position: 'relative' }}>
                  <FiLock style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#4B5563' }} size={16} />
                  <input id="admin-password" type={showPass ? 'text' : 'password'} required className="input-dark" placeholder="••••••••"
                    value={form.password} onChange={e => setForm({ ...form, password: e.target.value })}
                    style={{ width: '100%', paddingLeft: '38px', paddingRight: '38px' }}
                  />
                  <button type="button" onClick={() => setShowPass(!showPass)}
                    style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: '#4B5563', cursor: 'pointer', display: 'flex' }}>
                    {showPass ? <FiEyeOff size={15} /> : <FiEye size={15} />}
                  </button>
                </div>
              </div>

              <button id="admin-login-submit" type="submit" className="btn-primary" disabled={loading}
                style={{ justifyContent: 'center', padding: '0.75rem', fontSize: '1rem', opacity: loading ? 0.7 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}>
                <FiLock size={16} /> {loading ? 'Signing in…' : 'Sign In'}
              </button>
            </form>

            <p style={{ color: '#4B5563', fontSize: '0.78rem', textAlign: 'center', marginTop: '1.25rem', lineHeight: 1.6 }}>
              First time? Register via <code style={{ color: '#8B5CF6', background: 'rgba(139,92,246,0.1)', padding: '2px 6px', borderRadius: '4px' }}>POST /api/auth/register</code>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
