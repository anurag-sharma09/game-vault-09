import { ShieldCheck, Sparkles, X } from 'lucide-react'
import { useState } from 'react'

function SignInModal({ open, onClose, onSave, playerTag }) {
  const [email, setEmail] = useState('')
  const [tag, setTag] = useState(playerTag ?? '')

  if (!open) {
    return null
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const fallbackTag = email.includes('@') ? email.split('@')[0] : email
    const nextTag = (tag.trim() || fallbackTag.trim()).slice(0, 18)

    if (!nextTag) {
      return
    }

    onSave(nextTag)
    onClose()
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
            <h2 className="font-display text-3xl text-white">Sign In</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300/78">
              Save a quick player tag for this browser and keep your AntiGravity experience feeling premium.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-white/10 bg-white/6 p-2 text-slate-300 transition hover:bg-white/10 hover:text-white"
            aria-label="Close sign in modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <label className="block text-sm text-slate-300">
            Email
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="player@antigravitygames.com"
                className="mt-2 w-full rounded-2xl border border-white/12 bg-slate-950/60 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-300/36 focus:outline-none"
              />
          </label>

          <label className="block text-sm text-slate-300">
            Player Tag
            <input
              type="text"
              value={tag}
              onChange={(event) => setTag(event.target.value)}
              placeholder="NightRunner"
              className="mt-2 w-full rounded-2xl border border-white/12 bg-slate-950/60 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-300/36 focus:outline-none"
            />
          </label>

          <div className="rounded-2xl border border-violet-300/16 bg-violet-300/8 p-4 text-sm leading-7 text-slate-300/78">
            <p className="inline-flex items-center gap-2 font-semibold text-violet-100">
              <Sparkles className="h-4 w-4" />
              Local preview sign-in
            </p>
            <p className="mt-2">
              This stores a lightweight player tag in local browser storage so the navbar feels alive without needing a backend.
            </p>
          </div>

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-full bg-[linear-gradient(135deg,rgba(168,85,247,0.95),rgba(34,211,238,0.95))] px-5 py-3.5 text-sm font-semibold text-slate-950 transition hover:brightness-110"
          >
            Enter AntiGravity
          </button>
        </form>
      </div>
    </div>
  )
}

export default SignInModal
