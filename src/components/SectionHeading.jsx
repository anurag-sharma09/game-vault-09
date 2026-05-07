function SectionHeading({ eyebrow, title, description, action }) {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        {eyebrow ? (
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.34em] text-cyan-200/80">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="font-display uppercase text-white" style={{ fontSize: 'var(--fluid-h2)' }}>{title}</h2>
        {description ? (
          <p className="mt-4 text-sm leading-7 text-slate-300/78 sm:text-base">
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div>{action}</div> : null}
    </div>
  )
}

export default SectionHeading
