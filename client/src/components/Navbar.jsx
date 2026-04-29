import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, X, Menu, User, LogOut, LayoutDashboard, Shield } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useGame } from '../context/GameContext';

const NAV = [
  { label: 'Home', to: '/' },
  { label: 'Games', to: '/games' },
  { label: 'Categories', to: '/category/action' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [userMenu, setUserMenu] = useState(false);
  const [query, setQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const { user, admin, isAuthenticated, isAdmin, logout } = useAuth();
  const { search } = useGame();

  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
    setUserMenu(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!query.trim()) {
      return undefined;
    }

    const timer = setTimeout(() => {
      search(query.trim());
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }, 380);

    return () => clearTimeout(timer);
  }, [navigate, query, search]);

  const isActive = (to) => location.pathname === to;
  const displayName = user?.username || admin?.username || '';
  const initial = displayName?.[0]?.toUpperCase() || 'U';

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[120] border-b border-white/[0.07] bg-[#040611]/88 backdrop-blur-[18px]">
        <div className="mx-auto flex h-[94px] max-w-[1920px] items-center px-5 sm:px-8 xl:px-[52px]">
          <div className="flex min-w-0 items-center lg:flex-1">
            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-[52px] w-[52px] items-center justify-center rounded-2xl bg-gradient-to-br from-[#5C3BFF] via-[#6647FF] to-[#4531D8] shadow-[0_0_28px_rgba(101,71,255,0.35)]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="13 2 4 13 11.5 13 10.5 22 20 10.5 12.7 10.5 13 2" />
                </svg>
              </div>
              <span className="font-[var(--font-head)] text-[1.8rem] font-extrabold tracking-[-0.05em] sm:text-[2rem]">
                <span className="text-white">Anti</span>
                <span className="text-[#1ED8FF]">Gravity</span>
              </span>
            </Link>
          </div>

          <nav className="hidden items-center justify-center gap-8 lg:flex xl:gap-[54px]">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`relative py-8 text-[1.08rem] font-semibold tracking-[-0.02em] transition-colors ${
                  isActive(item.to) ? 'text-white' : 'text-white/88 hover:text-white'
                }`}
              >
                {item.label}
                {isActive(item.to) && (
                  <span className="absolute bottom-0 left-0 h-[5px] w-full rounded-t-full bg-[#7A46FF] shadow-[0_0_16px_rgba(122,70,255,0.75)]" />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-3 lg:flex-1 lg:gap-5 xl:gap-7">
            <button
              type="button"
              aria-label="Open search"
              onClick={() => setSearchOpen((open) => !open)}
              className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.03] text-white/80 transition hover:text-white lg:hidden"
            >
              <Search size={20} />
            </button>

            <div className="relative hidden lg:block">
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search games..."
                className="h-[56px] w-[340px] rounded-full border border-white/[0.08] bg-[#0A0F1F] pl-7 pr-14 text-[1rem] text-white outline-none transition placeholder:text-[#757B93] focus:border-[#273452] xl:w-[450px] xl:text-[1.08rem]"
              />
              {query ? (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-white/55 transition hover:text-white"
                  aria-label="Clear search"
                >
                  <X size={18} />
                </button>
              ) : (
                <Search
                  size={21}
                  className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-white/40"
                />
              )}
            </div>

            {isAuthenticated || isAdmin ? (
              <div className="relative hidden sm:block">
                <button
                  type="button"
                  onClick={() => setUserMenu((open) => !open)}
                  className="flex h-[56px] items-center gap-3 rounded-[18px] bg-gradient-to-r from-[#6A3EFF] to-[#7C56FF] px-3 pr-5 text-white shadow-[0_0_26px_rgba(112,78,255,0.38)] transition hover:-translate-y-0.5"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-bold text-[#5F3CF6]">
                    {initial}
                  </span>
                  <span className="hidden max-w-[118px] truncate text-sm font-semibold lg:block">
                    {displayName}
                  </span>
                </button>

                {userMenu && (
                  <div
                    className="absolute right-0 top-[calc(100%+14px)] w-[220px] rounded-[22px] border border-white/[0.08] bg-[#0B111E]/95 p-3 shadow-[0_28px_48px_rgba(0,0,0,0.55)] backdrop-blur-xl"
                    onMouseLeave={() => setUserMenu(false)}
                  >
                    <div className="flex flex-col gap-1">
                      {isAuthenticated && (
                        <Link
                          to="/dashboard"
                          className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-white/75 transition hover:bg-white/[0.05] hover:text-white"
                        >
                          <LayoutDashboard size={17} />
                          My Dashboard
                        </Link>
                      )}
                      {isAdmin && (
                        <Link
                          to="/admin"
                          className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-white/75 transition hover:bg-white/[0.05] hover:text-white"
                        >
                          <Shield size={17} />
                          Admin Panel
                        </Link>
                      )}
                    </div>
                    <div className="mt-3 border-t border-white/[0.06] pt-3">
                      <button
                        type="button"
                        onClick={() => {
                          logout();
                          navigate('/');
                        }}
                        className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-[#FF5E72] transition hover:bg-[#FF5E72]/10"
                      >
                        <LogOut size={17} />
                        Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/login"
                className="hidden h-[56px] items-center gap-3 rounded-[18px] bg-gradient-to-r from-[#6A3EFF] to-[#7C56FF] px-7 text-[1.02rem] font-semibold text-white shadow-[0_0_28px_rgba(112,78,255,0.38)] transition hover:-translate-y-0.5 hover:shadow-[0_0_36px_rgba(112,78,255,0.48)] sm:inline-flex"
              >
                <User size={18} />
                Sign In
              </Link>
            )}

            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMenuOpen((open) => !open)}
              className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.03] text-white transition hover:bg-white/[0.06] lg:h-auto lg:w-auto lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0"
            >
              {menuOpen ? <X size={30} /> : <Menu size={38} className="lg:h-9 lg:w-9" />}
            </button>
          </div>
        </div>

        {searchOpen && (
          <div className="border-t border-white/[0.06] px-5 pb-4 pt-3 lg:hidden sm:px-8">
            <div className="relative">
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search games..."
                className="h-12 w-full rounded-full border border-white/[0.08] bg-[#0A0F1F] pl-5 pr-12 text-base text-white outline-none placeholder:text-[#757B93]"
                autoFocus
              />
              {query ? (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/55"
                >
                  <X size={18} />
                </button>
              ) : (
                <Search
                  size={18}
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/40"
                />
              )}
            </div>
          </div>
        )}
      </header>

      {menuOpen && (
        <>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 z-[118] bg-black/72 backdrop-blur-sm"
          />
          <aside className="fixed right-0 top-0 z-[119] flex h-screen w-[320px] max-w-[86vw] flex-col border-l border-white/[0.08] bg-[#07101D] px-6 pb-6 pt-[112px] shadow-[-24px_0_56px_rgba(0,0,0,0.5)]">
            <nav className="flex flex-col gap-2">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`rounded-2xl px-4 py-3 text-base font-semibold transition ${
                    isActive(item.to)
                      ? 'bg-[#7A46FF]/16 text-[#B7A6FF]'
                      : 'text-white/76 hover:bg-white/[0.05] hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-auto border-t border-white/[0.06] pt-6">
              {isAuthenticated || isAdmin ? (
                <div className="flex flex-col gap-2">
                  {isAuthenticated && (
                    <Link
                      to="/dashboard"
                      className="rounded-2xl px-4 py-3 text-base font-semibold text-white/76 transition hover:bg-white/[0.05] hover:text-white"
                    >
                      Dashboard
                    </Link>
                  )}
                  {isAdmin && (
                    <Link
                      to="/admin"
                      className="rounded-2xl px-4 py-3 text-base font-semibold text-white/76 transition hover:bg-white/[0.05] hover:text-white"
                    >
                      Admin Panel
                    </Link>
                  )}
                  <button
                    type="button"
                    onClick={() => {
                      logout();
                      navigate('/');
                    }}
                    className="rounded-2xl px-4 py-3 text-left text-base font-semibold text-[#FF5E72] transition hover:bg-[#FF5E72]/10"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#6A3EFF] to-[#7C56FF] text-base font-semibold text-white shadow-[0_0_24px_rgba(112,78,255,0.32)]"
                >
                  <User size={18} />
                  Sign In
                </Link>
              )}
            </div>
          </aside>
        </>
      )}
    </>
  );
}
