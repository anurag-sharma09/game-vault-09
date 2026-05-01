function FilterSelect({ label, value, onChange, options }) {
  const id = `filter-${label.toLowerCase().replace(/\s+/g, '-')}`

  return (
    <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.26em] text-slate-400">
      <span>{label}</span>
      <select
        id={id}
        value={value}
        onChange={onChange}
        className="rounded-2xl border border-white/12 bg-slate-950/50 px-4 py-3 text-sm font-medium tracking-normal text-white outline-none transition focus:border-cyan-300/36"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  )
}

export default FilterSelect
