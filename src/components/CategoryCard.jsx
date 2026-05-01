import {
  BrainCircuit,
  CarFront,
  ChevronRight,
  Compass,
  Crosshair,
  Crown,
  Ghost,
  Monitor,
  Smartphone,
  Trophy,
  Blocks,
  Gamepad2,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const iconMap = {
  action: Crosshair,
  adventure: Compass,
  rpg: Crown,
  racing: CarFront,
  sports: Trophy,
  strategy: BrainCircuit,
  simulation: Blocks,
  horror: Ghost,
  'mobile-games': Smartphone,
  'pc-games': Monitor,
}

function CategoryCard({ category, count }) {
  const Icon = iconMap[category.slug] ?? Gamepad2

  return (
    <Link
      to={`/games?category=${category.slug}`}
      className="group block h-full rounded-[28px] transition duration-300 hover:-translate-y-1"
    >
      <article className="glass-panel relative flex h-full overflow-hidden rounded-[28px] p-6">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${category.accent} opacity-70 transition duration-300 group-hover:opacity-100`}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),transparent_28%,rgba(2,6,23,0.3))]" />

        <div className="relative flex h-full flex-col">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/12 bg-white/10 text-cyan-100">
            <Icon className="h-6 w-6" />
          </div>

          <div className="mt-8">
            <h3 className="font-display text-2xl text-white">{category.name}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-200/80">{category.blurb}</p>
          </div>

          <div className="mt-auto flex items-center justify-between pt-8 text-sm">
            <span className="text-slate-100/78">{count} linked games</span>
            <span className="inline-flex items-center gap-2 font-semibold text-cyan-100">
              Explore
              <ChevronRight className="h-4 w-4" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default CategoryCard
