import { ShieldCheck, Sparkles, X, Loader2 } from 'lucide-react'
import { useState } from 'react'
import { register, login } from '../services/authService'
import { useAuth } from '../context/AuthContext'

function SignInModal({ open, onClose }) {
  const { login: authLogin } = useAuth()
  const [isRegister, setIsRegister] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [tag, setTag] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  if (!open) {
    return null
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (loading) return // Prevent duplicate submissions

    setError('')
    setLoading(true)

    try {
      console.log(`[UI] Submitting ${isRegister ? 'Registration' : 'Login'} for ${email}`);
      let data
      if (isRegister) {
        if (!tag.trim()) {
          setError('Player Tag is required')
          setLoading(false)
          return
        }
        data = await register(email, password, tag)
      } else {
        data = await login(email, password)
      }

      console.log('[UI] Auth Success:', data.user.playerTag);
      authLogin(data.user, data.token)
      onClose()
    } catch (err) {
      console.error('[UI] Auth Error:', err.message);
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/78 px-4 backdrop-blur-md">
      <div className="glass-panel w-full max-w-md rounded-[30px] p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-300/18 bg-cyan-300/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-cyan-100">
              <ShieldCheck className="h-3.5 w-3.5" />
              Member Access
            </p>
            <h2 className="font-display text-3xl text-white">{isRegister ? 'Join the Vault' : 'Sign In'}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300/78">
              {isRegister 
                ? 'Create an account to start your premium gaming journey.' 
                : 'Welcome back, Commander. Enter your credentials to continue.'}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            disabled={loading}
            className="rounded-full border border-white/10 bg-white/6 p-2 text-slate-300 transition hover:bg-white/10 hover:text-white disabled:opacity-50"
            aria-label="Close sign in modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {error && (
          <div className="mt-6 rounded-xl border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-400 animate-in fade-in slide-in-from-top-1">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <label className="block text-sm text-slate-300">
            Email
            <input
              type="email"
              required
              disabled={loading}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="player@gamevault.com"
              className="mt-2 w-full rounded-2xl border border-white/12 bg-slate-950/60 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-300/36 focus:outline-none disabled:opacity-50"
            />
          </label>

          <label className="block text-sm text-slate-300">
            Password
            <input
              type="password"
              required
              disabled={loading}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="••••••••"
              className="mt-2 w-full rounded-2xl border border-white/12 bg-slate-950/60 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-300/36 focus:outline-none disabled:opacity-50"
            />
          </label>

          {isRegister && (
            <label className="block text-sm text-slate-300">
              Player Tag
              <input
                type="text"
                required={isRegister}
                disabled={loading}
                value={tag}
                onChange={(event) => setTag(event.target.value)}
                placeholder="NightRunner"
                className="mt-2 w-full rounded-2xl border border-white/12 bg-slate-950/60 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-300/36 focus:outline-none disabled:opacity-50"
              />
            </label>
          )}

          <div className="rounded-2xl border border-violet-300/16 bg-violet-300/8 p-4 text-sm leading-7 text-slate-300/78">
            <p className="inline-flex items-center gap-2 font-semibold text-violet-100">
              <Sparkles className="h-4 w-4" />
              Real Authentication
            </p>
            <p className="mt-2">
              Your account is now securely managed by our MongoDB backend. Browsing remains optional and premium.
            </p>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="inline-flex w-full items-center justify-center rounded-full bg-[linear-gradient(135deg,rgba(168,85,247,0.95),rgba(34,211,238,0.95))] px-5 py-3.5 text-sm font-semibold text-slate-950 transition hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <div className="flex items-center gap-2">
                <Loader2 className="h-5 w-5 animate-spin" />
                <span>Processing...</span>
              </div>
            ) : (
              isRegister ? 'Create Account' : 'Enter Game Vault'
            )}
          </button>

          <p className="text-center text-sm text-slate-400">
            {isRegister ? 'Already have an account?' : "Don't have an account?"}{' '}
            <button
              type="button"
              disabled={loading}
              onClick={() => {
                setIsRegister(!isRegister)
                setError('')
              }}
              className="font-semibold text-cyan-400 hover:text-cyan-300 disabled:opacity-50"
            >
              {isRegister ? 'Sign In' : 'Register Now'}
            </button>
          </p>
        </form>
      </div>
    </div>
  )
}

export default SignInModal
