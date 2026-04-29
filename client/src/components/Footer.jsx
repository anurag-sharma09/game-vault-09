import { Link } from 'react-router-dom';
import { Zap, GitBranch, MessageSquare, Video, MessageCircle, ExternalLink } from 'lucide-react';

const LINKS = {
  'Browse': [
    { label: 'All Games',   to: '/games' },
    { label: 'Trending',    to: '/games?sort=views' },
    { label: 'Free Games',  to: '/category/free' },
    { label: 'Action',      to: '/category/action' },
    { label: 'RPG',         to: '/category/rpg' },
    { label: 'Multiplayer', to: '/category/multiplayer' },
  ],
  'Account': [
    { label: 'Sign In',    to: '/login' },
    { label: 'Register',   to: '/login' },
    { label: 'Dashboard',  to: '/dashboard' },
    { label: 'Favorites',  to: '/dashboard' },
  ],
  'Company': [
    { label: 'Contact',    to: '/contact' },
    { label: 'FAQ',        to: '/contact#faq' },
    { label: 'Privacy',    to: '/' },
    { label: 'Admin',      to: '/admin/login' },
  ],
};

const SOCIALS = [
  { Icon: MessageSquare, href: '#', label: 'Twitter' },
  { Icon: Video,         href: '#', label: 'YouTube' },
  { Icon: MessageCircle, href: '#', label: 'Discord' },
  { Icon: GitBranch,     href: '#', label: 'GitHub' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04] mt-20" style={{ background: '#0B1220' }}>
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-4 shrink-0 w-fit">
              <div className="w-[32px] h-[32px] rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #7C3AED, #00D9FF)' }}>
                <Zap size={16} fill="white" color="white" />
              </div>
              <span className="font-[var(--font-head)] font-extrabold text-[1.05rem] tracking-tight">
                <span className="text-white">Anti</span><span className="text-[#00D9FF]">Gravity</span>
              </span>
            </Link>
            <p className="text-[#475569] text-sm leading-relaxed mb-5 max-w-[280px]">
              Discover and play the best games. Every link goes to the official source.
            </p>
            <div className="flex gap-2.5">
              {SOCIALS.map(({ Icon, href, label }) => (
                <a key={label} href={href}
                  className="w-[34px] h-[34px] rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-[#475569] hover:text-white hover:border-white/[0.12] hover:bg-white/[0.08] transition-all duration-200"
                  aria-label={label}>
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Link cols */}
          {Object.entries(LINKS).map(([group, links]) => (
            <div key={group}>
              <p className="text-[0.72rem] font-bold tracking-widest uppercase text-[#475569] mb-4">{group}</p>
              <ul className="flex flex-col gap-2.5">
                {links.map(l => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-sm text-[#94A3B8] hover:text-white transition-colors duration-200">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.04] mt-12 pt-6 flex flex-col sm:flex-row gap-4 justify-between items-center text-center sm:text-left">
          <p className="text-sm text-[#475569]">© 2026 AntiGravity Games. All rights reserved.</p>
          <p className="text-xs text-[#334155] flex items-center gap-1.5 justify-center sm:justify-start">
            <ExternalLink size={12} /> All downloads redirect to official sources only
          </p>
        </div>
      </div>
    </footer>
  );
}
