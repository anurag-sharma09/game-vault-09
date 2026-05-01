import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <section className="glass-panel rounded-[36px] px-6 py-12 text-center sm:px-10">
      <p className="text-xs font-semibold uppercase tracking-[0.34em] text-cyan-200/78">404</p>
      <h1 className="mt-4 font-display text-5xl text-white">Page not found</h1>
      <p className="mx-auto mt-4 max-w-2xl text-sm leading-8 text-slate-300/76">
        The page you requested does not exist in this sample build. Use the main games listing to continue browsing official game links safely.
      </p>
      <Link
        to="/games"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,rgba(168,85,247,0.95),rgba(34,211,238,0.95))] px-6 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-110"
      >
        Explore Games
        <ArrowRight className="h-4 w-4" />
      </Link>
    </section>
  )
}

export default NotFoundPage
