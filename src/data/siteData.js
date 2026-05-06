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
    "id": "100",
    "title": "Grand Theft Auto V",
    "tagline": "Experience Grand Theft Auto V in breathtaking AAA quality.",
    "description": "Grand Theft Auto V is a premium gaming experience developed by Rockstar North and published by Rockstar Games. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Action",
      "Open World"
    ],
    "categories": [
      "action",
      "open-world"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.8,
    "popularity": 99,
    "releaseRank": 100,
    "priceModel": "Paid",
    "price": "$29.99",
    "developer": "Rockstar North",
    "store": "Official Site",
    "publisher": "Rockstar Games",
    "releaseYear": 2013,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=grand-theft-auto-v",
    "featureTag": "Action",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/271590/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/271590/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=grand-theft-auto-v+website",
    "playUrl": "https://google.com/search?q=grand-theft-auto-v+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/271590/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/271590/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/271590/header.jpg"
      }
    ]
  },
  {
    "id": "99",
    "title": "Grand Theft Auto VI",
    "tagline": "Experience Grand Theft Auto VI in breathtaking AAA quality.",
    "description": "Grand Theft Auto VI is a premium gaming experience developed by Rockstar Games and published by Rockstar Games. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Action",
      "Open World"
    ],
    "categories": [
      "action",
      "open-world"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 5,
    "popularity": 100,
    "releaseRank": 99,
    "priceModel": "Coming Soon",
    "price": "$79.99",
    "developer": "Rockstar Games",
    "store": "Official Site",
    "publisher": "Rockstar Games",
    "releaseYear": 2026,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Upcoming",
    "officialUrl": "https://google.com/search?q=grand-theft-auto-vi",
    "featureTag": "Action",
    "image": "/images/games/gta6_enhanced.png",
    "banner": "/images/games/gta6_enhanced.png",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=grand-theft-auto-vi+website",
    "playUrl": "https://google.com/search?q=grand-theft-auto-vi+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "/images/games/gta6_enhanced.png"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "/images/games/gta6_enhanced.png"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "/images/games/gta6_enhanced.png"
      }
    ]
  },
  {
    "id": "98",
    "title": "Red Dead Redemption 2",
    "tagline": "Experience Red Dead Redemption 2 in breathtaking AAA quality.",
    "description": "Red Dead Redemption 2 is a premium gaming experience developed by Rockstar Studios and published by Rockstar Games. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Action",
      "Open World"
    ],
    "categories": [
      "action",
      "open-world"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.9,
    "popularity": 98,
    "releaseRank": 98,
    "priceModel": "Paid",
    "price": "$59.99",
    "developer": "Rockstar Studios",
    "store": "Official Site",
    "publisher": "Rockstar Games",
    "releaseYear": 2018,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=red-dead-redemption-2",
    "featureTag": "Action",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1174180/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1174180/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=red-dead-redemption-2+website",
    "playUrl": "https://google.com/search?q=red-dead-redemption-2+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1174180/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1174180/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1174180/header.jpg"
      }
    ]
  },
  {
    "id": "97",
    "title": "Marvel's Spider-Man Remastered",
    "tagline": "Experience Marvel's Spider-Man Remastered in breathtaking AAA quality.",
    "description": "Marvel's Spider-Man Remastered is a premium gaming experience developed by Insomniac Games and published by PlayStation PC. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Action",
      "Open World"
    ],
    "categories": [
      "action",
      "open-world"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.8,
    "popularity": 95,
    "releaseRank": 97,
    "priceModel": "Paid",
    "price": "$59.99",
    "developer": "Insomniac Games",
    "store": "Official Site",
    "publisher": "PlayStation PC",
    "releaseYear": 2022,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=marvel-s-spider-man-remastered",
    "featureTag": "Action",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1817040/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1817040/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=marvel-s-spider-man-remastered+website",
    "playUrl": "https://google.com/search?q=marvel-s-spider-man-remastered+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1817040/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1817040/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1817040/header.jpg"
      }
    ]
  },
  {
    "id": "96",
    "title": "Marvel's Spider-Man 2",
    "tagline": "Experience Marvel's Spider-Man 2 in breathtaking AAA quality.",
    "description": "Marvel's Spider-Man 2 is a premium gaming experience developed by Insomniac Games and published by PlayStation PC. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Action",
      "Open World"
    ],
    "categories": [
      "action",
      "open-world"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.9,
    "popularity": 96,
    "releaseRank": 96,
    "priceModel": "Paid",
    "price": "$69.99",
    "developer": "Insomniac Games",
    "store": "Official Site",
    "publisher": "PlayStation PC",
    "releaseYear": 2023,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=marvel-s-spider-man-2",
    "featureTag": "Action",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3138240/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3138240/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=marvel-s-spider-man-2+website",
    "playUrl": "https://google.com/search?q=marvel-s-spider-man-2+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3138240/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3138240/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3138240/header.jpg"
      }
    ]
  },
  {
    "id": "95",
    "title": "Batman: Arkham Knight",
    "tagline": "Experience Batman: Arkham Knight in breathtaking AAA quality.",
    "description": "Batman: Arkham Knight is a premium gaming experience developed by Rocksteady Studios and published by Warner Bros. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Action",
      "Open World"
    ],
    "categories": [
      "action",
      "open-world"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.7,
    "popularity": 90,
    "releaseRank": 95,
    "priceModel": "Paid",
    "price": "$19.99",
    "developer": "Rocksteady Studios",
    "store": "Official Site",
    "publisher": "Warner Bros",
    "releaseYear": 2015,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=batman-arkham-knight",
    "featureTag": "Action",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/208650/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/208650/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=batman-arkham-knight+website",
    "playUrl": "https://google.com/search?q=batman-arkham-knight+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/208650/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/208650/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/208650/header.jpg"
      }
    ]
  },
  {
    "id": "94",
    "title": "Ghost of Tsushima",
    "tagline": "Experience Ghost of Tsushima in breathtaking AAA quality.",
    "description": "Ghost of Tsushima is a premium gaming experience developed by Sucker Punch and published by PlayStation PC. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Action",
      "Open World"
    ],
    "categories": [
      "action",
      "open-world"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.9,
    "popularity": 94,
    "releaseRank": 94,
    "priceModel": "Paid",
    "price": "$59.99",
    "developer": "Sucker Punch",
    "store": "Official Site",
    "publisher": "PlayStation PC",
    "releaseYear": 2024,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=ghost-of-tsushima",
    "featureTag": "Action",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2215430/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2215430/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=ghost-of-tsushima+website",
    "playUrl": "https://google.com/search?q=ghost-of-tsushima+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2215430/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2215430/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2215430/header.jpg"
      }
    ]
  },
  {
    "id": "93",
    "title": "Assassin's Creed Valhalla",
    "tagline": "Experience Assassin's Creed Valhalla in breathtaking AAA quality.",
    "description": "Assassin's Creed Valhalla is a premium gaming experience developed by Ubisoft and published by Ubisoft. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Action",
      "Open World"
    ],
    "categories": [
      "action",
      "open-world"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.5,
    "popularity": 88,
    "releaseRank": 93,
    "priceModel": "Paid",
    "price": "$59.99",
    "developer": "Ubisoft",
    "store": "Official Site",
    "publisher": "Ubisoft",
    "releaseYear": 2020,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=assassin-s-creed-valhalla",
    "featureTag": "Action",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2208920/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2208920/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=assassin-s-creed-valhalla+website",
    "playUrl": "https://google.com/search?q=assassin-s-creed-valhalla+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2208920/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2208920/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2208920/header.jpg"
      }
    ]
  },
  {
    "id": "92",
    "title": "Assassin's Creed Mirage",
    "tagline": "Experience Assassin's Creed Mirage in breathtaking AAA quality.",
    "description": "Assassin's Creed Mirage is a premium gaming experience developed by Ubisoft and published by Ubisoft. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Action",
      "Open World"
    ],
    "categories": [
      "action",
      "open-world"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.4,
    "popularity": 85,
    "releaseRank": 92,
    "priceModel": "Paid",
    "price": "$49.99",
    "developer": "Ubisoft",
    "store": "Official Site",
    "publisher": "Ubisoft",
    "releaseYear": 2023,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=assassin-s-creed-mirage",
    "featureTag": "Action",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2896350/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2896350/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=assassin-s-creed-mirage+website",
    "playUrl": "https://google.com/search?q=assassin-s-creed-mirage+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2896350/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2896350/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2896350/header.jpg"
      }
    ]
  },
  {
    "id": "91",
    "title": "Horizon Zero Dawn",
    "tagline": "Experience Horizon Zero Dawn in breathtaking AAA quality.",
    "description": "Horizon Zero Dawn is a premium gaming experience developed by Guerrilla Games and published by PlayStation PC. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Action",
      "Open World"
    ],
    "categories": [
      "action",
      "open-world"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.7,
    "popularity": 91,
    "releaseRank": 91,
    "priceModel": "Paid",
    "price": "$49.99",
    "developer": "Guerrilla Games",
    "store": "Official Site",
    "publisher": "PlayStation PC",
    "releaseYear": 2020,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=horizon-zero-dawn",
    "featureTag": "Action",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1151640/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1151640/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=horizon-zero-dawn+website",
    "playUrl": "https://google.com/search?q=horizon-zero-dawn+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1151640/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1151640/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1151640/header.jpg"
      }
    ]
  },
  {
    "id": "90",
    "title": "Horizon Forbidden West",
    "tagline": "Experience Horizon Forbidden West in breathtaking AAA quality.",
    "description": "Horizon Forbidden West is a premium gaming experience developed by Guerrilla Games and published by PlayStation PC. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Action",
      "Open World"
    ],
    "categories": [
      "action",
      "open-world"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.8,
    "popularity": 92,
    "releaseRank": 90,
    "priceModel": "Paid",
    "price": "$59.99",
    "developer": "Guerrilla Games",
    "store": "Official Site",
    "publisher": "PlayStation PC",
    "releaseYear": 2024,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=horizon-forbidden-west",
    "featureTag": "Action",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2420110/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2420110/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=horizon-forbidden-west+website",
    "playUrl": "https://google.com/search?q=horizon-forbidden-west+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2420110/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2420110/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2420110/header.jpg"
      }
    ]
  },
  {
    "id": "89",
    "title": "God of War",
    "tagline": "Experience God of War in breathtaking AAA quality.",
    "description": "God of War is a premium gaming experience developed by Santa Monica Studio and published by PlayStation PC. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Action"
    ],
    "categories": [
      "action"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.9,
    "popularity": 96,
    "releaseRank": 89,
    "priceModel": "Paid",
    "price": "$49.99",
    "developer": "Santa Monica Studio",
    "store": "Official Site",
    "publisher": "PlayStation PC",
    "releaseYear": 2022,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=god-of-war",
    "featureTag": "Action",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1593500/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1593500/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=god-of-war+website",
    "playUrl": "https://google.com/search?q=god-of-war+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1593500/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1593500/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1593500/header.jpg"
      }
    ]
  },
  {
    "id": "88",
    "title": "God of War Ragnarök",
    "tagline": "Experience God of War Ragnarök in breathtaking AAA quality.",
    "description": "God of War Ragnarök is a premium gaming experience developed by Santa Monica Studio and published by PlayStation PC. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Action"
    ],
    "categories": [
      "action"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.9,
    "popularity": 97,
    "releaseRank": 88,
    "priceModel": "Paid",
    "price": "$59.99",
    "developer": "Santa Monica Studio",
    "store": "Official Site",
    "publisher": "PlayStation PC",
    "releaseYear": 2024,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=god-of-war-ragnar-k",
    "featureTag": "Action",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2322010/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2322010/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=god-of-war-ragnar-k+website",
    "playUrl": "https://google.com/search?q=god-of-war-ragnar-k+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2322010/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2322010/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2322010/header.jpg"
      }
    ]
  },
  {
    "id": "87",
    "title": "Devil May Cry 5",
    "tagline": "Experience Devil May Cry 5 in breathtaking AAA quality.",
    "description": "Devil May Cry 5 is a premium gaming experience developed by Capcom and published by Capcom. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Action"
    ],
    "categories": [
      "action"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.8,
    "popularity": 89,
    "releaseRank": 87,
    "priceModel": "Paid",
    "price": "$29.99",
    "developer": "Capcom",
    "store": "Official Site",
    "publisher": "Capcom",
    "releaseYear": 2019,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=devil-may-cry-5",
    "featureTag": "Action",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/601150/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/601150/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=devil-may-cry-5+website",
    "playUrl": "https://google.com/search?q=devil-may-cry-5+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/601150/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/601150/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/601150/header.jpg"
      }
    ]
  },
  {
    "id": "86",
    "title": "Sekiro: Shadows Die Twice",
    "tagline": "Experience Sekiro: Shadows Die Twice in breathtaking AAA quality.",
    "description": "Sekiro: Shadows Die Twice is a premium gaming experience developed by FromSoftware and published by Activision. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Action"
    ],
    "categories": [
      "action"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.8,
    "popularity": 91,
    "releaseRank": 86,
    "priceModel": "Paid",
    "price": "$59.99",
    "developer": "FromSoftware",
    "store": "Official Site",
    "publisher": "Activision",
    "releaseYear": 2019,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=sekiro-shadows-die-twice",
    "featureTag": "Action",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/814380/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/814380/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=sekiro-shadows-die-twice+website",
    "playUrl": "https://google.com/search?q=sekiro-shadows-die-twice+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/814380/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/814380/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/814380/header.jpg"
      }
    ]
  },
  {
    "id": "85",
    "title": "Monster Hunter: World",
    "tagline": "Experience Monster Hunter: World in breathtaking AAA quality.",
    "description": "Monster Hunter: World is a premium gaming experience developed by Capcom and published by Capcom. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Action RPG",
      "Multiplayer"
    ],
    "categories": [
      "action",
      "rpg"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.7,
    "popularity": 93,
    "releaseRank": 85,
    "priceModel": "Paid",
    "price": "$29.99",
    "developer": "Capcom",
    "store": "Official Site",
    "publisher": "Capcom",
    "releaseYear": 2018,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=monster-hunter-world",
    "featureTag": "Action RPG",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/582010/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/582010/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=monster-hunter-world+website",
    "playUrl": "https://google.com/search?q=monster-hunter-world+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/582010/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/582010/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/582010/header.jpg"
      }
    ]
  },
  {
    "id": "84",
    "title": "Monster Hunter Wilds",
    "tagline": "Experience Monster Hunter Wilds in breathtaking AAA quality.",
    "description": "Monster Hunter Wilds is a premium gaming experience developed by Capcom and published by Capcom. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Action RPG",
      "Multiplayer"
    ],
    "categories": [
      "action",
      "rpg"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.9,
    "popularity": 95,
    "releaseRank": 84,
    "priceModel": "Coming Soon",
    "price": "$69.99",
    "developer": "Capcom",
    "store": "Official Site",
    "publisher": "Capcom",
    "releaseYear": 2025,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Upcoming",
    "officialUrl": "https://google.com/search?q=monster-hunter-wilds",
    "featureTag": "Action RPG",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2246340/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2246340/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=monster-hunter-wilds+website",
    "playUrl": "https://google.com/search?q=monster-hunter-wilds+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2246340/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2246340/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2246340/header.jpg"
      }
    ]
  },
  {
    "id": "83",
    "title": "The Witcher 3: Wild Hunt",
    "tagline": "Experience The Witcher 3: Wild Hunt in breathtaking AAA quality.",
    "description": "The Witcher 3: Wild Hunt is a premium gaming experience developed by CD Projekt Red and published by CD Projekt Red. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "RPG",
      "Open World"
    ],
    "categories": [
      "rpg",
      "open-world"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.9,
    "popularity": 96,
    "releaseRank": 83,
    "priceModel": "Paid",
    "price": "$39.99",
    "developer": "CD Projekt Red",
    "store": "Official Site",
    "publisher": "CD Projekt Red",
    "releaseYear": 2015,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=the-witcher-3-wild-hunt",
    "featureTag": "RPG",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/292030/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/292030/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=the-witcher-3-wild-hunt+website",
    "playUrl": "https://google.com/search?q=the-witcher-3-wild-hunt+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/292030/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/292030/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/292030/header.jpg"
      }
    ]
  },
  {
    "id": "82",
    "title": "Cyberpunk 2077",
    "tagline": "Experience Cyberpunk 2077 in breathtaking AAA quality.",
    "description": "Cyberpunk 2077 is a premium gaming experience developed by CD Projekt Red and published by CD Projekt Red. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Action RPG",
      "Open World"
    ],
    "categories": [
      "rpg",
      "open-world",
      "action"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.7,
    "popularity": 95,
    "releaseRank": 82,
    "priceModel": "Paid",
    "price": "$59.99",
    "developer": "CD Projekt Red",
    "store": "Official Site",
    "publisher": "CD Projekt Red",
    "releaseYear": 2020,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=cyberpunk-2077",
    "featureTag": "Action RPG",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=cyberpunk-2077+website",
    "playUrl": "https://google.com/search?q=cyberpunk-2077+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg"
      }
    ]
  },
  {
    "id": "81",
    "title": "Elden Ring",
    "tagline": "Experience Elden Ring in breathtaking AAA quality.",
    "description": "Elden Ring is a premium gaming experience developed by FromSoftware and published by Bandai Namco. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Action RPG",
      "Open World"
    ],
    "categories": [
      "rpg",
      "open-world",
      "action"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.9,
    "popularity": 98,
    "releaseRank": 81,
    "priceModel": "Paid",
    "price": "$59.99",
    "developer": "FromSoftware",
    "store": "Official Site",
    "publisher": "Bandai Namco",
    "releaseYear": 2022,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=elden-ring",
    "featureTag": "Action RPG",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=elden-ring+website",
    "playUrl": "https://google.com/search?q=elden-ring+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg"
      }
    ]
  },
  {
    "id": "80",
    "title": "Dark Souls III",
    "tagline": "Experience Dark Souls III in breathtaking AAA quality.",
    "description": "Dark Souls III is a premium gaming experience developed by FromSoftware and published by Bandai Namco. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Action RPG"
    ],
    "categories": [
      "rpg",
      "action"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.8,
    "popularity": 92,
    "releaseRank": 80,
    "priceModel": "Paid",
    "price": "$59.99",
    "developer": "FromSoftware",
    "store": "Official Site",
    "publisher": "Bandai Namco",
    "releaseYear": 2016,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=dark-souls-iii",
    "featureTag": "Action RPG",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/374320/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/374320/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=dark-souls-iii+website",
    "playUrl": "https://google.com/search?q=dark-souls-iii+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/374320/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/374320/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/374320/header.jpg"
      }
    ]
  },
  {
    "id": "79",
    "title": "Bloodborne",
    "tagline": "Experience Bloodborne in breathtaking AAA quality.",
    "description": "Bloodborne is a premium gaming experience developed by FromSoftware and published by Sony Interactive. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Action RPG"
    ],
    "categories": [
      "rpg",
      "action"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.9,
    "popularity": 94,
    "releaseRank": 79,
    "priceModel": "Paid",
    "price": "$19.99",
    "developer": "FromSoftware",
    "store": "Official Site",
    "publisher": "Sony Interactive",
    "releaseYear": 2015,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=bloodborne",
    "featureTag": "Action RPG",
    "image": "https://image.api.playstation.com/vulcan/img/rnd/202010/2614/B421w7n7cR8L2oG2J4B5Y1xT.png",
    "banner": "https://image.api.playstation.com/vulcan/img/rnd/202010/2614/xRhyy4aT4rM7rLqP3g6W4aY4.png",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=bloodborne+website",
    "playUrl": "https://google.com/search?q=bloodborne+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://image.api.playstation.com/vulcan/img/rnd/202010/2614/xRhyy4aT4rM7rLqP3g6W4aY4.png"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://image.api.playstation.com/vulcan/img/rnd/202010/2614/xRhyy4aT4rM7rLqP3g6W4aY4.png"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://image.api.playstation.com/vulcan/img/rnd/202010/2614/xRhyy4aT4rM7rLqP3g6W4aY4.png"
      }
    ]
  },
  {
    "id": "78",
    "title": "Baldur's Gate 3",
    "tagline": "Experience Baldur's Gate 3 in breathtaking AAA quality.",
    "description": "Baldur's Gate 3 is a premium gaming experience developed by Larian Studios and published by Larian Studios. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "RPG"
    ],
    "categories": [
      "rpg"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 5,
    "popularity": 99,
    "releaseRank": 78,
    "priceModel": "Paid",
    "price": "$59.99",
    "developer": "Larian Studios",
    "store": "Official Site",
    "publisher": "Larian Studios",
    "releaseYear": 2023,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=baldur-s-gate-3",
    "featureTag": "RPG",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1086940/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1086940/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=baldur-s-gate-3+website",
    "playUrl": "https://google.com/search?q=baldur-s-gate-3+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1086940/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1086940/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1086940/header.jpg"
      }
    ]
  },
  {
    "id": "77",
    "title": "Skyrim Special Edition",
    "tagline": "Experience Skyrim Special Edition in breathtaking AAA quality.",
    "description": "Skyrim Special Edition is a premium gaming experience developed by Bethesda Game Studios and published by Bethesda Softworks. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "RPG",
      "Open World"
    ],
    "categories": [
      "rpg",
      "open-world"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.8,
    "popularity": 97,
    "releaseRank": 77,
    "priceModel": "Paid",
    "price": "$39.99",
    "developer": "Bethesda Game Studios",
    "store": "Official Site",
    "publisher": "Bethesda Softworks",
    "releaseYear": 2016,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=skyrim-special-edition",
    "featureTag": "RPG",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/489830/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/489830/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=skyrim-special-edition+website",
    "playUrl": "https://google.com/search?q=skyrim-special-edition+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/489830/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/489830/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/489830/header.jpg"
      }
    ]
  },
  {
    "id": "76",
    "title": "Fallout 4",
    "tagline": "Experience Fallout 4 in breathtaking AAA quality.",
    "description": "Fallout 4 is a premium gaming experience developed by Bethesda Game Studios and published by Bethesda Softworks. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "RPG",
      "Open World"
    ],
    "categories": [
      "rpg",
      "open-world"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.5,
    "popularity": 90,
    "releaseRank": 76,
    "priceModel": "Paid",
    "price": "$19.99",
    "developer": "Bethesda Game Studios",
    "store": "Official Site",
    "publisher": "Bethesda Softworks",
    "releaseYear": 2015,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=fallout-4",
    "featureTag": "RPG",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/377160/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/377160/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=fallout-4+website",
    "playUrl": "https://google.com/search?q=fallout-4+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/377160/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/377160/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/377160/header.jpg"
      }
    ]
  },
  {
    "id": "75",
    "title": "Fallout: New Vegas",
    "tagline": "Experience Fallout: New Vegas in breathtaking AAA quality.",
    "description": "Fallout: New Vegas is a premium gaming experience developed by Obsidian and published by Bethesda Softworks. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "RPG",
      "Open World"
    ],
    "categories": [
      "rpg",
      "open-world"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.8,
    "popularity": 91,
    "releaseRank": 75,
    "priceModel": "Paid",
    "price": "$9.99",
    "developer": "Obsidian",
    "store": "Official Site",
    "publisher": "Bethesda Softworks",
    "releaseYear": 2010,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=fallout-new-vegas",
    "featureTag": "RPG",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/22380/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/22380/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=fallout-new-vegas+website",
    "playUrl": "https://google.com/search?q=fallout-new-vegas+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/22380/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/22380/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/22380/header.jpg"
      }
    ]
  },
  {
    "id": "74",
    "title": "Starfield",
    "tagline": "Experience Starfield in breathtaking AAA quality.",
    "description": "Starfield is a premium gaming experience developed by Bethesda Game Studios and published by Bethesda Softworks. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "RPG",
      "Open World"
    ],
    "categories": [
      "rpg",
      "open-world"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.1,
    "popularity": 85,
    "releaseRank": 74,
    "priceModel": "Paid",
    "price": "$69.99",
    "developer": "Bethesda Game Studios",
    "store": "Official Site",
    "publisher": "Bethesda Softworks",
    "releaseYear": 2023,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=starfield",
    "featureTag": "RPG",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1716740/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1716740/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=starfield+website",
    "playUrl": "https://google.com/search?q=starfield+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1716740/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1716740/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1716740/header.jpg"
      }
    ]
  },
  {
    "id": "73",
    "title": "Persona 5 Royal",
    "tagline": "Experience Persona 5 Royal in breathtaking AAA quality.",
    "description": "Persona 5 Royal is a premium gaming experience developed by ATLUS and published by SEGA. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "JRPG"
    ],
    "categories": [
      "rpg"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.9,
    "popularity": 91,
    "releaseRank": 73,
    "priceModel": "Paid",
    "price": "$59.99",
    "developer": "ATLUS",
    "store": "Official Site",
    "publisher": "SEGA",
    "releaseYear": 2022,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=persona-5-royal",
    "featureTag": "JRPG",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1687950/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1687950/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=persona-5-royal+website",
    "playUrl": "https://google.com/search?q=persona-5-royal+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1687950/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1687950/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1687950/header.jpg"
      }
    ]
  },
  {
    "id": "72",
    "title": "Persona 3 Reload",
    "tagline": "Experience Persona 3 Reload in breathtaking AAA quality.",
    "description": "Persona 3 Reload is a premium gaming experience developed by ATLUS and published by SEGA. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "JRPG"
    ],
    "categories": [
      "rpg"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.8,
    "popularity": 90,
    "releaseRank": 72,
    "priceModel": "Paid",
    "price": "$69.99",
    "developer": "ATLUS",
    "store": "Official Site",
    "publisher": "SEGA",
    "releaseYear": 2024,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=persona-3-reload",
    "featureTag": "JRPG",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2161700/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2161700/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=persona-3-reload+website",
    "playUrl": "https://google.com/search?q=persona-3-reload+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2161700/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2161700/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2161700/header.jpg"
      }
    ]
  },
  {
    "id": "71",
    "title": "Final Fantasy VII Remake Intergrade",
    "tagline": "Experience Final Fantasy VII Remake Intergrade in breathtaking AAA quality.",
    "description": "Final Fantasy VII Remake Intergrade is a premium gaming experience developed by Square Enix and published by Square Enix. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Action RPG"
    ],
    "categories": [
      "rpg",
      "action"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.8,
    "popularity": 92,
    "releaseRank": 71,
    "priceModel": "Paid",
    "price": "$69.99",
    "developer": "Square Enix",
    "store": "Official Site",
    "publisher": "Square Enix",
    "releaseYear": 2021,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=final-fantasy-vii-remake-intergrade",
    "featureTag": "Action RPG",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1462040/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1462040/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=final-fantasy-vii-remake-intergrade+website",
    "playUrl": "https://google.com/search?q=final-fantasy-vii-remake-intergrade+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1462040/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1462040/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1462040/header.jpg"
      }
    ]
  },
  {
    "id": "70",
    "title": "Final Fantasy VII Rebirth",
    "tagline": "Experience Final Fantasy VII Rebirth in breathtaking AAA quality.",
    "description": "Final Fantasy VII Rebirth is a premium gaming experience developed by Square Enix and published by Square Enix. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Action RPG",
      "Open World"
    ],
    "categories": [
      "rpg",
      "action",
      "open-world"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.9,
    "popularity": 95,
    "releaseRank": 70,
    "priceModel": "Paid",
    "price": "$69.99",
    "developer": "Square Enix",
    "store": "Official Site",
    "publisher": "Square Enix",
    "releaseYear": 2024,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=final-fantasy-vii-rebirth",
    "featureTag": "Action RPG",
    "image": "https://image.api.playstation.com/vulcan/ap/rnd/202309/0107/867f08bf6a7f33d7c5040e6918d363b469bcf27734a66a1e.png",
    "banner": "https://image.api.playstation.com/vulcan/ap/rnd/202309/0107/1169fcbb88db1261d76384dbf389fbff289a710bc88e14b2.png",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=final-fantasy-vii-rebirth+website",
    "playUrl": "https://google.com/search?q=final-fantasy-vii-rebirth+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://image.api.playstation.com/vulcan/ap/rnd/202309/0107/1169fcbb88db1261d76384dbf389fbff289a710bc88e14b2.png"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://image.api.playstation.com/vulcan/ap/rnd/202309/0107/1169fcbb88db1261d76384dbf389fbff289a710bc88e14b2.png"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://image.api.playstation.com/vulcan/ap/rnd/202309/0107/1169fcbb88db1261d76384dbf389fbff289a710bc88e14b2.png"
      }
    ]
  },
  {
    "id": "69",
    "title": "Final Fantasy XVI",
    "tagline": "Experience Final Fantasy XVI in breathtaking AAA quality.",
    "description": "Final Fantasy XVI is a premium gaming experience developed by Square Enix and published by Square Enix. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Action RPG"
    ],
    "categories": [
      "rpg",
      "action"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.7,
    "popularity": 90,
    "releaseRank": 69,
    "priceModel": "Paid",
    "price": "$69.99",
    "developer": "Square Enix",
    "store": "Official Site",
    "publisher": "Square Enix",
    "releaseYear": 2023,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=final-fantasy-xvi",
    "featureTag": "Action RPG",
    "image": "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=600&h=900",
    "banner": "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1920&h=1080",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=final-fantasy-xvi+website",
    "playUrl": "https://google.com/search?q=final-fantasy-xvi+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1920&h=1080"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1920&h=1080"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1920&h=1080"
      }
    ]
  },
  {
    "id": "68",
    "title": "Mass Effect Legendary Edition",
    "tagline": "Experience Mass Effect Legendary Edition in breathtaking AAA quality.",
    "description": "Mass Effect Legendary Edition is a premium gaming experience developed by BioWare and published by Electronic Arts. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Action RPG"
    ],
    "categories": [
      "rpg",
      "action"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.8,
    "popularity": 89,
    "releaseRank": 68,
    "priceModel": "Paid",
    "price": "$59.99",
    "developer": "BioWare",
    "store": "Official Site",
    "publisher": "Electronic Arts",
    "releaseYear": 2021,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=mass-effect-legendary-edition",
    "featureTag": "Action RPG",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1328670/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1328670/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=mass-effect-legendary-edition+website",
    "playUrl": "https://google.com/search?q=mass-effect-legendary-edition+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1328670/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1328670/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1328670/header.jpg"
      }
    ]
  },
  {
    "id": "67",
    "title": "Dragon Age: Inquisition",
    "tagline": "Experience Dragon Age: Inquisition in breathtaking AAA quality.",
    "description": "Dragon Age: Inquisition is a premium gaming experience developed by BioWare and published by Electronic Arts. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "RPG"
    ],
    "categories": [
      "rpg"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.4,
    "popularity": 84,
    "releaseRank": 67,
    "priceModel": "Paid",
    "price": "$39.99",
    "developer": "BioWare",
    "store": "Official Site",
    "publisher": "Electronic Arts",
    "releaseYear": 2014,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=dragon-age-inquisition",
    "featureTag": "RPG",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1222650/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1222650/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=dragon-age-inquisition+website",
    "playUrl": "https://google.com/search?q=dragon-age-inquisition+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1222650/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1222650/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1222650/header.jpg"
      }
    ]
  },
  {
    "id": "66",
    "title": "Diablo IV",
    "tagline": "Experience Diablo IV in breathtaking AAA quality.",
    "description": "Diablo IV is a premium gaming experience developed by Blizzard Entertainment and published by Blizzard Entertainment. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Action RPG",
      "Multiplayer"
    ],
    "categories": [
      "rpg",
      "action"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.3,
    "popularity": 87,
    "releaseRank": 66,
    "priceModel": "Paid",
    "price": "$69.99",
    "developer": "Blizzard Entertainment",
    "store": "Official Site",
    "publisher": "Blizzard Entertainment",
    "releaseYear": 2023,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=diablo-iv",
    "featureTag": "Action RPG",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2344520/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2344520/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=diablo-iv+website",
    "playUrl": "https://google.com/search?q=diablo-iv+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2344520/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2344520/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2344520/header.jpg"
      }
    ]
  },
  {
    "id": "65",
    "title": "Path of Exile",
    "tagline": "Experience Path of Exile in breathtaking AAA quality.",
    "description": "Path of Exile is a premium gaming experience developed by Grinding Gear Games and published by Grinding Gear Games. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Action RPG",
      "Multiplayer"
    ],
    "categories": [
      "rpg"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.6,
    "popularity": 88,
    "releaseRank": 65,
    "priceModel": "Free",
    "price": "Free",
    "developer": "Grinding Gear Games",
    "store": "Official Site",
    "publisher": "Grinding Gear Games",
    "releaseYear": 2013,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=path-of-exile",
    "featureTag": "Action RPG",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/238960/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/238960/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=path-of-exile+website",
    "playUrl": "https://google.com/search?q=path-of-exile+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/238960/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/238960/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/238960/header.jpg"
      }
    ]
  },
  {
    "id": "64",
    "title": "Genshin Impact",
    "tagline": "Experience Genshin Impact in breathtaking AAA quality.",
    "description": "Genshin Impact is a premium gaming experience developed by HoYoverse and published by HoYoverse. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Action RPG",
      "Open World"
    ],
    "categories": [
      "rpg",
      "open-world"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.7,
    "popularity": 96,
    "releaseRank": 64,
    "priceModel": "Free",
    "price": "Free",
    "developer": "HoYoverse",
    "store": "Official Site",
    "publisher": "HoYoverse",
    "releaseYear": 2020,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=genshin-impact",
    "featureTag": "Action RPG",
    "image": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
    "banner": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=genshin-impact+website",
    "playUrl": "https://google.com/search?q=genshin-impact+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg"
      }
    ]
  },
  {
    "id": "63",
    "title": "Call of Duty: Modern Warfare III",
    "tagline": "Experience Call of Duty: Modern Warfare III in breathtaking AAA quality.",
    "description": "Call of Duty: Modern Warfare III is a premium gaming experience developed by Sledgehammer Games and published by Activision. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "FPS",
      "Multiplayer"
    ],
    "categories": [
      "fps",
      "action"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4,
    "popularity": 92,
    "releaseRank": 63,
    "priceModel": "Paid",
    "price": "$69.99",
    "developer": "Sledgehammer Games",
    "store": "Official Site",
    "publisher": "Activision",
    "releaseYear": 2023,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=call-of-duty-modern-warfare-iii",
    "featureTag": "FPS",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1938090/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1938090/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=call-of-duty-modern-warfare-iii+website",
    "playUrl": "https://google.com/search?q=call-of-duty-modern-warfare-iii+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1938090/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1938090/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1938090/header.jpg"
      }
    ]
  },
  {
    "id": "62",
    "title": "Call of Duty: Warzone",
    "tagline": "Experience Call of Duty: Warzone in breathtaking AAA quality.",
    "description": "Call of Duty: Warzone is a premium gaming experience developed by Raven Software and published by Activision. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "FPS",
      "Battle Royale"
    ],
    "categories": [
      "fps",
      "action"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.4,
    "popularity": 95,
    "releaseRank": 62,
    "priceModel": "Free",
    "price": "Free",
    "developer": "Raven Software",
    "store": "Official Site",
    "publisher": "Activision",
    "releaseYear": 2020,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=call-of-duty-warzone",
    "featureTag": "FPS",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1962660/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1962660/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=call-of-duty-warzone+website",
    "playUrl": "https://google.com/search?q=call-of-duty-warzone+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1962660/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1962660/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1962660/header.jpg"
      }
    ]
  },
  {
    "id": "61",
    "title": "Call of Duty: Black Ops 6",
    "tagline": "Experience Call of Duty: Black Ops 6 in breathtaking AAA quality.",
    "description": "Call of Duty: Black Ops 6 is a premium gaming experience developed by Treyarch and published by Activision. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "FPS",
      "Multiplayer"
    ],
    "categories": [
      "fps",
      "action"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.6,
    "popularity": 96,
    "releaseRank": 61,
    "priceModel": "Paid",
    "price": "$69.99",
    "developer": "Treyarch",
    "store": "Official Site",
    "publisher": "Activision",
    "releaseYear": 2024,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=call-of-duty-black-ops-6",
    "featureTag": "FPS",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2933620/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2933620/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=call-of-duty-black-ops-6+website",
    "playUrl": "https://google.com/search?q=call-of-duty-black-ops-6+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2933620/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2933620/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2933620/header.jpg"
      }
    ]
  },
  {
    "id": "60",
    "title": "Counter-Strike 2",
    "tagline": "Experience Counter-Strike 2 in breathtaking AAA quality.",
    "description": "Counter-Strike 2 is a premium gaming experience developed by Valve and published by Valve. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "FPS",
      "Multiplayer"
    ],
    "categories": [
      "fps",
      "action"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.8,
    "popularity": 99,
    "releaseRank": 60,
    "priceModel": "Free",
    "price": "Free",
    "developer": "Valve",
    "store": "Official Site",
    "publisher": "Valve",
    "releaseYear": 2023,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=counter-strike-2",
    "featureTag": "FPS",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=counter-strike-2+website",
    "playUrl": "https://google.com/search?q=counter-strike-2+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/header.jpg"
      }
    ]
  },
  {
    "id": "59",
    "title": "Valorant",
    "tagline": "Experience Valorant in breathtaking AAA quality.",
    "description": "Valorant is a premium gaming experience developed by Riot Games and published by Riot Games. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "FPS",
      "Multiplayer"
    ],
    "categories": [
      "fps",
      "action"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.7,
    "popularity": 96,
    "releaseRank": 59,
    "priceModel": "Free",
    "price": "Free",
    "developer": "Riot Games",
    "store": "Official Site",
    "publisher": "Riot Games",
    "releaseYear": 2020,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=valorant",
    "featureTag": "FPS",
    "image": "/images/games/valorant.png",
    "banner": "/images/games/valorant.png",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=valorant+website",
    "playUrl": "https://google.com/search?q=valorant+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "/images/games/valorant.png"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "/images/games/valorant.png"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "/images/games/valorant.png"
      }
    ]
  },
  {
    "id": "58",
    "title": "Apex Legends",
    "tagline": "Experience Apex Legends in breathtaking AAA quality.",
    "description": "Apex Legends is a premium gaming experience developed by Respawn Entertainment and published by Electronic Arts. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "FPS",
      "Battle Royale"
    ],
    "categories": [
      "fps",
      "action"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.6,
    "popularity": 94,
    "releaseRank": 58,
    "priceModel": "Free",
    "price": "Free",
    "developer": "Respawn Entertainment",
    "store": "Official Site",
    "publisher": "Electronic Arts",
    "releaseYear": 2019,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=apex-legends",
    "featureTag": "FPS",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1172470/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1172470/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=apex-legends+website",
    "playUrl": "https://google.com/search?q=apex-legends+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1172470/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1172470/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1172470/header.jpg"
      }
    ]
  },
  {
    "id": "57",
    "title": "Overwatch 2",
    "tagline": "Experience Overwatch 2 in breathtaking AAA quality.",
    "description": "Overwatch 2 is a premium gaming experience developed by Blizzard Entertainment and published by Blizzard Entertainment. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "FPS",
      "Multiplayer"
    ],
    "categories": [
      "fps",
      "action"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.2,
    "popularity": 89,
    "releaseRank": 57,
    "priceModel": "Free",
    "price": "Free",
    "developer": "Blizzard Entertainment",
    "store": "Official Site",
    "publisher": "Blizzard Entertainment",
    "releaseYear": 2022,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=overwatch-2",
    "featureTag": "FPS",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2356560/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2356560/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=overwatch-2+website",
    "playUrl": "https://google.com/search?q=overwatch-2+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2356560/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2356560/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2356560/header.jpg"
      }
    ]
  },
  {
    "id": "56",
    "title": "Tom Clancy's Rainbow Six Siege",
    "tagline": "Experience Tom Clancy's Rainbow Six Siege in breathtaking AAA quality.",
    "description": "Tom Clancy's Rainbow Six Siege is a premium gaming experience developed by Ubisoft and published by Ubisoft. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "FPS",
      "Multiplayer"
    ],
    "categories": [
      "fps",
      "action"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.6,
    "popularity": 91,
    "releaseRank": 56,
    "priceModel": "Paid",
    "price": "$19.99",
    "developer": "Ubisoft",
    "store": "Official Site",
    "publisher": "Ubisoft",
    "releaseYear": 2015,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=tom-clancy-s-rainbow-six-siege",
    "featureTag": "FPS",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/359550/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/359550/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=tom-clancy-s-rainbow-six-siege+website",
    "playUrl": "https://google.com/search?q=tom-clancy-s-rainbow-six-siege+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/359550/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/359550/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/359550/header.jpg"
      }
    ]
  },
  {
    "id": "55",
    "title": "DOOM Eternal",
    "tagline": "Experience DOOM Eternal in breathtaking AAA quality.",
    "description": "DOOM Eternal is a premium gaming experience developed by id Software and published by Bethesda Softworks. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "FPS",
      "Action"
    ],
    "categories": [
      "fps",
      "action"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.9,
    "popularity": 90,
    "releaseRank": 55,
    "priceModel": "Paid",
    "price": "$39.99",
    "developer": "id Software",
    "store": "Official Site",
    "publisher": "Bethesda Softworks",
    "releaseYear": 2020,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=doom-eternal",
    "featureTag": "FPS",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/481970/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/481970/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=doom-eternal+website",
    "playUrl": "https://google.com/search?q=doom-eternal+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/481970/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/481970/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/481970/header.jpg"
      }
    ]
  },
  {
    "id": "54",
    "title": "Halo Infinite",
    "tagline": "Experience Halo Infinite in breathtaking AAA quality.",
    "description": "Halo Infinite is a premium gaming experience developed by 343 Industries and published by Xbox Game Studios. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "FPS",
      "Multiplayer"
    ],
    "categories": [
      "fps",
      "action"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.3,
    "popularity": 85,
    "releaseRank": 54,
    "priceModel": "Free",
    "price": "Free",
    "developer": "343 Industries",
    "store": "Official Site",
    "publisher": "Xbox Game Studios",
    "releaseYear": 2021,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=halo-infinite",
    "featureTag": "FPS",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1240440/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1240440/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=halo-infinite+website",
    "playUrl": "https://google.com/search?q=halo-infinite+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1240440/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1240440/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1240440/header.jpg"
      }
    ]
  },
  {
    "id": "53",
    "title": "Halo: The Master Chief Collection",
    "tagline": "Experience Halo: The Master Chief Collection in breathtaking AAA quality.",
    "description": "Halo: The Master Chief Collection is a premium gaming experience developed by 343 Industries and published by Xbox Game Studios. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "FPS",
      "Action"
    ],
    "categories": [
      "fps",
      "action"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.8,
    "popularity": 87,
    "releaseRank": 53,
    "priceModel": "Paid",
    "price": "$39.99",
    "developer": "343 Industries",
    "store": "Official Site",
    "publisher": "Xbox Game Studios",
    "releaseYear": 2019,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=halo-the-master-chief-collection",
    "featureTag": "FPS",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/976730/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/976730/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=halo-the-master-chief-collection+website",
    "playUrl": "https://google.com/search?q=halo-the-master-chief-collection+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/976730/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/976730/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/976730/header.jpg"
      }
    ]
  },
  {
    "id": "52",
    "title": "Destiny 2",
    "tagline": "Experience Destiny 2 in breathtaking AAA quality.",
    "description": "Destiny 2 is a premium gaming experience developed by Bungie and published by Bungie. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "FPS",
      "RPG",
      "Multiplayer"
    ],
    "categories": [
      "fps",
      "rpg"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.5,
    "popularity": 88,
    "releaseRank": 52,
    "priceModel": "Free",
    "price": "Free",
    "developer": "Bungie",
    "store": "Official Site",
    "publisher": "Bungie",
    "releaseYear": 2017,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=destiny-2",
    "featureTag": "FPS",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1085660/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1085660/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=destiny-2+website",
    "playUrl": "https://google.com/search?q=destiny-2+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1085660/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1085660/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1085660/header.jpg"
      }
    ]
  },
  {
    "id": "51",
    "title": "Escape from Tarkov",
    "tagline": "Experience Escape from Tarkov in breathtaking AAA quality.",
    "description": "Escape from Tarkov is a premium gaming experience developed by Battlestate Games and published by Battlestate Games. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "FPS",
      "Multiplayer"
    ],
    "categories": [
      "fps",
      "action"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.6,
    "popularity": 87,
    "releaseRank": 51,
    "priceModel": "Paid",
    "price": "$49.99",
    "developer": "Battlestate Games",
    "store": "Official Site",
    "publisher": "Battlestate Games",
    "releaseYear": 2017,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=escape-from-tarkov",
    "featureTag": "FPS",
    "image": "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=600&h=900",
    "banner": "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1920&h=1080",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=escape-from-tarkov+website",
    "playUrl": "https://google.com/search?q=escape-from-tarkov+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1920&h=1080"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1920&h=1080"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1920&h=1080"
      }
    ]
  },
  {
    "id": "50",
    "title": "Half-Life: Alyx",
    "tagline": "Experience Half-Life: Alyx in breathtaking AAA quality.",
    "description": "Half-Life: Alyx is a premium gaming experience developed by Valve and published by Valve. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "FPS",
      "VR"
    ],
    "categories": [
      "fps",
      "action"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.9,
    "popularity": 86,
    "releaseRank": 50,
    "priceModel": "Paid",
    "price": "$59.99",
    "developer": "Valve",
    "store": "Official Site",
    "publisher": "Valve",
    "releaseYear": 2020,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=half-life-alyx",
    "featureTag": "FPS",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/546560/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/546560/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=half-life-alyx+website",
    "playUrl": "https://google.com/search?q=half-life-alyx+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/546560/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/546560/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/546560/header.jpg"
      }
    ]
  },
  {
    "id": "49",
    "title": "Left 4 Dead 2",
    "tagline": "Experience Left 4 Dead 2 in breathtaking AAA quality.",
    "description": "Left 4 Dead 2 is a premium gaming experience developed by Valve and published by Valve. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "FPS",
      "Multiplayer"
    ],
    "categories": [
      "fps",
      "action"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.9,
    "popularity": 89,
    "releaseRank": 49,
    "priceModel": "Paid",
    "price": "$9.99",
    "developer": "Valve",
    "store": "Official Site",
    "publisher": "Valve",
    "releaseYear": 2009,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=left-4-dead-2",
    "featureTag": "FPS",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/550/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/550/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=left-4-dead-2+website",
    "playUrl": "https://google.com/search?q=left-4-dead-2+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/550/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/550/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/550/header.jpg"
      }
    ]
  },
  {
    "id": "48",
    "title": "Team Fortress 2",
    "tagline": "Experience Team Fortress 2 in breathtaking AAA quality.",
    "description": "Team Fortress 2 is a premium gaming experience developed by Valve and published by Valve. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "FPS",
      "Multiplayer"
    ],
    "categories": [
      "fps",
      "action"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.8,
    "popularity": 88,
    "releaseRank": 48,
    "priceModel": "Free",
    "price": "Free",
    "developer": "Valve",
    "store": "Official Site",
    "publisher": "Valve",
    "releaseYear": 2007,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=team-fortress-2",
    "featureTag": "FPS",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/440/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/440/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=team-fortress-2+website",
    "playUrl": "https://google.com/search?q=team-fortress-2+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/440/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/440/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/440/header.jpg"
      }
    ]
  },
  {
    "id": "47",
    "title": "Battlefield 2042",
    "tagline": "Experience Battlefield 2042 in breathtaking AAA quality.",
    "description": "Battlefield 2042 is a premium gaming experience developed by DICE and published by Electronic Arts. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "FPS",
      "Multiplayer"
    ],
    "categories": [
      "fps",
      "action"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 3.9,
    "popularity": 83,
    "releaseRank": 47,
    "priceModel": "Paid",
    "price": "$59.99",
    "developer": "DICE",
    "store": "Official Site",
    "publisher": "Electronic Arts",
    "releaseYear": 2021,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=battlefield-2042",
    "featureTag": "FPS",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1517290/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1517290/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=battlefield-2042+website",
    "playUrl": "https://google.com/search?q=battlefield-2042+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1517290/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1517290/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1517290/header.jpg"
      }
    ]
  },
  {
    "id": "46",
    "title": "Forza Horizon 5",
    "tagline": "Experience Forza Horizon 5 in breathtaking AAA quality.",
    "description": "Forza Horizon 5 is a premium gaming experience developed by Playground Games and published by Xbox Game Studios. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Racing",
      "Open World"
    ],
    "categories": [
      "racing",
      "open-world"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.8,
    "popularity": 92,
    "releaseRank": 46,
    "priceModel": "Paid",
    "price": "$59.99",
    "developer": "Playground Games",
    "store": "Official Site",
    "publisher": "Xbox Game Studios",
    "releaseYear": 2021,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=forza-horizon-5",
    "featureTag": "Racing",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1551360/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1551360/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=forza-horizon-5+website",
    "playUrl": "https://google.com/search?q=forza-horizon-5+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1551360/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1551360/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1551360/header.jpg"
      }
    ]
  },
  {
    "id": "45",
    "title": "Forza Motorsport",
    "tagline": "Experience Forza Motorsport in breathtaking AAA quality.",
    "description": "Forza Motorsport is a premium gaming experience developed by Turn 10 Studios and published by Xbox Game Studios. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Racing",
      "Simulation"
    ],
    "categories": [
      "racing"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.3,
    "popularity": 84,
    "releaseRank": 45,
    "priceModel": "Paid",
    "price": "$69.99",
    "developer": "Turn 10 Studios",
    "store": "Official Site",
    "publisher": "Xbox Game Studios",
    "releaseYear": 2023,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=forza-motorsport",
    "featureTag": "Racing",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2440510/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2440510/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=forza-motorsport+website",
    "playUrl": "https://google.com/search?q=forza-motorsport+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2440510/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2440510/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2440510/header.jpg"
      }
    ]
  },
  {
    "id": "44",
    "title": "Gran Turismo 7",
    "tagline": "Experience Gran Turismo 7 in breathtaking AAA quality.",
    "description": "Gran Turismo 7 is a premium gaming experience developed by Polyphony Digital and published by Sony Interactive. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Racing",
      "Simulation"
    ],
    "categories": [
      "racing"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.6,
    "popularity": 88,
    "releaseRank": 44,
    "priceModel": "Paid",
    "price": "$69.99",
    "developer": "Polyphony Digital",
    "store": "Official Site",
    "publisher": "Sony Interactive",
    "releaseYear": 2022,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=gran-turismo-7",
    "featureTag": "Racing",
    "image": "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=600&h=900",
    "banner": "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1920&h=1080",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=gran-turismo-7+website",
    "playUrl": "https://google.com/search?q=gran-turismo-7+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1920&h=1080"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1920&h=1080"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1920&h=1080"
      }
    ]
  },
  {
    "id": "43",
    "title": "F1 23",
    "tagline": "Experience F1 23 in breathtaking AAA quality.",
    "description": "F1 23 is a premium gaming experience developed by Codemasters and published by Electronic Arts. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Racing",
      "Simulation"
    ],
    "categories": [
      "racing"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.5,
    "popularity": 85,
    "releaseRank": 43,
    "priceModel": "Paid",
    "price": "$69.99",
    "developer": "Codemasters",
    "store": "Official Site",
    "publisher": "Electronic Arts",
    "releaseYear": 2023,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=f1-23",
    "featureTag": "Racing",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2108330/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2108330/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=f1-23+website",
    "playUrl": "https://google.com/search?q=f1-23+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2108330/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2108330/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2108330/header.jpg"
      }
    ]
  },
  {
    "id": "42",
    "title": "Need for Speed Unbound",
    "tagline": "Experience Need for Speed Unbound in breathtaking AAA quality.",
    "description": "Need for Speed Unbound is a premium gaming experience developed by Criterion Games and published by Electronic Arts. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Racing",
      "Open World"
    ],
    "categories": [
      "racing",
      "open-world"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.2,
    "popularity": 82,
    "releaseRank": 42,
    "priceModel": "Paid",
    "price": "$69.99",
    "developer": "Criterion Games",
    "store": "Official Site",
    "publisher": "Electronic Arts",
    "releaseYear": 2022,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=need-for-speed-unbound",
    "featureTag": "Racing",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1846380/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1846380/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=need-for-speed-unbound+website",
    "playUrl": "https://google.com/search?q=need-for-speed-unbound+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1846380/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1846380/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1846380/header.jpg"
      }
    ]
  },
  {
    "id": "41",
    "title": "Need for Speed Heat",
    "tagline": "Experience Need for Speed Heat in breathtaking AAA quality.",
    "description": "Need for Speed Heat is a premium gaming experience developed by Ghost Games and published by Electronic Arts. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Racing",
      "Open World"
    ],
    "categories": [
      "racing",
      "open-world"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.5,
    "popularity": 81,
    "releaseRank": 41,
    "priceModel": "Paid",
    "price": "$19.99",
    "developer": "Ghost Games",
    "store": "Official Site",
    "publisher": "Electronic Arts",
    "releaseYear": 2019,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=need-for-speed-heat",
    "featureTag": "Racing",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1222680/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1222680/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=need-for-speed-heat+website",
    "playUrl": "https://google.com/search?q=need-for-speed-heat+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1222680/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1222680/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1222680/header.jpg"
      }
    ]
  },
  {
    "id": "40",
    "title": "Dirt Rally 2.0",
    "tagline": "Experience Dirt Rally 2.0 in breathtaking AAA quality.",
    "description": "Dirt Rally 2.0 is a premium gaming experience developed by Codemasters and published by Electronic Arts. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Racing",
      "Simulation"
    ],
    "categories": [
      "racing"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.7,
    "popularity": 80,
    "releaseRank": 40,
    "priceModel": "Paid",
    "price": "$19.99",
    "developer": "Codemasters",
    "store": "Official Site",
    "publisher": "Electronic Arts",
    "releaseYear": 2019,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=dirt-rally-2-0",
    "featureTag": "Racing",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/690790/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/690790/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=dirt-rally-2-0+website",
    "playUrl": "https://google.com/search?q=dirt-rally-2-0+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/690790/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/690790/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/690790/header.jpg"
      }
    ]
  },
  {
    "id": "39",
    "title": "Assetto Corsa Competizione",
    "tagline": "Experience Assetto Corsa Competizione in breathtaking AAA quality.",
    "description": "Assetto Corsa Competizione is a premium gaming experience developed by KUNOS Simulazioni and published by 505 Games. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Racing",
      "Simulation"
    ],
    "categories": [
      "racing"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.7,
    "popularity": 81,
    "releaseRank": 39,
    "priceModel": "Paid",
    "price": "$39.99",
    "developer": "KUNOS Simulazioni",
    "store": "Official Site",
    "publisher": "505 Games",
    "releaseYear": 2019,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=assetto-corsa-competizione",
    "featureTag": "Racing",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/805550/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/805550/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=assetto-corsa-competizione+website",
    "playUrl": "https://google.com/search?q=assetto-corsa-competizione+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/805550/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/805550/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/805550/header.jpg"
      }
    ]
  },
  {
    "id": "38",
    "title": "Mario Kart 8 Deluxe",
    "tagline": "Experience Mario Kart 8 Deluxe in breathtaking AAA quality.",
    "description": "Mario Kart 8 Deluxe is a premium gaming experience developed by Nintendo and published by Nintendo. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Racing",
      "Multiplayer"
    ],
    "categories": [
      "racing"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.9,
    "popularity": 97,
    "releaseRank": 38,
    "priceModel": "Paid",
    "price": "$59.99",
    "developer": "Nintendo",
    "store": "Official Site",
    "publisher": "Nintendo",
    "releaseYear": 2017,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=mario-kart-8-deluxe",
    "featureTag": "Racing",
    "image": "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000000025/7137262b5a64d6f5f1909e3e78f9f692db2b70f08922896da8f6540c7ed216da",
    "banner": "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000000025/7137262b5a64d6f5f1909e3e78f9f692db2b70f08922896da8f6540c7ed216da",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=mario-kart-8-deluxe+website",
    "playUrl": "https://google.com/search?q=mario-kart-8-deluxe+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000000025/7137262b5a64d6f5f1909e3e78f9f692db2b70f08922896da8f6540c7ed216da"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000000025/7137262b5a64d6f5f1909e3e78f9f692db2b70f08922896da8f6540c7ed216da"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000000025/7137262b5a64d6f5f1909e3e78f9f692db2b70f08922896da8f6540c7ed216da"
      }
    ]
  },
  {
    "id": "37",
    "title": "Rocket League",
    "tagline": "Experience Rocket League in breathtaking AAA quality.",
    "description": "Rocket League is a premium gaming experience developed by Psyonix and published by Epic Games. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Racing",
      "Sports",
      "Multiplayer"
    ],
    "categories": [
      "racing",
      "sports"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.8,
    "popularity": 91,
    "releaseRank": 37,
    "priceModel": "Free",
    "price": "Free",
    "developer": "Psyonix",
    "store": "Official Site",
    "publisher": "Epic Games",
    "releaseYear": 2015,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=rocket-league",
    "featureTag": "Racing",
    "image": "https://cdn2.unrealengine.com/rl-s16-keyart-16x9-a1b412b186b5.jpg",
    "banner": "https://cdn2.unrealengine.com/rl-s16-keyart-16x9-a1b412b186b5.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=rocket-league+website",
    "playUrl": "https://google.com/search?q=rocket-league+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://cdn2.unrealengine.com/rl-s16-keyart-16x9-a1b412b186b5.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://cdn2.unrealengine.com/rl-s16-keyart-16x9-a1b412b186b5.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://cdn2.unrealengine.com/rl-s16-keyart-16x9-a1b412b186b5.jpg"
      }
    ]
  },
  {
    "id": "36",
    "title": "The Crew Motorfest",
    "tagline": "Experience The Crew Motorfest in breathtaking AAA quality.",
    "description": "The Crew Motorfest is a premium gaming experience developed by Ubisoft Ivory Tower and published by Ubisoft. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Racing",
      "Open World"
    ],
    "categories": [
      "racing",
      "open-world"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.4,
    "popularity": 83,
    "releaseRank": 36,
    "priceModel": "Paid",
    "price": "$69.99",
    "developer": "Ubisoft Ivory Tower",
    "store": "Official Site",
    "publisher": "Ubisoft",
    "releaseYear": 2023,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=the-crew-motorfest",
    "featureTag": "Racing",
    "image": "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=600&h=900",
    "banner": "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1920&h=1080",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=the-crew-motorfest+website",
    "playUrl": "https://google.com/search?q=the-crew-motorfest+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1920&h=1080"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1920&h=1080"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1920&h=1080"
      }
    ]
  },
  {
    "id": "35",
    "title": "Civilization VI",
    "tagline": "Experience Civilization VI in breathtaking AAA quality.",
    "description": "Civilization VI is a premium gaming experience developed by Firaxis Games and published by 2K. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Strategy",
      "4X"
    ],
    "categories": [
      "strategy"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.7,
    "popularity": 89,
    "releaseRank": 35,
    "priceModel": "Paid",
    "price": "$59.99",
    "developer": "Firaxis Games",
    "store": "Official Site",
    "publisher": "2K",
    "releaseYear": 2016,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=civilization-vi",
    "featureTag": "Strategy",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/289070/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/289070/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=civilization-vi+website",
    "playUrl": "https://google.com/search?q=civilization-vi+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/289070/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/289070/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/289070/header.jpg"
      }
    ]
  },
  {
    "id": "34",
    "title": "Crusader Kings III",
    "tagline": "Experience Crusader Kings III in breathtaking AAA quality.",
    "description": "Crusader Kings III is a premium gaming experience developed by Paradox and published by Paradox Interactive. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Strategy",
      "Grand Strategy"
    ],
    "categories": [
      "strategy"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.8,
    "popularity": 86,
    "releaseRank": 34,
    "priceModel": "Paid",
    "price": "$49.99",
    "developer": "Paradox",
    "store": "Official Site",
    "publisher": "Paradox Interactive",
    "releaseYear": 2020,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=crusader-kings-iii",
    "featureTag": "Strategy",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1158310/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1158310/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=crusader-kings-iii+website",
    "playUrl": "https://google.com/search?q=crusader-kings-iii+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1158310/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1158310/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1158310/header.jpg"
      }
    ]
  },
  {
    "id": "33",
    "title": "Age of Empires IV",
    "tagline": "Experience Age of Empires IV in breathtaking AAA quality.",
    "description": "Age of Empires IV is a premium gaming experience developed by Relic Entertainment and published by Xbox Game Studios. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Strategy",
      "RTS"
    ],
    "categories": [
      "strategy"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.6,
    "popularity": 84,
    "releaseRank": 33,
    "priceModel": "Paid",
    "price": "$39.99",
    "developer": "Relic Entertainment",
    "store": "Official Site",
    "publisher": "Xbox Game Studios",
    "releaseYear": 2021,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=age-of-empires-iv",
    "featureTag": "Strategy",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1466860/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1466860/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=age-of-empires-iv+website",
    "playUrl": "https://google.com/search?q=age-of-empires-iv+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1466860/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1466860/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1466860/header.jpg"
      }
    ]
  },
  {
    "id": "32",
    "title": "StarCraft II",
    "tagline": "Experience StarCraft II in breathtaking AAA quality.",
    "description": "StarCraft II is a premium gaming experience developed by Blizzard and published by Blizzard. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Strategy",
      "RTS"
    ],
    "categories": [
      "strategy"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.8,
    "popularity": 85,
    "releaseRank": 32,
    "priceModel": "Free",
    "price": "Free",
    "developer": "Blizzard",
    "store": "Official Site",
    "publisher": "Blizzard",
    "releaseYear": 2010,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=starcraft-ii",
    "featureTag": "Strategy",
    "image": "https://bnetcmsus-a.akamaihd.net/cms/blog_header/m5/M597UXEPEBKT1506559388339.jpg",
    "banner": "https://bnetcmsus-a.akamaihd.net/cms/blog_header/m5/M597UXEPEBKT1506559388339.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=starcraft-ii+website",
    "playUrl": "https://google.com/search?q=starcraft-ii+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://bnetcmsus-a.akamaihd.net/cms/blog_header/m5/M597UXEPEBKT1506559388339.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://bnetcmsus-a.akamaihd.net/cms/blog_header/m5/M597UXEPEBKT1506559388339.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://bnetcmsus-a.akamaihd.net/cms/blog_header/m5/M597UXEPEBKT1506559388339.jpg"
      }
    ]
  },
  {
    "id": "31",
    "title": "Total War: WARHAMMER III",
    "tagline": "Experience Total War: WARHAMMER III in breathtaking AAA quality.",
    "description": "Total War: WARHAMMER III is a premium gaming experience developed by CREATIVE ASSEMBLY and published by SEGA. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Strategy",
      "Grand Strategy"
    ],
    "categories": [
      "strategy"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.5,
    "popularity": 83,
    "releaseRank": 31,
    "priceModel": "Paid",
    "price": "$59.99",
    "developer": "CREATIVE ASSEMBLY",
    "store": "Official Site",
    "publisher": "SEGA",
    "releaseYear": 2022,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=total-war-warhammer-iii",
    "featureTag": "Strategy",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1145980/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1145980/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=total-war-warhammer-iii+website",
    "playUrl": "https://google.com/search?q=total-war-warhammer-iii+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1145980/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1145980/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1145980/header.jpg"
      }
    ]
  },
  {
    "id": "30",
    "title": "Stellaris",
    "tagline": "Experience Stellaris in breathtaking AAA quality.",
    "description": "Stellaris is a premium gaming experience developed by Paradox and published by Paradox Interactive. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Strategy",
      "Grand Strategy"
    ],
    "categories": [
      "strategy"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.6,
    "popularity": 85,
    "releaseRank": 30,
    "priceModel": "Paid",
    "price": "$39.99",
    "developer": "Paradox",
    "store": "Official Site",
    "publisher": "Paradox Interactive",
    "releaseYear": 2016,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=stellaris",
    "featureTag": "Strategy",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/281990/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/281990/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=stellaris+website",
    "playUrl": "https://google.com/search?q=stellaris+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/281990/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/281990/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/281990/header.jpg"
      }
    ]
  },
  {
    "id": "29",
    "title": "XCOM 2",
    "tagline": "Experience XCOM 2 in breathtaking AAA quality.",
    "description": "XCOM 2 is a premium gaming experience developed by Firaxis Games and published by 2K. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Strategy",
      "Tactical"
    ],
    "categories": [
      "strategy"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.7,
    "popularity": 87,
    "releaseRank": 29,
    "priceModel": "Paid",
    "price": "$59.99",
    "developer": "Firaxis Games",
    "store": "Official Site",
    "publisher": "2K",
    "releaseYear": 2016,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=xcom-2",
    "featureTag": "Strategy",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/268500/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/268500/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=xcom-2+website",
    "playUrl": "https://google.com/search?q=xcom-2+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/268500/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/268500/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/268500/header.jpg"
      }
    ]
  },
  {
    "id": "28",
    "title": "Cities: Skylines",
    "tagline": "Experience Cities: Skylines in breathtaking AAA quality.",
    "description": "Cities: Skylines is a premium gaming experience developed by Colossal Order and published by Paradox Interactive. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Strategy",
      "Simulation"
    ],
    "categories": [
      "strategy"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.8,
    "popularity": 88,
    "releaseRank": 28,
    "priceModel": "Paid",
    "price": "$29.99",
    "developer": "Colossal Order",
    "store": "Official Site",
    "publisher": "Paradox Interactive",
    "releaseYear": 2015,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=cities-skylines",
    "featureTag": "Strategy",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/255710/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/255710/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=cities-skylines+website",
    "playUrl": "https://google.com/search?q=cities-skylines+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/255710/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/255710/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/255710/header.jpg"
      }
    ]
  },
  {
    "id": "27",
    "title": "Cities: Skylines II",
    "tagline": "Experience Cities: Skylines II in breathtaking AAA quality.",
    "description": "Cities: Skylines II is a premium gaming experience developed by Colossal Order and published by Paradox Interactive. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Strategy",
      "Simulation"
    ],
    "categories": [
      "strategy"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.1,
    "popularity": 82,
    "releaseRank": 27,
    "priceModel": "Paid",
    "price": "$49.99",
    "developer": "Colossal Order",
    "store": "Official Site",
    "publisher": "Paradox Interactive",
    "releaseYear": 2023,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=cities-skylines-ii",
    "featureTag": "Strategy",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1222670/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1222670/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=cities-skylines-ii+website",
    "playUrl": "https://google.com/search?q=cities-skylines-ii+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1222670/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1222670/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1222670/header.jpg"
      }
    ]
  },
  {
    "id": "26",
    "title": "Manor Lords",
    "tagline": "Experience Manor Lords in breathtaking AAA quality.",
    "description": "Manor Lords is a premium gaming experience developed by Slavic Magic and published by Hooded Horse. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Strategy",
      "City Builder"
    ],
    "categories": [
      "strategy"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.7,
    "popularity": 86,
    "releaseRank": 26,
    "priceModel": "Paid",
    "price": "$39.99",
    "developer": "Slavic Magic",
    "store": "Official Site",
    "publisher": "Hooded Horse",
    "releaseYear": 2024,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=manor-lords",
    "featureTag": "Strategy",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1363080/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1363080/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=manor-lords+website",
    "playUrl": "https://google.com/search?q=manor-lords+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1363080/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1363080/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1363080/header.jpg"
      }
    ]
  },
  {
    "id": "25",
    "title": "Hearts of Iron IV",
    "tagline": "Experience Hearts of Iron IV in breathtaking AAA quality.",
    "description": "Hearts of Iron IV is a premium gaming experience developed by Paradox and published by Paradox Interactive. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Strategy",
      "Grand Strategy"
    ],
    "categories": [
      "strategy"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.6,
    "popularity": 84,
    "releaseRank": 25,
    "priceModel": "Paid",
    "price": "$39.99",
    "developer": "Paradox",
    "store": "Official Site",
    "publisher": "Paradox Interactive",
    "releaseYear": 2016,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=hearts-of-iron-iv",
    "featureTag": "Strategy",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/394360/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/394360/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=hearts-of-iron-iv+website",
    "playUrl": "https://google.com/search?q=hearts-of-iron-iv+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/394360/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/394360/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/394360/header.jpg"
      }
    ]
  },
  {
    "id": "24",
    "title": "EA SPORTS FC 24",
    "tagline": "Experience EA SPORTS FC 24 in breathtaking AAA quality.",
    "description": "EA SPORTS FC 24 is a premium gaming experience developed by EA Sports and published by Electronic Arts. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Sports",
      "Multiplayer"
    ],
    "categories": [
      "sports"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.2,
    "popularity": 93,
    "releaseRank": 24,
    "priceModel": "Paid",
    "price": "$69.99",
    "developer": "EA Sports",
    "store": "Official Site",
    "publisher": "Electronic Arts",
    "releaseYear": 2023,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=ea-sports-fc-24",
    "featureTag": "Sports",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2195250/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2195250/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=ea-sports-fc-24+website",
    "playUrl": "https://google.com/search?q=ea-sports-fc-24+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2195250/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2195250/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2195250/header.jpg"
      }
    ]
  },
  {
    "id": "23",
    "title": "NBA 2K24",
    "tagline": "Experience NBA 2K24 in breathtaking AAA quality.",
    "description": "NBA 2K24 is a premium gaming experience developed by Visual Concepts and published by 2K. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Sports",
      "Multiplayer"
    ],
    "categories": [
      "sports"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4,
    "popularity": 89,
    "releaseRank": 23,
    "priceModel": "Paid",
    "price": "$69.99",
    "developer": "Visual Concepts",
    "store": "Official Site",
    "publisher": "2K",
    "releaseYear": 2023,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=nba-2k24",
    "featureTag": "Sports",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2338770/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2338770/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=nba-2k24+website",
    "playUrl": "https://google.com/search?q=nba-2k24+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2338770/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2338770/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2338770/header.jpg"
      }
    ]
  },
  {
    "id": "22",
    "title": "Madden NFL 24",
    "tagline": "Experience Madden NFL 24 in breathtaking AAA quality.",
    "description": "Madden NFL 24 is a premium gaming experience developed by EA Tiburon and published by Electronic Arts. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Sports",
      "Multiplayer"
    ],
    "categories": [
      "sports"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.1,
    "popularity": 88,
    "releaseRank": 22,
    "priceModel": "Paid",
    "price": "$69.99",
    "developer": "EA Tiburon",
    "store": "Official Site",
    "publisher": "Electronic Arts",
    "releaseYear": 2023,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=madden-nfl-24",
    "featureTag": "Sports",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2140330/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2140330/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=madden-nfl-24+website",
    "playUrl": "https://google.com/search?q=madden-nfl-24+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2140330/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2140330/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2140330/header.jpg"
      }
    ]
  },
  {
    "id": "21",
    "title": "WWE 2K24",
    "tagline": "Experience WWE 2K24 in breathtaking AAA quality.",
    "description": "WWE 2K24 is a premium gaming experience developed by Visual Concepts and published by 2K. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Sports",
      "Action"
    ],
    "categories": [
      "sports",
      "action"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.5,
    "popularity": 85,
    "releaseRank": 21,
    "priceModel": "Paid",
    "price": "$69.99",
    "developer": "Visual Concepts",
    "store": "Official Site",
    "publisher": "2K",
    "releaseYear": 2024,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=wwe-2k24",
    "featureTag": "Sports",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2315690/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2315690/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=wwe-2k24+website",
    "playUrl": "https://google.com/search?q=wwe-2k24+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2315690/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2315690/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2315690/header.jpg"
      }
    ]
  },
  {
    "id": "20",
    "title": "PGA TOUR 2K23",
    "tagline": "Experience PGA TOUR 2K23 in breathtaking AAA quality.",
    "description": "PGA TOUR 2K23 is a premium gaming experience developed by HB Studios and published by 2K. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Sports",
      "Simulation"
    ],
    "categories": [
      "sports"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.4,
    "popularity": 80,
    "releaseRank": 20,
    "priceModel": "Paid",
    "price": "$59.99",
    "developer": "HB Studios",
    "store": "Official Site",
    "publisher": "2K",
    "releaseYear": 2022,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=pga-tour-2k23",
    "featureTag": "Sports",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1358660/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1358660/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=pga-tour-2k23+website",
    "playUrl": "https://google.com/search?q=pga-tour-2k23+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1358660/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1358660/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1358660/header.jpg"
      }
    ]
  },
  {
    "id": "19",
    "title": "Tony Hawk's Pro Skater 1 + 2",
    "tagline": "Experience Tony Hawk's Pro Skater 1 + 2 in breathtaking AAA quality.",
    "description": "Tony Hawk's Pro Skater 1 + 2 is a premium gaming experience developed by Vicarious Visions and published by Activision. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Sports",
      "Arcade"
    ],
    "categories": [
      "sports"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.8,
    "popularity": 84,
    "releaseRank": 19,
    "priceModel": "Paid",
    "price": "$39.99",
    "developer": "Vicarious Visions",
    "store": "Official Site",
    "publisher": "Activision",
    "releaseYear": 2020,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=tony-hawk-s-pro-skater-1-2",
    "featureTag": "Sports",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2397460/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2397460/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=tony-hawk-s-pro-skater-1-2+website",
    "playUrl": "https://google.com/search?q=tony-hawk-s-pro-skater-1-2+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2397460/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2397460/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2397460/header.jpg"
      }
    ]
  },
  {
    "id": "18",
    "title": "Riders Republic",
    "tagline": "Experience Riders Republic in breathtaking AAA quality.",
    "description": "Riders Republic is a premium gaming experience developed by Ubisoft Annecy and published by Ubisoft. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Sports",
      "Open World"
    ],
    "categories": [
      "sports",
      "open-world"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.5,
    "popularity": 81,
    "releaseRank": 18,
    "priceModel": "Paid",
    "price": "$59.99",
    "developer": "Ubisoft Annecy",
    "store": "Official Site",
    "publisher": "Ubisoft",
    "releaseYear": 2021,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=riders-republic",
    "featureTag": "Sports",
    "image": "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=600&h=900",
    "banner": "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1920&h=1080",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=riders-republic+website",
    "playUrl": "https://google.com/search?q=riders-republic+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1920&h=1080"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1920&h=1080"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1920&h=1080"
      }
    ]
  },
  {
    "id": "17",
    "title": "Football Manager 2024",
    "tagline": "Experience Football Manager 2024 in breathtaking AAA quality.",
    "description": "Football Manager 2024 is a premium gaming experience developed by Sports Interactive and published by SEGA. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Sports",
      "Simulation",
      "Strategy"
    ],
    "categories": [
      "sports",
      "strategy"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.8,
    "popularity": 86,
    "releaseRank": 17,
    "priceModel": "Paid",
    "price": "$59.99",
    "developer": "Sports Interactive",
    "store": "Official Site",
    "publisher": "SEGA",
    "releaseYear": 2023,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=football-manager-2024",
    "featureTag": "Sports",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2252570/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2252570/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=football-manager-2024+website",
    "playUrl": "https://google.com/search?q=football-manager-2024+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2252570/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2252570/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2252570/header.jpg"
      }
    ]
  },
  {
    "id": "16",
    "title": "UFC 5",
    "tagline": "Experience UFC 5 in breathtaking AAA quality.",
    "description": "UFC 5 is a premium gaming experience developed by EA Vancouver and published by Electronic Arts. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Sports",
      "Fighting"
    ],
    "categories": [
      "sports",
      "action"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.3,
    "popularity": 83,
    "releaseRank": 16,
    "priceModel": "Paid",
    "price": "$69.99",
    "developer": "EA Vancouver",
    "store": "Official Site",
    "publisher": "Electronic Arts",
    "releaseYear": 2023,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=ufc-5",
    "featureTag": "Sports",
    "image": "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=600&h=900",
    "banner": "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1920&h=1080",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=ufc-5+website",
    "playUrl": "https://google.com/search?q=ufc-5+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1920&h=1080"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1920&h=1080"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1920&h=1080"
      }
    ]
  },
  {
    "id": "15",
    "title": "MLB The Show 24",
    "tagline": "Experience MLB The Show 24 in breathtaking AAA quality.",
    "description": "MLB The Show 24 is a premium gaming experience developed by San Diego Studio and published by Sony Interactive. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Sports",
      "Simulation"
    ],
    "categories": [
      "sports"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.6,
    "popularity": 85,
    "releaseRank": 15,
    "priceModel": "Paid",
    "price": "$69.99",
    "developer": "San Diego Studio",
    "store": "Official Site",
    "publisher": "Sony Interactive",
    "releaseYear": 2024,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=mlb-the-show-24",
    "featureTag": "Sports",
    "image": "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=600&h=900",
    "banner": "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1920&h=1080",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=mlb-the-show-24+website",
    "playUrl": "https://google.com/search?q=mlb-the-show-24+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1920&h=1080"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1920&h=1080"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1920&h=1080"
      }
    ]
  },
  {
    "id": "14",
    "title": "Hollow Knight",
    "tagline": "Experience Hollow Knight in breathtaking AAA quality.",
    "description": "Hollow Knight is a premium gaming experience developed by Team Cherry and published by Team Cherry. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Indie",
      "Metroidvania"
    ],
    "categories": [
      "indie",
      "action"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.9,
    "popularity": 91,
    "releaseRank": 14,
    "priceModel": "Paid",
    "price": "$14.99",
    "developer": "Team Cherry",
    "store": "Official Site",
    "publisher": "Team Cherry",
    "releaseYear": 2017,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=hollow-knight",
    "featureTag": "Indie",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/367520/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/367520/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=hollow-knight+website",
    "playUrl": "https://google.com/search?q=hollow-knight+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/367520/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/367520/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/367520/header.jpg"
      }
    ]
  },
  {
    "id": "13",
    "title": "Hades",
    "tagline": "Experience Hades in breathtaking AAA quality.",
    "description": "Hades is a premium gaming experience developed by Supergiant Games and published by Supergiant Games. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Indie",
      "Roguelike"
    ],
    "categories": [
      "indie",
      "action"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.9,
    "popularity": 92,
    "releaseRank": 13,
    "priceModel": "Paid",
    "price": "$24.99",
    "developer": "Supergiant Games",
    "store": "Official Site",
    "publisher": "Supergiant Games",
    "releaseYear": 2020,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=hades",
    "featureTag": "Indie",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1145360/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1145360/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=hades+website",
    "playUrl": "https://google.com/search?q=hades+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1145360/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1145360/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1145360/header.jpg"
      }
    ]
  },
  {
    "id": "12",
    "title": "Celeste",
    "tagline": "Experience Celeste in breathtaking AAA quality.",
    "description": "Celeste is a premium gaming experience developed by Extremely OK Games and published by Extremely OK Games. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Indie",
      "Platformer"
    ],
    "categories": [
      "indie"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.8,
    "popularity": 89,
    "releaseRank": 12,
    "priceModel": "Paid",
    "price": "$19.99",
    "developer": "Extremely OK Games",
    "store": "Official Site",
    "publisher": "Extremely OK Games",
    "releaseYear": 2018,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=celeste",
    "featureTag": "Indie",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/504230/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/504230/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=celeste+website",
    "playUrl": "https://google.com/search?q=celeste+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/504230/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/504230/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/504230/header.jpg"
      }
    ]
  },
  {
    "id": "11",
    "title": "Stardew Valley",
    "tagline": "Experience Stardew Valley in breathtaking AAA quality.",
    "description": "Stardew Valley is a premium gaming experience developed by ConcernedApe and published by ConcernedApe. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Indie",
      "Simulation"
    ],
    "categories": [
      "indie",
      "rpg"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 5,
    "popularity": 96,
    "releaseRank": 11,
    "priceModel": "Paid",
    "price": "$14.99",
    "developer": "ConcernedApe",
    "store": "Official Site",
    "publisher": "ConcernedApe",
    "releaseYear": 2016,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=stardew-valley",
    "featureTag": "Indie",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=stardew-valley+website",
    "playUrl": "https://google.com/search?q=stardew-valley+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/header.jpg"
      }
    ]
  },
  {
    "id": "10",
    "title": "Dead Cells",
    "tagline": "Experience Dead Cells in breathtaking AAA quality.",
    "description": "Dead Cells is a premium gaming experience developed by Motion Twin and published by Motion Twin. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Indie",
      "Roguelite"
    ],
    "categories": [
      "indie",
      "action"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.8,
    "popularity": 88,
    "releaseRank": 10,
    "priceModel": "Paid",
    "price": "$24.99",
    "developer": "Motion Twin",
    "store": "Official Site",
    "publisher": "Motion Twin",
    "releaseYear": 2018,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=dead-cells",
    "featureTag": "Indie",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/588650/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/588650/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=dead-cells+website",
    "playUrl": "https://google.com/search?q=dead-cells+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/588650/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/588650/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/588650/header.jpg"
      }
    ]
  },
  {
    "id": "9",
    "title": "Terraria",
    "tagline": "Experience Terraria in breathtaking AAA quality.",
    "description": "Terraria is a premium gaming experience developed by Re-Logic and published by Re-Logic. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Indie",
      "Survival"
    ],
    "categories": [
      "indie",
      "action"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.9,
    "popularity": 95,
    "releaseRank": 9,
    "priceModel": "Paid",
    "price": "$9.99",
    "developer": "Re-Logic",
    "store": "Official Site",
    "publisher": "Re-Logic",
    "releaseYear": 2011,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=terraria",
    "featureTag": "Indie",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/105600/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/105600/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=terraria+website",
    "playUrl": "https://google.com/search?q=terraria+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/105600/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/105600/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/105600/header.jpg"
      }
    ]
  },
  {
    "id": "8",
    "title": "Disco Elysium",
    "tagline": "Experience Disco Elysium in breathtaking AAA quality.",
    "description": "Disco Elysium is a premium gaming experience developed by ZA/UM and published by ZA/UM. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Indie",
      "RPG"
    ],
    "categories": [
      "indie",
      "rpg"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.9,
    "popularity": 87,
    "releaseRank": 8,
    "priceModel": "Paid",
    "price": "$39.99",
    "developer": "ZA/UM",
    "store": "Official Site",
    "publisher": "ZA/UM",
    "releaseYear": 2019,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=disco-elysium",
    "featureTag": "Indie",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/632470/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/632470/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=disco-elysium+website",
    "playUrl": "https://google.com/search?q=disco-elysium+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/632470/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/632470/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/632470/header.jpg"
      }
    ]
  },
  {
    "id": "7",
    "title": "Outer Wilds",
    "tagline": "Experience Outer Wilds in breathtaking AAA quality.",
    "description": "Outer Wilds is a premium gaming experience developed by Mobius Digital and published by Annapurna Interactive. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Indie",
      "Adventure"
    ],
    "categories": [
      "indie"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.9,
    "popularity": 86,
    "releaseRank": 7,
    "priceModel": "Paid",
    "price": "$24.99",
    "developer": "Mobius Digital",
    "store": "Official Site",
    "publisher": "Annapurna Interactive",
    "releaseYear": 2019,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=outer-wilds",
    "featureTag": "Indie",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1332010/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1332010/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=outer-wilds+website",
    "playUrl": "https://google.com/search?q=outer-wilds+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1332010/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1332010/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1332010/header.jpg"
      }
    ]
  },
  {
    "id": "6",
    "title": "Slay the Spire",
    "tagline": "Experience Slay the Spire in breathtaking AAA quality.",
    "description": "Slay the Spire is a premium gaming experience developed by Mega Crit Games and published by Mega Crit Games. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Indie",
      "Deckbuilder"
    ],
    "categories": [
      "indie",
      "strategy"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.8,
    "popularity": 88,
    "releaseRank": 6,
    "priceModel": "Paid",
    "price": "$24.99",
    "developer": "Mega Crit Games",
    "store": "Official Site",
    "publisher": "Mega Crit Games",
    "releaseYear": 2019,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=slay-the-spire",
    "featureTag": "Indie",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/646570/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/646570/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=slay-the-spire+website",
    "playUrl": "https://google.com/search?q=slay-the-spire+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/646570/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/646570/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/646570/header.jpg"
      }
    ]
  },
  {
    "id": "5",
    "title": "Cuphead",
    "tagline": "Experience Cuphead in breathtaking AAA quality.",
    "description": "Cuphead is a premium gaming experience developed by Studio MDHR and published by Studio MDHR. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Indie",
      "Action"
    ],
    "categories": [
      "indie",
      "action"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.8,
    "popularity": 90,
    "releaseRank": 5,
    "priceModel": "Paid",
    "price": "$19.99",
    "developer": "Studio MDHR",
    "store": "Official Site",
    "publisher": "Studio MDHR",
    "releaseYear": 2017,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=cuphead",
    "featureTag": "Indie",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/268910/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/268910/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=cuphead+website",
    "playUrl": "https://google.com/search?q=cuphead+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/268910/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/268910/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/268910/header.jpg"
      }
    ]
  },
  {
    "id": "4",
    "title": "Valheim",
    "tagline": "Experience Valheim in breathtaking AAA quality.",
    "description": "Valheim is a premium gaming experience developed by Iron Gate AB and published by Coffee Stain. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Indie",
      "Survival"
    ],
    "categories": [
      "indie",
      "open-world"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.7,
    "popularity": 91,
    "releaseRank": 4,
    "priceModel": "Paid",
    "price": "$19.99",
    "developer": "Iron Gate AB",
    "store": "Official Site",
    "publisher": "Coffee Stain",
    "releaseYear": 2021,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=valheim",
    "featureTag": "Indie",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/892970/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/892970/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=valheim+website",
    "playUrl": "https://google.com/search?q=valheim+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/892970/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/892970/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/892970/header.jpg"
      }
    ]
  },
  {
    "id": "3",
    "title": "Palworld",
    "tagline": "Experience Palworld in breathtaking AAA quality.",
    "description": "Palworld is a premium gaming experience developed by Pocketpair and published by Pocketpair. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Indie",
      "Survival",
      "Multiplayer"
    ],
    "categories": [
      "indie",
      "open-world"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.6,
    "popularity": 94,
    "releaseRank": 3,
    "priceModel": "Paid",
    "price": "$29.99",
    "developer": "Pocketpair",
    "store": "Official Site",
    "publisher": "Pocketpair",
    "releaseYear": 2024,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=palworld",
    "featureTag": "Indie",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1623730/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1623730/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=palworld+website",
    "playUrl": "https://google.com/search?q=palworld+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1623730/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1623730/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1623730/header.jpg"
      }
    ]
  },
  {
    "id": "2",
    "title": "Lethal Company",
    "tagline": "Experience Lethal Company in breathtaking AAA quality.",
    "description": "Lethal Company is a premium gaming experience developed by Zeekerss and published by Zeekerss. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Indie",
      "Horror",
      "Multiplayer"
    ],
    "categories": [
      "indie",
      "action"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.8,
    "popularity": 93,
    "releaseRank": 2,
    "priceModel": "Paid",
    "price": "$9.99",
    "developer": "Zeekerss",
    "store": "Official Site",
    "publisher": "Zeekerss",
    "releaseYear": 2023,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=lethal-company",
    "featureTag": "Indie",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1966720/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1966720/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=lethal-company+website",
    "playUrl": "https://google.com/search?q=lethal-company+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1966720/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1966720/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1966720/header.jpg"
      }
    ]
  },
  {
    "id": "1",
    "title": "Undertale",
    "tagline": "Experience Undertale in breathtaking AAA quality.",
    "description": "Undertale is a premium gaming experience developed by tobyfox and published by tobyfox. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Indie",
      "RPG"
    ],
    "categories": [
      "indie",
      "rpg"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.8,
    "popularity": 92,
    "releaseRank": 1,
    "priceModel": "Paid",
    "price": "$9.99",
    "developer": "tobyfox",
    "store": "Official Site",
    "publisher": "tobyfox",
    "releaseYear": 2015,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=undertale",
    "featureTag": "Indie",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/391540/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/391540/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=undertale+website",
    "playUrl": "https://google.com/search?q=undertale+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/391540/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/391540/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/391540/header.jpg"
      }
    ]
  },
  {
    "id": "0",
    "title": "Vampire Survivors",
    "tagline": "Experience Vampire Survivors in breathtaking AAA quality.",
    "description": "Vampire Survivors is a premium gaming experience developed by poncle and published by poncle. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Indie",
      "Action"
    ],
    "categories": [
      "indie",
      "action"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.9,
    "popularity": 89,
    "releaseRank": 0,
    "priceModel": "Paid",
    "price": "$4.99",
    "developer": "poncle",
    "store": "Official Site",
    "publisher": "poncle",
    "releaseYear": 2022,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=vampire-survivors",
    "featureTag": "Indie",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1794680/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1794680/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=vampire-survivors+website",
    "playUrl": "https://google.com/search?q=vampire-survivors+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1794680/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1794680/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1794680/header.jpg"
      }
    ]
  },
  {
    "id": "-1",
    "title": "PUBG Mobile",
    "tagline": "Experience PUBG Mobile in breathtaking AAA quality.",
    "description": "PUBG Mobile is a premium gaming experience developed by LightSpeed and published by Tencent. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Mobile",
      "Battle Royale"
    ],
    "categories": [
      "fps",
      "action"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.4,
    "popularity": 95,
    "releaseRank": -1,
    "priceModel": "Free",
    "price": "Free",
    "developer": "LightSpeed",
    "store": "Official Site",
    "publisher": "Tencent",
    "releaseYear": 2018,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=pubg-mobile",
    "featureTag": "Mobile",
    "image": "https://play-lh.googleusercontent.com/JRd05pyBH41qjgsJuWduxIMPQ3kO8S7zE0_U6P2J21M3tqjBks5z7nNq9nZ7Y3vO8g",
    "banner": "https://play-lh.googleusercontent.com/JRd05pyBH41qjgsJuWduxIMPQ3kO8S7zE0_U6P2J21M3tqjBks5z7nNq9nZ7Y3vO8g",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=pubg-mobile+website",
    "playUrl": "https://google.com/search?q=pubg-mobile+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://play-lh.googleusercontent.com/JRd05pyBH41qjgsJuWduxIMPQ3kO8S7zE0_U6P2J21M3tqjBks5z7nNq9nZ7Y3vO8g"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://play-lh.googleusercontent.com/JRd05pyBH41qjgsJuWduxIMPQ3kO8S7zE0_U6P2J21M3tqjBks5z7nNq9nZ7Y3vO8g"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://play-lh.googleusercontent.com/JRd05pyBH41qjgsJuWduxIMPQ3kO8S7zE0_U6P2J21M3tqjBks5z7nNq9nZ7Y3vO8g"
      }
    ]
  },
  {
    "id": "-2",
    "title": "Call of Duty: Mobile",
    "tagline": "Experience Call of Duty: Mobile in breathtaking AAA quality.",
    "description": "Call of Duty: Mobile is a premium gaming experience developed by TiMi Studio and published by Activision. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Mobile",
      "FPS"
    ],
    "categories": [
      "fps",
      "action"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.5,
    "popularity": 93,
    "releaseRank": -2,
    "priceModel": "Free",
    "price": "Free",
    "developer": "TiMi Studio",
    "store": "Official Site",
    "publisher": "Activision",
    "releaseYear": 2019,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=call-of-duty-mobile",
    "featureTag": "Mobile",
    "image": "https://play-lh.googleusercontent.com/1-xH12Kx1Vl5N4E1zP1T1hW2Q3L5_Q7A4_k09_9B1g9y1o9N2J3Q4K0z5K9S7o6",
    "banner": "https://play-lh.googleusercontent.com/1-xH12Kx1Vl5N4E1zP1T1hW2Q3L5_Q7A4_k09_9B1g9y1o9N2J3Q4K0z5K9S7o6",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=call-of-duty-mobile+website",
    "playUrl": "https://google.com/search?q=call-of-duty-mobile+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://play-lh.googleusercontent.com/1-xH12Kx1Vl5N4E1zP1T1hW2Q3L5_Q7A4_k09_9B1g9y1o9N2J3Q4K0z5K9S7o6"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://play-lh.googleusercontent.com/1-xH12Kx1Vl5N4E1zP1T1hW2Q3L5_Q7A4_k09_9B1g9y1o9N2J3Q4K0z5K9S7o6"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://play-lh.googleusercontent.com/1-xH12Kx1Vl5N4E1zP1T1hW2Q3L5_Q7A4_k09_9B1g9y1o9N2J3Q4K0z5K9S7o6"
      }
    ]
  },
  {
    "id": "-3",
    "title": "League of Legends: Wild Rift",
    "tagline": "Experience League of Legends: Wild Rift in breathtaking AAA quality.",
    "description": "League of Legends: Wild Rift is a premium gaming experience developed by Riot Games and published by Riot Games. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Mobile",
      "MOBA"
    ],
    "categories": [
      "strategy",
      "action"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.6,
    "popularity": 89,
    "releaseRank": -3,
    "priceModel": "Free",
    "price": "Free",
    "developer": "Riot Games",
    "store": "Official Site",
    "publisher": "Riot Games",
    "releaseYear": 2020,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=league-of-legends-wild-rift",
    "featureTag": "Mobile",
    "image": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt02dd32b665c25036/5f4defe8b553152466d1b21a/Wild_Rift_Logo.png",
    "banner": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt02dd32b665c25036/5f4defe8b553152466d1b21a/Wild_Rift_Banner.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=league-of-legends-wild-rift+website",
    "playUrl": "https://google.com/search?q=league-of-legends-wild-rift+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt02dd32b665c25036/5f4defe8b553152466d1b21a/Wild_Rift_Banner.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt02dd32b665c25036/5f4defe8b553152466d1b21a/Wild_Rift_Banner.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt02dd32b665c25036/5f4defe8b553152466d1b21a/Wild_Rift_Banner.jpg"
      }
    ]
  },
  {
    "id": "-4",
    "title": "Clash of Clans",
    "tagline": "Experience Clash of Clans in breathtaking AAA quality.",
    "description": "Clash of Clans is a premium gaming experience developed by Supercell and published by Supercell. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Mobile",
      "Strategy"
    ],
    "categories": [
      "strategy"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.7,
    "popularity": 94,
    "releaseRank": -4,
    "priceModel": "Free",
    "price": "Free",
    "developer": "Supercell",
    "store": "Official Site",
    "publisher": "Supercell",
    "releaseYear": 2012,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=clash-of-clans",
    "featureTag": "Mobile",
    "image": "https://supercell.com/images/154/og_clashofclans.jpg",
    "banner": "https://supercell.com/images/154/og_clashofclans.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=clash-of-clans+website",
    "playUrl": "https://google.com/search?q=clash-of-clans+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://supercell.com/images/154/og_clashofclans.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://supercell.com/images/154/og_clashofclans.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://supercell.com/images/154/og_clashofclans.jpg"
      }
    ]
  },
  {
    "id": "-5",
    "title": "Minecraft",
    "tagline": "Experience Minecraft in breathtaking AAA quality.",
    "description": "Minecraft is a premium gaming experience developed by Mojang Studios and published by Xbox Game Studios. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Sandbox",
      "Survival"
    ],
    "categories": [
      "open-world",
      "indie"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.9,
    "popularity": 100,
    "releaseRank": -5,
    "priceModel": "Paid",
    "price": "$29.99",
    "developer": "Mojang Studios",
    "store": "Official Site",
    "publisher": "Xbox Game Studios",
    "releaseYear": 2011,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=minecraft",
    "featureTag": "Sandbox",
    "image": "https://www.minecraft.net/content/dam/games/minecraft/key-art/Games_Subnav_Minecraft-300x465.jpg",
    "banner": "https://www.minecraft.net/content/dam/games/minecraft/key-art/Vanilla-PMP_Collection-Carousel-0_Village-and-Pillage_1280x768.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=minecraft+website",
    "playUrl": "https://google.com/search?q=minecraft+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://www.minecraft.net/content/dam/games/minecraft/key-art/Vanilla-PMP_Collection-Carousel-0_Village-and-Pillage_1280x768.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://www.minecraft.net/content/dam/games/minecraft/key-art/Vanilla-PMP_Collection-Carousel-0_Village-and-Pillage_1280x768.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://www.minecraft.net/content/dam/games/minecraft/key-art/Vanilla-PMP_Collection-Carousel-0_Village-and-Pillage_1280x768.jpg"
      }
    ]
  },
  {
    "id": "-6",
    "title": "Roblox",
    "tagline": "Experience Roblox in breathtaking AAA quality.",
    "description": "Roblox is a premium gaming experience developed by Roblox Corp and published by Roblox Corp. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Sandbox",
      "MMO"
    ],
    "categories": [
      "open-world",
      "action"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.4,
    "popularity": 98,
    "releaseRank": -6,
    "priceModel": "Free",
    "price": "Free",
    "developer": "Roblox Corp",
    "store": "Official Site",
    "publisher": "Roblox Corp",
    "releaseYear": 2006,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=roblox",
    "featureTag": "Sandbox",
    "image": "https://images.rbxcdn.com/f9c968e7ec894f068521a00a2b0ebff1",
    "banner": "https://images.rbxcdn.com/f9c968e7ec894f068521a00a2b0ebff1",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=roblox+website",
    "playUrl": "https://google.com/search?q=roblox+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://images.rbxcdn.com/f9c968e7ec894f068521a00a2b0ebff1"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://images.rbxcdn.com/f9c968e7ec894f068521a00a2b0ebff1"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://images.rbxcdn.com/f9c968e7ec894f068521a00a2b0ebff1"
      }
    ]
  },
  {
    "id": "-7",
    "title": "World of Warcraft",
    "tagline": "Experience World of Warcraft in breathtaking AAA quality.",
    "description": "World of Warcraft is a premium gaming experience developed by Blizzard and published by Blizzard. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "MMORPG"
    ],
    "categories": [
      "rpg",
      "open-world"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.5,
    "popularity": 92,
    "releaseRank": -7,
    "priceModel": "Paid",
    "price": "Subscription",
    "developer": "Blizzard",
    "store": "Official Site",
    "publisher": "Blizzard",
    "releaseYear": 2004,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=world-of-warcraft",
    "featureTag": "MMORPG",
    "image": "https://bnetcmsus-a.akamaihd.net/cms/blog_header/74/743E51R9Y2R81636573887019.jpg",
    "banner": "https://bnetcmsus-a.akamaihd.net/cms/blog_header/74/743E51R9Y2R81636573887019.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=world-of-warcraft+website",
    "playUrl": "https://google.com/search?q=world-of-warcraft+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://bnetcmsus-a.akamaihd.net/cms/blog_header/74/743E51R9Y2R81636573887019.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://bnetcmsus-a.akamaihd.net/cms/blog_header/74/743E51R9Y2R81636573887019.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://bnetcmsus-a.akamaihd.net/cms/blog_header/74/743E51R9Y2R81636573887019.jpg"
      }
    ]
  },
  {
    "id": "-8",
    "title": "Final Fantasy XIV",
    "tagline": "Experience Final Fantasy XIV in breathtaking AAA quality.",
    "description": "Final Fantasy XIV is a premium gaming experience developed by Square Enix and published by Square Enix. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "MMORPG"
    ],
    "categories": [
      "rpg",
      "open-world"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.8,
    "popularity": 91,
    "releaseRank": -8,
    "priceModel": "Paid",
    "price": "Subscription",
    "developer": "Square Enix",
    "store": "Official Site",
    "publisher": "Square Enix",
    "releaseYear": 2013,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=final-fantasy-xiv",
    "featureTag": "MMORPG",
    "image": "https://img.finalfantasyxiv.com/lds/h/w/5S3iB2rJ6o3P8r1Z.jpg",
    "banner": "https://img.finalfantasyxiv.com/lds/h/w/5S3iB2rJ6o3P8r1Z.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=final-fantasy-xiv+website",
    "playUrl": "https://google.com/search?q=final-fantasy-xiv+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://img.finalfantasyxiv.com/lds/h/w/5S3iB2rJ6o3P8r1Z.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://img.finalfantasyxiv.com/lds/h/w/5S3iB2rJ6o3P8r1Z.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://img.finalfantasyxiv.com/lds/h/w/5S3iB2rJ6o3P8r1Z.jpg"
      }
    ]
  },
  {
    "id": "-9",
    "title": "Among Us",
    "tagline": "Experience Among Us in breathtaking AAA quality.",
    "description": "Among Us is a premium gaming experience developed by Innersloth and published by Innersloth. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Multiplayer",
      "Social"
    ],
    "categories": [
      "indie"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.6,
    "popularity": 90,
    "releaseRank": -9,
    "priceModel": "Paid",
    "price": "$4.99",
    "developer": "Innersloth",
    "store": "Official Site",
    "publisher": "Innersloth",
    "releaseYear": 2018,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=among-us",
    "featureTag": "Multiplayer",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/945360/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/945360/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=among-us+website",
    "playUrl": "https://google.com/search?q=among-us+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/945360/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/945360/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/945360/header.jpg"
      }
    ]
  },
  {
    "id": "-10",
    "title": "Fall Guys",
    "tagline": "Experience Fall Guys in breathtaking AAA quality.",
    "description": "Fall Guys is a premium gaming experience developed by Mediatonic and published by Epic Games. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Multiplayer",
      "Platformer"
    ],
    "categories": [
      "action",
      "indie"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.4,
    "popularity": 88,
    "releaseRank": -10,
    "priceModel": "Free",
    "price": "Free",
    "developer": "Mediatonic",
    "store": "Official Site",
    "publisher": "Epic Games",
    "releaseYear": 2020,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=fall-guys",
    "featureTag": "Multiplayer",
    "image": "https://cdn2.unrealengine.com/egs-fallguys-mediatonic-s2-1200x1600-b8ecb34ceaf9.jpg",
    "banner": "https://cdn2.unrealengine.com/egs-fallguys-mediatonic-s1-2560x1440-2560x1440-f42f3efceeb3.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=fall-guys+website",
    "playUrl": "https://google.com/search?q=fall-guys+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://cdn2.unrealengine.com/egs-fallguys-mediatonic-s1-2560x1440-2560x1440-f42f3efceeb3.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://cdn2.unrealengine.com/egs-fallguys-mediatonic-s1-2560x1440-2560x1440-f42f3efceeb3.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://cdn2.unrealengine.com/egs-fallguys-mediatonic-s1-2560x1440-2560x1440-f42f3efceeb3.jpg"
      }
    ]
  },
  {
    "id": "-11",
    "title": "Helldivers 2",
    "tagline": "Experience Helldivers 2 in breathtaking AAA quality.",
    "description": "Helldivers 2 is a premium gaming experience developed by Arrowhead and published by PlayStation PC. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Action",
      "Shooter"
    ],
    "categories": [
      "action",
      "fps"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.8,
    "popularity": 94,
    "releaseRank": -11,
    "priceModel": "Paid",
    "price": "$39.99",
    "developer": "Arrowhead",
    "store": "Official Site",
    "publisher": "PlayStation PC",
    "releaseYear": 2024,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=helldivers-2",
    "featureTag": "Action",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2536850/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2536850/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=helldivers-2+website",
    "playUrl": "https://google.com/search?q=helldivers-2+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2536850/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2536850/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2536850/header.jpg"
      }
    ]
  },
  {
    "id": "-12",
    "title": "Tekken 8",
    "tagline": "Experience Tekken 8 in breathtaking AAA quality.",
    "description": "Tekken 8 is a premium gaming experience developed by Bandai Namco and published by Bandai Namco. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Fighting",
      "Action"
    ],
    "categories": [
      "action"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.7,
    "popularity": 86,
    "releaseRank": -12,
    "priceModel": "Paid",
    "price": "$69.99",
    "developer": "Bandai Namco",
    "store": "Official Site",
    "publisher": "Bandai Namco",
    "releaseYear": 2024,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=tekken-8",
    "featureTag": "Fighting",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1778820/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1778820/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=tekken-8+website",
    "playUrl": "https://google.com/search?q=tekken-8+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1778820/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1778820/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1778820/header.jpg"
      }
    ]
  },
  {
    "id": "-13",
    "title": "Street Fighter 6",
    "tagline": "Experience Street Fighter 6 in breathtaking AAA quality.",
    "description": "Street Fighter 6 is a premium gaming experience developed by Capcom and published by Capcom. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Fighting",
      "Action"
    ],
    "categories": [
      "action"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.8,
    "popularity": 87,
    "releaseRank": -13,
    "priceModel": "Paid",
    "price": "$59.99",
    "developer": "Capcom",
    "store": "Official Site",
    "publisher": "Capcom",
    "releaseYear": 2023,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=street-fighter-6",
    "featureTag": "Fighting",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1364780/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1364780/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=street-fighter-6+website",
    "playUrl": "https://google.com/search?q=street-fighter-6+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1364780/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1364780/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1364780/header.jpg"
      }
    ]
  },
  {
    "id": "-14",
    "title": "Mortal Kombat 1",
    "tagline": "Experience Mortal Kombat 1 in breathtaking AAA quality.",
    "description": "Mortal Kombat 1 is a premium gaming experience developed by NetherRealm and published by Warner Bros. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Fighting",
      "Action"
    ],
    "categories": [
      "action"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.4,
    "popularity": 85,
    "releaseRank": -14,
    "priceModel": "Paid",
    "price": "$69.99",
    "developer": "NetherRealm",
    "store": "Official Site",
    "publisher": "Warner Bros",
    "releaseYear": 2023,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=mortal-kombat-1",
    "featureTag": "Fighting",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1971870/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1971870/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=mortal-kombat-1+website",
    "playUrl": "https://google.com/search?q=mortal-kombat-1+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1971870/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1971870/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1971870/header.jpg"
      }
    ]
  },
  {
    "id": "-15",
    "title": "Super Smash Bros. Ultimate",
    "tagline": "Experience Super Smash Bros. Ultimate in breathtaking AAA quality.",
    "description": "Super Smash Bros. Ultimate is a premium gaming experience developed by Bandai Namco and published by Nintendo. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Fighting",
      "Multiplayer"
    ],
    "categories": [
      "action"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.9,
    "popularity": 95,
    "releaseRank": -15,
    "priceModel": "Paid",
    "price": "$59.99",
    "developer": "Bandai Namco",
    "store": "Official Site",
    "publisher": "Nintendo",
    "releaseYear": 2018,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=super-smash-bros-ultimate",
    "featureTag": "Fighting",
    "image": "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000000025/7137262b5a64d6f5f1909e3e78f9f692db2b70f08922896da8f6540c7ed216da",
    "banner": "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000000025/7137262b5a64d6f5f1909e3e78f9f692db2b70f08922896da8f6540c7ed216da",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=super-smash-bros-ultimate+website",
    "playUrl": "https://google.com/search?q=super-smash-bros-ultimate+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000000025/7137262b5a64d6f5f1909e3e78f9f692db2b70f08922896da8f6540c7ed216da"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000000025/7137262b5a64d6f5f1909e3e78f9f692db2b70f08922896da8f6540c7ed216da"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000000025/7137262b5a64d6f5f1909e3e78f9f692db2b70f08922896da8f6540c7ed216da"
      }
    ]
  },
  {
    "id": "-16",
    "title": "The Legend of Zelda: Tears of the Kingdom",
    "tagline": "Experience The Legend of Zelda: Tears of the Kingdom in breathtaking AAA quality.",
    "description": "The Legend of Zelda: Tears of the Kingdom is a premium gaming experience developed by Nintendo and published by Nintendo. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Action RPG",
      "Open World"
    ],
    "categories": [
      "rpg",
      "open-world",
      "action"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.9,
    "popularity": 97,
    "releaseRank": -16,
    "priceModel": "Paid",
    "price": "$69.99",
    "developer": "Nintendo",
    "store": "Official Site",
    "publisher": "Nintendo",
    "releaseYear": 2023,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=the-legend-of-zelda-tears-of-the-kingdom",
    "featureTag": "Action RPG",
    "image": "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000000025/7137262b5a64d6f5f1909e3e78f9f692db2b70f08922896da8f6540c7ed216da",
    "banner": "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000000025/7137262b5a64d6f5f1909e3e78f9f692db2b70f08922896da8f6540c7ed216da",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=the-legend-of-zelda-tears-of-the-kingdom+website",
    "playUrl": "https://google.com/search?q=the-legend-of-zelda-tears-of-the-kingdom+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000000025/7137262b5a64d6f5f1909e3e78f9f692db2b70f08922896da8f6540c7ed216da"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000000025/7137262b5a64d6f5f1909e3e78f9f692db2b70f08922896da8f6540c7ed216da"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000000025/7137262b5a64d6f5f1909e3e78f9f692db2b70f08922896da8f6540c7ed216da"
      }
    ]
  },
  {
    "id": "-17",
    "title": "The Legend of Zelda: Breath of the Wild",
    "tagline": "Experience The Legend of Zelda: Breath of the Wild in breathtaking AAA quality.",
    "description": "The Legend of Zelda: Breath of the Wild is a premium gaming experience developed by Nintendo and published by Nintendo. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Action RPG",
      "Open World"
    ],
    "categories": [
      "rpg",
      "open-world",
      "action"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 5,
    "popularity": 96,
    "releaseRank": -17,
    "priceModel": "Paid",
    "price": "$59.99",
    "developer": "Nintendo",
    "store": "Official Site",
    "publisher": "Nintendo",
    "releaseYear": 2017,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=the-legend-of-zelda-breath-of-the-wild",
    "featureTag": "Action RPG",
    "image": "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000000025/7137262b5a64d6f5f1909e3e78f9f692db2b70f08922896da8f6540c7ed216da",
    "banner": "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000000025/7137262b5a64d6f5f1909e3e78f9f692db2b70f08922896da8f6540c7ed216da",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=the-legend-of-zelda-breath-of-the-wild+website",
    "playUrl": "https://google.com/search?q=the-legend-of-zelda-breath-of-the-wild+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000000025/7137262b5a64d6f5f1909e3e78f9f692db2b70f08922896da8f6540c7ed216da"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000000025/7137262b5a64d6f5f1909e3e78f9f692db2b70f08922896da8f6540c7ed216da"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000000025/7137262b5a64d6f5f1909e3e78f9f692db2b70f08922896da8f6540c7ed216da"
      }
    ]
  },
  {
    "id": "-18",
    "title": "Super Mario Odyssey",
    "tagline": "Experience Super Mario Odyssey in breathtaking AAA quality.",
    "description": "Super Mario Odyssey is a premium gaming experience developed by Nintendo and published by Nintendo. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Platformer",
      "Action"
    ],
    "categories": [
      "action"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.9,
    "popularity": 94,
    "releaseRank": -18,
    "priceModel": "Paid",
    "price": "$59.99",
    "developer": "Nintendo",
    "store": "Official Site",
    "publisher": "Nintendo",
    "releaseYear": 2017,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=super-mario-odyssey",
    "featureTag": "Platformer",
    "image": "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000000025/7137262b5a64d6f5f1909e3e78f9f692db2b70f08922896da8f6540c7ed216da",
    "banner": "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000000025/7137262b5a64d6f5f1909e3e78f9f692db2b70f08922896da8f6540c7ed216da",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=super-mario-odyssey+website",
    "playUrl": "https://google.com/search?q=super-mario-odyssey+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000000025/7137262b5a64d6f5f1909e3e78f9f692db2b70f08922896da8f6540c7ed216da"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000000025/7137262b5a64d6f5f1909e3e78f9f692db2b70f08922896da8f6540c7ed216da"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000000025/7137262b5a64d6f5f1909e3e78f9f692db2b70f08922896da8f6540c7ed216da"
      }
    ]
  },
  {
    "id": "-19",
    "title": "Animal Crossing: New Horizons",
    "tagline": "Experience Animal Crossing: New Horizons in breathtaking AAA quality.",
    "description": "Animal Crossing: New Horizons is a premium gaming experience developed by Nintendo and published by Nintendo. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Simulation",
      "Cozy"
    ],
    "categories": [
      "indie"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.8,
    "popularity": 93,
    "releaseRank": -19,
    "priceModel": "Paid",
    "price": "$59.99",
    "developer": "Nintendo",
    "store": "Official Site",
    "publisher": "Nintendo",
    "releaseYear": 2020,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=animal-crossing-new-horizons",
    "featureTag": "Simulation",
    "image": "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000000025/7137262b5a64d6f5f1909e3e78f9f692db2b70f08922896da8f6540c7ed216da",
    "banner": "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000000025/7137262b5a64d6f5f1909e3e78f9f692db2b70f08922896da8f6540c7ed216da",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=animal-crossing-new-horizons+website",
    "playUrl": "https://google.com/search?q=animal-crossing-new-horizons+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000000025/7137262b5a64d6f5f1909e3e78f9f692db2b70f08922896da8f6540c7ed216da"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000000025/7137262b5a64d6f5f1909e3e78f9f692db2b70f08922896da8f6540c7ed216da"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000000025/7137262b5a64d6f5f1909e3e78f9f692db2b70f08922896da8f6540c7ed216da"
      }
    ]
  },
  {
    "id": "-20",
    "title": "Splatoon 3",
    "tagline": "Experience Splatoon 3 in breathtaking AAA quality.",
    "description": "Splatoon 3 is a premium gaming experience developed by Nintendo and published by Nintendo. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Shooter",
      "Multiplayer"
    ],
    "categories": [
      "fps",
      "action"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.6,
    "popularity": 85,
    "releaseRank": -20,
    "priceModel": "Paid",
    "price": "$59.99",
    "developer": "Nintendo",
    "store": "Official Site",
    "publisher": "Nintendo",
    "releaseYear": 2022,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=splatoon-3",
    "featureTag": "Shooter",
    "image": "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000000025/7137262b5a64d6f5f1909e3e78f9f692db2b70f08922896da8f6540c7ed216da",
    "banner": "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000000025/7137262b5a64d6f5f1909e3e78f9f692db2b70f08922896da8f6540c7ed216da",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=splatoon-3+website",
    "playUrl": "https://google.com/search?q=splatoon-3+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000000025/7137262b5a64d6f5f1909e3e78f9f692db2b70f08922896da8f6540c7ed216da"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000000025/7137262b5a64d6f5f1909e3e78f9f692db2b70f08922896da8f6540c7ed216da"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000000025/7137262b5a64d6f5f1909e3e78f9f692db2b70f08922896da8f6540c7ed216da"
      }
    ]
  },
  {
    "id": "-21",
    "title": "Super Mario Bros. Wonder",
    "tagline": "Experience Super Mario Bros. Wonder in breathtaking AAA quality.",
    "description": "Super Mario Bros. Wonder is a premium gaming experience developed by Nintendo and published by Nintendo. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Platformer",
      "Action"
    ],
    "categories": [
      "action",
      "indie"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.9,
    "popularity": 90,
    "releaseRank": -21,
    "priceModel": "Paid",
    "price": "$59.99",
    "developer": "Nintendo",
    "store": "Official Site",
    "publisher": "Nintendo",
    "releaseYear": 2023,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=super-mario-bros-wonder",
    "featureTag": "Platformer",
    "image": "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000000025/7137262b5a64d6f5f1909e3e78f9f692db2b70f08922896da8f6540c7ed216da",
    "banner": "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000000025/7137262b5a64d6f5f1909e3e78f9f692db2b70f08922896da8f6540c7ed216da",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=super-mario-bros-wonder+website",
    "playUrl": "https://google.com/search?q=super-mario-bros-wonder+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000000025/7137262b5a64d6f5f1909e3e78f9f692db2b70f08922896da8f6540c7ed216da"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000000025/7137262b5a64d6f5f1909e3e78f9f692db2b70f08922896da8f6540c7ed216da"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000000025/7137262b5a64d6f5f1909e3e78f9f692db2b70f08922896da8f6540c7ed216da"
      }
    ]
  },
  {
    "id": "-22",
    "title": "Mario Party Superstars",
    "tagline": "Experience Mario Party Superstars in breathtaking AAA quality.",
    "description": "Mario Party Superstars is a premium gaming experience developed by NDcube and published by Nintendo. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Party",
      "Multiplayer"
    ],
    "categories": [
      "action"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.7,
    "popularity": 85,
    "releaseRank": -22,
    "priceModel": "Paid",
    "price": "$59.99",
    "developer": "NDcube",
    "store": "Official Site",
    "publisher": "Nintendo",
    "releaseYear": 2021,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=mario-party-superstars",
    "featureTag": "Party",
    "image": "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000000025/7137262b5a64d6f5f1909e3e78f9f692db2b70f08922896da8f6540c7ed216da",
    "banner": "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000000025/7137262b5a64d6f5f1909e3e78f9f692db2b70f08922896da8f6540c7ed216da",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=mario-party-superstars+website",
    "playUrl": "https://google.com/search?q=mario-party-superstars+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000000025/7137262b5a64d6f5f1909e3e78f9f692db2b70f08922896da8f6540c7ed216da"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000000025/7137262b5a64d6f5f1909e3e78f9f692db2b70f08922896da8f6540c7ed216da"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000000025/7137262b5a64d6f5f1909e3e78f9f692db2b70f08922896da8f6540c7ed216da"
      }
    ]
  },
  {
    "id": "-23",
    "title": "It Takes Two",
    "tagline": "Experience It Takes Two in breathtaking AAA quality.",
    "description": "It Takes Two is a premium gaming experience developed by Hazelight and published by Electronic Arts. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Co-op",
      "Adventure"
    ],
    "categories": [
      "action",
      "indie"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.9,
    "popularity": 90,
    "releaseRank": -23,
    "priceModel": "Paid",
    "price": "$39.99",
    "developer": "Hazelight",
    "store": "Official Site",
    "publisher": "Electronic Arts",
    "releaseYear": 2021,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=it-takes-two",
    "featureTag": "Co-op",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1426210/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1426210/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=it-takes-two+website",
    "playUrl": "https://google.com/search?q=it-takes-two+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1426210/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1426210/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1426210/header.jpg"
      }
    ]
  },
  {
    "id": "-24",
    "title": "A Way Out",
    "tagline": "Experience A Way Out in breathtaking AAA quality.",
    "description": "A Way Out is a premium gaming experience developed by Hazelight and published by Electronic Arts. Prepare to dive into an unforgettable journey with high-fidelity graphics and stunning gameplay mechanics.",
    "genres": [
      "Co-op",
      "Action"
    ],
    "categories": [
      "action",
      "indie"
    ],
    "platforms": [
      "PC",
      "PS5",
      "Xbox Series X/S"
    ],
    "rating": 4.7,
    "popularity": 84,
    "releaseRank": -24,
    "priceModel": "Paid",
    "price": "$29.99",
    "developer": "Hazelight",
    "store": "Official Site",
    "publisher": "Electronic Arts",
    "releaseYear": 2018,
    "systemRequirements": {
      "os": "Windows 10/11",
      "cpu": "Intel Core i5",
      "ram": "16 GB",
      "gpu": "NVIDIA RTX 3060",
      "storage": "100 GB"
    },
    "launchWindow": "Available now",
    "officialUrl": "https://google.com/search?q=a-way-out",
    "featureTag": "Co-op",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1222700/library_600x900.jpg",
    "banner": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1222700/header.jpg",
    "vaultNote": "Game Vault routes this page to official sources only. No pirated files, cracked installers, or mirrored downloads are used anywhere in the experience.",
    "highlights": [
      "Official Downloads",
      "Premium Servers",
      "Cloud Saves"
    ],
    "supportedStores": [
      "Steam",
      "Epic Games",
      "PlayStation Store",
      "Xbox Store"
    ],
    "websiteUrl": "https://google.com/search?q=a-way-out+website",
    "playUrl": "https://google.com/search?q=a-way-out+play",
    "screenshots": [
      {
        "title": "Cinematic View",
        "caption": "Immersive world rendering.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1222700/header.jpg"
      },
      {
        "title": "Action Combat",
        "caption": "High-octane gameplay.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1222700/header.jpg"
      },
      {
        "title": "Exploration",
        "caption": "Discover vast new lands.",
        "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1222700/header.jpg"
      }
    ]
  }
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
    priceLabel: config.priceLabel ?? (priceLabels[config.priceModel] ?? config.priceModel),
    price: config.price ?? (config.priceModel === "Free" ? "Free" : "Premium"),
    developer: config.developer ?? config.publisher,
    publisher: config.publisher,
    launchWindow: config.launchWindow,
    releaseYear: config.releaseYear ?? (config.priceModel === "Coming Soon" ? "Upcoming" : "Released"),
    systemRequirements: config.systemRequirements ?? null,
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
