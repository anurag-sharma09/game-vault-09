import { ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="border-t border-white/8 bg-slate-950/60">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_1fr] lg:px-8">
        <div>
          <p className="font-display text-2xl text-white">Game Vault</p>
          <p className="mt-4 max-w-md text-sm leading-7 text-slate-300/76">
            A futuristic game discovery platform built to send players to official stores, publishers,
            and legal download destinations only.
          </p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-300/18 bg-emerald-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-100">
            <ShieldCheck className="h-4 w-4" />
            No Pirated Files
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200/76">
            Explore
          </p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-slate-300/76">
            <Link to="/" className="transition hover:text-white">
              Homepage
            </Link>
            <Link to="/games" className="transition hover:text-white">
              Browse Games
            </Link>
            <Link to="/categories" className="transition hover:text-white">
              Categories
            </Link>
            <Link to="/contact" className="transition hover:text-white">
              Contact
            </Link>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200/76">
            Legal Promise
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-300/76">
            Every redirect in this demo points toward an official publisher, platform, or storefront source.
            Replace sample data with your own catalog and keep the same legal-only rule in production.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
