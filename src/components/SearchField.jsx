import { Search } from 'lucide-react'

function SearchField({
  value,
  defaultValue,
  onChange,
  onSubmit,
  name = 'query',
  placeholder = 'Search games...',
  className = '',
  compact = false,
}) {
  const inputProps = value !== undefined ? { value } : { defaultValue }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        onSubmit?.(event)
      }}
      className={`glass-panel flex items-center gap-3 rounded-full ${
        compact ? 'px-4 py-2.5' : 'px-5 py-3.5'
      } ${className}`}
    >
      <Search className="h-4 w-4 shrink-0 text-cyan-200/80" />
      <input
        type="search"
        {...inputProps}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        className="w-full bg-transparent text-sm text-white placeholder:text-slate-400 focus:outline-none"
        aria-label={placeholder}
      />
      <button
        type="submit"
        className="hidden rounded-full bg-white/10 px-4 py-2 text-xs font-semibold tracking-[0.24em] text-slate-100 transition hover:bg-white/16 sm:inline-flex"
      >
        Search
      </button>
    </form>
  )
}

export default SearchField
