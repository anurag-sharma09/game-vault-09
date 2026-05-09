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
    setIsScrolled(latest > 20)
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
      } text-xs sm:text-sm font-medium tracking-[0.18em] uppercase transition ${
        isActive
          ? 'text-white'
          : 'text-slate-300/76 hover:text-white'
      } ${mobile ? 'hover:bg-white/8' : ''}`

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
        backgroundColor: isScrolled ? 'rgba(4, 8, 18, 0.82)' : 'rgba(4, 8, 18, 0.2)',
        borderColor: isScrolled ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.04)',
        backdropFilter: isScrolled ? 'blur(20px)' : 'blur(8px)',
        paddingTop: isScrolled ? '12px' : '16px',
        paddingBottom: isScrolled ? '12px' : '16px',
      }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-50 border-b"
    >
      <div className="mx-auto flex max-w-[92rem] items-center px-4 sm:px-6 lg:px-10">
        <Link to="/" className="flex shrink-0 items-center gap-3 sm:gap-4">
          <motion.div
            animate={{ scale: isScrolled ? 0.9 : 1 }}
            className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl shadow-[0_0_15px_rgba(56,189,248,0.2)] sm:h-12 sm:w-12 sm:rounded-2xl"
          >
            <img src="/logo.png" alt="Game Vault Logo" className="h-full w-full object-cover" />
          </motion.div>

          <div className="hidden min-[400px]:block">
            <p className="font-display text-xl uppercase leading-none tracking-wider text-white sm:text-2xl">
              Game Vault
            </p>
            <p className="mt-1 text-[8px] font-semibold uppercase tracking-[0.3em] text-cyan-100/60 sm:text-[10px]">
              Premium Discovery
            </p>
          </div>
        </Link>

        <nav className="ml-10 hidden items-center gap-8 xl:flex">
          {navItems.map((item) => renderNavItem(item))}
        </nav>

        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          {/* Desktop Search */}
          <div className="hidden lg:block">
            <SearchField
              key={`desktop-${location.search}`}
              defaultValue={routeQuery}
              onSubmit={handleSearch}
              placeholder="Search games..."
              compact
              className="w-[18rem] border-white/8 bg-white/5 xl:w-[22rem]"
            />
          </div>

          {/* Desktop Wishlist */}
          <button
            type="button"
            className="relative hidden h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/6 text-white transition hover:border-violet-400/30 hover:bg-white/10 hover:text-violet-300 min-[450px]:inline-flex sm:h-10 sm:w-10"
            title="Wishlist"
          >
            <Heart className="h-4 w-4" />
            <AnimatePresence>
              {wishlist.length > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-violet-500 text-[8px] font-bold text-white shadow-[0_0_8px_rgba(139,92,246,0.5)]"
                >
                  {wishlist.length}
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          {/* Profile / Sign In */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onOpenSignIn}
              className="inline-flex h-9 items-center gap-1.5 rounded-full border border-white/10 bg-white/6 px-3 text-[10px] font-bold tracking-wider uppercase text-white transition hover:border-cyan-300/20 hover:bg-white/10 sm:h-10 sm:gap-2 sm:px-4 sm:text-xs"
            >
              <ShieldCheck className="h-3.5 w-3.5 text-cyan-300 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline">{playerTag || 'Profile'}</span>
              {!playerTag && <span className="sm:hidden">Join</span>}
              {playerTag && <span className="truncate max-w-[60px] sm:hidden">{playerTag}</span>}
            </button>

            {user && (
              <button
                type="button"
                onClick={logout}
                className="hidden h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/6 text-slate-300 transition hover:border-red-400/30 hover:bg-red-500/10 hover:text-red-400 lg:inline-flex sm:h-10 sm:w-10"
                title="Logout"
              >
                <LogOut className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Mobile Menu & Search Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => navigate('/games')}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/6 text-slate-100 min-[450px]:hidden sm:h-10 sm:w-10"
              aria-label="Search"
            >
              <Search className="h-4.5 w-4.5" />
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/6 text-slate-100 sm:h-10 sm:w-10"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute left-0 top-full w-full overflow-hidden bg-slate-950/95 shadow-2xl backdrop-blur-3xl lg:hidden"
          >
            <div className="space-y-6 px-4 py-8 sm:px-6">
              <SearchField
                key={`mobile-${location.search}`}
                defaultValue={routeQuery}
                onSubmit={handleSearch}
                placeholder="Search worlds, launches..."
              />

              <nav className="glass-panel rounded-3xl p-4">
                <div className="flex flex-col gap-2">
                  {navItems.map((item) => renderNavItem(item, true))}
                </div>
              </nav>

              <div className="glass-panel rounded-3xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-cyan-400">
                      Member Profile
                    </p>
                    <p className="mt-2 font-display text-3xl uppercase text-white">
                      {playerTag || 'Guest Player'}
                    </p>
                  </div>
                  <Sparkles className="h-8 w-8 text-cyan-300" />
                </div>

                <div className="mt-8 flex flex-col gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false)
                      onOpenSignIn()
                    }}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,rgba(168,85,247,0.95),rgba(34,211,238,0.9))] py-4 text-xs font-bold uppercase tracking-widest text-slate-950"
                  >
                    Open Profile <ChevronRight className="h-4 w-4" />
                  </button>

                  {user && (
                    <button
                      type="button"
                      onClick={() => {
                        logout()
                        setMobileMenuOpen(false)
                      }}
                      className="flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 py-4 text-xs font-bold uppercase tracking-widest text-red-400"
                    >
                      Log Out <LogOut className="h-4 w-4" />
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
