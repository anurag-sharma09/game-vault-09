import { motion } from 'framer-motion'

const CATEGORIES = [
  'All',
  'PC Gaming',
  'PlayStation',
  'Xbox',
  'Nintendo',
  'Mobile',
  'Esports',
  'Indie',
  'Gaming',
]

function CategoryTabs({ activeCategory, onSelectCategory }) {
  return (
    <div className="relative mb-12 flex items-center justify-center">
      <div className="flex flex-wrap justify-center gap-3">
        {CATEGORIES.map((category) => {
          const isActive = activeCategory === category
          return (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              className={`relative rounded-full border px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
                isActive
                  ? 'border-violet-500/50 text-white'
                  : 'border-white/10 bg-white/5 text-slate-400 hover:border-white/20 hover:bg-white/10 hover:text-white'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeCategoryBg"
                  className="absolute inset-0 rounded-full bg-[linear-gradient(135deg,rgba(168,85,247,0.4),rgba(34,211,238,0.3))]"
                  initial={false}
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default CategoryTabs
