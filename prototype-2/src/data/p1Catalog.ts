import type { Game } from './types'
import { games } from './games'
import { modernWarfare4 } from './p1FeaturedGames'
export interface ReviewSnapshot { positivePercent: number; total: number; scope: string; sourceUrl: string; checkedOn: string }
export interface P1Game extends Game { reviewSnapshot: ReviewSnapshot | null }
// Verified release records are populated from docs/p1-release-sources.md.
export const p1NewGames: readonly P1Game[] = [
  {
    "id": "mycopunk",
    "slug": "mycopunk",
    "title": "Mycopunk",
    "description": "Build a crew of eccentric robots and cut through fungal infestations in a customizable co-op shooter.",
    "genres": [
      "Action",
      "Indie"
    ],
    "platforms": [
      "PC"
    ],
    "releaseDate": "2026-10-20",
    "status": "Released",
    "playerRating": null,
    "criticScore": null,
    "ratingCount": 0,
    "recommendationPercent": null,
    "popularity": 0,
    "cover": {
      "src": "/assets/p1-mycopunk-cover.jpg",
      "alt": "Mycopunk — official promotional artwork",
      "kind": "official"
    },
    "screenshots": [
      {
        "src": "/assets/p1-mycopunk-1.jpg",
        "alt": "Mycopunk — official screenshot 1",
        "kind": "official"
      },
      {
        "src": "/assets/p1-mycopunk-2.jpg",
        "alt": "Mycopunk — official screenshot 2",
        "kind": "official"
      },
      {
        "src": "/assets/p1-mycopunk-3.jpg",
        "alt": "Mycopunk — official screenshot 3",
        "kind": "official"
      },
      {
        "src": "/assets/p1-mycopunk-4.jpg",
        "alt": "Mycopunk — official screenshot 4",
        "kind": "official"
      }
    ],
    "releaseInfo": {
      "trailerUrl": "https://store.steampowered.com/app/3247750/",
      "events": [
        {
          "checkedOn": "2026-10-23",
          "kind": "Full release",
          "platformLabel": "PC (Steam) - version 1.0",
          "sourceUrl": "https://store.steampowered.com/app/3247750/",
          "platforms": [
            "PC"
          ],
          "date": "2026-10-20"
        }
      ]
    },
    "reviewSnapshot": {
      "positivePercent": 91,
      "total": 3157,
      "sourceUrl": "https://store.steampowered.com/app/3247750/",
      "scope": "PC Steam - English lifetime reviews (official store summary)",
      "checkedOn": "2026-10-23"
    }
  },
  {
    "id": "halloween-the-game",
    "slug": "halloween-the-game",
    "title": "Halloween: The Game",
    "description": "Stalk Haddonfield as Michael Myers or coordinate a desperate escape in single-player and asymmetric multiplayer horror.",
    "genres": [
      "Action",
      "Horror"
    ],
    "platforms": [
      "PC",
      "PlayStation",
      "Xbox"
    ],
    "releaseDate": "2026-09-08",
    "status": "Released",
    "playerRating": null,
    "criticScore": null,
    "ratingCount": 0,
    "recommendationPercent": null,
    "popularity": 0,
    "cover": {
      "src": "/assets/p1-halloween-the-game-cover.jpg",
      "alt": "Halloween: The Game — official promotional artwork",
      "kind": "official"
    },
    "screenshots": [
      {
        "src": "/assets/p1-halloween-the-game-1.jpg",
        "alt": "Halloween: The Game — official screenshot 1",
        "kind": "official"
      },
      {
        "src": "/assets/p1-halloween-the-game-2.jpg",
        "alt": "Halloween: The Game — official screenshot 2",
        "kind": "official"
      },
      {
        "src": "/assets/p1-halloween-the-game-3.jpg",
        "alt": "Halloween: The Game — official screenshot 3",
        "kind": "official"
      },
      {
        "src": "/assets/p1-halloween-the-game-4.jpg",
        "alt": "Halloween: The Game — official screenshot 4",
        "kind": "official"
      }
    ],
    "releaseInfo": {
      "trailerUrl": "https://store.steampowered.com/app/3219630/",
      "events": [
        {
          "checkedOn": "2026-10-23",
          "kind": "Initial release",
          "platformLabel": "PC / PlayStation 5 / Xbox Series X|S (digital)",
          "sourceUrl": "https://halloweengame.com/news/unleash-hell-upon-haddonfield/",
          "platforms": [
            "PC",
            "PlayStation",
            "Xbox"
          ],
          "date": "2026-09-08"
        }
      ]
    },
    "reviewSnapshot": null
  },
  {
    "id": "control-resonant",
    "slug": "control-resonant",
    "title": "CONTROL Resonant",
    "description": "Explore a Manhattan transformed by paranormal forces, shaping the powers and melee weapon of Dylan Faden through a surreal action RPG.",
    "genres": [
      "Action",
      "Adventure",
      "RPG"
    ],
    "platforms": [
      "PC",
      "PlayStation",
      "Xbox"
    ],
    "releaseDate": "2026-09-24",
    "status": "Released",
    "playerRating": null,
    "criticScore": null,
    "ratingCount": 0,
    "recommendationPercent": null,
    "popularity": 0,
    "cover": {
      "src": "/assets/p1-control-resonant-cover.jpg",
      "alt": "CONTROL Resonant — official promotional artwork",
      "kind": "official"
    },
    "screenshots": [
      {
        "src": "/assets/p1-control-resonant-1.jpg",
        "alt": "CONTROL Resonant — official screenshot 1",
        "kind": "official"
      },
      {
        "src": "/assets/p1-control-resonant-2.jpg",
        "alt": "CONTROL Resonant — official screenshot 2",
        "kind": "official"
      },
      {
        "src": "/assets/p1-control-resonant-3.jpg",
        "alt": "CONTROL Resonant — official screenshot 3",
        "kind": "official"
      },
      {
        "src": "/assets/p1-control-resonant-4.jpg",
        "alt": "CONTROL Resonant — official screenshot 4",
        "kind": "official"
      }
    ],
    "releaseInfo": {
      "trailerUrl": "https://store.steampowered.com/app/3669870/",
      "events": [
        {
          "checkedOn": "2026-10-23",
          "sourceUrl": "https://store.steampowered.com/app/3669870/",
          "kind": "Initial release",
          "platformLabel": "PC (Steam)",
          "platforms": [
            "PC"
          ],
          "date": "2026-09-24"
        },
        {
          "checkedOn": "2026-10-23",
          "sourceUrl": "https://blog.playstation.com/?p=419178",
          "kind": "Initial release",
          "platformLabel": "PlayStation 5 (digital)",
          "platforms": [
            "PlayStation"
          ],
          "date": "2026-09-24"
        },
        {
          "checkedOn": "2026-10-23",
          "sourceUrl": "https://news.xbox.com/en-us/2026/09/23/control-resonant-launch-genre-details/",
          "kind": "Initial release",
          "platformLabel": "Xbox Series X|S (digital)",
          "platforms": [
            "Xbox"
          ],
          "date": "2026-09-24"
        }
      ]
    },
    "reviewSnapshot": {
      "positivePercent": 92,
      "total": 9042,
      "sourceUrl": "https://store.steampowered.com/app/3669870/",
      "scope": "PC Steam - English lifetime reviews (official store summary)",
      "checkedOn": "2026-10-23"
    }
  },
  {
    "id": "eletta",
    "slug": "eletta",
    "title": "Eletta",
    "description": "Turn everyday surroundings into elaborate traps and outwit your enemies in a mischievous action adventure.",
    "genres": [
      "Action",
      "Adventure"
    ],
    "platforms": [
      "PC"
    ],
    "releaseDate": "2026-11-17",
    "status": "Upcoming",
    "playerRating": null,
    "criticScore": null,
    "ratingCount": 0,
    "recommendationPercent": null,
    "popularity": 0,
    "cover": {
      "src": "/assets/p1-eletta-cover.jpg",
      "alt": "Eletta — official promotional artwork",
      "kind": "official"
    },
    "screenshots": [
      {
        "src": "/assets/p1-eletta-1.jpg",
        "alt": "Eletta — official screenshot 1",
        "kind": "official"
      },
      {
        "src": "/assets/p1-eletta-2.jpg",
        "alt": "Eletta — official screenshot 2",
        "kind": "official"
      },
      {
        "src": "/assets/p1-eletta-3.jpg",
        "alt": "Eletta — official screenshot 3",
        "kind": "official"
      },
      {
        "src": "/assets/p1-eletta-4.jpg",
        "alt": "Eletta — official screenshot 4",
        "kind": "official"
      }
    ],
    "releaseInfo": {
      "trailerUrl": "https://store.steampowered.com/app/3024120/",
      "events": [
        {
          "checkedOn": "2026-10-23",
          "kind": "Initial release",
          "platformLabel": "PC (Steam)",
          "sourceUrl": "https://store.steampowered.com/app/3024120/",
          "platforms": [
            "PC"
          ],
          "date": "2026-11-17"
        }
      ]
    },
    "reviewSnapshot": null
  },
  {
    "id": "fire-emblem-fortunes-weave",
    "slug": "fire-emblem-fortunes-weave",
    "title": "Fire Emblem: Fortune's Weave",
    "description": "Lead four intertwined journeys across time, gather allies, and command tactical battles to change the fate of the world.",
    "genres": [
      "RPG",
      "Strategy"
    ],
    "platforms": [
      "Nintendo"
    ],
    "releaseDate": "2026-09-17",
    "status": "Released",
    "playerRating": null,
    "criticScore": null,
    "ratingCount": 0,
    "recommendationPercent": null,
    "popularity": 0,
    "cover": {
      "src": "/assets/p1-fire-emblem-fortunes-weave-cover.jpg",
      "alt": "Fire Emblem: Fortune's Weave — official promotional artwork",
      "kind": "official"
    },
    "screenshots": [
      {
        "src": "/assets/p1-fire-emblem-fortunes-weave-1.jpg",
        "alt": "Fire Emblem: Fortune's Weave — official screenshot 1",
        "kind": "official"
      },
      {
        "src": "/assets/p1-fire-emblem-fortunes-weave-2.jpg",
        "alt": "Fire Emblem: Fortune's Weave — official screenshot 2",
        "kind": "official"
      },
      {
        "src": "/assets/p1-fire-emblem-fortunes-weave-3.jpg",
        "alt": "Fire Emblem: Fortune's Weave — official screenshot 3",
        "kind": "official"
      },
      {
        "src": "/assets/p1-fire-emblem-fortunes-weave-4.jpg",
        "alt": "Fire Emblem: Fortune's Weave — official screenshot 4",
        "kind": "official"
      }
    ],
    "releaseInfo": {
      "trailerUrl": "https://www.nintendo.com/us/store/products/fire-emblem-fortunes-weave-switch-2/",
      "events": [
        {
          "platforms": [
            "Nintendo"
          ],
          "date": "2026-09-17",
          "checkedOn": "2026-10-23",
          "kind": "Initial release",
          "sourceUrl": "https://www.nintendo.com/us/store/products/fire-emblem-fortunes-weave-switch-2/",
          "platformLabel": "Nintendo Switch 2"
        }
      ]
    },
    "reviewSnapshot": null
  },
  {
    "id": "zelda-ocarina-of-time",
    "slug": "zelda-ocarina-of-time",
    "title": "The Legend of Zelda: Ocarina of Time",
    "description": "Journey through a rebuilt Hyrule as Link, solve ancient dungeons, and become the Hero of Time on Nintendo Switch 2.",
    "genres": [
      "Action",
      "Adventure"
    ],
    "platforms": [
      "Nintendo"
    ],
    "releaseDate": "2026-11-05",
    "status": "Upcoming",
    "releaseType": "Remake",
    "playerRating": null,
    "criticScore": null,
    "ratingCount": 0,
    "recommendationPercent": null,
    "popularity": 0,
    "cover": {
      "src": "/assets/p1-zelda-ocarina-of-time-cover.jpg",
      "alt": "The Legend of Zelda: Ocarina of Time — official promotional artwork",
      "kind": "official",
      "focalPoint": "50% 18%"
    },
    "screenshots": [
      {
        "src": "/assets/p1-zelda-ocarina-of-time-1.jpg",
        "alt": "The Legend of Zelda: Ocarina of Time — official screenshot 1",
        "kind": "official"
      },
      {
        "src": "/assets/p1-zelda-ocarina-of-time-2.jpg",
        "alt": "The Legend of Zelda: Ocarina of Time — official screenshot 2",
        "kind": "official"
      },
      {
        "src": "/assets/p1-zelda-ocarina-of-time-3.jpg",
        "alt": "The Legend of Zelda: Ocarina of Time — official screenshot 3",
        "kind": "official"
      },
      {
        "src": "/assets/p1-zelda-ocarina-of-time-4.jpg",
        "alt": "The Legend of Zelda: Ocarina of Time — official screenshot 4",
        "kind": "official"
      }
    ],
    "releaseInfo": {
      "trailerUrl": "https://www.nintendo.com/us/store/products/the-legend-of-zelda-ocarina-of-time-125697/",
      "events": [
        {
          "platforms": [
            "Nintendo"
          ],
          "date": "2026-11-05",
          "checkedOn": "2026-10-23",
          "kind": "Initial release",
          "sourceUrl": "https://www.nintendo.com/us/store/products/the-legend-of-zelda-ocarina-of-time-125697/",
          "platformLabel": "Nintendo Switch 2"
        }
      ]
    },
    "reviewSnapshot": null
  }
]
const sourcedMissingEvents: Record<string, NonNullable<Game['releaseInfo']>> = {
  'fatal-fury-city-of-the-wolves': {
    trailerUrl: 'https://www.snk-corp.co.jp/official/fatalfury-cotw/',
    events: [{ date: '2026-10-22', platforms: ['Nintendo'], platformLabel: 'Nintendo Switch 2 (digital)', kind: 'Platform release', sourceUrl: 'https://www.snk-corp.co.jp/us/press/2026/fatal-fury-city-of-the-wolves-now-available-on-nintendo-switch-2-take-the-heat-of-battle-anywhere-anytime/', checkedOn: '2026-10-24' }],
  },
  'star-wars-galactic-racer': {
    trailerUrl: 'https://starwarsgalacticracer.com/',
    events: [{ date: '2026-10-06', platforms: ['PC', 'PlayStation', 'Xbox'], platformLabel: 'PC / PlayStation 5 / Xbox Series X|S', kind: 'Initial release', sourceUrl: 'https://starwarsgalacticracer.com/news/star-wars-galactic-racer-is-out-now/', checkedOn: '2026-10-24' }],
  },
}
export const p1Catalog: readonly Game[] = [...games, ...p1NewGames, modernWarfare4].map(game => ({
  ...game, releaseInfo: game.releaseInfo ?? sourcedMissingEvents[game.id], playerRating: null, criticScore: null, ratingCount: 0, recommendationPercent: null, popularity: 0,
}))
export function p1Review(game: Game) { return [modernWarfare4, ...p1NewGames].find(item => item.id === game.id)?.reviewSnapshot ?? null }
