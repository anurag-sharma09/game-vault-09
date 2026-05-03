import { motion } from 'framer-motion'
import { ArrowUpRight, ShieldCheck, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

const footerLinks = [
  { label: 'Games', to: '/games' },
  { label: 'Categories', to: '/categories' },
  { label: 'News', to: '/#news' },
  { label: 'Contact', to: '/contact' },
]

function Footer() {
  return (
    <footer className="mt-20 border-t border-white/8 bg-[linear-gradient(180deg,rgba(5,7,13,0.88),rgba(5,7,13,1))]">
      <div className="mx-auto max-w-[92rem] px-4 py-16 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="glass-panel overflow-hidden rounded-[36px] p-8 sm:p-10"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(168,85,247,0.18),transparent_28%),radial-gradient(circle_at_85%_20%,rgba(34,211,238,0.14),transparent_24%)]" />
          <div className="relative grid gap-10 lg:grid-cols-[1.3fr_0.7fr_0.9fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.42em] text-cyan-100/72">
                AntiGravity Games
              </p>
              <h2 className="mt-5 font-display text-5xl uppercase leading-none text-white sm:text-6xl">
                Discover. Launch. Play.
              </h2>
              <p className="mt-6 max-w-xl text-sm leading-8 text-slate-300/78 sm:text-base">
                A cinematic discovery platform that helps players browse premium releases and jump
                directly to official stores, publishers, and verified game destinations.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/16 bg-emerald-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-100">
                  <ShieldCheck className="h-4 w-4" />
                  Official Redirects Only
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-violet-300/16 bg-violet-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-violet-100">
                  <Sparkles className="h-4 w-4" />
                  AAA Frontend Experience
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-cyan-100/72">
                Explore
              </p>
              <div className="mt-5 flex flex-col gap-3 text-sm text-slate-300/76">
                {footerLinks.map((link) =>
                  link.to.startsWith('/#') ? (
                    <a key={link.label} href={link.to} className="inline-flex items-center gap-2 transition hover:text-white">
                      {link.label}
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  ) : (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="inline-flex items-center gap-2 transition hover:text-white"
                    >
                      {link.label}
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  ),
                )}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-cyan-100/72">
                Legal Promise
              </p>
              <p className="mt-5 text-sm leading-8 text-slate-300/76">
                AntiGravity Games does not host pirated files, cracked installers, or unofficial
                mirrors. Every CTA points toward an official publisher, store, or platform source.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="mt-8 flex flex-col gap-4 border-t border-white/8 pt-6 text-xs uppercase tracking-[0.32em] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>AntiGravity Games</p>
          <p>Premium Game Discovery Platform</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
