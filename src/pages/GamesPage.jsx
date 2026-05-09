import { Filter, ShieldCheck } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import FilterSelect from '../components/FilterSelect.jsx'
import GameCard from '../components/GameCard.jsx'
import SearchField from '../components/SearchField.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { categoryLookup, games, genreOptions, platformOptions } from '../data/siteData.js'

function GamesPage() {
  const [searchParams, setSearchParams] = useSearchParams()

  const query = searchParams.get('q') ?? ''
  const platform = searchParams.get('platform') ?? ''
  const genre = searchParams.get('genre') ?? ''
  const pricing = searchParams.get('pricing') ?? ''
  const sort = searchParams.get('sort') ?? 'popular'
  const category = searchParams.get('category') ?? ''

  const filteredGames = games
    .filter((game) => {
      const matchesQuery =
        !query ||
        game.title.toLowerCase().includes(query.toLowerCase()) ||
        game.description.toLowerCase().includes(query.toLowerCase()) ||
        game.genre.toLowerCase().includes(query.toLowerCase())
      const matchesPlatform = !platform || game.platforms.includes(platform)
      const matchesGenre = !genre || game.genres.includes(genre)
      const matchesPricing = !pricing || game.priceModel === pricing
      const matchesCategory = !category || game.categories.includes(category)

      return (
        matchesQuery &&
        matchesPlatform &&
        matchesGenre &&
        matchesPricing &&
        matchesCategory
      )
    })
    .sort((left, right) => {
      if (sort === 'new') {
        return right.releaseRank - left.releaseRank
      }

      return right.popularity - left.popularity
    })

  const updateParam = (key, value) => {
    const nextParams = new URLSearchParams(searchParams)

    if (value) {
      nextParams.set(key, value)
    } else {
      nextParams.delete(key)
    }

    setSearchParams(nextParams, { replace: true })
  }

  const activeCategory = category ? categoryLookup[category] : null

  return (
    <div className="mx-auto max-w-[92rem] px-4 pt-24 sm:px-6 lg:px-10 sm:pt-32 pb-20">
      <section className="glass-panel rounded-[24px] sm:rounded-[36px] p-6 sm:p-10">
        <SectionHeading
          eyebrow="Game Vault Catalog"
          title={activeCategory ? `${activeCategory.name} Games` : 'Discover Premium Worlds'}
          description={
            activeCategory
              ? `${activeCategory.blurb}`
              : 'Browse our full collection of official, legal game sources curated for the ultimate discovery experience.'
          }
        />

        <div className="mt-8 grid gap-4 lg:grid-cols-[1.5fr_0.5fr]">
          <SearchField
            value={query}
            onChange={(event) => updateParam('q', event.target.value)}
            placeholder="Search by title, genre..."
            className="w-full"
          />

          <div className="glass-panel flex items-center gap-3 rounded-[20px] px-4 py-3 sm:gap-4 sm:rounded-[28px] sm:px-5 sm:py-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-300/12 text-emerald-100 sm:h-12 sm:w-12 sm:rounded-2xl">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-100/70 sm:text-xs sm:tracking-[0.28em]">
                Verified
              </p>
              <p className="mt-0.5 text-xs text-slate-300/70 sm:mt-1 sm:text-sm">
                100% Official Sources
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-4 lg:grid-cols-5">
          <div className="glass-panel col-span-2 flex items-center gap-3 rounded-[20px] px-4 py-3 sm:rounded-[28px] sm:px-5 sm:py-4 lg:col-span-1">
            <Filter className="h-4 w-4 text-cyan-200 sm:h-5 sm:w-5" />
            <div className="min-w-0">
              <p className="text-[10px] font-bold uppercase tracking-widest text-cyan-200/70">
                Filters
              </p>
              <p className="truncate text-xs text-slate-300/70 sm:text-sm">{filteredGames.length} Results</p>
            </div>
          </div>

          <FilterSelect
            label="Platform"
            value={platform}
            onChange={(event) => updateParam('platform', event.target.value)}
            options={[
              { label: 'All Platforms', value: '' },
              ...platformOptions.map((option) => ({ label: option, value: option })),
            ]}
          />

          <FilterSelect
            label="Genre"
            value={genre}
            onChange={(event) => updateParam('genre', event.target.value)}
            options={[
              { label: 'All Genres', value: '' },
              ...genreOptions.map((option) => ({ label: option, value: option })),
            ]}
          />

          <FilterSelect
            label="Pricing"
            value={pricing}
            onChange={(event) => updateParam('pricing', event.target.value)}
            options={[
              { label: 'All Pricing', value: '' },
              { label: 'Free', value: 'Free' },
              { label: 'Paid', value: 'Paid' },
              { label: 'Coming Soon', value: 'Coming Soon' },
            ]}
          />

          <FilterSelect
            label="Sort"
            value={sort}
            onChange={(event) => updateParam('sort', event.target.value)}
            options={[
              { label: 'Popular', value: 'popular' },
              { label: 'Newest', value: 'new' },
            ]}
          />
        </div>

        {(query || platform || genre || pricing || category) ? (
          <div className="mt-6 flex flex-wrap items-center gap-2">
            {[query && `Search: ${query}`, platform, genre, pricing, activeCategory?.name]
              .filter(Boolean)
              .map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[9px] font-bold uppercase tracking-widest text-slate-300 sm:px-4 sm:py-2 sm:text-xs"
                >
                  {chip}
                </span>
              ))}

            <button
              type="button"
              onClick={() => setSearchParams({}, { replace: true })}
              className="rounded-full border border-rose-400/20 bg-rose-400/10 px-3 py-1.5 text-[9px] font-bold uppercase tracking-widest text-rose-300 transition hover:bg-rose-400/20 sm:px-4 sm:py-2 sm:text-xs"
            >
              Reset
            </button>
          </div>
        ) : null}
      </section>

      {filteredGames.length ? (
        <section className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:mt-12">
          {filteredGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </section>
      ) : (
        <section className="glass-panel mt-10 rounded-[24px] px-6 py-16 text-center sm:rounded-[32px] sm:py-20">
          <h2 className="font-display text-3xl uppercase text-white sm:text-5xl">No results found</h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-slate-400 sm:text-base">
            Try adjusting your filters or search query to find the official sources you're looking for.
          </p>
        </section>
      )}
    </div>
  )
}

export default GamesPage
