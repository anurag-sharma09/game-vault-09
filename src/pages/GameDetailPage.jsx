import { motion, useScroll, useTransform } from 'framer-motion'
import {
  ArrowRight,
  Download,
  Globe,
  PlayCircle,
  ShieldCheck,
  Sparkles,
  Star,
} from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import GameCard from '../components/GameCard.jsx'
import GameArtwork from '../components/GameArtwork.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { games, getGameBySlug } from '../data/siteData.js'

const reveal = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: 'easeOut' },
  },
}

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
}

function GameDetailPage() {
  const { slug } = useParams()
  const game = getGameBySlug(slug)
  const { scrollY } = useScroll()
  const bannerY = useTransform(scrollY, [0, 800], [0, 90])
  const bannerScale = useTransform(scrollY, [0, 800], [1, 1.06])

  if (!game) {
    return (
      <section className="mx-auto max-w-[92rem] px-4 pt-32 sm:px-6 lg:px-10">
        <div className="glass-panel rounded-[38px] px-6 py-14 text-center sm:px-10">
          <p className="text-[10px] font-semibold uppercase tracking-[0.38em] text-cyan-100/72">
            Not Found
          </p>
          <h1 className="mt-5 font-display text-6xl uppercase leading-none text-white">
            Game Page Missing
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-slate-300/76">
            That launch page does not exist in the current catalog. Head back to the main games
            listing to keep browsing official destinations.
          </p>
          <Link
            to="/games"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,rgba(168,85,247,0.98),rgba(34,211,238,0.92))] px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-slate-950 transition hover:brightness-110"
          >
            Browse Games
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    )
  }

  const relatedGames = [...games]
    .filter(
      (candidate) =>
        candidate.slug !== game.slug &&
        candidate.categories.some((category) => game.categories.includes(category)),
    )
    .sort((left, right) => right.popularity - left.popularity)
    .slice(0, 3)

  return (
    <div className="overflow-hidden">
      <section className="relative min-h-[100svh]">
        <motion.div style={{ y: bannerY, scale: bannerScale }} className="absolute inset-0">
          <img
            src={game.banner}
            alt={`${game.title} cinematic banner`}
            loading="eager"
            className="h-full w-full object-cover object-center"
          />
        </motion.div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,13,0.18),rgba(5,7,13,0.48)_34%,rgba(5,7,13,0.94)_84%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(168,85,247,0.2),transparent_24%),radial-gradient(circle_at_82%_16%,rgba(34,211,238,0.14),transparent_22%)]" />

        <div className="relative mx-auto flex min-h-[100svh] max-w-[92rem] items-end px-4 pb-16 pt-32 sm:px-6 lg:px-10">
          <div className="grid w-full gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="max-w-4xl"
            >
              <motion.div
                variants={reveal}
                className="flex flex-wrap items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.34em] text-cyan-100/72"
              >
                <Link to="/games" className="transition hover:text-white">
                  Games
                </Link>
                <span>/</span>
                <span>{game.genre}</span>
              </motion.div>

              <motion.h1
                variants={reveal}
                className="mt-8 font-display text-[5.2rem] uppercase leading-[0.9] text-white sm:text-[6.8rem] lg:text-[7.4rem]"
              >
                {game.title}
              </motion.h1>

              <motion.p
                variants={reveal}
                className="mt-6 max-w-2xl text-base leading-8 text-slate-200/80 sm:text-lg"
              >
                {game.description}
              </motion.p>

              <motion.div variants={reveal} className="mt-8 flex flex-wrap gap-3">
                <a
                  href={game.official_url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,rgba(168,85,247,0.98),rgba(34,211,238,0.92))] px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.16em] text-slate-950 transition hover:brightness-110"
                >
                  <Download className="h-4 w-4" />
                  Download Officially
                </a>
                <a
                  href={game.websiteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/10 px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-white/16"
                >
                  <Globe className="h-4 w-4" />
                  Visit Website
                </a>
                <a
                  href={game.playUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-cyan-300/18 bg-cyan-300/10 px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.16em] text-cyan-50 transition hover:bg-cyan-300/16"
                >
                  <PlayCircle className="h-4 w-4" />
                  Play Now
                </a>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-10 grid gap-4 sm:grid-cols-3"
              >
                <div className="glass-panel rounded-[26px] bg-black/24 p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-cyan-100/72">
                    Genre
                  </p>
                  <p className="mt-3 font-display text-3xl uppercase leading-none text-white">
                    {game.genre}
                  </p>
                </div>
                <div className="glass-panel rounded-[26px] bg-black/24 p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-cyan-100/72">
                    Rating
                  </p>
                  <p className="mt-3 inline-flex items-center gap-2 font-display text-3xl uppercase leading-none text-white">
                    <Star className="h-5 w-5 fill-amber-300 text-amber-300" />
                    {game.rating.toFixed(1)}
                  </p>
                </div>
                <div className="glass-panel rounded-[26px] bg-black/24 p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-cyan-100/72">
                    Platforms
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-200/78">
                    {game.platforms.join(' / ')}
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="hidden lg:block"
            >
              <div className="glass-panel relative overflow-hidden rounded-[34px]">
                <img
                  src={game.image}
                  alt={`${game.title} hero poster`}
                  loading="eager"
                  className="h-[36rem] w-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,13,0.02),rgba(5,7,13,0.82))]" />
                <div className="absolute inset-0 p-7">
                  <div className="flex h-full flex-col justify-between">
                    <div className="flex justify-end">
                      <div className="rounded-[1.6rem] border border-white/12 bg-black/24 px-5 py-4 backdrop-blur-sm">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-cyan-100/72">
                          Publisher
                        </p>
                        <p className="mt-2 font-display text-3xl uppercase leading-none text-white">
                          {game.publisher}
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-cyan-100/72">
                        Launch Page
                      </p>
                      <h2 className="mt-4 font-display text-5xl uppercase leading-none text-white">
                        {game.store}
                      </h2>
                      <p className="mt-4 max-w-md text-sm leading-7 text-slate-200/78">
                        Official source routing, premium motion, and a studio-style content flow for
                        every title in the catalog.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        variants={stagger}
        className="mx-auto mt-24 max-w-[92rem] px-4 sm:px-6 lg:px-10"
      >
        <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          <motion.article variants={reveal} className="glass-panel rounded-[34px] p-6 sm:p-8">
            <SectionHeading
              eyebrow="About The Experience"
              title={`A launch-page style showcase for ${game.title}`}
              description={game.description}
            />
            <p className="mt-6 text-sm leading-8 text-slate-300/78">{game.vaultNote}</p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {game.highlights.map((highlight) => (
                <div key={highlight} className="rounded-[24px] border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] text-white">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </motion.article>

          <motion.article variants={reveal} className="glass-panel rounded-[34px] p-6 sm:p-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-cyan-100/72">
              Quick Facts
            </p>
            <div className="mt-6 space-y-4 text-sm text-slate-300/78">
              <div className="flex items-start justify-between gap-4 border-b border-white/8 pb-4">
                <span>Developer</span>
                <span className="text-right text-white">{game.developer}</span>
              </div>
              <div className="flex items-start justify-between gap-4 border-b border-white/8 pb-4">
                <span>Price</span>
                <span className="text-right text-white">{game.price}</span>
              </div>
              <div className="flex items-start justify-between gap-4 border-b border-white/8 pb-4">
                <span>Release Year</span>
                <span className="text-right text-white">{game.releaseYear}</span>
              </div>
              <div className="flex items-start justify-between gap-4 border-b border-white/8 pb-4">
                <span>Supported Platforms</span>
                <span className="max-w-[15rem] text-right text-white">
                  {game.platforms.join(', ')}
                </span>
              </div>
              <div className="flex items-start justify-between gap-4 border-b border-white/8 pb-4">
                <span>Store Coverage</span>
                <span className="max-w-[15rem] text-right text-white">
                  {game.supportedStores.join(', ')}
                </span>
              </div>
              <div className="flex items-start justify-between gap-4 border-b border-white/8 pb-4">
                <span>Availability</span>
                <span className="text-right text-white">{game.launchWindow}</span>
              </div>
              <div className="flex items-start gap-3 rounded-[24px] border border-emerald-300/14 bg-emerald-300/8 p-4">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-100" />
                <p className="text-sm leading-7 text-emerald-50/84">
                  Game Vault routes this page to official sources only. No pirated files, cracked
                  installers, or mirrored downloads are used anywhere in the experience.
                </p>
              </div>
            </div>
          </motion.article>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        variants={stagger}
        className="mx-auto mt-24 max-w-[92rem] px-4 sm:px-6 lg:px-10"
      >
        <SectionHeading
          eyebrow="Gallery"
          title="Cinematic world panels"
          description="A launch-page gallery gives each game a stronger sense of atmosphere and keeps the scroll feeling editorial instead of purely functional."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div variants={reveal} className="glass-panel overflow-hidden rounded-[34px]">
            <GameArtwork
              title={game.screenshots[0].title}
              subtitle={game.screenshots[0].caption}
              imageSrc={game.screenshots[0].src}
              alt={`${game.title} gallery feature`}
              palette={game.palette}
              badges={[game.title, game.featureTag]}
              className="h-[30rem] rounded-none"
              titleSize="text-5xl"
              loading="lazy"
            />
          </motion.div>

          <div className="grid gap-6">
            {game.screenshots.slice(1).map((shot) => (
              <motion.div key={shot.title} variants={reveal} className="glass-panel overflow-hidden rounded-[34px]">
                <GameArtwork
                  title={shot.title}
                  subtitle={shot.caption}
                  imageSrc={shot.src}
                  alt={`${game.title} screenshot ${shot.title}`}
                  palette={game.palette}
                  badges={[game.genre]}
                  className="h-[14rem] rounded-none"
                  titleSize="text-3xl"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {game.systemRequirements ? (
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={stagger}
          className="mx-auto mt-24 max-w-[92rem] px-4 sm:px-6 lg:px-10"
        >
          <SectionHeading
            eyebrow="Technical Specs"
            title="System Requirements"
            description="Ensure your machine is ready for the experience. These specifications are provided by the official developers."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { label: 'OS', value: game.systemRequirements.os },
              { label: 'CPU', value: game.systemRequirements.cpu },
              { label: 'RAM', value: game.systemRequirements.ram },
              { label: 'GPU', value: game.systemRequirements.gpu },
              { label: 'Storage', value: game.systemRequirements.storage },
            ].map((spec) => (
              <div
                key={spec.label}
                className="glass-panel rounded-[26px] bg-white/4 p-6 transition hover:bg-white/6"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-cyan-100/72">
                  {spec.label}
                </p>
                <p className="mt-4 text-sm font-medium leading-relaxed text-white">
                  {spec.value}
                </p>
              </div>
            ))}
          </div>
        </motion.section>
      ) : null}

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        variants={stagger}
        className="mx-auto mt-24 max-w-[92rem] px-4 sm:px-6 lg:px-10"
      >
        <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          <motion.article variants={reveal} className="glass-panel relative overflow-hidden rounded-[34px] p-6 sm:p-8">
            <img
              src={game.banner}
              alt={`${game.title} trailer preview`}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,7,13,0.92),rgba(5,7,13,0.58),rgba(5,7,13,0.82))]" />
            <div className="relative max-w-2xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-cyan-100/72">
                Official Trailer
              </p>
              <h2 className="mt-5 font-display text-5xl uppercase leading-none text-white">
                Watch the world come alive
              </h2>
              <p className="mt-5 text-sm leading-8 text-slate-200/80">
                Use this cinematic panel as the trailer beat inside the launch page experience, then
                send the player directly to the official website or store destination.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={game.websiteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,rgba(168,85,247,0.98),rgba(34,211,238,0.92))] px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.16em] text-slate-950 transition hover:brightness-110"
                >
                  <PlayCircle className="h-4 w-4" />
                  Watch on Official Site
                </a>
                <Link
                  to="/games"
                  className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/10 px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-white/16"
                >
                  More Releases
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.article>

          <motion.article variants={reveal} className="glass-panel rounded-[34px] p-6 sm:p-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-cyan-100/72">
              Redirect Options
            </p>
            <div className="mt-6 space-y-3">
              <a
                href={game.official_url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,rgba(168,85,247,0.98),rgba(34,211,238,0.92))] px-5 py-3.5 text-sm font-semibold uppercase tracking-[0.16em] text-slate-950 transition hover:brightness-110"
              >
                <Download className="h-4 w-4" />
                Download Officially
              </a>
              <a
                href={game.websiteUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/14 bg-white/8 px-5 py-3.5 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-white/12"
              >
                <Globe className="h-4 w-4" />
                Visit Website
              </a>
              <a
                href={game.playUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-cyan-300/18 bg-cyan-300/10 px-5 py-3.5 text-sm font-semibold uppercase tracking-[0.16em] text-cyan-50 transition hover:bg-cyan-300/16"
              >
                <PlayCircle className="h-4 w-4" />
                Play Now
              </a>
            </div>

            <div className="mt-6 rounded-[24px] border border-white/10 bg-white/5 p-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-cyan-100/72">
                Brand Energy
              </p>
              <p className="mt-3 text-sm leading-8 text-slate-300/78">
                Game Vault frames each game page like a premium studio microsite while preserving
                the practical redirect flow players actually need.
              </p>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-violet-300/14 bg-violet-300/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-violet-100">
                <Sparkles className="h-4 w-4" />
                Cinematic Scroll Experience
              </div>
            </div>
          </motion.article>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        variants={stagger}
        className="mx-auto mt-24 max-w-[92rem] px-4 pb-8 sm:px-6 lg:px-10"
      >
        <SectionHeading
          eyebrow="Related Worlds"
          title="Keep exploring"
          description="More launch-page style destinations from the same premium catalog."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {relatedGames.map((relatedGame) => (
            <motion.div key={relatedGame.id} variants={reveal}>
              <GameCard game={relatedGame} />
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  )
}

export default GameDetailPage
