/**
 * FallbackArtwork – pure CSS cinematic placeholder art.
 *
 * Renders a rich, genre-specific gradient composition that feels like
 * real gaming artwork. Used when image URLs are missing or fail to load.
 * Every card stays visually complete at all times.
 */

/* ─── Genre theme definitions ─────────────────────────────────────── */
const GENRE_THEMES = {
  action: {
    bg: 'linear-gradient(145deg, #0a0010 0%, #1a0030 30%, #2d0050 55%, #0d001a 100%)',
    orb1: 'radial-gradient(circle at 22% 28%, rgba(220,38,38,0.72) 0%, rgba(159,18,57,0.42) 28%, transparent 55%)',
    orb2: 'radial-gradient(circle at 82% 14%, rgba(168,85,247,0.68) 0%, rgba(109,40,217,0.38) 30%, transparent 58%)',
    orb3: 'radial-gradient(circle at 50% 88%, rgba(251,146,60,0.38) 0%, transparent 44%)',
    accent1: '#ef4444',
    accent2: '#a855f7',
    label: 'ACTION',
    icon: '⚔',
  },
  rpg: {
    bg: 'linear-gradient(160deg, #060018 0%, #0e0028 35%, #1a0040 60%, #080020 100%)',
    orb1: 'radial-gradient(circle at 18% 22%, rgba(139,92,246,0.78) 0%, rgba(91,33,182,0.44) 30%, transparent 58%)',
    orb2: 'radial-gradient(circle at 86% 20%, rgba(34,211,238,0.56) 0%, rgba(6,182,212,0.32) 28%, transparent 52%)',
    orb3: 'radial-gradient(circle at 46% 82%, rgba(217,70,239,0.44) 0%, transparent 48%)',
    accent1: '#a855f7',
    accent2: '#22d3ee',
    label: 'RPG',
    icon: '✦',
  },
  fps: {
    bg: 'linear-gradient(150deg, #030810 0%, #071220 30%, #0c1e38 58%, #020810 100%)',
    orb1: 'radial-gradient(circle at 24% 30%, rgba(251,113,133,0.66) 0%, rgba(225,29,72,0.38) 28%, transparent 54%)',
    orb2: 'radial-gradient(circle at 80% 18%, rgba(56,189,248,0.62) 0%, rgba(14,165,233,0.36) 26%, transparent 52%)',
    orb3: 'radial-gradient(circle at 52% 86%, rgba(99,102,241,0.38) 0%, transparent 44%)',
    accent1: '#fb7185',
    accent2: '#38bdf8',
    label: 'FPS',
    icon: '◈',
  },
  racing: {
    bg: 'linear-gradient(155deg, #040810 0%, #060f24 32%, #081830 55%, #020812 100%)',
    orb1: 'radial-gradient(circle at 20% 30%, rgba(56,189,248,0.72) 0%, rgba(14,165,233,0.44) 28%, transparent 55%)',
    orb2: 'radial-gradient(circle at 82% 16%, rgba(168,85,247,0.58) 0%, rgba(124,58,237,0.32) 28%, transparent 52%)',
    orb3: 'radial-gradient(circle at 50% 90%, rgba(34,211,238,0.42) 0%, transparent 44%)',
    accent1: '#38bdf8',
    accent2: '#a855f7',
    label: 'RACING',
    icon: '▶',
  },
  strategy: {
    bg: 'linear-gradient(145deg, #040812 0%, #080e20 32%, #0e1630 55%, #040812 100%)',
    orb1: 'radial-gradient(circle at 22% 26%, rgba(99,102,241,0.72) 0%, rgba(67,56,202,0.42) 28%, transparent 55%)',
    orb2: 'radial-gradient(circle at 84% 20%, rgba(14,165,233,0.60) 0%, rgba(2,132,199,0.34) 26%, transparent 50%)',
    orb3: 'radial-gradient(circle at 48% 85%, rgba(139,92,246,0.38) 0%, transparent 44%)',
    accent1: '#6366f1',
    accent2: '#0ea5e9',
    label: 'STRATEGY',
    icon: '◆',
  },
  sports: {
    bg: 'linear-gradient(150deg, #030e08 0%, #051a10 32%, #0a2818 55%, #030e08 100%)',
    orb1: 'radial-gradient(circle at 20% 28%, rgba(34,197,94,0.70) 0%, rgba(21,128,61,0.42) 28%, transparent 54%)',
    orb2: 'radial-gradient(circle at 82% 18%, rgba(34,211,238,0.58) 0%, rgba(6,182,212,0.32) 26%, transparent 50%)',
    orb3: 'radial-gradient(circle at 50% 88%, rgba(59,130,246,0.38) 0%, transparent 44%)',
    accent1: '#22c55e',
    accent2: '#22d3ee',
    label: 'SPORTS',
    icon: '⬡',
  },
  indie: {
    bg: 'linear-gradient(155deg, #050a18 0%, #0a1028 32%, #111820 55%, #050a18 100%)',
    orb1: 'radial-gradient(circle at 22% 28%, rgba(45,212,191,0.68) 0%, rgba(20,184,166,0.40) 28%, transparent 54%)',
    orb2: 'radial-gradient(circle at 80% 20%, rgba(96,165,250,0.60) 0%, rgba(59,130,246,0.34) 26%, transparent 50%)',
    orb3: 'radial-gradient(circle at 50% 86%, rgba(139,92,246,0.40) 0%, transparent 44%)',
    accent1: '#2dd4bf',
    accent2: '#60a5fa',
    label: 'INDIE',
    icon: '★',
  },
  'open-world': {
    bg: 'linear-gradient(150deg, #03080e 0%, #060e1a 32%, #0b1828 55%, #03080e 100%)',
    orb1: 'radial-gradient(circle at 20% 28%, rgba(56,189,248,0.68) 0%, rgba(125,211,252,0.40) 28%, transparent 54%)',
    orb2: 'radial-gradient(circle at 82% 18%, rgba(124,58,237,0.60) 0%, rgba(109,40,217,0.34) 26%, transparent 50%)',
    orb3: 'radial-gradient(circle at 50% 88%, rgba(14,165,233,0.38) 0%, transparent 44%)',
    accent1: '#38bdf8',
    accent2: '#7c3aed',
    label: 'OPEN WORLD',
    icon: '◎',
  },
  default: {
    bg: 'linear-gradient(150deg, #050812 0%, #080f20 32%, #0e1630 55%, #050812 100%)',
    orb1: 'radial-gradient(circle at 22% 28%, rgba(139,92,246,0.68) 0%, rgba(91,33,182,0.40) 28%, transparent 54%)',
    orb2: 'radial-gradient(circle at 82% 18%, rgba(34,211,238,0.58) 0%, rgba(6,182,212,0.32) 26%, transparent 50%)',
    orb3: 'radial-gradient(circle at 50% 88%, rgba(59,130,246,0.36) 0%, transparent 44%)',
    accent1: '#8b5cf6',
    accent2: '#22d3ee',
    label: 'GAME VAULT',
    icon: '◈',
  },
}

/**
 * Resolve the best theme from a game's categories or genres array.
 */
function resolveTheme(categories = [], genres = []) {
  const all = [...(categories || []), ...(genres || [])].map((s) =>
    String(s).toLowerCase().trim(),
  )
  for (const key of all) {
    if (GENRE_THEMES[key]) return GENRE_THEMES[key]
  }
  // Partial match
  for (const key of all) {
    for (const themeKey of Object.keys(GENRE_THEMES)) {
      if (key.includes(themeKey) || themeKey.includes(key)) {
        return GENRE_THEMES[themeKey]
      }
    }
  }
  return GENRE_THEMES.default
}

/**
 * FallbackArtwork component.
 *
 * Props:
 *   title      – game title (displayed in the artwork)
 *   categories – game.categories array (used to pick theme)
 *   genres     – game.genres array (fallback for theme)
 *   className  – additional CSS classes (for sizing/layout)
 *   compact    – renders a slightly smaller title
 */
function FallbackArtwork({ title = '', categories = [], genres = [], className = '', compact = false }) {
  const theme = resolveTheme(categories, genres)

  return (
    <div
      className={`fallback-artwork relative overflow-hidden ${className}`}
      style={{
        background: theme.bg,
      }}
      aria-label={`${title} artwork`}
    >
      {/* Atmospheric orbs */}
      <div className="absolute inset-0" style={{ background: theme.orb1 }} />
      <div className="absolute inset-0" style={{ background: theme.orb2 }} />
      <div className="absolute inset-0" style={{ background: theme.orb3 }} />

      {/* Grid overlay */}
      <div className="fallback-grid absolute inset-0" />

      {/* Noise texture overlay */}
      <div className="fallback-noise absolute inset-0" />

      {/* Geometric accent lines */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 300 400"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        {/* Corner accents */}
        <path
          d="M0 0 L60 0 L0 60 Z"
          fill={theme.accent1}
          opacity="0.16"
        />
        <path
          d="M300 400 L240 400 L300 340 Z"
          fill={theme.accent2}
          opacity="0.14"
        />

        {/* Diagonal highlight lines */}
        <line x1="0" y1="120" x2="300" y2="80" stroke={theme.accent1} strokeWidth="0.6" opacity="0.22" />
        <line x1="0" y1="200" x2="300" y2="160" stroke={theme.accent2} strokeWidth="0.4" opacity="0.16" />
        <line x1="0" y1="300" x2="300" y2="260" stroke="white" strokeWidth="0.3" opacity="0.10" />

        {/* Central diamond */}
        <polygon
          points="150,60 220,200 150,340 80,200"
          fill="none"
          stroke={theme.accent1}
          strokeWidth="0.8"
          opacity="0.18"
        />
        <polygon
          points="150,80 205,200 150,320 95,200"
          fill="none"
          stroke={theme.accent2}
          strokeWidth="0.5"
          opacity="0.12"
        />

        {/* Center dot */}
        <circle cx="150" cy="200" r="3" fill={theme.accent1} opacity="0.55" />
        <circle cx="150" cy="200" r="7" fill="none" stroke={theme.accent1} strokeWidth="0.6" opacity="0.30" />
        <circle cx="150" cy="200" r="13" fill="none" stroke={theme.accent2} strokeWidth="0.4" opacity="0.18" />

        {/* Corner dots */}
        <circle cx="24" cy="24" r="2" fill={theme.accent1} opacity="0.40" />
        <circle cx="276" cy="24" r="2" fill={theme.accent2} opacity="0.40" />
        <circle cx="24" cy="376" r="2" fill={theme.accent2} opacity="0.40" />
        <circle cx="276" cy="376" r="2" fill={theme.accent1} opacity="0.40" />
      </svg>

      {/* Top badge */}
      <div className="absolute left-4 top-4 flex items-center gap-2">
        <span
          className="rounded-full px-3 py-1 text-[9px] font-bold uppercase tracking-[0.36em]"
          style={{
            background: `${theme.accent1}20`,
            border: `1px solid ${theme.accent1}40`,
            color: theme.accent1,
          }}
        >
          {theme.label}
        </span>
      </div>

      {/* Game Vault watermark */}
      <div className="absolute right-4 top-4 text-[8px] font-bold uppercase tracking-[0.4em] text-white/20">
        GAME VAULT
      </div>

      {/* Bottom vignette */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{
          height: '55%',
          background: 'linear-gradient(to top, rgba(2,6,23,0.95) 0%, rgba(2,6,23,0.60) 50%, transparent 100%)',
        }}
      />

      {/* Title block */}
      <div className="absolute inset-x-0 bottom-0 p-5">
        <p
          className="text-[9px] font-bold uppercase tracking-[0.38em] mb-2"
          style={{ color: theme.accent2 }}
        >
          {theme.icon} {theme.label}
        </p>
        <h3
          className={`font-display uppercase leading-tight text-white ${compact ? 'text-2xl' : 'text-[1.65rem]'}`}
          style={{
            textShadow: `0 0 40px ${theme.accent1}60, 0 2px 8px rgba(0,0,0,0.8)`,
          }}
        >
          {title}
        </h3>
      </div>

      {/* Top sheen */}
      <div
        className="absolute inset-x-0 top-0 h-28 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(255,255,255,0.07) 0%, transparent 100%)',
        }}
      />
    </div>
  )
}

export { resolveTheme, GENRE_THEMES }
export default FallbackArtwork
