import { ArrowRight, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import CategoryCard from '../components/CategoryCard.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { categories, games } from '../data/siteData.js'

function countGames(categorySlug) {
  return games.filter((game) => game.categories.includes(categorySlug)).length
}

function CategoriesPage() {
  return (
    <div className="space-y-10">
      <section className="glass-panel rounded-[36px] px-6 py-10 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Categories"
          title="Explore every discovery lane"
          description="From action and RPGs to mobile-first strategy and premium PC releases, these categories help players reach the official destination faster."
          action={
            <Link
              to="/games"
              className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,rgba(168,85,247,0.95),rgba(34,211,238,0.95))] px-5 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-110"
            >
              Browse All Games
              <ArrowRight className="h-4 w-4" />
            </Link>
          }
        />

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="glass-panel rounded-[26px] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/76">Total Categories</p>
            <p className="mt-3 font-display text-3xl text-white">{categories.length}</p>
          </div>
          <div className="glass-panel rounded-[26px] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/76">Linked Games</p>
            <p className="mt-3 font-display text-3xl text-white">{games.length}</p>
          </div>
          <div className="glass-panel rounded-[26px] p-5">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-100/76">
              <ShieldCheck className="h-4 w-4" />
              Official Rule
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-300/76">
              Every category funnels users toward legal publisher and storefront links only.
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {categories.map((category) => (
          <CategoryCard key={category.slug} category={category} count={countGames(category.slug)} />
        ))}
      </section>
    </div>
  )
}

export default CategoriesPage
