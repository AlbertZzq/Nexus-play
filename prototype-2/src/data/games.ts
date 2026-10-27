import type { Game } from './types'
import { launchGames } from './launchGames'

// All ratings, counts and popularity values are illustrative classroom data.
export const games: readonly Game[] = [
  {
    "id": "elden-ring",
    "slug": "elden-ring",
    "title": "Elden Ring",
    "description": "Explore the Lands Between, shape a character around your preferred weapons, and learn demanding encounters through observation and experimentation.",
    "genres": [
      "Action",
      "RPG"
    ],
    "platforms": [
      "PC",
      "PlayStation",
      "Xbox"
    ],
    "releaseDate": "2022-02-25",
    "status": "Released",
    "playerRating": 9.4,
    "criticScore": 96,
    "ratingCount": 48210,
    "recommendationPercent": 96,
    "popularity": 98,
    "cover": {
      "src": "/assets/elden-ring-cover.jpg",
      "alt": "ELDEN RING — official promotional artwork",
      "kind": "official"
    },
    "screenshots": [
      {
        "src": "/assets/elden-ring-scene.jpg",
        "alt": "ELDEN RING — official game screenshot",
        "kind": "official"
      }
    ]
  },
  {
    "id": "hades",
    "slug": "hades",
    "title": "Hades",
    "description": "Fight through the Greek underworld in brisk runs, combine divine boons, and discover new conversations each time you return to the House of Hades.",
    "genres": [
      "Action",
      "Roguelike"
    ],
    "platforms": [
      "PC",
      "PlayStation",
      "Xbox",
      "Nintendo"
    ],
    "releaseDate": "2020-09-17",
    "status": "Released",
    "playerRating": 9.3,
    "criticScore": 93,
    "ratingCount": 32450,
    "recommendationPercent": 97,
    "popularity": 91,
    "cover": {
      "src": "/assets/hades-cover.jpg",
      "alt": "Hades — official promotional artwork",
      "kind": "official"
    },
    "screenshots": [
      {
        "src": "/assets/hades-scene.jpg",
        "alt": "Hades — official game screenshot",
        "kind": "official"
      }
    ]
  },
  {
    "id": "cyberpunk-2077",
    "slug": "cyberpunk-2077",
    "title": "Cyberpunk 2077",
    "description": "Navigate Night City as a mercenary, choose between stealth and direct combat, and follow branching stories about ambition, identity, and survival.",
    "genres": [
      "Action",
      "RPG"
    ],
    "platforms": [
      "PC",
      "PlayStation",
      "Xbox"
    ],
    "releaseDate": "2020-12-10",
    "status": "Released",
    "playerRating": 8.6,
    "criticScore": 86,
    "ratingCount": 41200,
    "recommendationPercent": 88,
    "popularity": 94,
    "cover": {
      "src": "/assets/cyberpunk-2077-cover.jpg",
      "alt": "Cyberpunk 2077 — official promotional artwork",
      "kind": "official"
    },
    "screenshots": [
      {
        "src": "/assets/cyberpunk-2077-scene.jpg",
        "alt": "Cyberpunk 2077 — official game screenshot",
        "kind": "official"
      }
    ]
  },
  {
    "id": "baldurs-gate-3",
    "slug": "baldurs-gate-3",
    "title": "Baldur's Gate 3",
    "description": "Gather a party for a choice-driven fantasy adventure where turn-based tactics, environmental interactions, and companion relationships shape each journey.",
    "genres": [
      "RPG",
      "Strategy"
    ],
    "platforms": [
      "PC",
      "PlayStation",
      "Xbox"
    ],
    "releaseDate": "2023-08-03",
    "status": "Released",
    "playerRating": 9.6,
    "criticScore": 96,
    "ratingCount": 52400,
    "recommendationPercent": 98,
    "popularity": 97,
    "cover": {
      "src": "/assets/baldurs-gate-3-cover.jpg",
      "alt": "Baldur's Gate 3 — official promotional artwork",
      "kind": "official"
    },
    "screenshots": [
      {
        "src": "/assets/baldurs-gate-3-scene.jpg",
        "alt": "Baldur's Gate 3 — official game screenshot",
        "kind": "official"
      }
    ]
  },
  {
    "id": "hollow-knight",
    "slug": "hollow-knight",
    "title": "Hollow Knight",
    "description": "Explore the quiet tunnels of Hallownest, refine precise movement and swordplay, and uncover a fallen kingdom through its inhabitants and hidden paths.",
    "genres": [
      "Platformer",
      "Adventure",
      "Indie"
    ],
    "platforms": [
      "PC",
      "PlayStation",
      "Xbox",
      "Nintendo"
    ],
    "releaseDate": "2017-02-24",
    "status": "Released",
    "playerRating": 9.2,
    "criticScore": 90,
    "ratingCount": 28750,
    "recommendationPercent": 95,
    "popularity": 82,
    "cover": {
      "src": "/assets/hollow-knight-cover.jpg",
      "alt": "Hollow Knight — official promotional artwork",
      "kind": "official"
    },
    "screenshots": [
      {
        "src": "/assets/hollow-knight-scene.jpg",
        "alt": "Hollow Knight — official game screenshot",
        "kind": "official"
      }
    ]
  },
  {
    "id": "stardew-valley",
    "slug": "stardew-valley",
    "title": "Stardew Valley",
    "description": "Restore a farm at your own pace, grow seasonal crops, explore the mines, and build relationships with the people of a small rural community.",
    "genres": [
      "Simulation",
      "RPG"
    ],
    "platforms": [
      "PC",
      "PlayStation",
      "Xbox",
      "Nintendo"
    ],
    "releaseDate": "2016-02-26",
    "status": "Released",
    "playerRating": 9.1,
    "criticScore": 89,
    "ratingCount": 36100,
    "recommendationPercent": 96,
    "popularity": 88,
    "cover": {
      "src": "/assets/stardew-valley-cover.jpg",
      "alt": "Stardew Valley — official promotional artwork",
      "kind": "official"
    },
    "screenshots": [
      {
        "src": "/assets/stardew-valley-scene.jpg",
        "alt": "Stardew Valley — official game screenshot",
        "kind": "official"
      }
    ]
  },
  {
    "id": "minecraft",
    "slug": "minecraft",
    "title": "Minecraft",
    "description": "Build shelters, explore procedural landscapes, and turn gathered resources into imaginative projects in a sandbox that supports solo and cooperative play.",
    "genres": [
      "Sandbox",
      "Survival"
    ],
    "platforms": [
      "PC",
      "PlayStation",
      "Xbox",
      "Nintendo"
    ],
    "releaseDate": "2011-11-18",
    "status": "Released",
    "playerRating": 8.9,
    "criticScore": 93,
    "ratingCount": 67800,
    "recommendationPercent": 94,
    "popularity": 100,
    "cover": {
      "src": "/assets/minecraft-cover.jpg",
      "alt": "Minecraft — official promotional artwork",
      "kind": "official"
    },
    "screenshots": [
      {
        "src": "/assets/minecraft-scene.jpg",
        "alt": "Minecraft — official game screenshot",
        "kind": "official"
      }
    ]
  },
  {
    "id": "forza-horizon-5",
    "slug": "forza-horizon-5",
    "title": "Forza Horizon 5",
    "description": "Drive across a varied open world, tune a growing collection of cars, and move between scenic exploration, festival events, and competitive races.",
    "genres": [
      "Racing",
      "Sports"
    ],
    "platforms": [
      "PC",
      "PlayStation",
      "Xbox"
    ],
    "releaseDate": "2021-11-09",
    "status": "Released",
    "playerRating": 8.7,
    "criticScore": 92,
    "ratingCount": 19400,
    "recommendationPercent": 90,
    "popularity": 79,
    "cover": {
      "src": "/assets/forza-horizon-5-cover.jpg",
      "alt": "Forza Horizon 5 — official promotional artwork",
      "kind": "official"
    },
    "screenshots": [
      {
        "src": "/assets/forza-horizon-5-scene.jpg",
        "alt": "Forza Horizon 5 — official game screenshot",
        "kind": "official"
      }
    ]
  },
  {
    "id": "halo-infinite",
    "slug": "halo-infinite",
    "title": "Halo Infinite",
    "description": "Combine responsive shooting with a grappling hook in a science-fiction campaign, then explore arena matches built around equipment and map control.",
    "genres": [
      "Shooter",
      "Action"
    ],
    "platforms": [
      "PC",
      "Xbox"
    ],
    "releaseDate": "2021-12-08",
    "status": "Released",
    "playerRating": 7.8,
    "criticScore": 87,
    "ratingCount": 15700,
    "recommendationPercent": 80,
    "popularity": 71,
    "cover": {
      "src": "/assets/halo-infinite-cover.jpg",
      "alt": "Halo Infinite — official promotional artwork",
      "kind": "official"
    },
    "screenshots": [
      {
        "src": "/assets/halo-infinite-scene.jpg",
        "alt": "Halo Infinite — official game screenshot",
        "kind": "official"
      }
    ]
  },
  {
    "id": "god-of-war",
    "slug": "god-of-war",
    "title": "God of War",
    "description": "Travel through a Norse-inspired world with Kratos and Atreus, using deliberate combat and environmental puzzles to follow a story about family and change.",
    "genres": [
      "Action",
      "Adventure"
    ],
    "platforms": [
      "PC",
      "PlayStation"
    ],
    "releaseDate": "2018-04-20",
    "status": "Released",
    "playerRating": 9.4,
    "criticScore": 94,
    "ratingCount": 39300,
    "recommendationPercent": 96,
    "popularity": 89,
    "cover": {
      "src": "/assets/god-of-war-cover.jpg",
      "alt": "God of War — official promotional artwork",
      "kind": "official"
    },
    "screenshots": [
      {
        "src": "/assets/god-of-war-scene.jpg",
        "alt": "God of War — official game screenshot",
        "kind": "official"
      }
    ]
  },
  {
    "id": "marvels-spider-man",
    "slug": "marvels-spider-man",
    "title": "Marvel's Spider-Man",
    "description": "Swing across New York City, weave traversal into fast combat, and follow Peter Parker as he balances personal responsibilities with protecting the city.",
    "genres": [
      "Action",
      "Adventure"
    ],
    "platforms": [
      "PC",
      "PlayStation"
    ],
    "releaseDate": "2018-09-07",
    "status": "Released",
    "playerRating": 8.8,
    "criticScore": 87,
    "ratingCount": 26800,
    "recommendationPercent": 92,
    "popularity": 85,
    "cover": {
      "src": "/assets/marvels-spider-man-cover.jpg",
      "alt": "Marvel’s Spider-Man Remastered — official promotional artwork",
      "kind": "official"
    },
    "screenshots": [
      {
        "src": "/assets/marvels-spider-man-scene.jpg",
        "alt": "Marvel’s Spider-Man Remastered — official game screenshot",
        "kind": "official"
      }
    ]
  },
  {
    "id": "zelda-tears-of-the-kingdom",
    "slug": "zelda-tears-of-the-kingdom",
    "title": "The Legend of Zelda: Tears of the Kingdom",
    "description": "Explore Hyrule from the sky to the depths, build inventive devices, and solve open-ended puzzles using tools that reward curiosity and experimentation.",
    "genres": [
      "Adventure",
      "Action"
    ],
    "platforms": [
      "Nintendo"
    ],
    "releaseDate": "2023-05-12",
    "status": "Released",
    "playerRating": 9.5,
    "criticScore": 96,
    "ratingCount": 44500,
    "recommendationPercent": 97,
    "popularity": 95,
    "cover": {
      "src": "/assets/zelda-tears-of-the-kingdom-cover.jpg",
      "alt": "The Legend of Zelda: Tears of the Kingdom — official promotional artwork",
      "kind": "official"
    },
    "screenshots": [
      {
        "src": "/assets/zelda-tears-of-the-kingdom-scene.jpg",
        "alt": "The Legend of Zelda: Tears of the Kingdom — official game screenshot",
        "kind": "official"
      }
    ]
  },
  {
    "id": "super-mario-odyssey",
    "slug": "super-mario-odyssey",
    "title": "Super Mario Odyssey",
    "description": "Travel between colorful kingdoms with Mario and Cappy, discover playful transformations, and seek hidden Power Moons in compact spaces filled with surprises.",
    "genres": [
      "Platformer",
      "Adventure"
    ],
    "platforms": [
      "Nintendo"
    ],
    "releaseDate": "2017-10-27",
    "status": "Released",
    "playerRating": 9,
    "criticScore": 97,
    "ratingCount": 25300,
    "recommendationPercent": 95,
    "popularity": 81,
    "cover": {
      "src": "/assets/super-mario-odyssey-cover.jpg",
      "alt": "Super Mario Odyssey — official promotional artwork",
      "kind": "official"
    },
    "screenshots": [
      {
        "src": "/assets/super-mario-odyssey-scene.jpg",
        "alt": "Super Mario Odyssey — official game screenshot",
        "kind": "official"
      }
    ]
  },
  {
    "id": "animal-crossing-new-horizons",
    "slug": "animal-crossing-new-horizons",
    "title": "Animal Crossing: New Horizons",
    "description": "Shape an island home, collect seasonal discoveries, and enjoy a gentle daily rhythm of decorating, crafting, and meeting an expanding neighborhood.",
    "genres": [
      "Simulation",
      "Sandbox"
    ],
    "platforms": [
      "Nintendo"
    ],
    "releaseDate": "2020-03-20",
    "status": "Released",
    "playerRating": 8.4,
    "criticScore": 90,
    "ratingCount": 29700,
    "recommendationPercent": 89,
    "popularity": 76,
    "cover": {
      "src": "/assets/animal-crossing-new-horizons-cover.jpg",
      "alt": "Animal Crossing: New Horizons — official promotional artwork",
      "kind": "official"
    },
    "screenshots": [
      {
        "src": "/assets/animal-crossing-new-horizons-scene.jpg",
        "alt": "Animal Crossing: New Horizons — official game screenshot",
        "kind": "official"
      }
    ]
  },
  {
    "id": "valorant",
    "slug": "valorant",
    "title": "Valorant",
    "description": "Coordinate a team in tactical rounds where careful aim, information gathering, and distinct agent abilities determine how each objective is approached.",
    "genres": [
      "Shooter",
      "Strategy"
    ],
    "platforms": [
      "PC",
      "PlayStation",
      "Xbox"
    ],
    "releaseDate": "2020-06-02",
    "status": "Released",
    "playerRating": 8.2,
    "criticScore": 80,
    "ratingCount": 21400,
    "recommendationPercent": 85,
    "popularity": 93,
    "cover": {
      "src": "/assets/valorant-cover.jpg",
      "alt": "Valorant — official promotional artwork",
      "kind": "official"
    },
    "screenshots": [
      {
        "src": "/assets/valorant-scene.jpg",
        "alt": "Valorant — official map artwork",
        "kind": "official"
      }
    ]
  },
  {
    "id": "helldivers-2",
    "slug": "helldivers-2",
    "title": "Helldivers 2",
    "description": "Coordinate chaotic cooperative missions, call down powerful support equipment, and plan around friendly fire while completing objectives on hostile planets.",
    "genres": [
      "Shooter",
      "Action"
    ],
    "platforms": [
      "PC",
      "PlayStation",
      "Xbox"
    ],
    "releaseDate": "2024-02-08",
    "status": "Released",
    "playerRating": 8.5,
    "criticScore": 82,
    "ratingCount": 31200,
    "recommendationPercent": 87,
    "popularity": 90,
    "cover": {
      "src": "/assets/helldivers-2-cover.jpg",
      "alt": "HELLDIVERS 2 — official promotional artwork",
      "kind": "official"
    },
    "screenshots": [
      {
        "src": "/assets/helldivers-2-scene.jpg",
        "alt": "HELLDIVERS 2 — official game screenshot",
        "kind": "official"
      }
    ]
  },
  {
    "id": "star-wars-galactic-racer",
    "slug": "star-wars-galactic-racer",
    "title": "STAR WARS: Galactic Racer",
    "description": "A runs-based Star Wars racing game set in the lawless Outer Rim, where syndicate-funded circuits and high-stakes gambles decide who survives the Galactic League.",
    "genres": [
      "Racing",
      "Action"
    ],
    "platforms": [
      "PC",
      "PlayStation",
      "Xbox"
    ],
    "releaseDate": "2026-10-06",
    "status": "Released",
    "playerRating": null,
    "criticScore": null,
    "ratingCount": 0,
    "recommendationPercent": null,
    "popularity": 0,
    "cover": {
      "src": "/assets/star-wars-galactic-racer-cover.jpg",
      "alt": "STAR WARS: Galactic Racer — official promotional artwork",
      "kind": "official"
    },
    "screenshots": [
      {
        "src": "/assets/star-wars-galactic-racer-scene-1.jpg",
        "alt": "STAR WARS: Galactic Racer — official screenshot 1",
        "kind": "official"
      },
      {
        "src": "/assets/star-wars-galactic-racer-scene-2.jpg",
        "alt": "STAR WARS: Galactic Racer — official screenshot 2",
        "kind": "official"
      }
    ]
  },
  {
    "id": "final-fantasy-resonance",
    "slug": "final-fantasy-resonance",
    "title": "FINAL FANTASY RESONANCE",
    "description": "A pixel-art Final Fantasy RPG about companions bound by fate, calling on Visions in battle while uncovering the force threatening to ruin their world.",
    "genres": [
      "RPG",
      "Adventure"
    ],
    "platforms": [
      "PC",
      "PlayStation",
      "Xbox",
      "Nintendo"
    ],
    "releaseDate": "2026-10-22",
    "status": "Released",
    "playerRating": null,
    "criticScore": null,
    "ratingCount": 0,
    "recommendationPercent": null,
    "popularity": 0,
    "cover": {
      "src": "/assets/final-fantasy-resonance-cover.jpg",
      "alt": "FINAL FANTASY RESONANCE — official promotional artwork",
      "kind": "official",
      "focalPoint": "0% 50%"
    },
    "screenshots": [
      {
        "src": "/assets/final-fantasy-resonance-scene-1.jpg",
        "alt": "FINAL FANTASY RESONANCE — official screenshot 1",
        "kind": "official"
      },
      {
        "src": "/assets/final-fantasy-resonance-scene-2.jpg",
        "alt": "FINAL FANTASY RESONANCE — official screenshot 2",
        "kind": "official"
      }
    ]
  },
  {
    "id": "dragon-quest-monsters-the-withered-world",
    "slug": "dragon-quest-monsters-the-withered-world",
    "title": "DRAGON QUEST MONSTERS: The Withered World",
    "description": "A Dragon Quest monster-collecting RPG following Bianca and Nera as they befriend, raise and synthesize creatures for battle across a withered world.",
    "genres": [
      "RPG",
      "Adventure"
    ],
    "platforms": [
      "PC",
      "PlayStation",
      "Xbox",
      "Nintendo"
    ],
    "releaseDate": "2026-12-03",
    "status": "Upcoming",
    "playerRating": null,
    "criticScore": null,
    "ratingCount": 0,
    "recommendationPercent": null,
    "popularity": 0,
    "cover": {
      "src": "/assets/dragon-quest-monsters-the-withered-world-cover.jpg",
      "alt": "DRAGON QUEST MONSTERS: The Withered World — official promotional artwork",
      "kind": "official"
    },
    "screenshots": [
      {
        "src": "/assets/dragon-quest-monsters-the-withered-world-scene-1.jpg",
        "alt": "DRAGON QUEST MONSTERS: The Withered World — official screenshot 1",
        "kind": "official"
      },
      {
        "src": "/assets/dragon-quest-monsters-the-withered-world-scene-2.jpg",
        "alt": "DRAGON QUEST MONSTERS: The Withered World — official screenshot 2",
        "kind": "official"
      }
    ]
  },
  {
    "id": "hela-of-mice-and-magic",
    "slug": "hela-of-mice-and-magic",
    "title": "Hela: Of Mice & Magic",
    "description": "A 3D co-op adventure seen through the eyes of a brave little mouse, exploring landscapes inspired by Northern Sweden, solving puzzles and helping a land in need.",
    "genres": [
      "Adventure"
    ],
    "platforms": [
      "PC",
      "PlayStation",
      "Xbox",
      "Nintendo"
    ],
    "releaseDate": "2026-12-01",
    "status": "Upcoming",
    "playerRating": null,
    "criticScore": null,
    "ratingCount": 0,
    "recommendationPercent": null,
    "popularity": 0,
    "cover": {
      "src": "/assets/hela-of-mice-and-magic-cover.jpg",
      "alt": "Hela: Of Mice & Magic — official promotional artwork",
      "kind": "official"
    },
    "screenshots": [
      {
        "src": "/assets/hela-of-mice-and-magic-scene-1.jpg",
        "alt": "Hela: Of Mice & Magic — official screenshot 1",
        "kind": "official"
      },
      {
        "src": "/assets/hela-of-mice-and-magic-scene-2.jpg",
        "alt": "Hela: Of Mice & Magic — official screenshot 2",
        "kind": "official"
      }
    ]
  },
  {
    "id": "tales-of-eternia-remastered",
    "slug": "tales-of-eternia-remastered",
    "title": "Tales of Eternia Remastered",
    "description": "The Tales RPG returns in a remastered edition, following a journey across Inferia and Celestia as a world-ending threat closes in on both worlds.",
    "genres": [
      "RPG",
      "Action"
    ],
    "platforms": [
      "PC",
      "PlayStation",
      "Xbox",
      "Nintendo"
    ],
    "releaseDate": "2026-10-16",
    "status": "Released",
    "releaseType": "Remaster",
    "playerRating": null,
    "criticScore": null,
    "ratingCount": 0,
    "recommendationPercent": null,
    "popularity": 0,
    "cover": {
      "src": "/assets/tales-of-eternia-remastered-cover.jpg",
      "alt": "Tales of Eternia Remastered — official remastered edition artwork",
      "kind": "official",
      "focalPoint": "0% 50%"
    },
    "screenshots": [
      {
        "src": "/assets/tales-of-eternia-remastered-scene-1.jpg",
        "alt": "Tales of Eternia Remastered — official remastered screenshot 1",
        "kind": "official"
      },
      {
        "src": "/assets/tales-of-eternia-remastered-scene-2.jpg",
        "alt": "Tales of Eternia Remastered — official remastered screenshot 2",
        "kind": "official"
      }
    ]
  },
  {
    "id": "the-wolf-among-us-remastered",
    "slug": "the-wolf-among-us-remastered",
    "title": "The Wolf Among Us Remastered",
    "description": "A remastered noir detective thriller set in the Fables world, where folklore is real, violence is chilling and every choice carries consequences.",
    "genres": [
      "Adventure",
      "Action"
    ],
    "platforms": [
      "PC",
      "PlayStation",
      "Xbox"
    ],
    "releaseDate": "2026-10-29",
    "status": "Upcoming",
    "releaseType": "Remaster",
    "playerRating": null,
    "criticScore": null,
    "ratingCount": 0,
    "recommendationPercent": null,
    "popularity": 0,
    "cover": {
      "src": "/assets/the-wolf-among-us-remastered-cover.jpg",
      "alt": "The Wolf Among Us Remastered — official remastered edition artwork",
      "kind": "official",
      "focalPoint": "0% 50%"
    },
    "screenshots": [
      {
        "src": "/assets/the-wolf-among-us-remastered-scene-1.jpg",
        "alt": "The Wolf Among Us Remastered — official remastered screenshot 1",
        "kind": "official"
      },
      {
        "src": "/assets/the-wolf-among-us-remastered-scene-2.jpg",
        "alt": "The Wolf Among Us Remastered — official remastered screenshot 2",
        "kind": "official"
      }
    ]
  },
  {
    "id": "rayman-legends-retold",
    "slug": "rayman-legends-retold",
    "title": "Rayman Legends Retold",
    "description": "A reimagining of the co-op platformer with new visuals, a retold story, new musical stages and up to four-player couch co-op.",
    "genres": [
      "Platformer",
      "Adventure"
    ],
    "platforms": [
      "PC",
      "PlayStation",
      "Xbox",
      "Nintendo"
    ],
    "releaseDate": "2026-12-03",
    "status": "Upcoming",
    "releaseType": "Remake",
    "playerRating": null,
    "criticScore": null,
    "ratingCount": 0,
    "recommendationPercent": null,
    "popularity": 0,
    "cover": {
      "src": "/assets/rayman-legends-retold-cover.jpg",
      "alt": "Rayman Legends Retold — official retold edition artwork",
      "kind": "official",
      "focalPoint": "0% 50%"
    },
    "screenshots": [
      {
        "src": "/assets/rayman-legends-retold-scene-1.jpg",
        "alt": "Rayman Legends Retold — official retold edition screenshot 1",
        "kind": "official"
      },
      {
        "src": "/assets/rayman-legends-retold-scene-2.jpg",
        "alt": "Rayman Legends Retold — official retold edition screenshot 2",
        "kind": "official"
      }
    ]
  },
  {
    "id": "fatal-fury-city-of-the-wolves",
    "slug": "fatal-fury-city-of-the-wolves",
    "title": "FATAL FURY: City of the Wolves",
    "description": "SNK's versus fighter comes to Nintendo Switch 2 with Smart and Arcade control styles, rollback online play and the REV system; the base game launched in January 2026.",
    "genres": [
      "Fighting",
      "Action"
    ],
    "platforms": [
      "Nintendo"
    ],
    "releaseDate": "2026-10-22",
    "status": "Released",
    "releaseType": "Re-release",
    "playerRating": null,
    "criticScore": null,
    "ratingCount": 0,
    "recommendationPercent": null,
    "popularity": 0,
    "cover": {
      "src": "/assets/fatal-fury-city-of-the-wolves-cover.jpg",
      "alt": "FATAL FURY: City of the Wolves — Nintendo Switch 2 Standard Edition artwork",
      "kind": "official"
    },
    "screenshots": [
      {
        "src": "/assets/fatal-fury-city-of-the-wolves-scene-1.jpg",
        "alt": "FATAL FURY: City of the Wolves — official Nintendo Switch 2 screenshot 1",
        "kind": "official"
      },
      {
        "src": "/assets/fatal-fury-city-of-the-wolves-scene-2.jpg",
        "alt": "FATAL FURY: City of the Wolves — official Nintendo Switch 2 screenshot 2",
        "kind": "official"
      }
    ]
  },
  {
    "id": "the-witcher-3-remastered",
    "slug": "the-witcher-3-remastered",
    "title": "The Witcher 3: Wild Hunt — Remastered",
    "description": "The open-world RPG returns remastered with modernised visuals and upgrades, following Geralt of Rivia in search of Ciri across a dark fantasy world.",
    "genres": [
      "RPG",
      "Adventure"
    ],
    "platforms": [
      "PC",
      "PlayStation",
      "Xbox",
      "Nintendo"
    ],
    "releaseDate": "2026-09-29",
    "status": "Released",
    "releaseType": "Remaster",
    "playerRating": null,
    "criticScore": null,
    "ratingCount": 0,
    "recommendationPercent": null,
    "popularity": 0,
    "cover": {
      "src": "/assets/the-witcher-3-remastered-cover.jpg",
      "alt": "The Witcher 3: Wild Hunt — Remastered official artwork",
      "kind": "official",
      "focalPoint": "0% 50%"
    },
    "screenshots": [
      {
        "src": "/assets/the-witcher-3-remastered-scene-1.jpg",
        "alt": "The Witcher 3: Wild Hunt — Remastered official screenshot 1",
        "kind": "official"
      },
      {
        "src": "/assets/the-witcher-3-remastered-scene-2.jpg",
        "alt": "The Witcher 3: Wild Hunt — Remastered official screenshot 2",
        "kind": "official"
      }
    ]
  },
  ...launchGames
]
