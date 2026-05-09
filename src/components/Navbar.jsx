import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import {
  ChevronRight,
  Menu,
  Search,
  ShieldCheck,
  Sparkles,
  Heart,
  X,
  LogOut,
} from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import SearchField from './SearchField.jsx'
import { useStoreData } from '../hooks/useStoreData.js'
import { useAuth } from '../context/AuthContext'

const navItems = [
  { label: 'Games', to: '/games', type: 'route' },
  { label: 'Categories', to: '/categories', type: 'route' },
  { label: 'News', to: '/news', type: 'route' },
  { label: 'Contact', to: '/contact', type: 'route' },
]

function Navbar({ playerTag, onOpenSignIn }) {
  const navigate = useNavigate()
  const location = useLocation()
  const { logout, user } = useAuth()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const routeQuery = new URLSearchParams(location.search).get('q') ?? ''
  const { scrollY } = useScroll()

  const { wishlist } = useStoreData()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 36)
  })

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

  const renderNavItem = (item, mobile = false) => {
    const classes = ({ isActive }) =>
      `${
        mobile
          ? 'rounded-2xl px-4 py-3'
          : 'px-0 py-0'
      } text-sm font-medium tracking-[0.18em] uppercase transition ${
        isActive
          ? 'text-white'
          : 'text-slate-300/76 hover:text-white'
      } ${mobile ? 'hover:bg-white/8' : ''}`

    if (item.type === 'hash') {
      return (
        <a
          key={item.label}
          href={item.to}
          onClick={() => setMobileMenuOpen(false)}
          className={`${mobile ? 'rounded-2xl px-4 py-3 hover:bg-white/8' : ''} text-sm font-medium tracking-[0.18em] uppercase text-slate-300/76 transition hover:text-white`}
        >
          {item.label}
        </a>
      )
    }

    return (
      <NavLink
        key={item.to}
        to={item.to}
        onClick={() => setMobileMenuOpen(false)}
        className={classes}
      >
        {item.label}
      </NavLink>
    )
  }

  return (
    <motion.header
      animate={{
        backgroundColor: isScrolled ? 'rgba(4, 8, 18, 0.78)' : 'rgba(4, 8, 18, 0.16)',
        borderColor: isScrolled ? 'rgba(255,255,255,0.10)' : 'rgba(255,255,255,0.05)',
        backdropFilter: isScrolled ? 'blur(22px)' : 'blur(10px)',
      }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-50 border-b"
    >
      <div className="mx-auto flex max-w-[92rem] items-center gap-4 px-4 py-4 sm:px-6 lg:px-10">
        <Link to="/" className="flex shrink-0 items-center gap-4">
          <motion.div
            animate={{ scale: isScrolled ? 0.94 : 1 }}
            transition={{ duration: 0.28 }}
            className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl shadow-[0_0_20px_rgba(56,189,248,0.3)]"
          >
            <img src="/logo.png" alt="Game Vault Logo" className="h-full w-full object-cover" />
          </motion.div>

          <div>
            <p className="font-display text-[1.9rem] uppercase leading-none tracking-[0.1em] text-white">
              Game Vault
            </p>
            <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.42em] text-cyan-100/72">
              Premium Game Discovery
            </p>
          </div>
        </Link>

        <nav className="ml-8 hidden items-center gap-8 xl:flex">
          {navItems.map((item) => renderNavItem(item))}
        </nav>

        <div className="ml-auto hidden items-center gap-3 lg:flex">
          <SearchField
            key={`desktop-${location.search}`}
            defaultValue={routeQuery}
            onSubmit={handleSearch}
            placeholder="Search worlds, launches, categories..."
            compact
            className="w-[21rem] border-white/10 bg-white/6"
          />

          <button
            type="button"
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/8 text-white transition hover:border-violet-400/40 hover:bg-white/12 hover:text-violet-300"
            title="Wishlist"
          >
            <Heart className="h-4 w-4" />
            <AnimatePresence>
              {wishlist.length > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-violet-500 text-[9px] font-bold text-white shadow-[0_0_10px_rgba(139,92,246,0.5)]"
                >
                  {wishlist.length}
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onOpenSignIn}
              className="inline-flex h-10 items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 text-sm font-semibold tracking-[0.16em] uppercase text-white transition hover:border-cyan-300/26 hover:bg-white/12"
            >
              <ShieldCheck className="h-4 w-4 text-cyan-200" />
              {playerTag || 'Profile'}
            </button>

            {user && (
              <button
                type="button"
                onClick={logout}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/8 text-slate-300 transition hover:border-red-400/40 hover:bg-red-500/10 hover:text-red-400"
                title="Logout"
              >
                <LogOut className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        <div className="ml-auto flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={() => navigate('/games')}
            className="rounded-full border border-white/10 bg-white/8 p-3 text-slate-100"
            aria-label="Search games"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="rounded-full border border-white/10 bg-white/8 p-3 text-slate-100"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 top-[72px] h-[calc(100svh-72px)] w-full overflow-y-auto bg-slate-950/95 px-4 pb-20 pt-6 backdrop-blur-3xl sm:px-6 lg:hidden"
          >
            <div className="space-y-6">
              <SearchField
                key={`mobile-${location.search}`}
                defaultValue={routeQuery}
                onSubmit={handleSearch}
                placeholder="Search worlds, launches..."
              />

              <nav className="glass-panel rounded-[30px] p-6">
                <div className="flex flex-col gap-4">
                  {navItems.map((item) => renderNavItem(item, true))}
                </div>
              </nav>

              <div className="glass-panel rounded-[28px] p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-100/72">
                      Player Profile
                    </p>
                    <p className="mt-2 font-display text-4xl uppercase leading-none text-white">
                      {playerTag || 'Join In'}
                    </p>
                  </div>
                  <Sparkles className="h-8 w-8 text-cyan-100" />
                </div>

                <div className="flex flex-col gap-3 mt-6">
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false)
                      onOpenSignIn()
                    }}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,rgba(168,85,247,0.96),rgba(34,211,238,0.92))] px-4 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-950 transition hover:brightness-110"
                  >
                    Open Profile
                    <ChevronRight className="h-5 w-5" />
                  </button>

                  {user && (
                    <button
                      type="button"
                      onClick={() => {
                        logout()
                        setMobileMenuOpen(false)
                      }}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-red-400 transition hover:bg-red-500/10"
                    >
                      Logout
                      <LogOut className="h-5 w-5" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navbar
