import { motion, useScroll, useTransform } from 'framer-motion'
import {
  ArrowRight,
  BadgeCheck,
  Flame,
  PlayCircle,
  Quote,
  ShieldCheck,
  Sparkles,
  Stars,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import CategoryCard from '../components/CategoryCard.jsx'
import GameCard from '../components/GameCard.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { categories, featuredStats, games } from '../data/siteData.js'

const reveal = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
}

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
}

const communityQuotes = [
  {
    quote:
      'AntiGravity feels like a real launch platform, not a random link directory. The art direction sells the entire experience.',
    name: 'Aarav Kapoor',
    role: 'PC Community Member',
  },
  {
    quote:
      'The official-only redirect promise matters. I can browse upcoming titles and jump straight to real publisher pages without second guessing.',
    name: 'Maya Thompson',
    role: 'Console Player',
  },
  {
    quote:
      'The cinematic layout makes each game feel premium. It has the energy of a big studio website while staying useful.',
    name: 'Riku Sato',
    role: 'Mobile & Indie Fan',
  },
]

const newsroom = [
  {
    title: 'Launch Radar',
    body: 'Track the most watched official releases, newest redirect pages, and premium category drops in one scroll.',
    slug: 'grand-theft-auto-vi',
  },
  {
    title: 'Safe Redirect Promise',
    body: 'AntiGravity only sends players to verified publishers, official launchers, storefronts, and legal download pages.',
    slug: 'cyberpunk-2077',
  },
  {
    title: 'Cross-Platform Discovery',
    body: 'From PS5 tentpoles to Android racers, every shelf is built to feel intentional and high-end across devices.',
    slug: 'forza-horizon-5',
  },
]

function FeaturedReleaseCard({ game, large = false }) {
  return (
    <motion.article
      variants={reveal}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.28, ease: 'easeOut' }}
      className={`glass-panel group relative overflow-hidden rounded-[34px] ${
        large ? 'min-h-[34rem]' : 'min-h-[16.5rem]'
      }`}
    >
      <img
        src={large ? game.banner : game.image}
        alt={`${game.title} featured artwork`}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,13,0.04),rgba(5,7,13,0.18)_24%,rgba(5,7,13,0.84)_82%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_20%)]" />

      <div className="relative flex h-full flex-col justify-between p-6 sm:p-8">
        <div className="flex flex-wrap gap-2">
          {[game.featureTag, game.priceLabel, game.platforms[0]].map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-white/14 bg-black/24 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-100/86"
            >
              {badge}
            </span>
          ))}
        </div>

        <div className="max-w-2xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.36em] text-cyan-100/76">
            Featured Release
          </p>
          <h3 className={`mt-4 font-display uppercase leading-none text-white ${large ? 'text-6xl sm:text-7xl' : 'text-4xl'}`}>
            {game.title}
          </h3>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-200/78 sm:text-base">
            {game.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to={`/games/${game.slug}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/10 px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-white/16"
            >
              View Launch Page
            </Link>
            <a
              href={game.official_url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,rgba(168,85,247,0.98),rgba(34,211,238,0.92))] px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-slate-950 transition hover:brightness-110"
            >
              Visit Official Source
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

function countGames(categorySlug) {
  return games.filter((game) => game.categories.includes(categorySlug)).length
}

function HomePage() {
  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 700], [0, 120])
  const heroScale = useTransform(scrollY, [0, 700], [1, 1.08])
  const featuredGame =
    games.find((game) => game.slug === 'grand-theft-auto-vi') ??
    games.find((game) => game.slug === 'grand-theft-auto-v') ??
    games[0]
  const featuredReleases = [...games]
    .filter((game) => game.priceModel !== 'Free')
    .sort((left, right) => right.popularity - left.popularity)
    .slice(0, 3)
  const trendingGames = [...games].sort((left, right) => right.popularity - left.popularity).slice(0, 8)
  const latestGames = [...games].sort((left, right) => right.releaseRank - left.releaseRank).slice(0, 3)
  const popularCategories = [...categories]
    .sort((left, right) => countGames(right.slug) - countGames(left.slug))
    .slice(0, 6)

  return (
    <div className="overflow-hidden">
      <section className="relative min-h-[100svh]">
        <motion.div
          style={{ y: heroY, scale: heroScale }}
          className="absolute inset-0"
        >
          <img
            src={featuredGame.banner}
            alt={`${featuredGame.title} hero artwork`}
            loading="eager"
            className="h-full w-full object-cover object-center"
          />
        </motion.div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,13,0.2),rgba(5,7,13,0.48)_34%,rgba(5,7,13,0.96)_84%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(168,85,247,0.26),transparent_24%),radial-gradient(circle_at_84%_14%,rgba(34,211,238,0.18),transparent_20%)]" />

        <div className="relative mx-auto flex min-h-[100svh] max-w-[92rem] items-end px-4 pb-18 pt-32 sm:px-6 lg:px-10">
          <div className="grid w-full gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="max-w-4xl"
            >
              <motion.p
                variants={reveal}
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-black/28 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.38em] text-cyan-100/82 backdrop-blur-sm"
              >
                <Stars className="h-4 w-4" />
                Cinematic Game Discovery
              </motion.p>

              <motion.h1
                variants={reveal}
                className="mt-8 max-w-5xl font-display text-[5.2rem] uppercase leading-[0.9] text-white sm:text-[7rem] lg:text-[8rem]"
              >
                Enter The Next Generation Of Gaming
              </motion.h1>

              <motion.p
                variants={reveal}
                className="mt-6 max-w-2xl text-base leading-8 text-slate-200/80 sm:text-lg"
              >
                AntiGravity Games blends premium launch-page presentation with a safe official-link
                platform, so players can discover, explore, and jump directly into verified game
                destinations without the noise.
              </motion.p>

              <motion.div variants={reveal} className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/games"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,rgba(168,85,247,0.98),rgba(34,211,238,0.92))] px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.16em] text-slate-950 transition hover:brightness-110"
                >
                  Explore Games
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={featuredGame.official_url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/14 bg-white/10 px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-white/16"
                >
                  Play Now
                  <PlayCircle className="h-4 w-4" />
                </a>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-10 grid gap-4 sm:grid-cols-3"
              >
                {featuredStats.map((stat) => (
                  <div key={stat.value} className="glass-panel rounded-[26px] bg-black/24 p-4">
                    <p className="font-display text-3xl uppercase leading-none text-white">
                      {stat.value}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-slate-300/74">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.18, ease: 'easeOut' }}
              className="hidden lg:block"
            >
              <div className="glass-panel soft-glow relative overflow-hidden rounded-[34px]">
                <img
                  src={featuredGame.image}
                  alt={`${featuredGame.title} spotlight card`}
                  loading="eager"
                  className="h-[36rem] w-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,13,0.06),rgba(5,7,13,0.76))]" />
                <div className="absolute inset-0 p-7">
                  <div className="flex h-full flex-col justify-between">
                    <div className="flex justify-end">
                      <div className="rounded-[1.6rem] border border-white/12 bg-black/24 px-5 py-4 backdrop-blur-sm">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-cyan-100/72">
                          Spotlight
                        </p>
                        <p className="mt-2 font-display text-3xl uppercase leading-none text-white">
                          {featuredGame.store}
                        </p>
                      </div>
                    </div>

                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-cyan-100/72">
                        Featured World
                      </p>
                      <h2 className="mt-4 font-display text-6xl uppercase leading-none text-white">
                        {featuredGame.title}
                      </h2>
                      <p className="mt-4 max-w-md text-sm leading-7 text-slate-200/78">
                        {featuredGame.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="mx-auto -mt-16 max-w-[92rem] px-4 sm:px-6 lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={stagger}
          className="glass-panel luxury-divider grid gap-4 rounded-[32px] px-6 py-6 sm:grid-cols-3 sm:px-8"
        >
          <motion.div variants={reveal} className="flex items-start gap-4">
            <BadgeCheck className="mt-1 h-5 w-5 text-cyan-100" />
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-cyan-100/72">
                Trusted
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-300/78">
                Official redirects only, with premium presentation and fast discovery.
              </p>
            </div>
          </motion.div>
          <motion.div variants={reveal} className="flex items-start gap-4">
            <Flame className="mt-1 h-5 w-5 text-violet-100" />
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-cyan-100/72">
                Trending
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-300/78">
                Browse premium worlds, live-service giants, and upcoming launch pages in one place.
              </p>
            </div>
          </motion.div>
          <motion.div variants={reveal} className="flex items-start gap-4">
            <ShieldCheck className="mt-1 h-5 w-5 text-emerald-100" />
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-cyan-100/72">
                Safe Access
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-300/78">
                No cracked files, no mirrors, and no unofficial launchers anywhere in the flow.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
        className="mx-auto mt-28 max-w-[92rem] px-4 sm:px-6 lg:px-10"
      >
        <SectionHeading
          eyebrow="Featured Releases"
          title="Cinematic launch pages for the titles people care about most"
          description="This first shelf is built to feel premium and editorial, with oversized artwork, confident spacing, and a strong path into official sources."
        />

        <div className="mt-10 grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          <FeaturedReleaseCard game={featuredReleases[0]} large />
          <div className="grid gap-6">
            {featuredReleases.slice(1).map((game) => (
              <FeaturedReleaseCard key={game.id} game={game} />
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
        className="mx-auto mt-28 max-w-[92rem] px-4 sm:px-6 lg:px-10"
      >
        <SectionHeading
          eyebrow="Trending Games"
          title="A premium slider built for quick discovery"
          description="Swipe or scroll across the most watched game pages right now, each with strong artwork and direct paths to official destinations."
        />

        <motion.div
          variants={reveal}
          className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {trendingGames.map((game) => (
            <div key={game.id} className="min-w-[320px] max-w-[360px] flex-1 snap-start">
              <GameCard game={game} compact />
            </div>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        variants={stagger}
        className="mx-auto mt-28 max-w-[92rem] px-4 sm:px-6 lg:px-10"
      >
        <SectionHeading
          eyebrow="Categories"
          title="Every lane is built like a premium genre portal"
          description="Action, RPG, FPS, racing, strategy, sports, indie, and open-world categories keep the site feeling curated instead of crowded."
          action={
            <Link
              to="/categories"
              className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-white/10"
            >
              View Categories
              <ArrowRight className="h-4 w-4" />
            </Link>
          }
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {popularCategories.map((category) => (
            <motion.div key={category.slug} variants={reveal}>
              <CategoryCard category={category} count={countGames(category.slug)} />
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        variants={stagger}
        className="mx-auto mt-28 max-w-[92rem] px-4 sm:px-6 lg:px-10"
      >
        <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
          <motion.div variants={reveal}>
            <SectionHeading
              eyebrow="Why AntiGravity"
              title="Built with brand-level presentation and player trust in mind"
              description="This isn’t just a list of outbound links. It’s a launch-ready frontend built to feel cinematic, safe, and premium from first scroll to final click."
            />
          </motion.div>

          <motion.div variants={stagger} className="grid gap-4 sm:grid-cols-2">
            {[
              { value: `${games.length}+`, label: 'Official game pages curated' },
              { value: `${categories.length}`, label: 'Cinematic discovery lanes' },
              { value: '0', label: 'Pirated or mirrored files hosted' },
              { value: '24/7', label: 'Premium browsing energy' },
            ].map((item) => (
              <motion.div key={item.label} variants={reveal} className="glass-panel rounded-[30px] p-6">
                <p className="font-display text-6xl uppercase leading-none text-white">{item.value}</p>
                <p className="mt-4 text-sm leading-7 text-slate-300/76">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        variants={stagger}
        className="mx-auto mt-28 max-w-[92rem] px-4 sm:px-6 lg:px-10"
      >
        <SectionHeading
          eyebrow="Community"
          title="Players should feel like they entered an official AAA site"
          description="The goal of AntiGravity is simple: turn discovery into a premium moment while keeping every redirect clean, legal, and trustworthy."
        />

        <div className="mt-10 grid gap-6 xl:grid-cols-3">
          {communityQuotes.map((quote) => (
            <motion.article
              key={quote.name}
              variants={reveal}
              className="glass-panel rounded-[30px] p-6"
            >
              <Quote className="h-8 w-8 text-cyan-100/82" />
              <p className="mt-6 text-sm leading-8 text-slate-200/82">{quote.quote}</p>
              <div className="mt-8 border-t border-white/8 pt-5">
                <p className="font-display text-3xl uppercase leading-none text-white">{quote.name}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
                  {quote.role}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="news"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        variants={stagger}
        className="mx-auto mt-28 max-w-[92rem] px-4 sm:px-6 lg:px-10"
      >
        <SectionHeading
          eyebrow="Newsroom"
          title="Premium editorial beats for your homepage flow"
          description="Use this section for launch drops, trend notes, major store arrivals, and safe redirect announcements."
        />

        <div className="mt-10 grid gap-6 xl:grid-cols-3">
          {newsroom.map((item, index) => {
            const game = games.find((entry) => entry.slug === item.slug) ?? latestGames[index % latestGames.length]

            return (
              <motion.article
                key={item.title}
                variants={reveal}
                className="glass-panel group overflow-hidden rounded-[30px]"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={game.banner}
                    alt={`${item.title} visual`}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,13,0.08),rgba(5,7,13,0.82))]" />
                </div>

                <div className="p-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-cyan-100/72">
                    {game.title}
                  </p>
                  <h3 className="mt-4 font-display text-[2.2rem] uppercase leading-none text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300/78">{item.body}</p>
                  <Link
                    to={`/games/${game.slug}`}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-cyan-100 transition hover:text-white"
                  >
                    Read Feature
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            )
          })}
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        variants={reveal}
        className="mx-auto mt-28 max-w-[92rem] px-4 pb-8 sm:px-6 lg:px-10"
      >
        <div className="glass-panel relative overflow-hidden rounded-[38px] px-6 py-12 sm:px-10 lg:px-12">
          <img
            src={latestGames[0]?.banner ?? featuredGame.banner}
            alt="Final call to action backdrop"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,7,13,0.94),rgba(5,7,13,0.62),rgba(5,7,13,0.82))]" />
          <div className="relative max-w-3xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.38em] text-cyan-100/72">
              Final CTA
            </p>
            <h2 className="mt-6 font-display text-5xl uppercase leading-none text-white sm:text-6xl">
              Premium discovery starts here and ends at the official source
            </h2>
            <p className="mt-6 text-sm leading-8 text-slate-200/80 sm:text-base">
              Browse the latest games, dive into launch-page style detail views, and send players
              exactly where they should go next: verified stores, publishers, and official platform pages.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/games"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,rgba(168,85,247,0.98),rgba(34,211,238,0.92))] px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.16em] text-slate-950 transition hover:brightness-110"
              >
                Explore Games
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/14 bg-white/8 px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-white/12"
              >
                Contact AntiGravity
                <Sparkles className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default HomePage
