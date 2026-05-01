function GameArtwork({
  title,
  subtitle,
  palette,
  badges = [],
  className = '',
  titleSize = 'text-2xl sm:text-3xl',
}) {
  const [primary, secondary, tertiary] = palette

  return (
    <div
      className={`scan-lines relative overflow-hidden border border-white/12 ${className}`}
      style={{
        backgroundImage: `
          radial-gradient(circle at 18% 20%, ${primary} 0%, transparent 34%),
          radial-gradient(circle at 88% 8%, ${secondary} 0%, transparent 36%),
          linear-gradient(135deg, rgba(2, 6, 23, 0.96) 0%, rgba(15, 23, 42, 0.86) 42%, ${tertiary} 140%)
        `,
      }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),transparent_22%,transparent_65%,rgba(2,6,23,0.35))]" />
      <div className="hero-orb absolute -left-10 top-1/2 h-36 w-36 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />
      <div className="hero-orb-delay absolute -right-10 top-10 h-28 w-28 rounded-full border border-white/10 bg-white/12 blur-2xl" />
      <div className="absolute inset-[1px] rounded-[inherit] border border-white/5" />

      <div className="relative flex h-full flex-col justify-between p-5 sm:p-6">
        <div className="flex flex-wrap gap-2">
          {badges.slice(0, 3).map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-white/16 bg-black/18 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-100/85 backdrop-blur-sm"
            >
              {badge}
            </span>
          ))}
        </div>

        <div className="max-w-sm">
          <h3 className={`font-display ${titleSize} leading-tight text-white`}>{title}</h3>
          {subtitle ? (
            <p className="mt-3 text-sm leading-6 text-slate-100/78 sm:text-base">
              {subtitle}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default GameArtwork
