export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Games", to: "/games" },
  { label: "Categories", to: "/categories" },
  { label: "Contact", to: "/contact" },
];

export const categories = [
  {
    slug: "action",
    name: "Action",
    blurb:
      "Open combat sandboxes, high-speed battle royales, and aggressive gameplay built for instant momentum.",
    accent: "from-fuchsia-500/30 via-violet-500/10 to-sky-500/30",
  },
  {
    slug: "rpg",
    name: "RPG",
    blurb:
      "Quest-heavy worlds, character builds, progression systems, and deep stories with official source links.",
    accent: "from-violet-500/30 via-fuchsia-500/10 to-cyan-500/30",
  },
  {
    slug: "fps",
    name: "FPS",
    blurb:
      "First-person shooters spanning tactical team play, cinematic campaigns, and battle royale firefights.",
    accent: "from-rose-500/30 via-violet-500/10 to-blue-500/30",
  },
  {
    slug: "racing",
    name: "Racing",
    blurb:
      "Festival racers, arcade time-trials, and mobile drift builds tuned for speed and style.",
    accent: "from-blue-500/30 via-cyan-500/10 to-violet-500/30",
  },
  {
    slug: "strategy",
    name: "Strategy",
    blurb:
      "Empire building, tactical planning, city management, and smart macro play that rewards patience.",
    accent: "from-indigo-500/30 via-violet-500/10 to-cyan-500/30",
  },
  {
    slug: "sports",
    name: "Sports",
    blurb:
      "Licensed football, basketball, skating, and competitive multiplayer sports experiences.",
    accent: "from-emerald-500/30 via-cyan-500/10 to-blue-500/30",
  },
  {
    slug: "indie",
    name: "Indie",
    blurb:
      "Stylish smaller-team releases with standout art direction, replayability, and inventive mechanics.",
    accent: "from-cyan-500/30 via-violet-500/10 to-fuchsia-500/30",
  },
  {
    slug: "open-world",
    name: "Open World",
    blurb:
      "Large map-driven adventures, exploration loops, and sandbox freedom across premium legal destinations.",
    accent: "from-sky-500/30 via-blue-500/10 to-violet-500/30",
  },
];

export const featuredStats = [
  {
    value: "Official Links",
    label:
      "Every CTA opens an official store, publisher, or verified platform page.",
  },
  {
    value: "Image Driven",
    label:
      "Each game now includes a thumbnail, banner, and screenshot gallery in the data layer.",
  },
  {
    value: "Cross Platform",
    label:
      "PC, console, mobile, and Switch titles live together inside one premium discovery flow.",
  },
];

const paletteMap = {
  action: ["#d946ef", "#7c3aed", "#2563eb"],
  rpg: ["#8b5cf6", "#22d3ee", "#3b82f6"],
  fps: ["#fb7185", "#8b5cf6", "#2563eb"],
  racing: ["#38bdf8", "#3b82f6", "#8b5cf6"],
  strategy: ["#6366f1", "#0ea5e9", "#8b5cf6"],
  sports: ["#22c55e", "#22d3ee", "#2563eb"],
  indie: ["#2dd4bf", "#60a5fa", "#8b5cf6"],
  "open-world": ["#38bdf8", "#7dd3fc", "#7c3aed"],
};

const priceLabels = {
  Free: "Free to Play",
  Paid: "Premium",
  "Coming Soon": "Coming Soon",
};

const screenshotLabels = ["Combat View", "World Scan", "Official Access"];

const gameConfigs = [
  {
    title: "Grand Theft Auto V",
    tagline:
      "Open-world crime sandbox with driving, shooting, and deep side activities.",
    description:
      "Open-world crime sandbox with driving, shooting, and deep side activities.",
    genres: ["Action", "Open World"],
    categories: ["action", "open-world"],
    platforms: ["PC", "PS4", "PS5", "Xbox One", "Xbox Series X/S"],
    rating: 4.8,
    popularity: 99,
    releaseRank: 18,
    priceModel: "Paid",
    store: "Steam",
    publisher: "Rockstar Games",
    launchWindow: "Available now",
    officialUrl: "https://store.steampowered.com/app/3493/Grand_Theft_Auto_V/",
    featureTag: "Crime Sandbox",
    image: "/images/games/gtav.jpg",
  },
  {
    title: "Cyberpunk 2077",
    tagline:
      "Futuristic open-world RPG with fast-paced combat and deep story choices.",
    description:
      "Futuristic open-world RPG with fast-paced combat and deep story choices.",
    genres: ["Action RPG", "Open World"],
    categories: ["action", "rpg", "open-world"],
    platforms: ["PC", "PS4", "PS5", "Xbox One", "Xbox Series X/S"],
    rating: 4.7,
    popularity: 96,
    releaseRank: 20,
    priceModel: "Paid",
    store: "Steam",
    publisher: "CD PROJEKT RED",
    launchWindow: "Available now",
    officialUrl: "https://store.steampowered.com/app/1091500/Cyberpunk_2077/",
    featureTag: "Neon RPG",
    image: "/images/games/cyberpunk_2077_official.jpg",
  },
  {
    title: "Hades",
    tagline:
      "Fast-paced roguelike dungeon crawler with stylish combat and great writing.",
    description:
      "Fast-paced roguelike dungeon crawler with stylish combat and great writing.",
    genres: ["Action", "Roguelike", "Indie"],
    categories: ["action", "indie"],
    platforms: ["PC", "PS4", "PS5", "Switch", "iOS"],
    rating: 4.9,
    popularity: 90,
    releaseRank: 14,
    priceModel: "Paid",
    store: "Steam",
    publisher: "Supergiant Games",
    launchWindow: "Available now",
    officialUrl: "https://store.steampowered.com/app/1145360/Hades/",
    featureTag: "Roguelike Hit",
    image: "/images/games/hades.jpg",
  },
  {
    title: "Genshin Impact",
    tagline:
      "Anime-style open-world action RPG with gacha mechanics and co-op.",
    description:
      "Anime-style open-world action RPG with gacha mechanics and co-op.",
    genres: ["Action RPG", "Open World"],
    categories: ["action", "rpg", "open-world"],
    platforms: ["PC", "PS4", "PS5", "iOS", "Android"],
    rating: 4.7,
    popularity: 95,
    releaseRank: 19,
    priceModel: "Free",
    store: "Official Site",
    publisher: "HoYoverse",
    launchWindow: "Available now",
    officialUrl: "https://genshin.hoyoverse.com/",
    featureTag: "Open World",
    image: "/images/games/genshin_impact.jpg",
  },
  {
    title: "PUBG Mobile",
    tagline: "Mobile-focused battle royale shooter set in large open maps.",
    description: "Mobile-focused battle royale shooter set in large open maps.",
    genres: ["Battle Royale", "Action"],
    categories: ["action", "fps"],
    platforms: ["Android", "iOS"],
    rating: 4.4,
    popularity: 88,
    releaseRank: 15,
    priceModel: "Free",
    store: "Google Play",
    publisher: "Level Infinite",
    launchWindow: "Available now",
    officialUrl: "https://play.google.com/store/apps/details?id=com.tencent.ig",
    featureTag: "Mobile BR",
    image: "/images/games/pubg_mobile.jpg",
  },
  {
    title: "Elden Ring",
    tagline:
      "Souls-style open-world RPG with deep lore, tough combat, and exploration.",
    description:
      "Souls-style open-world RPG with deep lore, tough combat, and exploration.",
    genres: ["Action RPG", "Open World"],
    categories: ["rpg", "open-world"],
    platforms: ["PC", "PS4", "PS5", "Xbox One", "Xbox Series X/S"],
    rating: 4.9,
    popularity: 97,
    releaseRank: 21,
    priceModel: "Paid",
    store: "Steam",
    publisher: "FromSoftware",
    launchWindow: "Available now",
    officialUrl: "https://store.steampowered.com/app/1245620/ELDEN_RING/",
    featureTag: "Souls Epic",
    image: "/images/games/elden_ring.jpg",
  },
  {
    title: "The Witcher 3: Wild Hunt",
    tagline:
      "Story-driven fantasy RPG with vast open world and rich side quests.",
    description:
      "Story-driven fantasy RPG with vast open world and rich side quests.",
    genres: ["RPG", "Open World"],
    categories: ["rpg", "open-world"],
    platforms: ["PC", "PS4", "PS5", "Xbox One", "Xbox Series X/S"],
    rating: 4.9,
    popularity: 94,
    releaseRank: 16,
    priceModel: "Paid",
    store: "Steam",
    publisher: "CD PROJEKT RED",
    launchWindow: "Available now",
    officialUrl:
      "https://store.steampowered.com/app/292030/The_Witcher_3_Wild_Hunt/",
    featureTag: "Fantasy Classic",
    image: "/images/games/witcher3.jpg",
  },
  {
    title: "Diablo IV",
    tagline: "Dark fantasy ARPG with loot-driven progression and online co-op.",
    description:
      "Dark fantasy ARPG with loot-driven progression and online co-op.",
    genres: ["Action RPG"],
    categories: ["rpg"],
    platforms: ["PC", "PS4", "PS5", "Xbox One", "Xbox Series X/S"],
    rating: 4.5,
    popularity: 87,
    releaseRank: 17,
    priceModel: "Paid",
    store: "Official Site",
    publisher: "Blizzard Entertainment",
    launchWindow: "Available now",
    officialUrl: "https://www.blizzard.com/en-in/games/d4",
    featureTag: "Loot Grind",
    image: "/images/games/diablo_iv.png",
  },
  {
    title: "Sea of Stars",
    tagline:
      "Modern retro-style RPG with pixel art and tactical turn-based combat.",
    description:
      "Modern retro-style RPG with pixel art and tactical turn-based combat.",
    genres: ["Turn-based RPG"],
    categories: ["rpg"],
    platforms: ["PC", "PS4", "PS5", "Switch", "Xbox Series X/S", "Mobile"],
    rating: 4.7,
    popularity: 80,
    releaseRank: 13,
    priceModel: "Paid",
    store: "Official Site",
    publisher: "Sabotage Studio",
    launchWindow: "Available now",
    officialUrl: "https://www.seaofstars.com/",
    featureTag: "Retro Quest",
    image: "/images/games/sea_of_stars.png",
  },
  {
    title: "Ni no Kuni II: Revenant Kingdom",
    tagline:
      "Charming fantasy JRPG with kingdom-building and real-time battles.",
    description:
      "Charming fantasy JRPG with kingdom-building and real-time battles.",
    genres: ["JRPG"],
    categories: ["rpg"],
    platforms: ["PC", "PS4", "PS5", "Switch"],
    rating: 4.4,
    popularity: 73,
    releaseRank: 11,
    priceModel: "Paid",
    store: "Steam",
    publisher: "Bandai Namco Entertainment",
    launchWindow: "Available now",
    officialUrl:
      "https://store.steampowered.com/app/810380/Nino_Kuni_II_Revenant_Kingdom/",
    featureTag: "JRPG Charm",
    image: "/images/games/rpg_game_1777832923045.png",
  },
  {
    title: "Call of Duty: Warzone",
    tagline:
      "Large-scale free-to-play battle royale within the Call of Duty universe.",
    description:
      "Large-scale free-to-play battle royale within the Call of Duty universe.",
    genres: ["Battle Royale", "FPS"],
    categories: ["fps", "action"],
    platforms: ["PC", "PS4", "PS5", "Xbox One", "Xbox Series X/S"],
    rating: 4.5,
    popularity: 93,
    releaseRank: 18,
    priceModel: "Free",
    store: "Official Site",
    publisher: "Activision",
    launchWindow: "Available now",
    officialUrl: "https://www.callofduty.com/warzone",
    featureTag: "Large-Scale PvP",
    image: "/images/games/cod_warzone.png",
  },
  {
    title: "Valorant",
    tagline:
      "5v5 hero-based tactical shooter inspired by classic objective play.",
    description:
      "5v5 hero-based tactical shooter inspired by classic objective play.",
    genres: ["FPS", "Tactical"],
    categories: ["fps"],
    platforms: ["PC", "PS5", "Xbox Series X/S"],
    rating: 4.7,
    popularity: 92,
    releaseRank: 20,
    priceModel: "Free",
    store: "Official Site",
    publisher: "Riot Games",
    launchWindow: "Available now",
    officialUrl: "https://playvalorant.com/",
    featureTag: "Tactical 5v5",
    image: "/images/games/valorant.png",
  },
  {
    title: "Halo: The Master Chief Collection",
    tagline: "Compilation of classic Halo titles with modern matchmaking.",
    description: "Compilation of classic Halo titles with modern matchmaking.",
    genres: ["FPS", "Multiplayer"],
    categories: ["fps"],
    platforms: ["PC", "Xbox One", "Xbox Series X/S"],
    rating: 4.7,
    popularity: 84,
    releaseRank: 12,
    priceModel: "Paid",
    store: "Microsoft Store",
    publisher: "Xbox Game Studios",
    launchWindow: "Available now",
    officialUrl: "https://www.microsoft.com/store/productId/9N5PZK82ZQZP",
    featureTag: "Halo Bundle",
    image: "/images/games/halo_mcc.png",
  },
  {
    title: "Metro Exodus",
    tagline: "Atmospheric post-apocalyptic FPS with survival and story focus.",
    description:
      "Atmospheric post-apocalyptic FPS with survival and story focus.",
    genres: ["FPS", "Story"],
    categories: ["fps"],
    platforms: ["PC", "PS4", "PS5", "Xbox One", "Xbox Series X/S"],
    rating: 4.6,
    popularity: 78,
    releaseRank: 10,
    priceModel: "Paid",
    store: "Steam",
    publisher: "Deep Silver",
    launchWindow: "Available now",
    officialUrl: "https://store.steampowered.com/app/412020/Metro_Exodus/",
    featureTag: "Story FPS",
    image: "/images/games/fps_game_1777832939474.png",
  },
  {
    title: "Doom Eternal",
    tagline: "Fast-paced supernatural shooter with heavy combat and movement.",
    description:
      "Fast-paced supernatural shooter with heavy combat and movement.",
    genres: ["FPS", "Action"],
    categories: ["fps", "action"],
    platforms: ["PC", "PS4", "PS5", "Xbox One", "Xbox Series X/S"],
    rating: 4.8,
    popularity: 89,
    releaseRank: 14,
    priceModel: "Paid",
    store: "Steam",
    publisher: "Bethesda Softworks",
    launchWindow: "Available now",
    officialUrl: "https://store.steampowered.com/app/481970/DOOM_Eternal/",
    featureTag: "High-Speed Combat",
    image: "/images/games/doom_eternal.png",
  },
  {
    title: "Forza Horizon 5",
    tagline:
      "Vibrant open-world racing festival with cars, events, and online modes.",
    description:
      "Vibrant open-world racing festival with cars, events, and online modes.",
    genres: ["Racing", "Open World"],
    categories: ["racing", "open-world"],
    platforms: ["PC", "Xbox One", "Xbox Series X/S"],
    rating: 4.8,
    popularity: 91,
    releaseRank: 15,
    priceModel: "Paid",
    store: "Microsoft Store",
    publisher: "Xbox Game Studios",
    launchWindow: "Available now",
    officialUrl: "https://www.microsoft.com/store/productId/9NKSQGP7F26G",
    featureTag: "Festival Racer",
    image: "/images/games/forza_horizon_5.png",
  },
  {
    title: "Forza Horizon 6 (2026)",
    tagline:
      "Sequel with Japan-based open world, huge car roster, and online racing.",
    description:
      "Sequel with Japan-based open world, huge car roster, and online racing.",
    genres: ["Racing", "Open World"],
    categories: ["racing", "open-world"],
    platforms: ["PC", "PS5", "Xbox Series X/S"],
    rating: 4.8,
    popularity: 90,
    releaseRank: 31,
    priceModel: "Coming Soon",
    store: "Official Site",
    publisher: "Xbox Game Studios",
    launchWindow: "Upcoming listing",
    officialUrl: "https://forzahorizon.com/",
    featureTag: "2026 Sequel",
    image: "/images/games/racing_game_1777832957397.png",
  },
  {
    title: "Rocket League",
    tagline:
      "Soccer with rocket-powered cars, cross-platform and highly competitive.",
    description:
      "Soccer with rocket-powered cars, cross-platform and highly competitive.",
    genres: ["Sports", "Racing"],
    categories: ["sports", "racing"],
    platforms: ["PC", "PS4", "PS5", "Xbox One", "Xbox Series X/S", "Switch"],
    rating: 4.8,
    popularity: 90,
    releaseRank: 16,
    priceModel: "Free",
    store: "Official Site",
    publisher: "Psyonix",
    launchWindow: "Available now",
    officialUrl: "https://www.rocketleague.com/",
    featureTag: "Car Football",
    image: "/images/games/sports_game_1777832986020.png",
  },
  {
    title: "Trackmania",
    tagline:
      "Level-based arcade racing with fast times and online leaderboards.",
    description:
      "Level-based arcade racing with fast times and online leaderboards.",
    genres: ["Racing", "Arcade"],
    categories: ["racing"],
    platforms: ["PC", "Xbox One", "PS4", "PS5"],
    rating: 4.5,
    popularity: 75,
    releaseRank: 9,
    priceModel: "Free",
    store: "Official Site",
    publisher: "Ubisoft Nadeo",
    launchWindow: "Available now",
    officialUrl: "https://trackmania.com/",
    featureTag: "Arcade Time Trials",
    image: "/images/games/racing_game_1777832957397.png",
  },
  {
    title: "CarX Street",
    tagline:
      "Mobile drift-style racing with realistic physics and custom cars.",
    description:
      "Mobile drift-style racing with realistic physics and custom cars.",
    genres: ["Racing", "Mobile"],
    categories: ["racing"],
    platforms: ["Android", "iOS"],
    rating: 4.3,
    popularity: 70,
    releaseRank: 8,
    priceModel: "Free",
    store: "Google Play",
    publisher: "CarX Technologies",
    launchWindow: "Available now",
    officialUrl:
      "https://play.google.com/store/apps/details?id=com.carxtech.carxstreet",
    featureTag: "Drift Focus",
    image: "/images/games/racing_game_1777832957397.png",
  },
  {
    title: "Civilization VI",
    tagline:
      "Turn-based empire-building with deep diplomacy and tech progression.",
    description:
      "Turn-based empire-building with deep diplomacy and tech progression.",
    genres: ["4X Strategy"],
    categories: ["strategy"],
    platforms: ["PC", "Android", "iOS"],
    rating: 4.7,
    popularity: 83,
    releaseRank: 11,
    priceModel: "Paid",
    store: "Steam",
    publisher: "2K",
    launchWindow: "Available now",
    officialUrl:
      "https://store.steampowered.com/app/289070/Sid_Meiers_Civilization_VI/",
    featureTag: "Empire Builder",
    image: "/images/games/civ_vi.png",
  },
  {
    title: "XCOM 2",
    tagline:
      "Turn-based tactical combat against alien occupation with permadeath.",
    description:
      "Turn-based tactical combat against alien occupation with permadeath.",
    genres: ["Tactical Strategy"],
    categories: ["strategy"],
    platforms: ["PC", "PS4", "PS5", "Xbox One", "Xbox Series X/S"],
    rating: 4.7,
    popularity: 79,
    releaseRank: 10,
    priceModel: "Paid",
    store: "Steam",
    publisher: "2K",
    launchWindow: "Available now",
    officialUrl: "https://store.steampowered.com/app/268500/XCOM_2/",
    featureTag: "Tactical Classic",
    image: "/images/games/xcom_2.png",
  },
  {
    title: "Manor Lords",
    tagline:
      "Medieval city-builder with real-time battles and economy simulation.",
    description:
      "Medieval city-builder with real-time battles and economy simulation.",
    genres: ["Strategy", "City Builder"],
    categories: ["strategy"],
    platforms: ["PC", "PS5", "PS4", "Xbox", "Switch"],
    rating: 4.6,
    popularity: 81,
    releaseRank: 22,
    priceModel: "Paid",
    store: "Steam",
    publisher: "Slavic Magic",
    launchWindow: "Available now",
    officialUrl: "https://store.steampowered.com/app/1943230/Manor_Lords/",
    featureTag: "City Builder",
    image: "/images/games/manor_lords.png",
  },
  {
    title: "StarCraft II",
    tagline:
      "Iconic real-time strategy game with strong multiplayer and ladder system.",
    description:
      "Iconic real-time strategy game with strong multiplayer and ladder system.",
    genres: ["RTS"],
    categories: ["strategy"],
    platforms: ["PC"],
    rating: 4.8,
    popularity: 82,
    releaseRank: 9,
    priceModel: "Free",
    store: "Official Site",
    publisher: "Blizzard Entertainment",
    launchWindow: "Free to start",
    officialUrl: "https://starcraft2.com/",
    featureTag: "RTS Icon",
    image: "/images/games/starcraft_2.png",
  },
  {
    title: "Triangle Strategy",
    tagline: "Story-driven turn-based tactical RPG with branching paths.",
    description: "Story-driven turn-based tactical RPG with branching paths.",
    genres: ["Tactical RPG"],
    categories: ["strategy", "rpg"],
    platforms: ["PC", "Switch"],
    rating: 4.5,
    popularity: 72,
    releaseRank: 8,
    priceModel: "Paid",
    store: "Official Site",
    publisher: "Square Enix",
    launchWindow: "Available now",
    officialUrl: "https://trianglesstrategy.com/",
    featureTag: "Branching Tactics",
    image: "/images/games/triangle_strategy.png",
  },
  {
    title: "EA SPORTS FC 26",
    tagline: "Modern football sim with realistic graphics and online modes.",
    description:
      "Modern football sim with realistic graphics and online modes.",
    genres: ["Sports"],
    categories: ["sports"],
    platforms: ["PC", "PS4", "PS5", "Xbox One", "Xbox Series X/S"],
    rating: 4.5,
    popularity: 93,
    releaseRank: 32,
    priceModel: "Coming Soon",
    store: "Official Site",
    publisher: "Electronic Arts",
    launchWindow: "Upcoming listing",
    officialUrl: "https://www.ea.com/games/ea-sports-fc",
    featureTag: "Football Sim",
    image: "/images/games/ea_fc_26.jpg",
  },
  {
    title: "NBA 2K26",
    tagline: "Popular basketball simulation with MyCareer and online modes.",
    description:
      "Popular basketball simulation with MyCareer and online modes.",
    genres: ["Sports"],
    categories: ["sports"],
    platforms: ["PC", "PS4", "PS5", "Xbox One", "Xbox Series X/S"],
    rating: 4.4,
    popularity: 89,
    releaseRank: 30,
    priceModel: "Coming Soon",
    store: "Official Site",
    publisher: "2K Sports",
    launchWindow: "Upcoming listing",
    officialUrl: "https://www.2k.com/",
    featureTag: "Basketball Sim",
    image: "/images/games/nba_2k26.png",
  },
  {
    title: "Tony Hawk's Pro Skater 1+2",
    tagline:
      "Modern remake of classic skateboarding games with updated visuals.",
    description:
      "Modern remake of classic skateboarding games with updated visuals.",
    genres: ["Sports"],
    categories: ["sports"],
    platforms: ["PC", "PS4", "PS5", "Xbox One", "Xbox Series X/S", "Switch"],
    rating: 4.6,
    popularity: 76,
    releaseRank: 12,
    priceModel: "Paid",
    store: "Steam",
    publisher: "Activision",
    launchWindow: "Available now",
    officialUrl:
      "https://store.steampowered.com/app/1132000/Tony_Hawks_Pro_Skater_1__2/",
    featureTag: "Skate Remake",
    image: "/images/games/sports_game_1777832986020.png",
  },
  {
    title: "Nintendo Switch Sports",
    tagline:
      "Casual sports collection with tennis, bowling, badminton, and more.",
    description:
      "Casual sports collection with tennis, bowling, badminton, and more.",
    genres: ["Sports"],
    categories: ["sports"],
    platforms: ["Switch"],
    rating: 4.3,
    popularity: 71,
    releaseRank: 7,
    priceModel: "Paid",
    store: "Official Site",
    publisher: "Nintendo",
    launchWindow: "Available now",
    officialUrl:
      "https://www.nintendo.com/store/products/nintendo-switch-sports-switch/",
    featureTag: "Party Sports",
    image: "/images/games/sports_game_1777832986020.png",
  },
  {
    title: "Hollow Knight",
    tagline: "Hand-drawn 2D metroidvania with deep exploration and challenge.",
    description:
      "Hand-drawn 2D metroidvania with deep exploration and challenge.",
    genres: ["Indie", "Action Platformer"],
    categories: ["indie", "action"],
    platforms: ["PC", "PS4", "PS5", "Xbox One", "Xbox Series X/S", "Switch"],
    rating: 4.9,
    popularity: 88,
    releaseRank: 13,
    priceModel: "Paid",
    store: "Steam",
    publisher: "Team Cherry",
    launchWindow: "Available now",
    officialUrl: "https://store.steampowered.com/app/367520/Hollow_Knight/",
    featureTag: "Metroidvania",
    image: "/images/games/hollow_knight.jpg",
  },
  {
    title: "Celeste",
    tagline:
      "Challenging pixel-art platformer with emotional story and assists.",
    description:
      "Challenging pixel-art platformer with emotional story and assists.",
    genres: ["Indie", "Platformer"],
    categories: ["indie"],
    platforms: ["PC", "PS4", "PS5", "Xbox One", "Xbox Series X/S", "Switch"],
    rating: 4.8,
    popularity: 79,
    releaseRank: 11,
    priceModel: "Paid",
    store: "Steam",
    publisher: "Extremely OK Games",
    launchWindow: "Available now",
    officialUrl: "https://store.steampowered.com/app/504230/Celeste/",
    featureTag: "Narrative Platformer",
    image: "/images/games/celeste.png",
  },
  {
    title: "Dead Cells",
    tagline: "Fast-paced rogue-lite action roguelike with procedural levels.",
    description:
      "Fast-paced rogue-lite action roguelike with procedural levels.",
    genres: ["Indie", "Rogue-lite"],
    categories: ["indie", "action"],
    platforms: ["PC", "PS4", "PS5", "Xbox", "Switch", "Mobile"],
    rating: 4.8,
    popularity: 82,
    releaseRank: 12,
    priceModel: "Paid",
    store: "Official Site",
    publisher: "Motion Twin",
    launchWindow: "Available now",
    officialUrl: "https://www.dead-cells.com/",
    featureTag: "Rogue-lite",
    image: "/images/games/indie_game_1777832999890.png",
  },
  {
    title: "Spiritfarer",
    tagline: "Relaxing management game about guiding spirits to the afterlife.",
    description:
      "Relaxing management game about guiding spirits to the afterlife.",
    genres: ["Indie", "Cozy"],
    categories: ["indie"],
    platforms: ["PC", "PS4", "PS5", "Xbox", "Switch", "Mobile"],
    rating: 4.7,
    popularity: 74,
    releaseRank: 10,
    priceModel: "Paid",
    store: "Steam",
    publisher: "Thunder Lotus Games",
    launchWindow: "Available now",
    officialUrl: "https://store.steampowered.com/app/737960/Spiritfarer/",
    featureTag: "Cozy Management",
    image: "/images/games/indie_game_1777832999890.png",
  },
  {
    title: "Grand Theft Auto VI",
    tagline:
      "Highly anticipated crime-driven open-world sandbox with next-gen visuals.",
    description:
      "Highly anticipated crime-driven open-world sandbox with next-gen visuals.",
    genres: ["Action", "Open World"],
    categories: ["action", "open-world"],
    platforms: ["PC", "PS5", "Xbox Series X/S"],
    rating: 4.9,
    popularity: 100,
    releaseRank: 33,
    priceModel: "Coming Soon",
    store: "Official Site",
    publisher: "Rockstar Games",
    launchWindow: "Upcoming listing",
    officialUrl: "https://www.rockstargames.com/gta6",
    featureTag: "Upcoming Giant",
    image: "/images/games/gta6_enhanced.png",
    banner: "/images/games/gta6_enhanced.png",
    screenshots: [
      {
        src: "/images/games/gta6_enhanced.png",
        title: "Official Art",
        caption: "Lucia and Jason in Vice City."
      },
      {
        src: "/images/games/gta6_enhanced.png",
        title: "Key Art",
        caption: "The highly anticipated return to Vice City."
      },
      {
        src: "/images/games/gta6_enhanced.png",
        title: "Promo",
        caption: "Grand Theft Auto VI coming soon."
      }
    ]
  },
  {
    title: "Horizon Forbidden West",
    tagline:
      "Beautiful sci-fi wildlife open world with exploration and combat.",
    description:
      "Beautiful sci-fi wildlife open world with exploration and combat.",
    genres: ["Action RPG", "Open World"],
    categories: ["open-world", "rpg"],
    platforms: ["PC", "PS4", "PS5"],
    rating: 4.7,
    popularity: 86,
    releaseRank: 18,
    priceModel: "Paid",
    store: "PlayStation",
    publisher: "Guerrilla",
    launchWindow: "Available now",
    officialUrl:
      "https://www.playstation.com/en-in/games/horizon-forbidden-west/",
    featureTag: "Sci-Fi Open World",
    image: "/images/games/horizon_fw.png",
  },
  {
    title: "Dragon's Dogma 2",
    tagline: "Large open world with dynamic monsters and Pawn-style allies.",
    description:
      "Large open world with dynamic monsters and Pawn-style allies.",
    genres: ["Action RPG", "Open World"],
    categories: ["open-world", "rpg"],
    platforms: ["PC", "PS5", "Xbox Series X/S"],
    rating: 4.6,
    popularity: 84,
    releaseRank: 24,
    priceModel: "Paid",
    store: "Steam",
    publisher: "Capcom",
    launchWindow: "Available now",
    officialUrl: "https://store.steampowered.com/app/1972150/Dragons_Dogma_2/",
    featureTag: "Pawn Adventure",
    image: "/images/games/dragons_dogma_2.png",
  },
  {
    title: "Assassin's Creed 4: Black Flag Remastered",
    tagline:
      "Golden-age pirate open world with naval combat and side activities.",
    description:
      "Golden-age pirate open world with naval combat and side activities.",
    genres: ["Action", "Open World"],
    categories: ["action", "open-world"],
    platforms: ["PC", "PS5", "Xbox Series X/S"],
    rating: 4.6,
    popularity: 85,
    releaseRank: 29,
    priceModel: "Coming Soon",
    store: "Official Site",
    publisher: "Ubisoft",
    launchWindow: "Upcoming listing",
    officialUrl: "https://www.assassinscreed.com/",
    featureTag: "Pirate Remaster",
    image: "/images/games/ac4_black_flag.png",
  },
];

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function escapeXml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function encodeSvg(svg) {
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function wrapLines(value, maxLength = 18) {
  const words = value.split(" ");
  const lines = [];
  let current = "";

  words.forEach((word) => {
    const next = current ? `${current} ${word}` : word;

    if (next.length > maxLength && current) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  });

  if (current) {
    lines.push(current);
  }

  return lines.slice(0, 3);
}

function buildVisual({
  title,
  subtitle,
  palette,
  surfaceLabel,
  width,
  height,
  lines,
}) {
  const [primary, secondary, tertiary] = palette;
  const titleLines = wrapLines(title);
  const safeSubtitle = escapeXml(subtitle);
  const safeSurface = escapeXml(surfaceLabel);

  const lineMarkup = titleLines
    .map(
      (line, index) => `
        <text x="84" y="${height - 164 + index * 48}" fill="white" font-size="${
          width > 1200 ? 44 : 34
        }" font-family="Arial, Helvetica, sans-serif" font-weight="700">
          ${escapeXml(line)}
        </text>
      `,
    )
    .join("");

  const microLines = lines
    .map(
      (line, index) => `
        <text x="${width - 328}" y="${132 + index * 24}" fill="rgba(226,232,240,0.86)" font-size="14" font-family="Arial, Helvetica, sans-serif">
          ${escapeXml(line)}
        </text>
      `,
    )
    .join("");

  return encodeSvg(`
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${primary}" />
          <stop offset="48%" stop-color="${secondary}" />
          <stop offset="100%" stop-color="${tertiary}" />
        </linearGradient>
        <linearGradient id="sheen" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="rgba(255,255,255,0.28)" />
          <stop offset="45%" stop-color="rgba(255,255,255,0.04)" />
          <stop offset="100%" stop-color="rgba(2,6,23,0.44)" />
        </linearGradient>
        <filter id="blur">
          <feGaussianBlur stdDeviation="40" />
        </filter>
      </defs>

      <rect width="${width}" height="${height}" rx="40" fill="#020617" />
      <rect width="${width}" height="${height}" rx="40" fill="url(#bg)" opacity="0.92" />
      <rect width="${width}" height="${height}" rx="40" fill="url(#sheen)" />

      <g opacity="0.24">
        <circle cx="${width * 0.18}" cy="${height * 0.24}" r="${Math.round(
          width * 0.14,
        )}" fill="white" filter="url(#blur)" />
        <circle cx="${width * 0.86}" cy="${height * 0.18}" r="${Math.round(
          width * 0.1,
        )}" fill="${secondary}" filter="url(#blur)" />
      </g>

      <g opacity="0.14">
        <path d="M0 ${height * 0.18} H${width}" stroke="white" stroke-width="2" />
        <path d="M0 ${height * 0.72} H${width}" stroke="white" stroke-width="2" />
        <path d="M${width * 0.14} 0 V${height}" stroke="white" stroke-width="2" />
        <path d="M${width * 0.78} 0 V${height}" stroke="white" stroke-width="2" />
      </g>

      <g opacity="0.28">
        <path d="M${width * 0.58} ${height * 0.12} L${width * 0.92} ${height * 0.12} L${
          width * 0.76
        } ${height * 0.64} Z" fill="rgba(255,255,255,0.1)" />
        <path d="M${width * 0.54} ${height * 0.26} L${width * 0.86} ${height * 0.28} L${
          width * 0.7
        } ${height * 0.88} Z" fill="rgba(2,6,23,0.26)" />
      </g>

      <rect x="48" y="48" rx="999" width="220" height="42" fill="rgba(2,6,23,0.36)" stroke="rgba(255,255,255,0.16)" />
      <text x="72" y="75" fill="white" font-size="16" font-family="Arial, Helvetica, sans-serif" letter-spacing="4">
        ${safeSurface}
      </text>

      <rect x="${width - 360}" y="60" rx="28" width="300" height="100" fill="rgba(2,6,23,0.22)" stroke="rgba(255,255,255,0.12)" />
      ${microLines}

      <text x="84" y="${height - 248}" fill="rgba(226,232,240,0.86)" font-size="18" font-family="Arial, Helvetica, sans-serif" letter-spacing="5">
        GAME VAULT
      </text>
      ${lineMarkup}
      <text x="84" y="${height - 56}" fill="rgba(226,232,240,0.84)" font-size="20" font-family="Arial, Helvetica, sans-serif">
        ${safeSubtitle}
      </text>
    </svg>
  `);
}

function buildMediaSet({
  title,
  tagline,
  description,
  palette,
  featureTag,
  genres,
  store,
}) {
  const image = buildVisual({
    title,
    subtitle: tagline,
    palette,
    surfaceLabel: featureTag,
    width: 900,
    height: 1120,
    lines: [genres[0] ?? "Featured", store, "Official redirect"],
  });

  const banner = buildVisual({
    title,
    subtitle: tagline,
    palette,
    surfaceLabel: `${featureTag} BANNER`,
    width: 1600,
    height: 900,
    lines: [genres.join(" / "), store, "Premium marketplace"],
  });

  const screenshotGallery = screenshotLabels.map((label, index) => ({
    src: buildVisual({
      title,
      subtitle: description,
      palette,
      surfaceLabel: label.toUpperCase(),
      width: 1280,
      height: 720,
      lines: [label, store, `Shot 0${index + 1}`],
    }),
    title: label,
    caption:
      index === 0
        ? `${genres[0] ?? "Gameplay"} showcase for ${title}.`
        : index === 1
          ? `Preview the premium atmosphere before redirecting to the official ${store} destination.`
          : "Every CTA stays legal-first and sends players to a verified source only.",
  }));

  return {
    image,
    banner,
    screenshots: screenshotGallery,
  };
}

function createGame(config) {
  const primaryCategory = config.categories[0];
  const palette =
    config.palette ?? paletteMap[primaryCategory] ?? paletteMap.action;
  const media = buildMediaSet({
    title: config.title,
    tagline: config.tagline,
    description: config.description,
    palette,
    featureTag: config.featureTag,
    genres: config.genres,
    store: config.store,
  });

  return {
    id: slugify(config.title),
    slug: slugify(config.title),
    title: config.title,
    image: config.image ?? media.image,
    banner: config.banner ?? config.image ?? media.banner,
    screenshots: config.screenshots ?? (config.image ? [
      { src: config.image, title: "Official Art", caption: `${config.title} showcase.` },
      { src: config.image, title: "Key Visual", caption: `The world of ${config.title}.` },
      { src: config.image, title: "Gameplay Preview", caption: `Direct look at ${config.title}.` }
    ] : media.screenshots),
    genre: config.genres.join(" / "),
    rating: config.rating,
    description: config.description,
    official_url: config.officialUrl,
    officialUrl: config.officialUrl,
    websiteUrl: config.websiteUrl ?? config.officialUrl,
    playUrl: config.playUrl ?? config.officialUrl,
    tagline: config.tagline,
    shortDescription: config.description,
    overview: config.description,
    vaultNote:
      config.vaultNote ??
      `Game Vault sends players to the official ${config.store} destination for ${config.title} so the browsing flow stays legal and trustworthy.`,
    genres: config.genres,
    categories: config.categories,
    platforms: config.platforms,
    popularity: config.popularity,
    releaseRank: config.releaseRank,
    priceModel: config.priceModel,
    priceLabel: priceLabels[config.priceModel] ?? config.priceModel,
    store: config.store,
    publisher: config.publisher,
    launchWindow: config.launchWindow,
    palette,
    featureTag: config.featureTag,
    supportedStores: config.supportedStores ?? [config.store],
    highlights: config.highlights ?? [
      config.genres[0] ?? "Featured gameplay",
      `${config.platforms.slice(0, 2).join(" + ")} support`,
      `${config.store} redirect`,
    ],
  };
}

export const games = gameConfigs.map(createGame);

const platformOrder = [
  "PC",
  "PS4",
  "PS5",
  "Xbox One",
  "Xbox Series X/S",
  "Xbox",
  "Switch",
  "iOS",
  "Android",
  "Mobile",
];

const genreOrder = [
  "Action",
  "Action RPG",
  "Open World",
  "RPG",
  "JRPG",
  "Turn-based RPG",
  "Battle Royale",
  "FPS",
  "Tactical",
  "Multiplayer",
  "Story",
  "Racing",
  "Arcade",
  "Mobile",
  "Sports",
  "4X Strategy",
  "Tactical Strategy",
  "RTS",
  "Tactical RPG",
  "Strategy",
  "City Builder",
  "Indie",
  "Roguelike",
  "Rogue-lite",
  "Action Platformer",
  "Platformer",
  "Cozy",
];

function sortByPreset(values, preset) {
  return values.sort((left, right) => {
    const leftIndex = preset.indexOf(left);
    const rightIndex = preset.indexOf(right);

    if (leftIndex === -1 && rightIndex === -1) {
      return left.localeCompare(right);
    }

    if (leftIndex === -1) {
      return 1;
    }

    if (rightIndex === -1) {
      return -1;
    }

    return leftIndex - rightIndex;
  });
}

export const platformOptions = sortByPreset(
  [...new Set(games.flatMap((game) => game.platforms))],
  platformOrder,
);

export const genreOptions = sortByPreset(
  [...new Set(games.flatMap((game) => game.genres))],
  genreOrder,
);

export const categoryLookup = Object.fromEntries(
  categories.map((category) => [category.slug, category]),
);

export function getGameBySlug(slug) {
  return games.find((game) => game.slug === slug);
}
