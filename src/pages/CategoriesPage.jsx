import { ArrowRight, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import CategoryCard from '../components/CategoryCard.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { categories, games } from '../data/siteData.js'

function getCategoryInfo(categorySlug) {
  const categoryGames = games.filter((game) => game.categories.includes(categorySlug))
  return {
    count: categoryGames.length,
    image: categoryGames[0]?.image || categoryGames[0]?.banner
  }
}

function CategoriesPage() {
  return (
    <div className="mx-auto max-w-[92rem] px-4 pt-24 sm:px-6 lg:px-10 sm:pt-32 pb-20">
      <section className="glass-panel rounded-[24px] sm:rounded-[36px] p-6 sm:p-10">
        <SectionHeading
          eyebrow="Game Vault Library"
          title="Discovery Lanes"
          description="Explore our curated catalog organized by official genres and discovery lanes. Every link leads to a verified storefront."
        />

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="glass-panel rounded-[20px] p-4 sm:rounded-[26px] sm:p-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-200/60 sm:text-xs">Categories</p>
            <p className="mt-2 font-display text-2xl text-white sm:mt-3 sm:text-3xl">{categories.length}</p>
          </div>
          <div className="glass-panel rounded-[20px] p-4 sm:rounded-[26px] sm:p-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-200/60 sm:text-xs">Official Titles</p>
            <p className="mt-2 font-display text-2xl text-white sm:mt-3 sm:text-3xl">{games.length}</p>
          </div>
          <div className="glass-panel rounded-[20px] p-4 sm:rounded-[26px] sm:p-5">
            <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-100/60 sm:text-xs">
              <ShieldCheck className="h-4 w-4" />
              Verified
            </p>
            <p className="mt-2 text-xs leading-relaxed text-slate-400 sm:mt-3 sm:text-sm">
              All links are officially verified legal sources.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 xl:grid-cols-3">
        {categories.map((category) => {
          const info = getCategoryInfo(category.slug)
          return (
            <CategoryCard 
              key={category.slug} 
              category={category} 
              count={info.count} 
              image={info.image}
            />
          )
        })}
      </section>
    </div>
  )
}

export default CategoriesPage
