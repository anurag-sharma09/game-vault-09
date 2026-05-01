export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Games', to: '/games' },
  { label: 'Categories', to: '/categories' },
  { label: 'Contact', to: '/contact' },
]

export const categories = [
  {
    slug: 'action',
    name: 'Action',
    blurb: 'Fast reaction shooters, battle royales, and high-pressure combat loops.',
    accent: 'from-fuchsia-500/30 via-violet-500/10 to-sky-500/30',
  },
  {
    slug: 'adventure',
    name: 'Adventure',
    blurb: 'Quest-led worlds built for exploration, discovery, and cinematic pacing.',
    accent: 'from-cyan-500/30 via-sky-500/10 to-indigo-500/30',
  },
  {
    slug: 'rpg',
    name: 'RPG',
    blurb: 'Story-rich builds, gear systems, and progression-first worlds.',
    accent: 'from-violet-500/30 via-fuchsia-500/10 to-cyan-500/30',
  },
  {
    slug: 'racing',
    name: 'Racing',
    blurb: 'Arcade speed, licensed tracks, and adrenaline-heavy driving.',
    accent: 'from-blue-500/30 via-cyan-500/10 to-violet-500/30',
  },
  {
    slug: 'sports',
    name: 'Sports',
    blurb: 'Competitive seasons, team play, and officially licensed arenas.',
    accent: 'from-emerald-500/30 via-cyan-500/10 to-blue-500/30',
  },
  {
    slug: 'strategy',
    name: 'Strategy',
    blurb: 'Smart macro decisions, long-session planning, and tactical dominance.',
    accent: 'from-violet-500/30 via-slate-500/10 to-cyan-500/30',
  },
  {
    slug: 'simulation',
    name: 'Simulation',
    blurb: 'Creative sandboxes and systems-heavy worlds that reward experimentation.',
    accent: 'from-cyan-500/30 via-sky-500/10 to-teal-500/30',
  },
  {
    slug: 'horror',
    name: 'Horror',
    blurb: 'Dark atmosphere, survival tension, and pulse-raising co-op scares.',
    accent: 'from-rose-500/30 via-fuchsia-500/10 to-blue-500/30',
  },
  {
    slug: 'mobile-games',
    name: 'Mobile Games',
    blurb: 'Official mobile launches, live-service updates, and touchscreen-ready play.',
    accent: 'from-cyan-500/30 via-violet-500/10 to-fuchsia-500/30',
  },
  {
    slug: 'pc-games',
    name: 'PC Games',
    blurb: 'Launchers, storefronts, and premium desktop releases from legal sources.',
    accent: 'from-indigo-500/30 via-violet-500/10 to-cyan-500/30',
  },
]

export const featuredStats = [
  { value: 'Official Only', label: 'Every CTA opens a verified game or publisher source.' },
  { value: 'PC + Mobile', label: 'Cross-platform browsing for desktop, console, and mobile players.' },
  { value: 'Zero Piracy', label: 'No cracked files, mirrors, or unsafe redirects anywhere in the flow.' },
]

export const games = [
  {
    id: 'cyberpunk-2077',
    slug: 'cyberpunk-2077',
    title: 'Cyberpunk 2077',
    tagline: 'A neon-soaked open world built for players who want premium RPG scale.',
    shortDescription:
      'Browse Night City safely, check platform support, and jump to the official CD PROJEKT RED destination in one click.',
    overview:
      'Cyberpunk 2077 delivers a first-person action RPG experience filled with cinematic quests, layered character builds, and a sprawling futuristic cityscape.',
    vaultNote:
      'Game Vault keeps the discovery flow clean by routing players to the official source instead of random mirrors, fake installers, or questionable resale pages.',
    genres: ['RPG', 'Action'],
    categories: ['rpg', 'action', 'pc-games'],
    platforms: ['PC', 'PlayStation 5', 'Xbox Series X|S'],
    rating: 4.7,
    popularity: 91,
    releaseRank: 8,
    priceModel: 'Paid',
    priceLabel: 'Premium',
    store: 'Official Store',
    publisher: 'CD PROJEKT RED',
    launchWindow: 'Ultimate Edition live now',
    officialUrl: 'https://www.cyberpunk.net/us/en/',
    websiteUrl: 'https://www.cyberpunk.net/us/en/',
    playUrl: 'https://www.cyberpunk.net/us/en/',
    palette: [
      'rgba(192, 132, 252, 0.94)',
      'rgba(56, 189, 248, 0.82)',
      'rgba(37, 99, 235, 0.86)',
    ],
    featureTag: 'Story Rich',
    supportedStores: ['Official Site', 'Steam', 'Epic Games', 'PlayStation Store', 'Xbox Store'],
    highlights: ['Branching builds', 'Dense world design', 'Official expansion support'],
    screenshots: [
      {
        title: 'Night City skyline',
        caption: 'Skyscraper neon, traffic trails, and high-contrast city vibes.',
      },
      {
        title: 'Mercenary loadouts',
        caption: 'Swap implants, weapons, and hacking styles around your build.',
      },
      {
        title: 'Cinematic story beats',
        caption: 'Large-scale missions with premium presentation from start to finish.',
      },
    ],
  },
  {
    id: 'fortnite',
    slug: 'fortnite',
    title: 'Fortnite',
    tagline: 'Live events, creative islands, and squad drops inside one official ecosystem.',
    shortDescription:
      'Queue into Battle Royale, Zero Build, or creator-made experiences through Epic’s real platform links.',
    overview:
      'Fortnite mixes fast PvP action, creator-driven worlds, and a constant stream of seasonal content in a single cross-platform experience.',
    vaultNote:
      'Players can hit the official Epic destination directly from Game Vault without sorting through scam download pages or unofficial launchers.',
    genres: ['Action', 'Shooter'],
    categories: ['action', 'pc-games', 'mobile-games'],
    platforms: ['PC', 'PlayStation 5', 'Xbox Series X|S', 'Nintendo Switch', 'Mobile'],
    rating: 4.8,
    popularity: 99,
    releaseRank: 12,
    priceModel: 'Free',
    priceLabel: 'Free to Play',
    store: 'Epic Games',
    publisher: 'Epic Games',
    launchWindow: 'Current season live',
    officialUrl: 'https://www.fortnite.com/',
    websiteUrl: 'https://www.fortnite.com/',
    playUrl: 'https://www.fortnite.com/',
    palette: [
      'rgba(168, 85, 247, 0.94)',
      'rgba(34, 211, 238, 0.84)',
      'rgba(37, 99, 235, 0.84)',
    ],
    featureTag: 'Live Event',
    supportedStores: ['Epic Games', 'PlayStation Store', 'Xbox Store', 'Nintendo eShop'],
    highlights: ['Cross-platform squads', 'Creator islands', 'Zero Build mode'],
    screenshots: [
      {
        title: 'Battle Pass hub',
        caption: 'Track season progression, cosmetics, and live quests in one place.',
      },
      {
        title: 'Creator experiences',
        caption: 'Jump from official modes into community islands without leaving the ecosystem.',
      },
      {
        title: 'Squad landing zones',
        caption: 'Fast drops, smart rotations, and cinematic late-game finishes.',
      },
    ],
  },
  {
    id: 'genshin-impact',
    slug: 'genshin-impact',
    title: 'Genshin Impact',
    tagline: 'Elemental combat and anime-styled exploration across an ever-expanding world.',
    shortDescription:
      'Discover official downloads, launcher access, and supported device info for HoYoverse’s flagship RPG.',
    overview:
      'Genshin Impact blends open-zone exploration, elemental party combat, and regular live updates into a polished free-to-play fantasy adventure.',
    vaultNote:
      'The redirect flow takes players to the official HoYoverse property instead of risky APK mirrors or fake desktop installers.',
    genres: ['Adventure', 'RPG'],
    categories: ['adventure', 'rpg', 'mobile-games', 'pc-games'],
    platforms: ['PC', 'PlayStation 5', 'Mobile'],
    rating: 4.7,
    popularity: 95,
    releaseRank: 10,
    priceModel: 'Free',
    priceLabel: 'Free to Play',
    store: 'Official Launcher',
    publisher: 'HoYoverse',
    launchWindow: 'Ongoing live update cadence',
    officialUrl: 'https://genshin.hoyoverse.com/en/',
    websiteUrl: 'https://genshin.hoyoverse.com/en/',
    playUrl: 'https://genshin.hoyoverse.com/en/',
    palette: [
      'rgba(125, 211, 252, 0.92)',
      'rgba(96, 165, 250, 0.78)',
      'rgba(124, 58, 237, 0.86)',
    ],
    featureTag: 'Open World',
    supportedStores: ['Official Site', 'App Store', 'Google Play', 'PlayStation Store'],
    highlights: ['Party-based combat', 'Frequent region updates', 'Cross-save support'],
    screenshots: [
      {
        title: 'Open-zone traversal',
        caption: 'Climb, glide, and roam across large fantasy regions at your own pace.',
      },
      {
        title: 'Element reactions',
        caption: 'Mix team compositions and chain effects for stylish combat loops.',
      },
      {
        title: 'Seasonal event cadence',
        caption: 'Limited-time festivals and story beats keep the world feeling alive.',
      },
    ],
  },
  {
    id: 'forza-horizon-5',
    slug: 'forza-horizon-5',
    title: 'Forza Horizon 5',
    tagline: 'Festival-scale racing with bold environments and instant controller appeal.',
    shortDescription:
      'Explore official Forza links for Horizon 5, from store access to device compatibility at a glance.',
    overview:
      'Forza Horizon 5 is an open-world racing showcase filled with licensed cars, flexible difficulty, and high-speed multiplayer events.',
    vaultNote:
      'Instead of relying on unofficial repacks, players can head straight to the official Forza ecosystem from the game detail page.',
    genres: ['Racing'],
    categories: ['racing', 'pc-games'],
    platforms: ['PC', 'Xbox Series X|S'],
    rating: 4.8,
    popularity: 93,
    releaseRank: 7,
    priceModel: 'Paid',
    priceLabel: 'Premium',
    store: 'Xbox Store',
    publisher: 'Xbox Game Studios',
    launchWindow: 'Festival edition available',
    officialUrl: 'https://forza.net/games/fh5',
    websiteUrl: 'https://forza.net/games/fh5',
    playUrl: 'https://forza.net/games/fh5',
    palette: [
      'rgba(56, 189, 248, 0.9)',
      'rgba(99, 102, 241, 0.76)',
      'rgba(168, 85, 247, 0.84)',
    ],
    featureTag: 'Open Road',
    supportedStores: ['Xbox Store', 'Steam'],
    highlights: ['Open-world races', 'Massive car roster', 'Seasonal festival playlists'],
    screenshots: [
      {
        title: 'Festival coastline',
        caption: 'Bright skies, scenic roads, and quick transitions between event types.',
      },
      {
        title: 'Collector garage',
        caption: 'Tune, swap, and personalize a deep catalogue of performance cars.',
      },
      {
        title: 'Online convoys',
        caption: 'Drop into group events and social races across a shared world.',
      },
    ],
  },
  {
    id: 'ea-sports-fc-25',
    slug: 'ea-sports-fc-25',
    title: 'EA SPORTS FC 25',
    tagline: 'Licensed football presentation with club progression and season-ready competition.',
    shortDescription:
      'Jump from discovery to the official EA page for FC 25 with platform availability and direct store references.',
    overview:
      'EA SPORTS FC 25 focuses on polished football presentation, licensed clubs, online progression, and fast replayability for competitive sports fans.',
    vaultNote:
      'The platform links stay official-only, so visitors avoid counterfeit key pages and fake early-access downloads.',
    genres: ['Sports'],
    categories: ['sports', 'pc-games'],
    platforms: ['PC', 'PlayStation 5', 'Xbox Series X|S', 'Nintendo Switch'],
    rating: 4.4,
    popularity: 89,
    releaseRank: 14,
    priceModel: 'Paid',
    priceLabel: 'Premium',
    store: 'EA',
    publisher: 'Electronic Arts',
    launchWindow: 'Current season release',
    officialUrl: 'https://www.ea.com/games/ea-sports-fc/fc-25',
    websiteUrl: 'https://www.ea.com/games/ea-sports-fc/fc-25',
    playUrl: 'https://www.ea.com/games/ea-sports-fc/fc-25',
    palette: [
      'rgba(34, 197, 94, 0.82)',
      'rgba(34, 211, 238, 0.74)',
      'rgba(37, 99, 235, 0.78)',
    ],
    featureTag: 'Season Ready',
    supportedStores: ['EA App', 'Steam', 'Epic Games', 'Xbox Store', 'PlayStation Store'],
    highlights: ['Licensed clubs', 'Ultimate Team loops', 'Competitive online modes'],
    screenshots: [
      {
        title: 'Matchday broadcast',
        caption: 'Presentation-first visuals with licensed teams and stadium energy.',
      },
      {
        title: 'Club progression',
        caption: 'Build squads, refine tactics, and keep momentum across seasons.',
      },
      {
        title: 'Rush moments',
        caption: 'Fast small-sided sessions keep play tight and social.',
      },
    ],
  },
  {
    id: 'apex-legends',
    slug: 'apex-legends',
    title: 'Apex Legends',
    tagline: 'Hero-based battle royale combat tuned for mobility, teamwork, and pace.',
    shortDescription:
      'Find official Apex access fast, compare platforms, and launch toward the real EA and publisher destinations.',
    overview:
      'Apex Legends combines ability-based squad play with fluid movement, large-scale firefights, and constant live-service refreshes.',
    vaultNote:
      'Players click through to EA’s official property rather than third-party launchers claiming exclusive installers or bonus clients.',
    genres: ['Action', 'Shooter'],
    categories: ['action', 'pc-games'],
    platforms: ['PC', 'PlayStation 5', 'Xbox Series X|S', 'Nintendo Switch'],
    rating: 4.6,
    popularity: 94,
    releaseRank: 11,
    priceModel: 'Free',
    priceLabel: 'Free to Play',
    store: 'EA',
    publisher: 'Respawn Entertainment',
    launchWindow: 'Live season active',
    officialUrl: 'https://www.ea.com/games/apex-legends',
    websiteUrl: 'https://www.ea.com/games/apex-legends',
    playUrl: 'https://www.ea.com/games/apex-legends',
    palette: [
      'rgba(244, 114, 182, 0.88)',
      'rgba(56, 189, 248, 0.8)',
      'rgba(99, 102, 241, 0.82)',
    ],
    featureTag: 'Squad Tactics',
    supportedStores: ['EA App', 'Steam', 'PlayStation Store', 'Xbox Store', 'Nintendo eShop'],
    highlights: ['Hero synergy', 'Fast movement', 'Seasonal ranked play'],
    screenshots: [
      {
        title: 'Legend ability loops',
        caption: 'Distinct roles create strong tactical identity between squads.',
      },
      {
        title: 'Ring rotations',
        caption: 'Positioning and movement are just as important as raw aim.',
      },
      {
        title: 'Season refreshes',
        caption: 'New maps, balance shifts, and cosmetics keep the loop evolving.',
      },
    ],
  },
  {
    id: 'minecraft',
    slug: 'minecraft',
    title: 'Minecraft',
    tagline: 'Build, survive, and create at your own pace across one of gaming’s biggest worlds.',
    shortDescription:
      'Use the vault to reach the official Minecraft purchase path without digging through fake launcher pages.',
    overview:
      'Minecraft remains a flexible sandbox for survival runs, multiplayer servers, redstone builds, and creativity-led play across devices.',
    vaultNote:
      'The official redirect path matters here because fake launchers and unofficial clients are extremely common around the game.',
    genres: ['Adventure', 'Simulation'],
    categories: ['adventure', 'simulation', 'pc-games', 'mobile-games'],
    platforms: ['PC', 'Xbox Series X|S', 'PlayStation 5', 'Nintendo Switch', 'Mobile'],
    rating: 4.9,
    popularity: 97,
    releaseRank: 6,
    priceModel: 'Paid',
    priceLabel: 'Premium',
    store: 'Minecraft Store',
    publisher: 'Mojang Studios',
    launchWindow: 'Creator update ready',
    officialUrl: 'https://www.minecraft.net/en-us/get-minecraft',
    websiteUrl: 'https://www.minecraft.net/en-us/',
    playUrl: 'https://www.minecraft.net/en-us/get-minecraft',
    palette: [
      'rgba(52, 211, 153, 0.84)',
      'rgba(34, 197, 94, 0.72)',
      'rgba(59, 130, 246, 0.8)',
    ],
    featureTag: 'Sandbox',
    supportedStores: ['Official Site', 'Xbox Store', 'PlayStation Store', 'App Store', 'Google Play'],
    highlights: ['Creative sandbox', 'Survival worlds', 'Massive community scene'],
    screenshots: [
      {
        title: 'Block-built worlds',
        caption: 'Go from tiny shelters to massive city-scale creations over time.',
      },
      {
        title: 'Survival prep',
        caption: 'Mine, craft, and optimize resources before the night cycle hits.',
      },
      {
        title: 'Cross-device play',
        caption: 'Keep building with friends across console, PC, and mobile.',
      },
    ],
  },
  {
    id: 'dead-by-daylight',
    slug: 'dead-by-daylight',
    title: 'Dead by Daylight',
    tagline: 'Asymmetrical horror built around stealth, teamwork, and escalating panic.',
    shortDescription:
      'Review supported stores and go to the official source for one of the biggest multiplayer horror titles around.',
    overview:
      'Dead by Daylight pits survivors against a powerful killer in tense multiplayer rounds where timing, mind games, and map awareness decide each escape.',
    vaultNote:
      'Horror games are frequent targets for fake DLC and cracked patch sites, so official-only redirects are especially important here.',
    genres: ['Horror', 'Action'],
    categories: ['horror', 'action', 'pc-games'],
    platforms: ['PC', 'PlayStation 5', 'Xbox Series X|S', 'Nintendo Switch'],
    rating: 4.5,
    popularity: 86,
    releaseRank: 5,
    priceModel: 'Paid',
    priceLabel: 'Premium',
    store: 'Official Site',
    publisher: 'Behaviour Interactive',
    launchWindow: 'Chapter updates ongoing',
    officialUrl: 'https://deadbydaylight.com/',
    websiteUrl: 'https://deadbydaylight.com/',
    playUrl: 'https://deadbydaylight.com/',
    palette: [
      'rgba(251, 113, 133, 0.86)',
      'rgba(168, 85, 247, 0.74)',
      'rgba(37, 99, 235, 0.74)',
    ],
    featureTag: 'Survival Horror',
    supportedStores: ['Official Site', 'Steam', 'Epic Games', 'PlayStation Store', 'Xbox Store'],
    highlights: ['Asymmetrical matches', 'Licensed horror crossovers', 'Long-term progression'],
    screenshots: [
      {
        title: 'Night map tension',
        caption: 'Low-visibility zones and audio cues keep every chase unpredictable.',
      },
      {
        title: 'Generator pressure',
        caption: 'Tight teamwork and route planning matter as much as raw reactions.',
      },
      {
        title: 'Killer rosters',
        caption: 'Distinct power kits change the rhythm and fear factor of every round.',
      },
    ],
  },
  {
    id: 'the-sims-4',
    slug: 'the-sims-4',
    title: 'The Sims 4',
    tagline: 'Design homes, direct stories, and shape a social sandbox around every household.',
    shortDescription:
      'Explore EA’s official Sims destination for the base game, updates, and expansion details from a clean redirect flow.',
    overview:
      'The Sims 4 is a simulation sandbox built around player creativity, social storytelling, and endlessly customizable spaces and characters.',
    vaultNote:
      'The safest experience is the official EA property, especially for players trying to avoid fake content bundles and outdated installers.',
    genres: ['Simulation'],
    categories: ['simulation', 'pc-games'],
    platforms: ['PC', 'PlayStation 5', 'Xbox Series X|S'],
    rating: 4.4,
    popularity: 88,
    releaseRank: 9,
    priceModel: 'Free',
    priceLabel: 'Free Base Game',
    store: 'EA',
    publisher: 'Electronic Arts',
    launchWindow: 'Base game live',
    officialUrl: 'https://www.ea.com/games/the-sims/the-sims-4',
    websiteUrl: 'https://www.ea.com/games/the-sims/the-sims-4',
    playUrl: 'https://www.ea.com/games/the-sims/the-sims-4',
    palette: [
      'rgba(45, 212, 191, 0.84)',
      'rgba(56, 189, 248, 0.72)',
      'rgba(99, 102, 241, 0.8)',
    ],
    featureTag: 'Creative Sandbox',
    supportedStores: ['EA App', 'Steam', 'PlayStation Store', 'Xbox Store'],
    highlights: ['Character creator depth', 'Home building', 'Life-sim storytelling'],
    screenshots: [
      {
        title: 'Build mode flow',
        caption: 'Create premium-looking spaces with flexible room and décor systems.',
      },
      {
        title: 'Household stories',
        caption: 'Guide careers, friendships, and day-to-day drama across each save.',
      },
      {
        title: 'Expansion ecosystem',
        caption: 'Official add-ons expand neighborhoods, themes, and lifestyle systems.',
      },
    ],
  },
  {
    id: 'civilization-vi',
    slug: 'civilization-vi',
    title: "Sid Meier's Civilization VI",
    tagline: 'Turn-based strategy for players who want long-form decisions and empire-building depth.',
    shortDescription:
      'Review official availability for Civ VI and jump to the real publisher source without detours.',
    overview:
      'Civilization VI rewards planning, diplomacy, expansion, and layered win conditions across match sessions that can stretch for hours.',
    vaultNote:
      'Strategy players often search for bundles and expansions, which makes a clean official redirect especially valuable.',
    genres: ['Strategy'],
    categories: ['strategy', 'pc-games'],
    platforms: ['PC', 'Nintendo Switch', 'Mobile'],
    rating: 4.6,
    popularity: 84,
    releaseRank: 4,
    priceModel: 'Paid',
    priceLabel: 'Premium',
    store: '2K',
    publisher: '2K',
    launchWindow: 'Anthology available',
    officialUrl: 'https://civilization.2k.com/civ-vi/',
    websiteUrl: 'https://civilization.2k.com/civ-vi/',
    playUrl: 'https://civilization.2k.com/civ-vi/',
    palette: [
      'rgba(168, 85, 247, 0.82)',
      'rgba(14, 165, 233, 0.74)',
      'rgba(59, 130, 246, 0.8)',
    ],
    featureTag: '4X Strategy',
    supportedStores: ['Official Site', 'Steam', 'Epic Games', 'Nintendo eShop', 'App Store'],
    highlights: ['Empire building', 'Multiple victory paths', 'Long-session replayability'],
    screenshots: [
      {
        title: 'Map expansion',
        caption: 'Claim land, route districts, and shape the geography of your empire.',
      },
      {
        title: 'Diplomatic pressure',
        caption: 'Trade, negotiate, or provoke rivals as your objectives evolve.',
      },
      {
        title: 'Late-game scale',
        caption: 'Infrastructure, military posture, and science pacing all come together.',
      },
    ],
  },
  {
    id: 'clash-of-clans',
    slug: 'clash-of-clans',
    title: 'Clash of Clans',
    tagline: 'Mobile-first strategy with long-term village building and raid-based progression.',
    shortDescription:
      'Jump to the official Supercell home for install paths, updates, and secure mobile discovery.',
    overview:
      'Clash of Clans combines base building, raid planning, and clan collaboration into a session-friendly mobile strategy loop.',
    vaultNote:
      'Because mobile strategy titles are often copied into unsafe APK portals, the official Supercell route is the safest path.',
    genres: ['Strategy', 'Mobile'],
    categories: ['strategy', 'mobile-games'],
    platforms: ['Mobile'],
    rating: 4.5,
    popularity: 83,
    releaseRank: 3,
    priceModel: 'Free',
    priceLabel: 'Free to Play',
    store: 'Supercell',
    publisher: 'Supercell',
    launchWindow: 'Current season live',
    officialUrl: 'https://supercell.com/en/games/clashofclans/',
    websiteUrl: 'https://supercell.com/en/games/clashofclans/',
    playUrl: 'https://supercell.com/en/games/clashofclans/',
    palette: [
      'rgba(34, 197, 94, 0.82)',
      'rgba(56, 189, 248, 0.68)',
      'rgba(79, 70, 229, 0.82)',
    ],
    featureTag: 'Mobile Strategy',
    supportedStores: ['Official Site', 'App Store', 'Google Play'],
    highlights: ['Village building', 'Clan wars', 'Long-term progression'],
    screenshots: [
      {
        title: 'Base layout planning',
        caption: 'Position defenses, storages, and walls around evolving threat patterns.',
      },
      {
        title: 'Clan raid loops',
        caption: 'Coordinate attacks and resource goals with a long-term squad.',
      },
      {
        title: 'Season milestones',
        caption: 'Short-form sessions still feed into a satisfying progression arc.',
      },
    ],
  },
  {
    id: 'rocket-league',
    slug: 'rocket-league',
    title: 'Rocket League',
    tagline: 'Competitive car-football built around mechanical skill and instant match readability.',
    shortDescription:
      'Open the official Rocket League source to start playing from legal Epic-owned destinations only.',
    overview:
      'Rocket League stays easy to understand but hard to master, mixing driving precision, aerial control, and fast team coordination.',
    vaultNote:
      'Official redirects prevent players from landing on imitation installers or unreliable tournament clients.',
    genres: ['Sports', 'Racing'],
    categories: ['sports', 'racing', 'pc-games'],
    platforms: ['PC', 'PlayStation 5', 'Xbox Series X|S', 'Nintendo Switch'],
    rating: 4.7,
    popularity: 87,
    releaseRank: 6,
    priceModel: 'Free',
    priceLabel: 'Free to Play',
    store: 'Epic Games',
    publisher: 'Psyonix',
    launchWindow: 'Competitive season active',
    officialUrl: 'https://www.rocketleague.com/en',
    websiteUrl: 'https://www.rocketleague.com/en',
    playUrl: 'https://www.rocketleague.com/en',
    palette: [
      'rgba(59, 130, 246, 0.88)',
      'rgba(34, 211, 238, 0.72)',
      'rgba(168, 85, 247, 0.74)',
    ],
    featureTag: 'Competitive Freebie',
    supportedStores: ['Epic Games', 'PlayStation Store', 'Xbox Store', 'Nintendo eShop'],
    highlights: ['Short matches', 'High skill ceiling', 'Cross-platform play'],
    screenshots: [
      {
        title: 'Arena kickoffs',
        caption: 'Fast starts force quick reads and immediate team coordination.',
      },
      {
        title: 'Aerial mechanics',
        caption: 'Control, timing, and recovery separate good players from great ones.',
      },
      {
        title: 'Ranked grind',
        caption: 'Simple match structure makes competitive progression easy to track.',
      },
    ],
  },
  {
    id: 'league-of-legends',
    slug: 'league-of-legends',
    title: 'League of Legends',
    tagline: 'A genre-defining competitive strategy game with deep champion mastery.',
    shortDescription:
      'Browse Riot’s official portal and jump directly to the real install and account destination for League.',
    overview:
      'League of Legends revolves around champion knowledge, macro strategy, and team coordination across high-pressure competitive matches.',
    vaultNote:
      'Account-focused titles especially benefit from official redirects because scam clients and phishing installers are common.',
    genres: ['Strategy', 'MOBA'],
    categories: ['strategy', 'pc-games'],
    platforms: ['PC'],
    rating: 4.6,
    popularity: 92,
    releaseRank: 7,
    priceModel: 'Free',
    priceLabel: 'Free to Play',
    store: 'Riot Games',
    publisher: 'Riot Games',
    launchWindow: 'Current ranked split live',
    officialUrl: 'https://www.leagueoflegends.com/en-us/',
    websiteUrl: 'https://www.leagueoflegends.com/en-us/',
    playUrl: 'https://www.leagueoflegends.com/en-us/',
    palette: [
      'rgba(56, 189, 248, 0.82)',
      'rgba(37, 99, 235, 0.74)',
      'rgba(168, 85, 247, 0.78)',
    ],
    featureTag: 'Competitive MOBA',
    supportedStores: ['Official Site', 'Riot Client'],
    highlights: ['Champion mastery', 'Ranked depth', 'Esports-scale competition'],
    screenshots: [
      {
        title: 'Lane phase control',
        caption: 'Timing, matchup knowledge, and map pressure drive early momentum.',
      },
      {
        title: 'Objective fights',
        caption: 'Team execution peaks around dragons, barons, and late-game setups.',
      },
      {
        title: 'Patch evolution',
        caption: 'Frequent balance changes keep metas shifting and fresh.',
      },
    ],
  },
  {
    id: 'pubg-mobile',
    slug: 'pubg-mobile',
    title: 'PUBG MOBILE',
    tagline: 'Battle royale survival tuned for mobile controls, quick queues, and global squads.',
    shortDescription:
      'Send players to the official PUBG MOBILE property instead of unofficial APK or emulator hubs.',
    overview:
      'PUBG MOBILE focuses on grounded gunplay, survival pacing, and map-scale match structure optimized for touch devices.',
    vaultNote:
      'Because the title is widely copied into untrusted app portals, directing users to the official site is one of the most important safety steps.',
    genres: ['Action', 'Mobile'],
    categories: ['action', 'mobile-games'],
    platforms: ['Mobile'],
    rating: 4.4,
    popularity: 89,
    releaseRank: 13,
    priceModel: 'Free',
    priceLabel: 'Free to Play',
    store: 'Official Site',
    publisher: 'Level Infinite',
    launchWindow: 'Mobile season active',
    officialUrl: 'https://www.pubgmobile.com/en-US/home.shtml',
    websiteUrl: 'https://www.pubgmobile.com/en-US/home.shtml',
    playUrl: 'https://www.pubgmobile.com/en-US/home.shtml',
    palette: [
      'rgba(251, 191, 36, 0.78)',
      'rgba(56, 189, 248, 0.68)',
      'rgba(99, 102, 241, 0.84)',
    ],
    featureTag: 'Mobile BR',
    supportedStores: ['Official Site', 'App Store', 'Google Play'],
    highlights: ['Battle royale survival', 'Squad voice play', 'Touch-optimized controls'],
    screenshots: [
      {
        title: 'Drop zones',
        caption: 'Choose risk, loot routes, and pacing before the circle closes in.',
      },
      {
        title: 'Mobile firefights',
        caption: 'Responsive touch layouts keep movement and aim readable on small screens.',
      },
      {
        title: 'Squad survival',
        caption: 'Communication and revive timing often decide the final circle.',
      },
    ],
  },
]

export const platformOptions = [
  'PC',
  'PlayStation 5',
  'Xbox Series X|S',
  'Nintendo Switch',
  'Mobile',
]

export const genreOptions = [
  'Action',
  'Adventure',
  'RPG',
  'Racing',
  'Sports',
  'Strategy',
  'Simulation',
  'Horror',
  'Shooter',
  'MOBA',
]

export const categoryLookup = Object.fromEntries(
  categories.map((category) => [category.slug, category]),
)

export function getGameBySlug(slug) {
  return games.find((game) => game.slug === slug)
}
