import { motion } from 'framer-motion'
import {
  BrainCircuit,
  CarFront,
  ChevronRight,
  Crosshair,
  Crown,
  Globe2,
  Trophy,
  Gamepad2,
  Sparkles,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const iconMap = {
  action: Crosshair,
  rpg: Crown,
  fps: Crosshair,
  racing: CarFront,
  strategy: BrainCircuit,
  sports: Trophy,
  indie: Sparkles,
  'open-world': Globe2,
}

function CategoryCard({ category, count }) {
  const Icon = iconMap[category.slug] ?? Gamepad2

  return (
    <Link to={`/categories/${category.slug}`} className="block h-full">
      <motion.article
        whileHover={{ y: -8 }}
        transition={{ duration: 0.28, ease: 'easeOut' }}
        className="glass-panel group relative flex h-full overflow-hidden rounded-[30px] p-6"
      >
        <div
          className={`absolute inset-0 bg-gradient-to-br ${category.accent} opacity-55 transition duration-300 group-hover:opacity-90`}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.08),transparent_28%,rgba(2,6,23,0.4))]" />

        <div className="relative flex h-full flex-col">
          <div className="flex h-16 w-16 items-center justify-center rounded-[1.35rem] border border-white/14 bg-black/18 text-cyan-100">
            <Icon className="h-7 w-7" />
          </div>

          <div className="mt-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-cyan-100/76">
              Category
            </p>
            <h3 className="mt-3 font-display text-[2.2rem] uppercase leading-none text-white">
              {category.name}
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-100/78">{category.blurb}</p>
          </div>

          <div className="mt-auto flex items-center justify-between pt-8 text-sm">
            <span className="text-slate-100/78">{count} games linked</span>
            <span className="inline-flex items-center gap-2 font-semibold uppercase tracking-[0.16em] text-cyan-100">
              Explore
              <ChevronRight className="h-4 w-4" />
            </span>
          </div>
        </div>
      </motion.article>
    </Link>
  )
}

export default CategoryCard
