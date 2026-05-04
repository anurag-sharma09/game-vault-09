import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div className="mx-auto max-w-[92rem] px-4 pt-32 sm:px-6 lg:px-10">
      <section className="glass-panel rounded-[38px] px-6 py-14 text-center sm:px-10">
        <p className="text-[10px] font-semibold uppercase tracking-[0.38em] text-cyan-100/72">404</p>
        <h1 className="mt-5 font-display text-6xl uppercase leading-none text-white">Page not found</h1>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-slate-300/76">
          The page you requested does not exist in the current Game Vault build. Use the main games listing to continue browsing official game links safely.
        </p>
        <Link
          to="/games"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,rgba(168,85,247,0.95),rgba(34,211,238,0.95))] px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-slate-950 transition hover:brightness-110"
        >
          Explore Games
          <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </div>
  )
}

export default NotFoundPage
