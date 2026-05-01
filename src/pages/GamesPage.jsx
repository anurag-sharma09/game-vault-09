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
        game.shortDescription.toLowerCase().includes(query.toLowerCase())
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
    <div className="space-y-10">
      <section className="glass-panel rounded-[36px] px-6 py-10 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Games Listing"
          title={activeCategory ? `${activeCategory.name} Games` : 'Discover official game links'}
          description={
            activeCategory
              ? `${activeCategory.blurb} Filter by platform, price model, and popularity while keeping every redirect legal and official.`
              : 'Search live by title, narrow the catalog by platform or genre, and keep every click pointed toward official sources only.'
          }
        />

        <div className="mt-8 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <SearchField
            value={query}
            onChange={(event) => updateParam('q', event.target.value)}
            placeholder="Search by game title..."
            className="w-full"
          />

          <div className="glass-panel flex items-center gap-4 rounded-[28px] px-5 py-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-300/12 text-emerald-100">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-100/78">
                Legal only
              </p>
              <p className="mt-1 text-sm leading-6 text-slate-300/76">
                No pirated downloads, no mirrors, no cracked builds.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          <div className="glass-panel flex items-center gap-3 rounded-[28px] px-5 py-4 md:col-span-2 xl:col-span-1">
            <Filter className="h-5 w-5 text-cyan-100" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/76">
                Filters
              </p>
              <p className="mt-1 text-sm text-slate-300/72">{filteredGames.length} results live</p>
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
            label="Free / Paid"
            value={pricing}
            onChange={(event) => updateParam('pricing', event.target.value)}
            options={[
              { label: 'All Pricing', value: '' },
              { label: 'Free', value: 'Free' },
              { label: 'Paid', value: 'Paid' },
            ]}
          />

          <FilterSelect
            label="Popular / New"
            value={sort}
            onChange={(event) => updateParam('sort', event.target.value)}
            options={[
              { label: 'Popular', value: 'popular' },
              { label: 'New', value: 'new' },
            ]}
          />
        </div>

        {(query || platform || genre || pricing || category) ? (
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {[query && `Search: ${query}`, platform, genre, pricing, activeCategory?.name]
              .filter(Boolean)
              .map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-white/12 bg-white/6 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-200"
                >
                  {chip}
                </span>
              ))}

            <button
              type="button"
              onClick={() => setSearchParams({}, { replace: true })}
              className="rounded-full border border-rose-300/18 bg-rose-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-rose-100 transition hover:bg-rose-300/16"
            >
              Clear Filters
            </button>
          </div>
        ) : null}
      </section>

      {filteredGames.length ? (
        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </section>
      ) : (
        <section className="glass-panel rounded-[32px] px-6 py-12 text-center">
          <h2 className="font-display text-3xl text-white">No games found</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-300/76">
            Try a different title, clear one of the filters, or switch back to popular sorting to reopen the full official catalog.
          </p>
        </section>
      )}
    </div>
  )
}

export default GamesPage
