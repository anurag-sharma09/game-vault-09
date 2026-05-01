import { Gamepad2, Menu, Search, ShieldCheck, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { navLinks } from '../data/siteData.js'
import SearchField from './SearchField.jsx'

function Navbar({ playerTag, onOpenSignIn }) {
  const navigate = useNavigate()
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const routeQuery = new URLSearchParams(location.search).get('q') ?? ''

  const handleSearch = (event) => {
    const formData = new FormData(event.currentTarget)
    const nextQuery = `${formData.get('query') ?? ''}`.trim()
    const params = new URLSearchParams()

    if (nextQuery) {
      params.set('q', nextQuery)
    }

    navigate(`/games${params.toString() ? `?${params.toString()}` : ''}`)
    setMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-40 border-b border-white/8 bg-slate-950/55 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex shrink-0 items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(168,85,247,0.95),rgba(34,211,238,0.95))] text-slate-950 shadow-[0_10px_30px_rgba(34,211,238,0.22)]">
            <Gamepad2 className="h-5 w-5" />
          </div>
          <div>
            <p className="font-display text-xl text-white">Game Vault</p>
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-cyan-200/72">
              Official Game Links
            </p>
          </div>
        </Link>

        <nav className="mx-auto hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive ? 'text-white' : 'text-slate-300/76 hover:text-white'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden min-w-0 flex-1 items-center justify-end gap-3 lg:flex">
          <SearchField
            key={`desktop-${location.search}`}
            defaultValue={routeQuery}
            onSubmit={handleSearch}
            placeholder="Search official game links..."
            compact
            className="w-full max-w-sm"
          />
          <button
            type="button"
            onClick={onOpenSignIn}
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-cyan-300/18 bg-cyan-300/10 px-4 py-2.5 text-sm font-semibold text-cyan-50 transition hover:border-cyan-300/28 hover:bg-cyan-300/14"
          >
            <ShieldCheck className="h-4 w-4" />
            {playerTag ? playerTag : 'Sign In'}
          </button>
        </div>

        <div className="ml-auto flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={() => navigate('/games')}
            className="rounded-full border border-white/10 bg-white/6 p-3 text-slate-200"
            aria-label="Search games"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="rounded-full border border-white/10 bg-white/6 p-3 text-slate-200"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen ? (
        <div className="border-t border-white/8 px-4 pb-4 sm:px-6 lg:hidden">
          <div className="space-y-4 pt-4">
            <SearchField
              key={`mobile-${location.search}`}
              defaultValue={routeQuery}
              onSubmit={handleSearch}
              placeholder="Search official game links..."
            />

            <nav className="glass-panel rounded-[26px] p-4">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `rounded-2xl px-4 py-3 text-sm font-medium transition ${
                        isActive
                          ? 'bg-white/12 text-white'
                          : 'text-slate-300/78 hover:bg-white/8 hover:text-white'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            </nav>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false)
                onOpenSignIn()
              }}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-cyan-300/18 bg-cyan-300/10 px-4 py-3 text-sm font-semibold text-cyan-50 transition hover:bg-cyan-300/14"
            >
              <ShieldCheck className="h-4 w-4" />
              {playerTag ? `Signed in as ${playerTag}` : 'Sign In'}
            </button>
          </div>
        </div>
      ) : null}
    </header>
  )
}

export default Navbar
