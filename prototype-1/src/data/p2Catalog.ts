import type { Media, Platform } from './types'

export type P2Mode = 'Single-player' | 'Multiplayer'
export type P2RatingScale = 'percent' | 'ten'
export interface P2Rating { source: string; label: string; score: number; count: number; countLabel: string; approxCount: boolean; scale: P2RatingScale; platform: string; url: string; checkedOn: string; scope?: string }
export interface P2BasePrice { platform: Platform; device: string; store: string; edition: string; cents: number; region: 'Canada'; currency: 'CAD'; url: string; checkedOn: string; source: string }
export interface P2HistoricalLow { cents: number; date: string; platform: Platform; store: string; edition: string; url: string }
export interface P2Discount { finalCents: number; originalCents: number; cut: number; date: string; dateKind: 'observed'; endDate: string | null; status: 'active' | 'ended' | 'unverified'; statusBasis: string; verifiedOn: string; platform: Platform; device: string; store: string; edition: string; url: string; offerUrl: string | null }
export interface P2Game {
  id: string; slug: string; title: string; primaryGenre: string; genres: readonly string[]; tags: readonly string[]; cardBlurb: string
  platforms: readonly Platform[]; platformDetails: readonly string[]; modes: readonly P2Mode[]; multiplayer?: readonly string[]
  description: string; releaseDate: string; releaseDates?: readonly { platform: string; date: string; sourceUrl: string; checkedOn: string }[]; developer: string; publisher: string
  cover: Media; screenshots: readonly Media[]
  ratings: readonly P2Rating[]; basePrices: readonly P2BasePrice[]; currentPrices?: readonly P2BasePrice[]
  historicalLow: P2HistoricalLow | null; discounts: readonly P2Discount[]; isFree: boolean; guideHubUrl: string
}
export interface P2Guide { id: string; gameId: string; title: string; source: string; author: string; platform: string; versionNote: string; type: string; summary: string; url: string; selection: string; checkedOn: string }

// Real, already-released catalogue. Ratings are external player scores (Steam percentage or Metacritic user score);
// PC prices/history are Canada/CAD records from IsThereAnyDeal; console base/current quotes are official store pages, checked 2026-10-25. Missing records stay empty.
export const p2Games: readonly P2Game[] = [
  {
    "id": "elden-ring",
    "slug": "elden-ring",
    "title": "Elden Ring",
    "primaryGenre": "RPG",
    "genres": [
      "RPG",
      "Action"
    ],
    "tags": [
      "Open world",
      "Soulslike",
      "Dark fantasy"
    ],
    "cardBlurb": "A demanding open-world RPG built around exploration, bosses and flexible builds.",
    "platforms": [
      "PC",
      "PlayStation",
      "Xbox"
    ],
    "platformDetails": [
      "PC",
      "PS5 / PS4",
      "Xbox Series / One"
    ],
    "modes": [
      "Single-player",
      "Multiplayer"
    ],
    "multiplayer": [
      "Online co-op",
      "Online PvP"
    ],
    "description": "An open-world action RPG. Explore the Lands Between, fight demanding bosses, and build a character around the weapons and magic you find.",
    "releaseDate": "2022-02-25",
    "developer": "FromSoftware, Inc.",
    "publisher": "FromSoftware, Inc.",
    "cover": {
      "src": "/assets/elden-ring-cover.jpg",
      "alt": "Elden Ring cover art",
      "kind": "official"
    },
    "screenshots": [
      {
        "src": "/assets/elden-ring-scene.jpg",
        "alt": "Elden Ring official screenshot 1",
        "kind": "official"
      }
    ],
    "ratings": [
      {
        "source": "Steam",
        "label": "Positive reviews",
        "score": 93,
        "count": 832261,
        "countLabel": "832k",
        "approxCount": false,
        "scale": "percent",
        "platform": "PC",
        "url": "https://steamcommunity.com/app/1245620/reviews/",
        "checkedOn": "2026-10-25"
      },
      {
        "source": "Metacritic User Score",
        "label": "User score",
        "score": 7.6,
        "count": 24742,
        "countLabel": "25k",
        "approxCount": false,
        "scale": "ten",
        "platform": "PC",
        "url": "https://metacritic.com/game/elden-ring/user-reviews/?platform=pc",
        "checkedOn": "2026-10-25"
      }
    ],
    "basePrices": [
      {
        "platform": "PC",
        "device": "PC",
        "store": "Steam",
        "edition": "Standard Edition",
        "cents": 7999,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://store.steampowered.com/app/1245620/",
        "checkedOn": "2026-10-25",
        "source": "Steam Store"
      },
      {
        "platform": "PC",
        "device": "PC",
        "store": "Fanatical",
        "edition": "Standard Edition",
        "cents": 7999,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://itad.link/018d9386-5634-71ca-ac17-8fff42a100db/",
        "checkedOn": "2026-10-25",
        "source": "IsThereAnyDeal"
      },
      {
        "platform": "PC",
        "device": "PC",
        "store": "GameBillet",
        "edition": "Standard Edition",
        "cents": 8400,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://itad.link/018d9386-5634-71ca-ac17-8fff3f127b84/",
        "checkedOn": "2026-10-25",
        "source": "IsThereAnyDeal"
      },
      {
        "platform": "PlayStation",
        "device": "PS5 / PS4",
        "store": "PlayStation Store",
        "edition": "Standard Edition",
        "cents": 7999,
        "url": "https://store.playstation.com/en-ca/product/UP0700-PPSA04610_00-ELDENRING0000000",
        "source": "PlayStation Store",
        "region": "Canada",
        "currency": "CAD",
        "checkedOn": "2026-10-25"
      }
    ],
    "historicalLow": {
      "cents": 4799,
      "date": "2023-12-21",
      "platform": "PC",
      "store": "Steam",
      "edition": "Standard Edition",
      "url": "https://isthereanydeal.com/game/elden-ring/history/"
    },
    "discounts": [
      {
        "finalCents": 7406,
        "originalCents": 8400,
        "cut": 11.8,
        "date": "2026-09-23",
        "platform": "PC",
        "device": "PC",
        "store": "GameBillet",
        "edition": "Standard Edition",
        "status": "active",
        "dateKind": "observed",
        "endDate": null,
        "statusBasis": "Current store quote shows a discount at the check time.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/elden-ring/history/",
        "offerUrl": "https://itad.link/018d9386-5634-71ca-ac17-8fff3f127b84/"
      },
      {
        "finalCents": 7185,
        "originalCents": 7999,
        "cut": 10.2,
        "date": "2026-03-27",
        "platform": "PC",
        "device": "PC",
        "store": "Fanatical",
        "edition": "Standard Edition",
        "status": "unverified",
        "dateKind": "observed",
        "endDate": null,
        "statusBasis": "A current discount exists, but continuity with this older observed promotion is not confirmed.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/elden-ring/history/",
        "offerUrl": "https://itad.link/018d9386-5634-71ca-ac17-8fff42a100db/"
      },
      {
        "finalCents": 7980,
        "originalCents": 8400,
        "cut": 5,
        "date": "2026-03-27",
        "platform": "PC",
        "device": "PC",
        "store": "DLGamer",
        "edition": "Standard Edition",
        "status": "ended",
        "dateKind": "observed",
        "endDate": null,
        "statusBasis": "A later regular-price observation confirms this promotion ended.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/elden-ring/history/",
        "offerUrl": null
      }
    ],
    "isFree": false,
    "guideHubUrl": "https://steamcommunity.com/app/1245620/guides/"
  },
  {
    "id": "hades",
    "slug": "hades",
    "title": "Hades",
    "primaryGenre": "Roguelike",
    "genres": [
      "Roguelike",
      "Action"
    ],
    "tags": [
      "Dungeon crawler",
      "Story",
      "Greek mythology"
    ],
    "cardBlurb": "Fast roguelike runs with boon choices, weapon variety and story between attempts.",
    "platforms": [
      "PC",
      "PlayStation",
      "Xbox",
      "Nintendo"
    ],
    "platformDetails": [
      "PC",
      "PS5 / PS4",
      "Xbox Series / One",
      "Switch"
    ],
    "modes": [
      "Single-player"
    ],
    "description": "A fast roguelike dungeon crawler. Fight out of the Underworld, choose boons between rooms, and learn more about the cast with every run.",
    "releaseDate": "2020-09-17",
    "developer": "Supergiant Games",
    "publisher": "Supergiant Games",
    "cover": {
      "src": "/assets/hades-cover.jpg",
      "alt": "Hades cover art",
      "kind": "official"
    },
    "screenshots": [
      {
        "src": "/assets/hades-scene.jpg",
        "alt": "Hades official screenshot 1",
        "kind": "official"
      }
    ],
    "ratings": [
      {
        "source": "Steam",
        "label": "Positive reviews",
        "score": 97,
        "count": 286667,
        "countLabel": "287k",
        "approxCount": false,
        "scale": "percent",
        "platform": "PC",
        "url": "https://steamcommunity.com/app/1145360/reviews/",
        "checkedOn": "2026-10-25"
      },
      {
        "source": "Metacritic User Score",
        "label": "User score",
        "score": 8.5,
        "count": 5379,
        "countLabel": "5k",
        "approxCount": false,
        "scale": "ten",
        "platform": "PC",
        "url": "https://metacritic.com/game/hades/user-reviews/?platform=pc",
        "checkedOn": "2026-10-25"
      }
    ],
    "basePrices": [
      {
        "platform": "PC",
        "device": "PC",
        "store": "Steam",
        "edition": "Standard Edition",
        "cents": 3250,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://store.steampowered.com/app/1145360/",
        "checkedOn": "2026-10-25",
        "source": "Steam Store"
      },
      {
        "platform": "PC",
        "device": "PC",
        "store": "Epic Games Store",
        "edition": "Standard Edition",
        "cents": 3250,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://itad.link/018d959f-7357-70d8-af21-b4f03553cae7/",
        "checkedOn": "2026-10-25",
        "source": "IsThereAnyDeal"
      },
      {
        "platform": "PC",
        "device": "PC",
        "store": "Microsoft Store",
        "edition": "Standard Edition",
        "cents": 3199,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://itad.link/018d9386-712c-707d-bd4d-e2329d49666e/",
        "checkedOn": "2026-10-25",
        "source": "IsThereAnyDeal"
      },
      {
        "platform": "Xbox",
        "device": "Xbox Series X|S / Xbox One",
        "store": "Xbox Store",
        "edition": "Standard Edition",
        "cents": 3199,
        "url": "https://www.xbox.com/en-ca/games/store/hades/9p8dl6w0jbb8",
        "source": "Xbox Store",
        "region": "Canada",
        "currency": "CAD",
        "checkedOn": "2026-10-25"
      },
      {
        "platform": "Nintendo",
        "device": "Switch",
        "store": "Nintendo Store",
        "edition": "Standard Edition",
        "cents": 3149,
        "url": "https://www.nintendo.com/en-ca/store/products/hades-switch/",
        "source": "Nintendo Store",
        "region": "Canada",
        "currency": "CAD",
        "checkedOn": "2026-10-25"
      }
    ],
    "historicalLow": {
      "cents": 812,
      "date": "2025-09-17",
      "platform": "PC",
      "store": "Steam",
      "edition": "Standard Edition",
      "url": "https://isthereanydeal.com/game/hades/history/"
    },
    "discounts": [
      {
        "finalCents": 812,
        "originalCents": 3250,
        "cut": 75,
        "date": "2026-09-25",
        "platform": "PC",
        "device": "PC",
        "store": "Steam",
        "edition": "Standard Edition",
        "status": "ended",
        "dateKind": "observed",
        "endDate": null,
        "statusBasis": "A later regular-price observation confirms this promotion ended.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/hades/history/",
        "offerUrl": "https://store.steampowered.com/app/1145360/"
      },
      {
        "finalCents": 975,
        "originalCents": 3250,
        "cut": 70,
        "date": "2025-12-12",
        "platform": "PC",
        "device": "PC",
        "store": "Epic Games Store",
        "edition": "Standard Edition",
        "status": "ended",
        "dateKind": "observed",
        "endDate": null,
        "statusBasis": "A later regular-price observation confirms this promotion ended.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/hades/history/",
        "offerUrl": "https://itad.link/018d959f-7357-70d8-af21-b4f03553cae7/"
      },
      {
        "finalCents": 1279,
        "originalCents": 3199,
        "cut": 60,
        "date": "2025-03-04",
        "platform": "PC",
        "device": "PC",
        "store": "Microsoft Store",
        "edition": "Standard Edition",
        "status": "ended",
        "dateKind": "observed",
        "endDate": null,
        "statusBasis": "A later regular-price observation confirms this promotion ended.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/hades/history/",
        "offerUrl": "https://itad.link/018d9386-712c-707d-bd4d-e2329d49666e/"
      }
    ],
    "isFree": false,
    "guideHubUrl": "https://steamcommunity.com/app/1145360/guides/"
  },
  {
    "id": "cyberpunk-2077",
    "slug": "cyberpunk-2077",
    "title": "Cyberpunk 2077",
    "primaryGenre": "RPG",
    "genres": [
      "RPG",
      "Action",
      "Shooter"
    ],
    "tags": [
      "Open world",
      "Sci-fi",
      "Choices"
    ],
    "cardBlurb": "An open-world RPG about jobs, cyberware and the choices that shape V's story.",
    "platforms": [
      "PC",
      "PlayStation",
      "Xbox",
      "Nintendo"
    ],
    "platformDetails": [
      "PC",
      "PS5",
      "Xbox Series X|S",
      "Switch 2"
    ],
    "modes": [
      "Single-player"
    ],
    "description": "An open-world RPG set in Night City. Complete jobs, shape your character with cyberware and perks, and choose how V handles the main story.",
    "releaseDate": "2020-12-10",
    "developer": "CD PROJEKT RED",
    "publisher": "CD PROJEKT RED",
    "cover": {
      "src": "/assets/cyberpunk-2077-cover.jpg",
      "alt": "Cyberpunk 2077 cover art",
      "kind": "official"
    },
    "screenshots": [
      {
        "src": "/assets/cyberpunk-2077-scene.jpg",
        "alt": "Cyberpunk 2077 official screenshot 1",
        "kind": "official"
      }
    ],
    "ratings": [
      {
        "source": "Steam",
        "label": "Positive reviews",
        "score": 87,
        "count": 892830,
        "countLabel": "893k",
        "approxCount": false,
        "scale": "percent",
        "platform": "PC",
        "url": "https://steamcommunity.com/app/1091500/reviews/",
        "checkedOn": "2026-10-25"
      },
      {
        "source": "Metacritic User Score",
        "label": "User score",
        "score": 7.3,
        "count": 40334,
        "countLabel": "40k",
        "approxCount": false,
        "scale": "ten",
        "platform": "PC",
        "url": "https://metacritic.com/game/cyberpunk-2077/user-reviews/?platform=pc",
        "checkedOn": "2026-10-25"
      }
    ],
    "basePrices": [
      {
        "platform": "PC",
        "device": "PC",
        "store": "Steam",
        "edition": "Standard Edition",
        "cents": 7999,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://store.steampowered.com/app/1091500/",
        "checkedOn": "2026-10-25",
        "source": "Steam Store"
      },
      {
        "platform": "PC",
        "device": "PC",
        "store": "GOG",
        "edition": "Standard Edition",
        "cents": 7999,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://itad.link/018d9386-46b0-70e5-9b53-b1ca00522c36/",
        "checkedOn": "2026-10-25",
        "source": "IsThereAnyDeal"
      },
      {
        "platform": "PC",
        "device": "PC",
        "store": "Epic Games Store",
        "edition": "Standard Edition",
        "cents": 7999,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://itad.link/018d959f-05a1-72eb-9ec3-238e952331cc/",
        "checkedOn": "2026-10-25",
        "source": "IsThereAnyDeal"
      },
      {
        "platform": "Xbox",
        "device": "Xbox Series X|S",
        "store": "Xbox Store",
        "edition": "Standard Edition",
        "cents": 7999,
        "url": "https://www.xbox.com/en-ca/games/store/cyberpunk-2077/bx3m8l83bbrw",
        "source": "Xbox Store",
        "region": "Canada",
        "currency": "CAD",
        "checkedOn": "2026-10-25"
      }
    ],
    "historicalLow": {
      "cents": 2399,
      "date": "2026-06-18",
      "platform": "PC",
      "store": "Steam",
      "edition": "Standard Edition",
      "url": "https://isthereanydeal.com/game/cyberpunk-2077/history/"
    },
    "discounts": [
      {
        "finalCents": 2399,
        "originalCents": 7999,
        "cut": 70,
        "date": "2026-10-25",
        "dateKind": "observed",
        "endDate": null,
        "status": "active",
        "statusBasis": "Official Xbox Store page showed CAD 23.99 with a CAD 79.99 strikethrough at the check time.",
        "verifiedOn": "2026-10-25",
        "platform": "Xbox",
        "device": "Xbox Series X|S",
        "store": "Xbox Store",
        "edition": "Standard Edition",
        "url": "https://www.xbox.com/en-ca/games/store/cyberpunk-2077/bx3m8l83bbrw",
        "offerUrl": "https://www.xbox.com/en-ca/games/store/cyberpunk-2077/bx3m8l83bbrw"
      },
      {
        "finalCents": 2399,
        "originalCents": 7999,
        "cut": 70,
        "date": "2026-10-19",
        "platform": "PC",
        "device": "PC",
        "store": "Epic Games Store",
        "edition": "Standard Edition",
        "status": "active",
        "dateKind": "observed",
        "endDate": "2026-11-02",
        "statusBasis": "Current store quote shows a discount at the check time.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/cyberpunk-2077/history/",
        "offerUrl": "https://itad.link/018d959f-05a1-72eb-9ec3-238e952331cc/"
      },
      {
        "finalCents": 2399,
        "originalCents": 7999,
        "cut": 70,
        "date": "2026-10-01",
        "platform": "PC",
        "device": "PC",
        "store": "Steam",
        "edition": "Standard Edition",
        "status": "active",
        "dateKind": "observed",
        "endDate": "2026-10-26",
        "statusBasis": "Current store quote shows a discount at the check time.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/cyberpunk-2077/history/",
        "offerUrl": "https://store.steampowered.com/app/1091500/"
      }
    ],
    "isFree": false,
    "guideHubUrl": "https://steamcommunity.com/app/1091500/guides/"
  },
  {
    "id": "baldurs-gate-3",
    "slug": "baldurs-gate-3",
    "title": "Baldur's Gate 3",
    "primaryGenre": "RPG",
    "genres": [
      "RPG",
      "Strategy"
    ],
    "tags": [
      "Turn-based",
      "Choices",
      "Co-op"
    ],
    "cardBlurb": "A party-based RPG where combat, dialogue and stealth can resolve the same encounter.",
    "platforms": [
      "PC",
      "PlayStation",
      "Xbox"
    ],
    "platformDetails": [
      "PC",
      "PS5",
      "Xbox Series X|S"
    ],
    "modes": [
      "Single-player",
      "Multiplayer"
    ],
    "multiplayer": [
      "Online co-op",
      "Local co-op"
    ],
    "description": "A party-based RPG built on D&D rules. Recruit companions, solve encounters through combat, dialogue or stealth, and carry your choices through the campaign.",
    "releaseDate": "2023-08-03",
    "developer": "Larian Studios",
    "publisher": "Larian Studios",
    "cover": {
      "src": "/assets/baldurs-gate-3-cover.jpg",
      "alt": "Baldur's Gate 3 cover art",
      "kind": "official"
    },
    "screenshots": [
      {
        "src": "/assets/baldurs-gate-3-scene.jpg",
        "alt": "Baldur's Gate 3 official screenshot 1",
        "kind": "official"
      }
    ],
    "ratings": [
      {
        "source": "Steam",
        "label": "Positive reviews",
        "score": 96,
        "count": 757916,
        "countLabel": "758k",
        "approxCount": false,
        "scale": "percent",
        "platform": "PC",
        "url": "https://steamcommunity.com/app/1086940/reviews/",
        "checkedOn": "2026-10-25"
      },
      {
        "source": "Metacritic User Score",
        "label": "User score",
        "score": 9.1,
        "count": 21728,
        "countLabel": "22k",
        "approxCount": false,
        "scale": "ten",
        "platform": "PC",
        "url": "https://metacritic.com/game/baldurs-gate-3/user-reviews/?platform=pc",
        "checkedOn": "2026-10-25"
      }
    ],
    "basePrices": [
      {
        "platform": "PC",
        "device": "PC",
        "store": "Steam",
        "edition": "Standard Edition",
        "cents": 7999,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://store.steampowered.com/app/1086940/",
        "checkedOn": "2026-10-25",
        "source": "Steam Store"
      },
      {
        "platform": "PC",
        "device": "PC",
        "store": "GOG",
        "edition": "Standard Edition",
        "cents": 7999,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://itad.link/018d9386-2caa-7166-99c3-53160d559490/",
        "checkedOn": "2026-10-25",
        "source": "IsThereAnyDeal"
      },
      {
        "platform": "PC",
        "device": "PC",
        "store": "Microsoft Store",
        "edition": "Standard Edition",
        "cents": 8999,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://itad.link/019645ee-5f6c-70b0-a024-5989a172c2cc/",
        "checkedOn": "2026-10-25",
        "source": "IsThereAnyDeal"
      },
      {
        "platform": "PlayStation",
        "device": "PS5",
        "store": "PlayStation Store",
        "edition": "Standard Edition",
        "cents": 9349,
        "url": "https://store.playstation.com/en-ca/product/UP3526-PPSA14001_00-0507384846053057",
        "source": "PlayStation Store",
        "region": "Canada",
        "currency": "CAD",
        "checkedOn": "2026-10-25"
      }
    ],
    "historicalLow": {
      "cents": 5599,
      "date": "2026-07-30",
      "platform": "PC",
      "store": "Steam",
      "edition": "Standard Edition",
      "url": "https://isthereanydeal.com/game/baldurs-gate-3/history/"
    },
    "discounts": [
      {
        "finalCents": 6299,
        "originalCents": 8999,
        "cut": 30,
        "date": "2026-10-08",
        "platform": "PC",
        "device": "PC",
        "store": "Microsoft Store",
        "edition": "Standard Edition",
        "status": "ended",
        "dateKind": "observed",
        "endDate": null,
        "statusBasis": "A later regular-price observation confirms this promotion ended.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/baldurs-gate-3/history/",
        "offerUrl": "https://itad.link/019645ee-5f6c-70b0-a024-5989a172c2cc/"
      },
      {
        "finalCents": 5599,
        "originalCents": 7999,
        "cut": 30,
        "date": "2026-09-28",
        "platform": "PC",
        "device": "PC",
        "store": "GOG",
        "edition": "Standard Edition",
        "status": "ended",
        "dateKind": "observed",
        "endDate": null,
        "statusBasis": "A later regular-price observation confirms this promotion ended.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/baldurs-gate-3/history/",
        "offerUrl": "https://itad.link/018d9386-2caa-7166-99c3-53160d559490/"
      },
      {
        "finalCents": 5599,
        "originalCents": 7999,
        "cut": 30,
        "date": "2026-09-14",
        "platform": "PC",
        "device": "PC",
        "store": "Steam",
        "edition": "Standard Edition",
        "status": "ended",
        "dateKind": "observed",
        "endDate": null,
        "statusBasis": "A later regular-price observation confirms this promotion ended.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/baldurs-gate-3/history/",
        "offerUrl": "https://store.steampowered.com/app/1086940/"
      }
    ],
    "isFree": false,
    "guideHubUrl": "https://steamcommunity.com/app/1086940/guides/"
  },
  {
    "id": "hollow-knight",
    "slug": "hollow-knight",
    "title": "Hollow Knight",
    "primaryGenre": "Platformer",
    "genres": [
      "Platformer",
      "Action",
      "Adventure"
    ],
    "tags": [
      "Metroidvania",
      "Hand-drawn",
      "Indie"
    ],
    "cardBlurb": "A hand-drawn Metroidvania about exploration, movement upgrades and precise boss fights.",
    "platforms": [
      "PC",
      "PlayStation",
      "Xbox",
      "Nintendo"
    ],
    "platformDetails": [
      "PC",
      "PS4",
      "Xbox One",
      "Switch"
    ],
    "modes": [
      "Single-player"
    ],
    "description": "A hand-drawn Metroidvania. Explore a ruined bug kingdom, unlock movement abilities, and use precise combat to reach new areas.",
    "releaseDate": "2017-02-24",
    "developer": "Team Cherry",
    "publisher": "Team Cherry",
    "cover": {
      "src": "/assets/hollow-knight-cover.jpg",
      "alt": "Hollow Knight cover art",
      "kind": "official"
    },
    "screenshots": [
      {
        "src": "/assets/hollow-knight-scene.jpg",
        "alt": "Hollow Knight official screenshot 1",
        "kind": "official"
      }
    ],
    "ratings": [
      {
        "source": "Steam",
        "label": "Positive reviews",
        "score": 96,
        "count": 489363,
        "countLabel": "489k",
        "approxCount": false,
        "scale": "percent",
        "platform": "PC",
        "url": "https://steamcommunity.com/app/367520/reviews/",
        "checkedOn": "2026-10-25"
      },
      {
        "source": "Metacritic User Score",
        "label": "User score",
        "score": 9.1,
        "count": 6405,
        "countLabel": "6k",
        "approxCount": false,
        "scale": "ten",
        "platform": "PC",
        "url": "https://metacritic.com/game/hollow-knight/user-reviews/?platform=pc",
        "checkedOn": "2026-10-25"
      }
    ],
    "basePrices": [
      {
        "platform": "PC",
        "device": "PC",
        "store": "Steam",
        "edition": "Standard Edition",
        "cents": 1949,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://store.steampowered.com/app/367520/",
        "checkedOn": "2026-10-25",
        "source": "Steam Store"
      },
      {
        "platform": "PC",
        "device": "PC",
        "store": "GreenManGaming",
        "edition": "Standard Edition",
        "cents": 1949,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://itad.link/019a2fc9-9492-715a-bc60-6f701e81b332/",
        "checkedOn": "2026-10-25",
        "source": "IsThereAnyDeal"
      },
      {
        "platform": "PC",
        "device": "PC",
        "store": "GOG",
        "edition": "Standard Edition",
        "cents": 1949,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://itad.link/018d9386-75a1-73f0-9fff-3ed64f078477/",
        "checkedOn": "2026-10-25",
        "source": "IsThereAnyDeal"
      },
      {
        "platform": "Nintendo",
        "device": "Switch",
        "store": "Nintendo Store",
        "edition": "Standard Edition",
        "cents": 1699,
        "url": "https://www.nintendo.com/en-ca/store/products/hollow-knight-switch/",
        "source": "Nintendo Store",
        "region": "Canada",
        "currency": "CAD",
        "checkedOn": "2026-10-25"
      }
    ],
    "historicalLow": {
      "cents": 679,
      "date": "2022-05-02",
      "platform": "PC",
      "store": "Steam",
      "edition": "Standard Edition",
      "url": "https://isthereanydeal.com/game/hollow-knight/history/"
    },
    "discounts": [
      {
        "finalCents": 1043,
        "originalCents": 2076,
        "cut": 49.8,
        "date": "2026-08-25",
        "platform": "PC",
        "device": "PC",
        "store": "Humble Store",
        "edition": "Standard Edition",
        "status": "ended",
        "dateKind": "observed",
        "endDate": null,
        "statusBasis": "A later regular-price observation confirms this promotion ended.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/hollow-knight/history/",
        "offerUrl": null
      },
      {
        "finalCents": 974,
        "originalCents": 1949,
        "cut": 50,
        "date": "2026-06-25",
        "platform": "PC",
        "device": "PC",
        "store": "Steam",
        "edition": "Standard Edition",
        "status": "ended",
        "dateKind": "observed",
        "endDate": null,
        "statusBasis": "A later regular-price observation confirms this promotion ended.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/hollow-knight/history/",
        "offerUrl": "https://store.steampowered.com/app/367520/"
      },
      {
        "finalCents": 975,
        "originalCents": 1949,
        "cut": 50,
        "date": "2026-06-19",
        "platform": "PC",
        "device": "PC",
        "store": "GreenManGaming",
        "edition": "Standard Edition",
        "status": "ended",
        "dateKind": "observed",
        "endDate": null,
        "statusBasis": "A later regular-price observation confirms this promotion ended.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/hollow-knight/history/",
        "offerUrl": "https://itad.link/019a2fc9-9492-715a-bc60-6f701e81b332/"
      }
    ],
    "isFree": false,
    "guideHubUrl": "https://steamcommunity.com/app/367520/guides/"
  },
  {
    "id": "stardew-valley",
    "slug": "stardew-valley",
    "title": "Stardew Valley",
    "primaryGenre": "Simulation",
    "genres": [
      "Simulation",
      "RPG"
    ],
    "tags": [
      "Farming",
      "Life sim",
      "Co-op"
    ],
    "cardBlurb": "A relaxed farming and life sim about crops, relationships and a valley routine.",
    "platforms": [
      "PC",
      "PlayStation",
      "Xbox",
      "Nintendo"
    ],
    "platformDetails": [
      "PC",
      "PS4",
      "Xbox One",
      "Switch"
    ],
    "modes": [
      "Single-player",
      "Multiplayer"
    ],
    "multiplayer": [
      "Online co-op",
      "Local co-op"
    ],
    "description": "A farming and life-simulation game. Grow crops, raise animals, fish, mine and build relationships in a small valley at your own pace.",
    "releaseDate": "2016-02-26",
    "developer": "ConcernedApe",
    "publisher": "ConcernedApe",
    "cover": {
      "src": "/assets/stardew-valley-cover.jpg",
      "alt": "Stardew Valley cover art",
      "kind": "official"
    },
    "screenshots": [
      {
        "src": "/assets/stardew-valley-scene.jpg",
        "alt": "Stardew Valley official screenshot 1",
        "kind": "official"
      }
    ],
    "ratings": [
      {
        "source": "Steam",
        "label": "Positive reviews",
        "score": 98,
        "count": 898066,
        "countLabel": "898k",
        "approxCount": false,
        "scale": "percent",
        "platform": "PC",
        "url": "https://steamcommunity.com/app/413150/reviews/",
        "checkedOn": "2026-10-25"
      },
      {
        "source": "Metacritic User Score",
        "label": "User score",
        "score": 8.8,
        "count": 3459,
        "countLabel": "3k",
        "approxCount": false,
        "scale": "ten",
        "platform": "PC",
        "url": "https://metacritic.com/game/stardew-valley/user-reviews/?platform=pc",
        "checkedOn": "2026-10-25"
      }
    ],
    "basePrices": [
      {
        "platform": "PC",
        "device": "PC",
        "store": "Steam",
        "edition": "Standard Edition",
        "cents": 1699,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://store.steampowered.com/app/413150/",
        "checkedOn": "2026-10-25",
        "source": "Steam Store"
      },
      {
        "platform": "PC",
        "device": "PC",
        "store": "GOG",
        "edition": "Standard Edition",
        "cents": 1699,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://itad.link/018d9386-d141-7169-a0af-3349dedb00d2/",
        "checkedOn": "2026-10-25",
        "source": "IsThereAnyDeal"
      },
      {
        "platform": "PC",
        "device": "PC",
        "store": "Microsoft Store",
        "edition": "Standard Edition",
        "cents": 1899,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://itad.link/018d9386-d141-7169-a0af-3349e7cc991b/",
        "checkedOn": "2026-10-25",
        "source": "IsThereAnyDeal"
      },
      {
        "platform": "Xbox",
        "device": "Xbox One",
        "store": "Xbox Store",
        "edition": "Standard Edition",
        "cents": 1899,
        "url": "https://www.xbox.com/en-ca/games/store/stardew-valley/9mwr1nc6vq6l",
        "source": "Xbox Store",
        "region": "Canada",
        "currency": "CAD",
        "checkedOn": "2026-10-25"
      },
      {
        "platform": "Nintendo",
        "device": "Switch",
        "store": "Nintendo Store",
        "edition": "Standard Edition",
        "cents": 1699,
        "url": "https://www.nintendo.com/en-ca/store/products/stardew-valley-switch/",
        "source": "Nintendo Store",
        "region": "Canada",
        "currency": "CAD",
        "checkedOn": "2026-10-25"
      }
    ],
    "historicalLow": {
      "cents": 849,
      "date": "2021-02-26",
      "platform": "PC",
      "store": "Steam",
      "edition": "Standard Edition",
      "url": "https://isthereanydeal.com/game/stardew-valley/history/"
    },
    "discounts": [
      {
        "finalCents": 1189,
        "originalCents": 1699,
        "cut": 30,
        "date": "2026-10-01",
        "platform": "PC",
        "device": "PC",
        "store": "Steam",
        "edition": "Standard Edition",
        "status": "ended",
        "dateKind": "observed",
        "endDate": null,
        "statusBasis": "A later regular-price observation confirms this promotion ended.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/stardew-valley/history/",
        "offerUrl": "https://store.steampowered.com/app/413150/"
      },
      {
        "finalCents": 1019,
        "originalCents": 1699,
        "cut": 40,
        "date": "2026-06-25",
        "platform": "PC",
        "device": "PC",
        "store": "GOG",
        "edition": "Standard Edition",
        "status": "ended",
        "dateKind": "observed",
        "endDate": null,
        "statusBasis": "A later regular-price observation confirms this promotion ended.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/stardew-valley/history/",
        "offerUrl": "https://itad.link/018d9386-d141-7169-a0af-3349dedb00d2/"
      },
      {
        "finalCents": 1359,
        "originalCents": 1699,
        "cut": 20,
        "date": "2023-11-03",
        "platform": "PC",
        "device": "PC",
        "store": "Humble Store",
        "edition": "Standard Edition",
        "status": "ended",
        "dateKind": "observed",
        "endDate": null,
        "statusBasis": "A later regular-price observation confirms this promotion ended.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/stardew-valley/history/",
        "offerUrl": null
      }
    ],
    "isFree": false,
    "guideHubUrl": "https://steamcommunity.com/app/413150/guides/"
  },
  {
    "id": "terraria",
    "slug": "terraria",
    "title": "Terraria",
    "primaryGenre": "Survival",
    "genres": [
      "Survival",
      "Action",
      "Adventure"
    ],
    "tags": [
      "Sandbox",
      "Crafting",
      "Co-op"
    ],
    "cardBlurb": "A 2D sandbox about mining, crafting, building and fighting through a generated world.",
    "platforms": [
      "PC",
      "PlayStation",
      "Xbox",
      "Nintendo"
    ],
    "platformDetails": [
      "PC",
      "PS4",
      "Xbox One",
      "Switch"
    ],
    "modes": [
      "Single-player",
      "Multiplayer"
    ],
    "multiplayer": [
      "Online co-op",
      "Online PvP"
    ],
    "description": "A 2D sandbox survival game. Mine, craft, build and fight through a generated world, alone or with friends.",
    "releaseDate": "2011-05-16",
    "developer": "Re-Logic",
    "publisher": "Re-Logic",
    "cover": {
      "src": "/assets/terraria-cover.jpg",
      "alt": "Terraria cover art",
      "kind": "official"
    },
    "screenshots": [
      {
        "src": "/assets/terraria-scene-1.jpg",
        "alt": "Terraria official screenshot 1",
        "kind": "official"
      },
      {
        "src": "/assets/terraria-scene-2.jpg",
        "alt": "Terraria official screenshot 2",
        "kind": "official"
      }
    ],
    "ratings": [
      {
        "source": "Steam",
        "label": "Positive reviews",
        "score": 97,
        "count": 1247383,
        "countLabel": "1.2M",
        "approxCount": false,
        "scale": "percent",
        "platform": "PC",
        "url": "https://steamcommunity.com/app/105600/reviews/",
        "checkedOn": "2026-10-25"
      },
      {
        "source": "Metacritic User Score",
        "label": "User score",
        "score": 8.8,
        "count": 1408,
        "countLabel": "1k",
        "approxCount": false,
        "scale": "ten",
        "platform": "PC",
        "url": "https://metacritic.com/game/terraria/user-reviews/?platform=pc",
        "checkedOn": "2026-10-25"
      }
    ],
    "basePrices": [
      {
        "platform": "PC",
        "device": "PC",
        "store": "Steam",
        "edition": "Standard Edition",
        "cents": 1299,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://store.steampowered.com/app/105600/",
        "checkedOn": "2026-10-25",
        "source": "Steam Store"
      },
      {
        "platform": "PC",
        "device": "PC",
        "store": "GOG",
        "edition": "Standard Edition",
        "cents": 1099,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://itad.link/018d9386-dd01-716e-9ac0-19e930cd85a1/",
        "checkedOn": "2026-10-25",
        "source": "IsThereAnyDeal"
      },
      {
        "platform": "PC",
        "device": "PC",
        "store": "Humble Store",
        "edition": "Standard Edition",
        "cents": 1099,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://itad.link/018d9386-dd01-716e-9ac0-19e9314808ad/",
        "checkedOn": "2026-10-25",
        "source": "IsThereAnyDeal"
      },
      {
        "platform": "Nintendo",
        "device": "Nintendo Switch",
        "store": "Nintendo eShop",
        "edition": "Standard Edition",
        "cents": 3999,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://www.nintendo.com/en-ca/store/products/terraria-switch/",
        "checkedOn": "2026-10-26",
        "source": "Nintendo Canada"
      }
    ],
    "historicalLow": {
      "cents": 549,
      "date": "2016-06-23",
      "platform": "PC",
      "store": "Steam",
      "edition": "Standard Edition",
      "url": "https://isthereanydeal.com/game/terraria/history/"
    },
    "discounts": [
      {
        "finalCents": 649,
        "originalCents": 1299,
        "cut": 50,
        "date": "2026-10-01",
        "platform": "PC",
        "device": "PC",
        "store": "Steam",
        "edition": "Standard Edition",
        "status": "ended",
        "dateKind": "observed",
        "endDate": null,
        "statusBasis": "A later regular-price observation confirms this promotion ended.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/terraria/history/",
        "offerUrl": "https://store.steampowered.com/app/105600/"
      },
      {
        "finalCents": 549,
        "originalCents": 1099,
        "cut": 50,
        "date": "2026-06-17",
        "platform": "PC",
        "device": "PC",
        "store": "GOG",
        "edition": "Standard Edition",
        "status": "ended",
        "dateKind": "observed",
        "endDate": null,
        "statusBasis": "A later regular-price observation confirms this promotion ended.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/terraria/history/",
        "offerUrl": "https://itad.link/018d9386-dd01-716e-9ac0-19e930cd85a1/"
      },
      {
        "finalCents": 439,
        "originalCents": 1099,
        "cut": 60.1,
        "date": "2020-08-07",
        "platform": "PC",
        "device": "PC",
        "store": "Humble Store",
        "edition": "Standard Edition",
        "status": "ended",
        "dateKind": "observed",
        "endDate": null,
        "statusBasis": "A later regular-price observation confirms this promotion ended.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/terraria/history/",
        "offerUrl": "https://itad.link/018d9386-dd01-716e-9ac0-19e9314808ad/"
      }
    ],
    "isFree": false,
    "guideHubUrl": "https://steamcommunity.com/app/105600/guides/"
  },
  {
    "id": "forza-horizon-5",
    "slug": "forza-horizon-5",
    "title": "Forza Horizon 5",
    "primaryGenre": "Racing",
    "genres": [
      "Racing",
      "Sports"
    ],
    "tags": [
      "Open world",
      "Mexico",
      "Multiplayer"
    ],
    "cardBlurb": "An open-world arcade racer built around map events, tuning and online play.",
    "platforms": [
      "PC",
      "PlayStation",
      "Xbox"
    ],
    "platformDetails": [
      "PC",
      "Xbox Series / One",
      "PS5"
    ],
    "modes": [
      "Single-player",
      "Multiplayer"
    ],
    "multiplayer": [
      "Online co-op",
      "Online PvP"
    ],
    "description": "An open-world arcade racing game set in Mexico. Race across the map, tune cars and take part in online events.",
    "releaseDate": "2021-11-09",
    "developer": "Playground Games",
    "publisher": "Xbox Game Studios",
    "cover": {
      "src": "/assets/forza-horizon-5-cover.jpg",
      "alt": "Forza Horizon 5 cover art",
      "kind": "official"
    },
    "screenshots": [
      {
        "src": "/assets/forza-horizon-5-scene.jpg",
        "alt": "Forza Horizon 5 official screenshot 1",
        "kind": "official"
      }
    ],
    "ratings": [
      {
        "source": "Steam",
        "label": "Positive reviews",
        "score": 89,
        "count": 261303,
        "countLabel": "261k",
        "approxCount": false,
        "scale": "percent",
        "platform": "PC",
        "url": "https://steamcommunity.com/app/1551360/reviews/",
        "checkedOn": "2026-10-25"
      },
      {
        "source": "Metacritic User Score",
        "label": "User score",
        "score": 6.9,
        "count": 6108,
        "countLabel": "6k",
        "approxCount": false,
        "scale": "ten",
        "platform": "PC",
        "url": "https://metacritic.com/game/forza-horizon-5/user-reviews/?platform=pc",
        "checkedOn": "2026-10-25"
      }
    ],
    "basePrices": [
      {
        "platform": "PC",
        "device": "PC",
        "store": "Steam",
        "edition": "Standard Edition",
        "cents": 7999,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://store.steampowered.com/app/1551360/",
        "checkedOn": "2026-10-25",
        "source": "Steam Store"
      },
      {
        "platform": "PC",
        "device": "PC",
        "store": "Microsoft Store",
        "edition": "Standard Edition",
        "cents": 7999,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://itad.link/018d9386-67ee-7395-84b3-8de2e81d17e1/",
        "checkedOn": "2026-10-25",
        "source": "IsThereAnyDeal"
      }
    ],
    "historicalLow": {
      "cents": 3199,
      "date": "2026-08-25",
      "platform": "PC",
      "store": "Steam",
      "edition": "Standard Edition",
      "url": "https://isthereanydeal.com/game/forza-horizon-5/history/"
    },
    "discounts": [
      {
        "finalCents": 3199,
        "originalCents": 7999,
        "cut": 60,
        "date": "2026-10-01",
        "platform": "PC",
        "device": "PC",
        "store": "Steam",
        "edition": "Standard Edition",
        "status": "ended",
        "dateKind": "observed",
        "endDate": null,
        "statusBasis": "A later regular-price observation confirms this promotion ended.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/forza-horizon-5/history/",
        "offerUrl": "https://store.steampowered.com/app/1551360/"
      },
      {
        "finalCents": 3199,
        "originalCents": 7999,
        "cut": 60,
        "date": "2026-08-25",
        "platform": "PC",
        "device": "PC",
        "store": "Microsoft Store",
        "edition": "Standard Edition",
        "status": "ended",
        "dateKind": "observed",
        "endDate": null,
        "statusBasis": "A later regular-price observation confirms this promotion ended.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/forza-horizon-5/history/",
        "offerUrl": "https://itad.link/018d9386-67ee-7395-84b3-8de2e81d17e1/"
      }
    ],
    "isFree": false,
    "guideHubUrl": "https://steamcommunity.com/app/1551360/guides/"
  },
  {
    "id": "halo-infinite",
    "slug": "halo-infinite",
    "title": "Halo Infinite",
    "primaryGenre": "Shooter",
    "genres": [
      "Shooter",
      "Action"
    ],
    "tags": [
      "Sci-fi",
      "Arena",
      "Multiplayer"
    ],
    "cardBlurb": "A sci-fi shooter with an open-world campaign and free-to-play arena multiplayer.",
    "platforms": [
      "PC",
      "Xbox"
    ],
    "platformDetails": [
      "PC",
      "Xbox Series / One"
    ],
    "modes": [
      "Single-player",
      "Multiplayer"
    ],
    "multiplayer": [
      "Online co-op",
      "Online PvP"
    ],
    "description": "A sci-fi first-person shooter. Play the open-world campaign or the free-to-play arena multiplayer, with online co-op and PvP.",
    "releaseDate": "2021-12-08",
    "developer": "343 Industries",
    "publisher": "Xbox Game Studios",
    "cover": {
      "src": "/assets/halo-infinite-cover.jpg",
      "alt": "Halo Infinite cover art",
      "kind": "official"
    },
    "screenshots": [
      {
        "src": "/assets/halo-infinite-scene.jpg",
        "alt": "Halo Infinite official screenshot 1",
        "kind": "official"
      }
    ],
    "ratings": [
      {
        "source": "Steam",
        "label": "Positive reviews",
        "score": 69,
        "count": 181334,
        "countLabel": "181k",
        "approxCount": false,
        "scale": "percent",
        "platform": "PC",
        "url": "https://steamcommunity.com/app/1240440/reviews/",
        "checkedOn": "2026-10-25"
      },
      {
        "source": "Metacritic User Score",
        "label": "User score",
        "score": 7,
        "count": 6483,
        "countLabel": "6k",
        "approxCount": false,
        "scale": "ten",
        "platform": "PC",
        "url": "https://metacritic.com/game/halo-infinite/user-reviews/?platform=pc",
        "checkedOn": "2026-10-25"
      }
    ],
    "basePrices": [
      {
        "platform": "PC",
        "device": "PC",
        "store": "Steam",
        "edition": "Standard Edition",
        "cents": 0,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://store.steampowered.com/app/1240440/",
        "checkedOn": "2026-10-25",
        "source": "Steam Store"
      }
    ],
    "historicalLow": null,
    "discounts": [],
    "isFree": true,
    "guideHubUrl": "https://steamcommunity.com/app/1240440/guides/"
  },
  {
    "id": "god-of-war",
    "slug": "god-of-war",
    "title": "God of War",
    "primaryGenre": "Action",
    "genres": [
      "Action",
      "Adventure"
    ],
    "tags": [
      "Mythology",
      "Cinematic",
      "Story"
    ],
    "cardBlurb": "A story-driven action-adventure through the Norse realms with Kratos and Atreus.",
    "platforms": [
      "PC",
      "PlayStation"
    ],
    "platformDetails": [
      "PC",
      "PS5 / PS4"
    ],
    "modes": [
      "Single-player"
    ],
    "description": "A third-person action-adventure game. Travel through the Norse realms with Kratos and Atreus, fight gods and monsters, and solve environmental puzzles.",
    "releaseDate": "2018-04-20",
    "developer": "Santa Monica Studio",
    "publisher": "PlayStation Publishing LLC",
    "cover": {
      "src": "/assets/god-of-war-cover.jpg",
      "alt": "God of War cover art",
      "kind": "official"
    },
    "screenshots": [
      {
        "src": "/assets/god-of-war-scene.jpg",
        "alt": "God of War official screenshot 1",
        "kind": "official"
      }
    ],
    "ratings": [
      {
        "source": "Steam",
        "label": "Positive reviews",
        "score": 95,
        "count": 130154,
        "countLabel": "130k",
        "approxCount": false,
        "scale": "percent",
        "platform": "PC",
        "url": "https://steamcommunity.com/app/1593500/reviews/",
        "checkedOn": "2026-10-25"
      },
      {
        "source": "Metacritic User Score",
        "label": "User score",
        "score": 8.5,
        "count": 31533,
        "countLabel": "32k",
        "approxCount": false,
        "scale": "ten",
        "platform": "PC",
        "url": "https://metacritic.com/game/god-of-war/user-reviews/?platform=pc",
        "checkedOn": "2026-10-25"
      }
    ],
    "basePrices": [
      {
        "platform": "PC",
        "device": "PC",
        "store": "Steam",
        "edition": "Standard Edition",
        "cents": 6499,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://store.steampowered.com/app/1593500/",
        "checkedOn": "2026-10-25",
        "source": "Steam Store"
      },
      {
        "platform": "PC",
        "device": "PC",
        "store": "Fanatical",
        "edition": "Standard Edition",
        "cents": 6499,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://itad.link/018d9386-6c96-73a3-8151-d9e681a571d7/",
        "checkedOn": "2026-10-25",
        "source": "IsThereAnyDeal"
      },
      {
        "platform": "PC",
        "device": "PC",
        "store": "GameBillet",
        "edition": "Standard Edition",
        "cents": 7000,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://itad.link/018d9386-6c96-73a3-8151-d9e693be79a5/",
        "checkedOn": "2026-10-25",
        "source": "IsThereAnyDeal"
      }
    ],
    "historicalLow": {
      "cents": 2599,
      "date": "2024-08-08",
      "platform": "PC",
      "store": "Steam",
      "edition": "Standard Edition",
      "url": "https://isthereanydeal.com/game/god-of-war/history/"
    },
    "discounts": [
      {
        "finalCents": 3499,
        "originalCents": 7000,
        "cut": 50,
        "date": "2026-10-08",
        "platform": "PC",
        "device": "PC",
        "store": "GameBillet",
        "edition": "Standard Edition",
        "status": "active",
        "dateKind": "observed",
        "endDate": null,
        "statusBasis": "Current store quote shows a discount at the check time.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/god-of-war/history/",
        "offerUrl": "https://itad.link/018d9386-6c96-73a3-8151-d9e693be79a5/"
      },
      {
        "finalCents": 6300,
        "originalCents": 7000,
        "cut": 10,
        "date": "2026-10-08",
        "platform": "PC",
        "device": "PC",
        "store": "GamesPlanet US",
        "edition": "Standard Edition",
        "status": "active",
        "dateKind": "observed",
        "endDate": null,
        "statusBasis": "Current store quote shows a discount at the check time.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/god-of-war/history/",
        "offerUrl": null
      },
      {
        "finalCents": 2600,
        "originalCents": 6499,
        "cut": 60,
        "date": "2026-10-01",
        "platform": "PC",
        "device": "PC",
        "store": "GreenManGaming",
        "edition": "Standard Edition",
        "status": "ended",
        "dateKind": "observed",
        "endDate": null,
        "statusBasis": "A later regular-price observation confirms this promotion ended.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/god-of-war/history/",
        "offerUrl": null
      }
    ],
    "isFree": false,
    "guideHubUrl": "https://steamcommunity.com/app/1593500/guides/"
  },
  {
    "id": "marvels-spider-man",
    "slug": "marvels-spider-man",
    "title": "Marvel's Spider-Man Remastered",
    "primaryGenre": "Action",
    "genres": [
      "Action",
      "Adventure"
    ],
    "tags": [
      "Open world",
      "Superhero",
      "Story"
    ],
    "cardBlurb": "An open-world superhero adventure built around web-swinging, crimes and a story campaign.",
    "platforms": [
      "PC",
      "PlayStation"
    ],
    "platformDetails": [
      "PC",
      "PS5"
    ],
    "modes": [
      "Single-player"
    ],
    "description": "An open-world superhero action game. Swing through New York, stop crimes and fight through a story-driven campaign as Peter Parker.",
    "releaseDate": "2018-09-07",
    "developer": "Insomniac Games",
    "publisher": "PlayStation Publishing LLC",
    "cover": {
      "src": "/assets/marvels-spider-man-cover.jpg",
      "alt": "Marvel's Spider-Man Remastered cover art",
      "kind": "official"
    },
    "screenshots": [
      {
        "src": "/assets/marvels-spider-man-scene.jpg",
        "alt": "Marvel's Spider-Man Remastered official screenshot 1",
        "kind": "official"
      }
    ],
    "ratings": [
      {
        "source": "Steam",
        "label": "Positive reviews",
        "score": 96,
        "count": 102816,
        "countLabel": "103k",
        "approxCount": false,
        "scale": "percent",
        "platform": "PC",
        "url": "https://steamcommunity.com/app/1817070/reviews/",
        "checkedOn": "2026-10-25"
      },
      {
        "source": "Metacritic User Score",
        "label": "User score",
        "score": 8.4,
        "count": 3254,
        "countLabel": "3k",
        "approxCount": false,
        "scale": "ten",
        "platform": "PC",
        "url": "https://metacritic.com/game/marvels-spider-man-remastered/user-reviews/?platform=pc",
        "checkedOn": "2026-10-25"
      }
    ],
    "basePrices": [
      {
        "platform": "PC",
        "device": "PC",
        "store": "Steam",
        "edition": "Standard Edition",
        "cents": 7999,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://store.steampowered.com/app/1817070/",
        "checkedOn": "2026-10-25",
        "source": "Steam Store"
      },
      {
        "platform": "PC",
        "device": "PC",
        "store": "Fanatical",
        "edition": "Standard Edition",
        "cents": 7999,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://itad.link/018d9386-9338-71ed-919d-2325141aac33/",
        "checkedOn": "2026-10-25",
        "source": "IsThereAnyDeal"
      },
      {
        "platform": "PC",
        "device": "PC",
        "store": "GameBillet",
        "edition": "Standard Edition",
        "cents": 8400,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://itad.link/018d9386-9338-71ed-919d-232514717860/",
        "checkedOn": "2026-10-25",
        "source": "IsThereAnyDeal"
      }
    ],
    "historicalLow": {
      "cents": 3199,
      "date": "2025-11-20",
      "platform": "PC",
      "store": "Steam",
      "edition": "Standard Edition",
      "url": "https://isthereanydeal.com/game/marvels-spider-man-remastered/history/"
    },
    "discounts": [
      {
        "finalCents": 4759,
        "originalCents": 8400,
        "cut": 43.3,
        "date": "2026-10-11",
        "platform": "PC",
        "device": "PC",
        "store": "GameBillet",
        "edition": "Standard Edition",
        "status": "active",
        "dateKind": "observed",
        "endDate": null,
        "statusBasis": "Current store quote shows a discount at the check time.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/marvels-spider-man-remastered/history/",
        "offerUrl": "https://itad.link/018d9386-9338-71ed-919d-232514717860/"
      },
      {
        "finalCents": 7560,
        "originalCents": 8400,
        "cut": 10,
        "date": "2026-10-09",
        "platform": "PC",
        "device": "PC",
        "store": "GamesPlanet US",
        "edition": "Standard Edition",
        "status": "active",
        "dateKind": "observed",
        "endDate": null,
        "statusBasis": "Current store quote shows a discount at the check time.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/marvels-spider-man-remastered/history/",
        "offerUrl": null
      },
      {
        "finalCents": 3199,
        "originalCents": 7999,
        "cut": 60,
        "date": "2026-10-01",
        "platform": "PC",
        "device": "PC",
        "store": "Steam",
        "edition": "Standard Edition",
        "status": "ended",
        "dateKind": "observed",
        "endDate": null,
        "statusBasis": "A later regular-price observation confirms this promotion ended.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/marvels-spider-man-remastered/history/",
        "offerUrl": "https://store.steampowered.com/app/1817070/"
      }
    ],
    "isFree": false,
    "guideHubUrl": "https://steamcommunity.com/app/1817070/guides/",
    "releaseDates": [
      {
        "platform": "PC",
        "date": "2022-08-12",
        "sourceUrl": "https://store.steampowered.com/app/1817070/",
        "checkedOn": "2026-10-26"
      }
    ]
  },
  {
    "id": "zelda-tears-of-the-kingdom",
    "slug": "zelda-tears-of-the-kingdom",
    "title": "The Legend of Zelda: Tears of the Kingdom",
    "primaryGenre": "Adventure",
    "genres": [
      "Adventure",
      "Action",
      "Puzzle"
    ],
    "tags": [
      "Open world",
      "Physics",
      "Exploration"
    ],
    "cardBlurb": "An open-air adventure built around exploration, physics puzzles and vehicle construction.",
    "platforms": [
      "Nintendo"
    ],
    "platformDetails": [
      "Switch"
    ],
    "modes": [
      "Single-player"
    ],
    "description": "An open-air adventure. Explore Hyrule's surface, skies and depths, solve physics puzzles and build vehicles and contraptions.",
    "releaseDate": "2023-05-12",
    "developer": "Nintendo EPD",
    "publisher": "Nintendo",
    "cover": {
      "src": "/assets/zelda-tears-of-the-kingdom-cover.jpg",
      "alt": "The Legend of Zelda: Tears of the Kingdom cover art",
      "kind": "official"
    },
    "screenshots": [
      {
        "src": "/assets/zelda-tears-of-the-kingdom-scene.jpg",
        "alt": "The Legend of Zelda: Tears of the Kingdom official screenshot 1",
        "kind": "official"
      }
    ],
    "ratings": [
      {
        "source": "Metacritic User Score",
        "score": 8.8,
        "count": 14900,
        "scale": "ten",
        "url": "https://www.metacritic.com/game/the-legend-of-zelda-tears-of-the-kingdom/user-reviews/",
        "label": "User score",
        "platform": "Nintendo Switch",
        "approxCount": true,
        "countLabel": "≈15k",
        "checkedOn": "2026-10-25"
      }
    ],
    "basePrices": [
      {
        "platform": "Nintendo",
        "device": "Switch",
        "store": "Nintendo Store",
        "edition": "Physical Edition",
        "cents": 9999,
        "url": "https://www.nintendo.com/en-ca/store/products/the-legend-of-zelda-tears-of-the-kingdom-112384/",
        "source": "Nintendo Store",
        "region": "Canada",
        "currency": "CAD",
        "checkedOn": "2026-10-25"
      }
    ],
    "historicalLow": null,
    "discounts": [],
    "isFree": false,
    "guideHubUrl": "https://www.ign.com/wikis/the-legend-of-zelda-tears-of-the-kingdom"
  },
  {
    "id": "super-mario-odyssey",
    "slug": "super-mario-odyssey",
    "title": "Super Mario Odyssey",
    "primaryGenre": "Platformer",
    "genres": [
      "Platformer",
      "Adventure"
    ],
    "tags": [
      "3D platformer",
      "Collectathon",
      "Cappy"
    ],
    "cardBlurb": "A 3D platformer about travelling between kingdoms and collecting Power Moons.",
    "platforms": [
      "Nintendo"
    ],
    "platformDetails": [
      "Switch"
    ],
    "modes": [
      "Single-player",
      "Multiplayer"
    ],
    "multiplayer": [
      "Local co-op"
    ],
    "description": "A 3D platformer. Travel between kingdoms, capture enemies and objects with Cappy, and collect Power Moons.",
    "releaseDate": "2017-10-27",
    "developer": "Nintendo EPD",
    "publisher": "Nintendo",
    "cover": {
      "src": "/assets/super-mario-odyssey-cover.jpg",
      "alt": "Super Mario Odyssey cover art",
      "kind": "official"
    },
    "screenshots": [
      {
        "src": "/assets/super-mario-odyssey-scene.jpg",
        "alt": "Super Mario Odyssey official screenshot 1",
        "kind": "official"
      }
    ],
    "ratings": [
      {
        "source": "Metacritic User Score",
        "score": 9,
        "count": 12100,
        "scale": "ten",
        "url": "https://www.metacritic.com/game/super-mario-odyssey/user-reviews/",
        "label": "User score",
        "platform": "Nintendo Switch",
        "approxCount": true,
        "countLabel": "≈12k",
        "checkedOn": "2026-10-25"
      }
    ],
    "basePrices": [
      {
        "platform": "Nintendo",
        "device": "Switch",
        "store": "Nintendo Store",
        "edition": "Physical Edition",
        "cents": 8499,
        "url": "https://www.nintendo.com/en-ca/store/products/super-mario-odyssey-105880/",
        "source": "Nintendo Store",
        "region": "Canada",
        "currency": "CAD",
        "checkedOn": "2026-10-25"
      }
    ],
    "historicalLow": null,
    "discounts": [],
    "isFree": false,
    "guideHubUrl": "https://www.ign.com/wikis/super-mario-odyssey"
  },
  {
    "id": "animal-crossing-new-horizons",
    "slug": "animal-crossing-new-horizons",
    "title": "Animal Crossing: New Horizons",
    "primaryGenre": "Simulation",
    "genres": [
      "Simulation"
    ],
    "tags": [
      "Life sim",
      "Island",
      "Co-op"
    ],
    "cardBlurb": "A relaxed island life sim about decorating, collecting and visiting friends.",
    "platforms": [
      "Nintendo"
    ],
    "platformDetails": [
      "Switch"
    ],
    "modes": [
      "Single-player",
      "Multiplayer"
    ],
    "multiplayer": [
      "Online co-op",
      "Local co-op"
    ],
    "description": "A life-simulation game. Build an island home, decorate, collect fish and bugs, and visit friends at your own pace.",
    "releaseDate": "2020-03-20",
    "developer": "Nintendo EPD",
    "publisher": "Nintendo",
    "cover": {
      "src": "/assets/animal-crossing-new-horizons-cover.jpg",
      "alt": "Animal Crossing: New Horizons cover art",
      "kind": "official"
    },
    "screenshots": [
      {
        "src": "/assets/animal-crossing-new-horizons-scene.jpg",
        "alt": "Animal Crossing: New Horizons official screenshot 1",
        "kind": "official"
      }
    ],
    "ratings": [
      {
        "source": "Metacritic User Score",
        "score": 6,
        "count": 7600,
        "scale": "ten",
        "url": "https://www.metacritic.com/game/animal-crossing-new-horizons/user-reviews/",
        "label": "User score",
        "platform": "Nintendo Switch",
        "approxCount": true,
        "countLabel": "≈8k",
        "checkedOn": "2026-10-25"
      }
    ],
    "basePrices": [
      {
        "platform": "Nintendo",
        "device": "Switch",
        "store": "Nintendo Store",
        "edition": "Standard Edition",
        "cents": 8499,
        "url": "https://www.nintendo.com/en-ca/store/products/animal-crossing-new-horizons-switch/",
        "source": "Nintendo Store",
        "region": "Canada",
        "currency": "CAD",
        "checkedOn": "2026-10-25"
      }
    ],
    "historicalLow": null,
    "discounts": [],
    "isFree": false,
    "guideHubUrl": "https://www.ign.com/wikis/animal-crossing-new-horizons"
  },
  {
    "id": "counter-strike-2",
    "slug": "counter-strike-2",
    "title": "Counter-Strike 2",
    "primaryGenre": "Shooter",
    "genres": [
      "Shooter",
      "Strategy"
    ],
    "tags": [
      "Tactical",
      "Competitive",
      "Multiplayer"
    ],
    "cardBlurb": "A competitive tactical shooter decided by economy, utility and round-by-round gunplay.",
    "platforms": [
      "PC"
    ],
    "platformDetails": [
      "PC"
    ],
    "modes": [
      "Multiplayer"
    ],
    "multiplayer": [
      "Online PvP"
    ],
    "description": "A competitive tactical shooter. Two teams fight over objectives across rounds with economy, utility and precise gunplay.",
    "releaseDate": "2023-09-27",
    "developer": "Valve",
    "publisher": "Valve",
    "cover": {
      "src": "/assets/counter-strike-2-cover.jpg",
      "alt": "Counter-Strike 2 cover art",
      "kind": "official"
    },
    "screenshots": [
      {
        "src": "/assets/counter-strike-2-scene-1.jpg",
        "alt": "Counter-Strike 2 official screenshot 1",
        "kind": "official"
      },
      {
        "src": "/assets/counter-strike-2-scene-2.jpg",
        "alt": "Counter-Strike 2 official screenshot 2",
        "kind": "official"
      }
    ],
    "ratings": [
      {
        "source": "Steam",
        "label": "Positive reviews",
        "score": 85,
        "count": 9928920,
        "countLabel": "9.9M",
        "approxCount": false,
        "scale": "percent",
        "platform": "PC",
        "url": "https://steamcommunity.com/app/730/reviews/",
        "checkedOn": "2026-10-25"
      },
      {
        "source": "Metacritic User Score",
        "label": "User score",
        "score": 5.5,
        "count": 1426,
        "countLabel": "1k",
        "approxCount": false,
        "scale": "ten",
        "platform": "PC",
        "url": "https://metacritic.com/game/counter-strike-2/user-reviews/?platform=pc",
        "checkedOn": "2026-10-25"
      }
    ],
    "basePrices": [
      {
        "platform": "PC",
        "device": "PC",
        "store": "Steam",
        "edition": "Standard Edition",
        "cents": 0,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://store.steampowered.com/app/730/",
        "checkedOn": "2026-10-25",
        "source": "Steam Store"
      }
    ],
    "historicalLow": null,
    "discounts": [],
    "isFree": true,
    "guideHubUrl": "https://steamcommunity.com/app/730/guides/"
  },
  {
    "id": "helldivers-2",
    "slug": "helldivers-2",
    "title": "HELLDIVERS 2",
    "primaryGenre": "Shooter",
    "genres": [
      "Shooter",
      "Action"
    ],
    "tags": [
      "Co-op",
      "Third-person",
      "Sci-fi"
    ],
    "cardBlurb": "A squad-based co-op shooter about stratagems, objectives and extracting under pressure.",
    "platforms": [
      "PC",
      "PlayStation",
      "Xbox"
    ],
    "platformDetails": [
      "PC",
      "PS5",
      "Xbox Series X|S"
    ],
    "modes": [
      "Single-player",
      "Multiplayer"
    ],
    "multiplayer": [
      "Online co-op"
    ],
    "description": "A third-person co-op shooter. Drop into hostile planets with a squad, call in stratagems and complete objectives while extracting.",
    "releaseDate": "2024-02-08",
    "developer": "Arrowhead Game Studios",
    "publisher": "PlayStation Publishing LLC",
    "cover": {
      "src": "/assets/helldivers-2-cover.jpg",
      "alt": "HELLDIVERS 2 cover art",
      "kind": "official"
    },
    "screenshots": [
      {
        "src": "/assets/helldivers-2-scene.jpg",
        "alt": "HELLDIVERS 2 official screenshot 1",
        "kind": "official"
      }
    ],
    "ratings": [
      {
        "source": "Steam",
        "label": "Positive reviews",
        "score": 76,
        "count": 842307,
        "countLabel": "842k",
        "approxCount": false,
        "scale": "percent",
        "platform": "PC",
        "url": "https://steamcommunity.com/app/553850/reviews/",
        "checkedOn": "2026-10-25"
      },
      {
        "source": "Metacritic User Score",
        "label": "User score",
        "score": 6.7,
        "count": 3067,
        "countLabel": "3k",
        "approxCount": false,
        "scale": "ten",
        "platform": "PC",
        "url": "https://metacritic.com/game/helldivers-2/user-reviews/?platform=pc",
        "checkedOn": "2026-10-25"
      }
    ],
    "basePrices": [
      {
        "platform": "PC",
        "device": "PC",
        "store": "Steam",
        "edition": "Standard Edition",
        "cents": 4999,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://store.steampowered.com/app/553850/",
        "checkedOn": "2026-10-25",
        "source": "Steam Store"
      },
      {
        "platform": "PC",
        "device": "PC",
        "store": "Fanatical",
        "edition": "Standard Edition",
        "cents": 4999,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://itad.link/018d9386-739d-70f3-bebc-05f64c125b71/",
        "checkedOn": "2026-10-25",
        "source": "IsThereAnyDeal"
      },
      {
        "platform": "PC",
        "device": "PC",
        "store": "GameBillet",
        "edition": "Standard Edition",
        "cents": 5600,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://itad.link/018d9386-739c-71dc-a7f0-9438a03cb125/",
        "checkedOn": "2026-10-25",
        "source": "IsThereAnyDeal"
      }
    ],
    "historicalLow": {
      "cents": 3749,
      "date": "2026-02-05",
      "platform": "PC",
      "store": "Steam",
      "edition": "Standard Edition",
      "url": "https://isthereanydeal.com/game/helldivers-2/history/"
    },
    "discounts": [
      {
        "finalCents": 4619,
        "originalCents": 5600,
        "cut": 17.5,
        "date": "2026-10-16",
        "platform": "PC",
        "device": "PC",
        "store": "GameBillet",
        "edition": "Standard Edition",
        "status": "active",
        "dateKind": "observed",
        "endDate": null,
        "statusBasis": "Current store quote shows a discount at the check time.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/helldivers-2/history/",
        "offerUrl": "https://itad.link/018d9386-739c-71dc-a7f0-9438a03cb125/"
      },
      {
        "finalCents": 5039,
        "originalCents": 5600,
        "cut": 10,
        "date": "2026-10-08",
        "platform": "PC",
        "device": "PC",
        "store": "GamesPlanet US",
        "edition": "Standard Edition",
        "status": "active",
        "dateKind": "observed",
        "endDate": null,
        "statusBasis": "Current store quote shows a discount at the check time.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/helldivers-2/history/",
        "offerUrl": null
      },
      {
        "finalCents": 3749,
        "originalCents": 4999,
        "cut": 25,
        "date": "2026-10-01",
        "platform": "PC",
        "device": "PC",
        "store": "Steam",
        "edition": "Standard Edition",
        "status": "ended",
        "dateKind": "observed",
        "endDate": null,
        "statusBasis": "A later regular-price observation confirms this promotion ended.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/helldivers-2/history/",
        "offerUrl": "https://store.steampowered.com/app/553850/"
      }
    ],
    "isFree": false,
    "guideHubUrl": "https://steamcommunity.com/app/553850/guides/"
  },
  {
    "id": "civilization-6",
    "slug": "civilization-6",
    "title": "Sid Meier's Civilization VI",
    "primaryGenre": "Strategy",
    "genres": [
      "Strategy"
    ],
    "tags": [
      "4X",
      "Turn-based",
      "Historical"
    ],
    "cardBlurb": "A turn-based 4X strategy game about building and steering a civilization.",
    "platforms": [
      "PC",
      "PlayStation",
      "Xbox",
      "Nintendo"
    ],
    "platformDetails": [
      "PC",
      "PS4",
      "Xbox One",
      "Switch"
    ],
    "modes": [
      "Single-player",
      "Multiplayer"
    ],
    "multiplayer": [
      "Online co-op",
      "Online PvP"
    ],
    "description": "A turn-based 4X strategy game. Build a civilization, expand cities, research technology and pursue culture, science, religion or conquest.",
    "releaseDate": "2016-10-21",
    "developer": "Firaxis Games",
    "publisher": "2K",
    "cover": {
      "src": "/assets/civilization-6-cover.jpg",
      "alt": "Sid Meier's Civilization VI cover art",
      "kind": "official"
    },
    "screenshots": [
      {
        "src": "/assets/civilization-6-scene-1.jpg",
        "alt": "Sid Meier's Civilization VI official screenshot 1",
        "kind": "official"
      },
      {
        "src": "/assets/civilization-6-scene-2.jpg",
        "alt": "Sid Meier's Civilization VI official screenshot 2",
        "kind": "official"
      }
    ],
    "ratings": [
      {
        "source": "Steam",
        "label": "Positive reviews",
        "score": 86,
        "count": 277168,
        "countLabel": "277k",
        "approxCount": false,
        "scale": "percent",
        "platform": "PC",
        "url": "https://steamcommunity.com/app/289070/reviews/",
        "checkedOn": "2026-10-25"
      },
      {
        "source": "Metacritic User Score",
        "label": "User score",
        "score": 7.3,
        "count": 2383,
        "countLabel": "2k",
        "approxCount": false,
        "scale": "ten",
        "platform": "PC",
        "url": "https://metacritic.com/game/sid-meiers-civilization-vi/user-reviews/?platform=pc",
        "checkedOn": "2026-10-25"
      }
    ],
    "basePrices": [
      {
        "platform": "PC",
        "device": "PC",
        "store": "Steam",
        "edition": "Standard Edition",
        "cents": 7999,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://store.steampowered.com/app/289070/",
        "checkedOn": "2026-10-25",
        "source": "Steam Store"
      },
      {
        "platform": "PC",
        "device": "PC",
        "store": "Fanatical",
        "edition": "Standard Edition",
        "cents": 7999,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://itad.link/01a1547a-b978-72b2-b9e3-e30a0a017629/",
        "checkedOn": "2026-10-25",
        "source": "IsThereAnyDeal"
      },
      {
        "platform": "PC",
        "device": "PC",
        "store": "GameBillet",
        "edition": "Standard Edition",
        "cents": 8400,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://itad.link/018d9386-c7ec-733e-9a3a-4e4f1062a7ab/",
        "checkedOn": "2026-10-25",
        "source": "IsThereAnyDeal"
      }
    ],
    "historicalLow": {
      "cents": 399,
      "date": "2024-06-07",
      "platform": "PC",
      "store": "Steam",
      "edition": "Standard Edition",
      "url": "https://isthereanydeal.com/game/sid-meiers-civilization-vi/history/"
    },
    "discounts": [
      {
        "finalCents": 6847,
        "originalCents": 7999,
        "cut": 14.4,
        "date": "2026-10-24",
        "platform": "PC",
        "device": "PC",
        "store": "Fanatical",
        "edition": "Standard Edition",
        "status": "active",
        "dateKind": "observed",
        "endDate": null,
        "statusBasis": "Current store quote shows a discount at the check time.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/sid-meiers-civilization-vi/history/",
        "offerUrl": "https://itad.link/01a1547a-b978-72b2-b9e3-e30a0a017629/"
      },
      {
        "finalCents": 714,
        "originalCents": 8400,
        "cut": 91.5,
        "date": "2026-10-23",
        "platform": "PC",
        "device": "PC",
        "store": "GameBillet",
        "edition": "Standard Edition",
        "status": "active",
        "dateKind": "observed",
        "endDate": null,
        "statusBasis": "Current store quote shows a discount at the check time.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/sid-meiers-civilization-vi/history/",
        "offerUrl": "https://itad.link/018d9386-c7ec-733e-9a3a-4e4f1062a7ab/"
      },
      {
        "finalCents": 720,
        "originalCents": 7999,
        "cut": 91,
        "date": "2026-10-23",
        "platform": "PC",
        "device": "PC",
        "store": "GreenManGaming",
        "edition": "Standard Edition",
        "status": "active",
        "dateKind": "observed",
        "endDate": null,
        "statusBasis": "Current store quote shows a discount at the check time.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/sid-meiers-civilization-vi/history/",
        "offerUrl": null
      }
    ],
    "isFree": false,
    "guideHubUrl": "https://steamcommunity.com/app/289070/guides/"
  },
  {
    "id": "xcom-2",
    "slug": "xcom-2",
    "title": "XCOM 2",
    "primaryGenre": "Strategy",
    "genres": [
      "Strategy",
      "RPG"
    ],
    "tags": [
      "Tactics",
      "Turn-based",
      "Sci-fi"
    ],
    "cardBlurb": "A turn-based tactics campaign about squad building, resources and alien resistance.",
    "platforms": [
      "PC",
      "PlayStation",
      "Xbox",
      "Nintendo"
    ],
    "platformDetails": [
      "PC",
      "PS4",
      "Xbox One",
      "Switch"
    ],
    "modes": [
      "Single-player"
    ],
    "description": "A turn-based tactics game. Command a resistance squad, manage resources and fight a guerrilla campaign against alien occupation.",
    "releaseDate": "2016-02-05",
    "developer": "Firaxis Games",
    "publisher": "2K",
    "cover": {
      "src": "/assets/xcom-2-cover.jpg",
      "alt": "XCOM 2 cover art",
      "kind": "official"
    },
    "screenshots": [
      {
        "src": "/assets/xcom-2-scene-1.jpg",
        "alt": "XCOM 2 official screenshot 1",
        "kind": "official"
      },
      {
        "src": "/assets/xcom-2-scene-2.jpg",
        "alt": "XCOM 2 official screenshot 2",
        "kind": "official"
      }
    ],
    "ratings": [
      {
        "source": "Steam",
        "label": "Positive reviews",
        "score": 84,
        "count": 80292,
        "countLabel": "80k",
        "approxCount": false,
        "scale": "percent",
        "platform": "PC",
        "url": "https://steamcommunity.com/app/268500/reviews/",
        "checkedOn": "2026-10-25"
      },
      {
        "source": "Metacritic User Score",
        "label": "User score",
        "score": 7.5,
        "count": 1981,
        "countLabel": "2k",
        "approxCount": false,
        "scale": "ten",
        "platform": "PC",
        "url": "https://metacritic.com/game/xcom-2/user-reviews/?platform=pc",
        "checkedOn": "2026-10-25"
      }
    ],
    "basePrices": [
      {
        "platform": "PC",
        "device": "PC",
        "store": "Steam",
        "edition": "Standard Edition",
        "cents": 2999,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://store.steampowered.com/app/268500/",
        "checkedOn": "2026-10-25",
        "source": "Steam Store"
      },
      {
        "platform": "PC",
        "device": "PC",
        "store": "Fanatical",
        "edition": "Standard Edition",
        "cents": 2999,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://itad.link/019ddea6-e682-73ca-82c2-d24562ccbd44/",
        "checkedOn": "2026-10-25",
        "source": "IsThereAnyDeal"
      },
      {
        "platform": "PC",
        "device": "PC",
        "store": "GameBillet",
        "edition": "Standard Edition",
        "cents": 2799,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://itad.link/018d9386-fa37-71f9-9ec7-ac6e5cc354d9/",
        "checkedOn": "2026-10-25",
        "source": "IsThereAnyDeal"
      }
    ],
    "historicalLow": {
      "cents": 399,
      "date": "2024-02-22",
      "platform": "PC",
      "store": "Steam",
      "edition": "Standard Edition",
      "url": "https://isthereanydeal.com/game/xcom-2/history/"
    },
    "discounts": [
      {
        "finalCents": 325,
        "originalCents": 2799,
        "cut": 88.4,
        "date": "2026-10-23",
        "platform": "PC",
        "device": "PC",
        "store": "GameBillet",
        "edition": "Standard Edition",
        "status": "active",
        "dateKind": "observed",
        "endDate": null,
        "statusBasis": "Current store quote shows a discount at the check time.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/xcom-2/history/",
        "offerUrl": "https://itad.link/018d9386-fa37-71f9-9ec7-ac6e5cc354d9/"
      },
      {
        "finalCents": 405,
        "originalCents": 2999,
        "cut": 86.5,
        "date": "2026-10-23",
        "platform": "PC",
        "device": "PC",
        "store": "GreenManGaming",
        "edition": "Standard Edition",
        "status": "active",
        "dateKind": "observed",
        "endDate": null,
        "statusBasis": "Current store quote shows a discount at the check time.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/xcom-2/history/",
        "offerUrl": null
      },
      {
        "finalCents": 449,
        "originalCents": 2999,
        "cut": 85,
        "date": "2026-10-22",
        "platform": "PC",
        "device": "PC",
        "store": "Humble Store",
        "edition": "Standard Edition",
        "status": "active",
        "dateKind": "observed",
        "endDate": "2026-10-29",
        "statusBasis": "Current store quote shows a discount at the check time.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/xcom-2/history/",
        "offerUrl": null
      }
    ],
    "isFree": false,
    "guideHubUrl": "https://steamcommunity.com/app/268500/guides/"
  },
  {
    "id": "portal-2",
    "slug": "portal-2",
    "title": "Portal 2",
    "primaryGenre": "Puzzle",
    "genres": [
      "Puzzle",
      "Adventure"
    ],
    "tags": [
      "First-person",
      "Co-op",
      "Sci-fi"
    ],
    "cardBlurb": "A first-person puzzle game with a separate two-player co-op campaign.",
    "platforms": [
      "PC",
      "PlayStation",
      "Xbox",
      "Nintendo"
    ],
    "platformDetails": [
      "PC",
      "PS3",
      "Xbox 360",
      "Switch"
    ],
    "modes": [
      "Single-player",
      "Multiplayer"
    ],
    "multiplayer": [
      "Online co-op",
      "Local co-op"
    ],
    "description": "A first-person puzzle game. Solve test chambers with portals, then play a separate co-op campaign with a friend.",
    "releaseDate": "2011-04-19",
    "developer": "Valve",
    "publisher": "Valve",
    "cover": {
      "src": "/assets/portal-2-cover.jpg",
      "alt": "Portal 2 cover art",
      "kind": "official"
    },
    "screenshots": [
      {
        "src": "/assets/portal-2-scene-1.jpg",
        "alt": "Portal 2 official screenshot 1",
        "kind": "official"
      },
      {
        "src": "/assets/portal-2-scene-2.jpg",
        "alt": "Portal 2 official screenshot 2",
        "kind": "official"
      }
    ],
    "ratings": [
      {
        "source": "Steam",
        "label": "Positive reviews",
        "score": 98,
        "count": 391474,
        "countLabel": "391k",
        "approxCount": false,
        "scale": "percent",
        "platform": "PC",
        "url": "https://steamcommunity.com/app/620/reviews/",
        "checkedOn": "2026-10-25"
      },
      {
        "source": "Metacritic User Score",
        "label": "User score",
        "score": 9.1,
        "count": 4137,
        "countLabel": "4k",
        "approxCount": false,
        "scale": "ten",
        "platform": "PC",
        "url": "https://metacritic.com/game/portal-2/user-reviews/?platform=pc",
        "checkedOn": "2026-10-25"
      }
    ],
    "basePrices": [
      {
        "platform": "PC",
        "device": "PC",
        "store": "Steam",
        "edition": "Standard Edition",
        "cents": 1249,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://store.steampowered.com/app/620/",
        "checkedOn": "2026-10-25",
        "source": "Steam Store"
      }
    ],
    "historicalLow": {
      "cents": 114,
      "date": "2019-06-26",
      "platform": "PC",
      "store": "Steam",
      "edition": "Standard Edition",
      "url": "https://isthereanydeal.com/game/portal-2/history/"
    },
    "discounts": [
      {
        "finalCents": 259,
        "originalCents": 1299,
        "cut": 80.1,
        "date": "2026-10-01",
        "platform": "PC",
        "device": "PC",
        "store": "Steam",
        "edition": "Standard Edition",
        "status": "ended",
        "dateKind": "observed",
        "endDate": null,
        "statusBasis": "A later regular-price observation confirms this promotion ended.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/portal-2/history/",
        "offerUrl": "https://store.steampowered.com/app/620/"
      },
      {
        "finalCents": 878,
        "originalCents": 2586,
        "cut": 66,
        "date": "2016-03-31",
        "platform": "PC",
        "device": "PC",
        "store": "GreenManGaming",
        "edition": "Standard Edition",
        "status": "ended",
        "dateKind": "observed",
        "endDate": null,
        "statusBasis": "A later regular-price observation confirms this promotion ended.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/portal-2/history/",
        "offerUrl": null
      }
    ],
    "isFree": false,
    "guideHubUrl": "https://steamcommunity.com/app/620/guides/"
  },
  {
    "id": "celeste",
    "slug": "celeste",
    "title": "Celeste",
    "primaryGenre": "Platformer",
    "genres": [
      "Platformer"
    ],
    "tags": [
      "Precision",
      "Story",
      "Indie"
    ],
    "cardBlurb": "A precise platformer about climbing a mountain and helping Madeline face herself.",
    "platforms": [
      "PC",
      "PlayStation",
      "Xbox",
      "Nintendo"
    ],
    "platformDetails": [
      "PC",
      "PS4",
      "Xbox One",
      "Switch"
    ],
    "modes": [
      "Single-player"
    ],
    "description": "A precise 2D platformer. Climb Celeste Mountain through short, challenging rooms while helping Madeline face her inner struggles.",
    "releaseDate": "2018-01-25",
    "developer": "Maddy Makes Games Inc.",
    "publisher": "Maddy Makes Games Inc.",
    "cover": {
      "src": "/assets/celeste-cover.jpg",
      "alt": "Celeste cover art",
      "kind": "official"
    },
    "screenshots": [
      {
        "src": "/assets/celeste-scene-1.jpg",
        "alt": "Celeste official screenshot 1",
        "kind": "official"
      },
      {
        "src": "/assets/celeste-scene-2.jpg",
        "alt": "Celeste official screenshot 2",
        "kind": "official"
      }
    ],
    "ratings": [
      {
        "source": "Steam",
        "label": "Positive reviews",
        "score": 97,
        "count": 133561,
        "countLabel": "134k",
        "approxCount": false,
        "scale": "percent",
        "platform": "PC",
        "url": "https://steamcommunity.com/app/504230/reviews/",
        "checkedOn": "2026-10-25"
      },
      {
        "source": "Metacritic User Score",
        "label": "User score",
        "score": 8.5,
        "count": 2860,
        "countLabel": "3k",
        "approxCount": false,
        "scale": "ten",
        "platform": "PC",
        "url": "https://metacritic.com/game/celeste/user-reviews/?platform=pc",
        "checkedOn": "2026-10-25"
      }
    ],
    "basePrices": [
      {
        "platform": "PC",
        "device": "PC",
        "store": "Steam",
        "edition": "Standard Edition",
        "cents": 2599,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://store.steampowered.com/app/504230/",
        "checkedOn": "2026-10-25",
        "source": "Steam Store"
      },
      {
        "platform": "PC",
        "device": "PC",
        "store": "Epic Games Store",
        "edition": "Standard Edition",
        "cents": 2199,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://itad.link/018d959f-8196-7180-95fc-bdd204a4954a/",
        "checkedOn": "2026-10-25",
        "source": "IsThereAnyDeal"
      },
      {
        "platform": "PC",
        "device": "PC",
        "store": "Microsoft Store",
        "edition": "Standard Edition",
        "cents": 2599,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://itad.link/018d9386-3c5d-7308-bcaf-15d9e22dc9e7/",
        "checkedOn": "2026-10-25",
        "source": "IsThereAnyDeal"
      },
      {
        "platform": "Nintendo",
        "device": "Nintendo Switch",
        "store": "Nintendo eShop",
        "edition": "Standard Edition",
        "cents": 2451,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://www.nintendo.com/en-ca/store/products/celeste-switch/",
        "checkedOn": "2026-10-26",
        "source": "Nintendo Canada"
      }
    ],
    "historicalLow": {
      "cents": 259,
      "date": "2024-06-27",
      "platform": "PC",
      "store": "Steam",
      "edition": "Standard Edition",
      "url": "https://isthereanydeal.com/game/celeste/history/"
    },
    "discounts": [
      {
        "finalCents": 701,
        "originalCents": 2807,
        "cut": 75,
        "date": "2026-10-22",
        "platform": "PC",
        "device": "PC",
        "store": "Humble Store",
        "edition": "Standard Edition",
        "status": "active",
        "dateKind": "observed",
        "endDate": "2026-11-05",
        "statusBasis": "Current store quote shows a discount at the check time.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/celeste/history/",
        "offerUrl": null
      },
      {
        "finalCents": 549,
        "originalCents": 2199,
        "cut": 75,
        "date": "2026-10-19",
        "platform": "PC",
        "device": "PC",
        "store": "Epic Games Store",
        "edition": "Standard Edition",
        "status": "active",
        "dateKind": "observed",
        "endDate": "2026-11-02",
        "statusBasis": "Current store quote shows a discount at the check time.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/celeste/history/",
        "offerUrl": "https://itad.link/018d959f-8196-7180-95fc-bdd204a4954a/"
      },
      {
        "finalCents": 649,
        "originalCents": 2599,
        "cut": 75,
        "date": "2026-10-08",
        "platform": "PC",
        "device": "PC",
        "store": "Microsoft Store",
        "edition": "Standard Edition",
        "status": "ended",
        "dateKind": "observed",
        "endDate": null,
        "statusBasis": "A later regular-price observation confirms this promotion ended.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/celeste/history/",
        "offerUrl": "https://itad.link/018d9386-3c5d-7308-bcaf-15d9e22dc9e7/"
      }
    ],
    "isFree": false,
    "guideHubUrl": "https://steamcommunity.com/app/504230/guides/"
  },
  {
    "id": "resident-evil-4",
    "slug": "resident-evil-4",
    "title": "Resident Evil 4",
    "primaryGenre": "Horror",
    "genres": [
      "Horror",
      "Action",
      "Shooter"
    ],
    "tags": [
      "Survival horror",
      "Third-person",
      "Remake"
    ],
    "cardBlurb": "A tense survival-horror action game about resource management and enemy encounters.",
    "platforms": [
      "PC",
      "PlayStation",
      "Xbox"
    ],
    "platformDetails": [
      "PC",
      "PS5 / PS4",
      "Xbox Series / One"
    ],
    "modes": [
      "Single-player"
    ],
    "description": "A survival-horror action game. Fight infected enemies, manage resources and rescue the president's daughter across a tense campaign.",
    "releaseDate": "2023-03-24",
    "developer": "CAPCOM Co., Ltd.",
    "publisher": "CAPCOM Co., Ltd.",
    "cover": {
      "src": "/assets/resident-evil-4-cover.jpg",
      "alt": "Resident Evil 4 cover art",
      "kind": "official"
    },
    "screenshots": [
      {
        "src": "/assets/resident-evil-4-scene-1.jpg",
        "alt": "Resident Evil 4 official screenshot 1",
        "kind": "official"
      },
      {
        "src": "/assets/resident-evil-4-scene-2.jpg",
        "alt": "Resident Evil 4 official screenshot 2",
        "kind": "official"
      }
    ],
    "ratings": [
      {
        "source": "Steam",
        "label": "Positive reviews",
        "score": 97,
        "count": 191906,
        "countLabel": "192k",
        "approxCount": false,
        "scale": "percent",
        "platform": "PC",
        "url": "https://steamcommunity.com/app/2050650/reviews/",
        "checkedOn": "2026-10-25"
      }
    ],
    "basePrices": [
      {
        "platform": "PC",
        "device": "PC",
        "store": "Steam",
        "edition": "Standard Edition",
        "cents": 5999,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://store.steampowered.com/app/2050650/",
        "checkedOn": "2026-10-25",
        "source": "Steam Store"
      },
      {
        "platform": "PC",
        "device": "PC",
        "store": "Fanatical",
        "edition": "Standard Edition",
        "cents": 5999,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://itad.link/018d9386-b8db-71f7-ad8c-f142c6074978/",
        "checkedOn": "2026-10-25",
        "source": "IsThereAnyDeal"
      },
      {
        "platform": "PC",
        "device": "PC",
        "store": "GameBillet",
        "edition": "Standard Edition",
        "cents": 5600,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://itad.link/018d9386-b8db-71f7-ad8c-f142be777811/",
        "checkedOn": "2026-10-25",
        "source": "IsThereAnyDeal"
      }
    ],
    "historicalLow": {
      "cents": 1499,
      "date": "2026-06-04",
      "platform": "PC",
      "store": "Steam",
      "edition": "Standard Edition",
      "url": "https://isthereanydeal.com/game/resident-evil-4/history/"
    },
    "discounts": [
      {
        "finalCents": 1275,
        "originalCents": 5999,
        "cut": 78.7,
        "date": "2026-10-23",
        "platform": "PC",
        "device": "PC",
        "store": "GreenManGaming",
        "edition": "Standard Edition",
        "status": "active",
        "dateKind": "observed",
        "endDate": null,
        "statusBasis": "Current store quote shows a discount at the check time.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/resident-evil-4/history/",
        "offerUrl": null
      },
      {
        "finalCents": 1319,
        "originalCents": 5999,
        "cut": 78,
        "date": "2026-10-23",
        "platform": "PC",
        "device": "PC",
        "store": "Fanatical",
        "edition": "Standard Edition",
        "status": "active",
        "dateKind": "observed",
        "endDate": "2026-10-29",
        "statusBasis": "Current store quote shows a discount at the check time.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/resident-evil-4/history/",
        "offerUrl": "https://itad.link/018d9386-b8db-71f7-ad8c-f142c6074978/"
      },
      {
        "finalCents": 1499,
        "originalCents": 5999,
        "cut": 75,
        "date": "2026-10-21",
        "platform": "PC",
        "device": "PC",
        "store": "Steam",
        "edition": "Standard Edition",
        "status": "active",
        "dateKind": "observed",
        "endDate": "2026-11-03",
        "statusBasis": "Current store quote shows a discount at the check time.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/resident-evil-4/history/",
        "offerUrl": "https://store.steampowered.com/app/2050650/"
      }
    ],
    "isFree": false,
    "guideHubUrl": "https://steamcommunity.com/app/2050650/guides/"
  },
  {
    "id": "subnautica",
    "slug": "subnautica",
    "title": "Subnautica",
    "primaryGenre": "Survival",
    "genres": [
      "Survival",
      "Adventure"
    ],
    "tags": [
      "Underwater",
      "Crafting",
      "Exploration"
    ],
    "cardBlurb": "An underwater survival game about exploration, bases and finding a way off the planet.",
    "platforms": [
      "PC",
      "PlayStation",
      "Xbox",
      "Nintendo"
    ],
    "platformDetails": [
      "PC",
      "PS4 / PS5",
      "Xbox One / Series",
      "Switch"
    ],
    "modes": [
      "Single-player"
    ],
    "description": "An underwater survival game. Explore an alien ocean, gather resources, build bases and submarines, and find a way off the planet.",
    "releaseDate": "2018-01-23",
    "developer": "Unknown Worlds Entertainment",
    "publisher": "Unknown Worlds Entertainment",
    "cover": {
      "src": "/assets/subnautica-cover.jpg",
      "alt": "Subnautica cover art",
      "kind": "official"
    },
    "screenshots": [
      {
        "src": "/assets/subnautica-scene-1.jpg",
        "alt": "Subnautica official screenshot 1",
        "kind": "official"
      },
      {
        "src": "/assets/subnautica-scene-2.jpg",
        "alt": "Subnautica official screenshot 2",
        "kind": "official"
      }
    ],
    "ratings": [
      {
        "source": "Steam",
        "label": "Positive reviews",
        "score": 97,
        "count": 342341,
        "countLabel": "342k",
        "approxCount": false,
        "scale": "percent",
        "platform": "PC",
        "url": "https://steamcommunity.com/app/264710/reviews/",
        "checkedOn": "2026-10-25"
      },
      {
        "source": "Metacritic User Score",
        "label": "User score",
        "score": 8.5,
        "count": 2541,
        "countLabel": "3k",
        "approxCount": false,
        "scale": "ten",
        "platform": "PC",
        "url": "https://metacritic.com/game/subnautica/user-reviews/?platform=pc",
        "checkedOn": "2026-10-25"
      }
    ],
    "basePrices": [
      {
        "platform": "PC",
        "device": "PC",
        "store": "Steam",
        "edition": "Standard Edition",
        "cents": 3999,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://store.steampowered.com/app/264710/",
        "checkedOn": "2026-10-25",
        "source": "Steam Store"
      },
      {
        "platform": "PC",
        "device": "PC",
        "store": "Fanatical",
        "edition": "Standard Edition",
        "cents": 3999,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://itad.link/018d9386-d619-7279-ab68-a339b0a974eb/",
        "checkedOn": "2026-10-25",
        "source": "IsThereAnyDeal"
      },
      {
        "platform": "PC",
        "device": "PC",
        "store": "GameBillet",
        "edition": "Standard Edition",
        "cents": 4199,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://itad.link/018d9386-d619-7279-ab68-a339bee770e4/",
        "checkedOn": "2026-10-25",
        "source": "IsThereAnyDeal"
      },
      {
        "platform": "Nintendo",
        "device": "Nintendo Switch",
        "store": "Nintendo eShop",
        "edition": "Standard Edition",
        "cents": 3999,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://www.nintendo.com/en-ca/store/products/subnautica-switch/",
        "checkedOn": "2026-10-26",
        "source": "Nintendo Canada"
      }
    ],
    "historicalLow": {
      "cents": 999,
      "date": "2025-08-13",
      "platform": "PC",
      "store": "Steam",
      "edition": "Standard Edition",
      "url": "https://isthereanydeal.com/game/subnautica/history/"
    },
    "discounts": [
      {
        "finalCents": 999,
        "originalCents": 3999,
        "cut": 75,
        "date": "2026-10-20",
        "platform": "PC",
        "device": "PC",
        "store": "Epic Games Store",
        "edition": "Standard Edition",
        "status": "active",
        "dateKind": "observed",
        "endDate": "2026-11-02",
        "statusBasis": "Current store quote shows a discount at the check time.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/subnautica/history/",
        "offerUrl": null
      },
      {
        "finalCents": 999,
        "originalCents": 3999,
        "cut": 75,
        "date": "2026-10-01",
        "platform": "PC",
        "device": "PC",
        "store": "Steam",
        "edition": "Standard Edition",
        "status": "ended",
        "dateKind": "observed",
        "endDate": null,
        "statusBasis": "A later regular-price observation confirms this promotion ended.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/subnautica/history/",
        "offerUrl": "https://store.steampowered.com/app/264710/"
      },
      {
        "finalCents": 3779,
        "originalCents": 4199,
        "cut": 10,
        "date": "2026-09-28",
        "platform": "PC",
        "device": "PC",
        "store": "GamesPlanet US",
        "edition": "Standard Edition",
        "status": "active",
        "dateKind": "observed",
        "endDate": null,
        "statusBasis": "Current store quote shows a discount at the check time.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/subnautica/history/",
        "offerUrl": null
      }
    ],
    "isFree": false,
    "guideHubUrl": "https://steamcommunity.com/app/264710/guides/",
    "currentPrices": [
      {
        "platform": "Nintendo",
        "device": "Nintendo Switch",
        "store": "Nintendo eShop",
        "edition": "Standard Edition",
        "cents": 999,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://www.nintendo.com/en-ca/store/products/subnautica-switch/",
        "checkedOn": "2026-10-26",
        "source": "Nintendo Canada"
      }
    ]
  },
  {
    "id": "the-sims-4",
    "slug": "the-sims-4",
    "title": "The Sims 4",
    "primaryGenre": "Simulation",
    "genres": [
      "Simulation"
    ],
    "tags": [
      "Life sim",
      "Building",
      "Sandbox"
    ],
    "cardBlurb": "A life-simulation sandbox for building homes, households and everyday stories.",
    "platforms": [
      "PC",
      "PlayStation",
      "Xbox"
    ],
    "platformDetails": [
      "PC",
      "PS4 / PS5",
      "Xbox One / Series"
    ],
    "modes": [
      "Single-player"
    ],
    "description": "A life-simulation sandbox. Create households, build homes and guide Sims through careers, relationships and everyday life.",
    "releaseDate": "2014-09-02",
    "developer": "Maxis",
    "publisher": "Electronic Arts",
    "cover": {
      "src": "/assets/the-sims-4-cover.jpg",
      "alt": "The Sims 4 cover art",
      "kind": "official"
    },
    "screenshots": [
      {
        "src": "/assets/the-sims-4-scene-1.jpg",
        "alt": "The Sims 4 official screenshot 1",
        "kind": "official"
      },
      {
        "src": "/assets/the-sims-4-scene-2.jpg",
        "alt": "The Sims 4 official screenshot 2",
        "kind": "official"
      }
    ],
    "ratings": [
      {
        "source": "Steam",
        "label": "Positive reviews",
        "score": 86,
        "count": 200801,
        "countLabel": "201k",
        "approxCount": false,
        "scale": "percent",
        "platform": "PC",
        "url": "https://steamcommunity.com/app/1222670/reviews/",
        "checkedOn": "2026-10-25"
      },
      {
        "source": "Metacritic User Score",
        "label": "User score",
        "score": 4.5,
        "count": 3139,
        "countLabel": "3k",
        "approxCount": false,
        "scale": "ten",
        "platform": "PC",
        "url": "https://metacritic.com/game/the-sims-4/user-reviews/?platform=pc",
        "checkedOn": "2026-10-25"
      }
    ],
    "basePrices": [
      {
        "platform": "PC",
        "device": "PC",
        "store": "Steam",
        "edition": "Standard Edition",
        "cents": 0,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://store.steampowered.com/app/1222670/",
        "checkedOn": "2026-10-25",
        "source": "Steam Store"
      }
    ],
    "historicalLow": null,
    "discounts": [],
    "isFree": true,
    "guideHubUrl": "https://steamcommunity.com/app/1222670/guides/"
  },
  {
    "id": "cities-skylines",
    "slug": "cities-skylines",
    "title": "Cities: Skylines",
    "primaryGenre": "Simulation",
    "genres": [
      "Simulation",
      "Strategy"
    ],
    "tags": [
      "City builder",
      "Management",
      "Sandbox"
    ],
    "cardBlurb": "A city-building simulation about zoning, services, traffic and growth.",
    "platforms": [
      "PC",
      "PlayStation",
      "Xbox",
      "Nintendo"
    ],
    "platformDetails": [
      "PC",
      "PS4",
      "Xbox One",
      "Switch"
    ],
    "modes": [
      "Single-player"
    ],
    "description": "A city-building simulation. Zone land, build roads and services, and manage traffic, budgets and growth.",
    "releaseDate": "2015-03-10",
    "developer": "Colossal Order",
    "publisher": "Paradox Interactive",
    "cover": {
      "src": "/assets/cities-skylines-cover.jpg",
      "alt": "Cities: Skylines cover art",
      "kind": "official"
    },
    "screenshots": [
      {
        "src": "/assets/cities-skylines-scene-1.jpg",
        "alt": "Cities: Skylines official screenshot 1",
        "kind": "official"
      },
      {
        "src": "/assets/cities-skylines-scene-2.jpg",
        "alt": "Cities: Skylines official screenshot 2",
        "kind": "official"
      }
    ],
    "ratings": [
      {
        "source": "Steam",
        "label": "Positive reviews",
        "score": 92,
        "count": 219412,
        "countLabel": "219k",
        "approxCount": false,
        "scale": "percent",
        "platform": "PC",
        "url": "https://steamcommunity.com/app/255710/reviews/",
        "checkedOn": "2026-10-25"
      },
      {
        "source": "Metacritic User Score",
        "label": "User score",
        "score": 8.5,
        "count": 2728,
        "countLabel": "3k",
        "approxCount": false,
        "scale": "ten",
        "platform": "PC",
        "url": "https://metacritic.com/game/cities-skylines/user-reviews/?platform=pc",
        "checkedOn": "2026-10-25"
      }
    ],
    "basePrices": [
      {
        "platform": "PC",
        "device": "PC",
        "store": "Steam",
        "edition": "Standard Edition",
        "cents": 3999,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://store.steampowered.com/app/255710/",
        "checkedOn": "2026-10-25",
        "source": "Steam Store"
      },
      {
        "platform": "PC",
        "device": "PC",
        "store": "Fanatical",
        "edition": "Standard Edition",
        "cents": 4019,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://itad.link/018d9386-3c80-7213-afd2-2c802de6eac1/",
        "checkedOn": "2026-10-25",
        "source": "IsThereAnyDeal"
      },
      {
        "platform": "PC",
        "device": "PC",
        "store": "GameBillet",
        "edition": "Standard Edition",
        "cents": 4199,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://itad.link/018d9386-3c80-7213-afd2-2c8028efb3af/",
        "checkedOn": "2026-10-25",
        "source": "IsThereAnyDeal"
      }
    ],
    "historicalLow": {
      "cents": 399,
      "date": "2024-11-27",
      "platform": "PC",
      "store": "Steam",
      "edition": "Standard Edition",
      "url": "https://isthereanydeal.com/game/cities-skylines/history/"
    },
    "discounts": [
      {
        "finalCents": 3617,
        "originalCents": 4019,
        "cut": 10,
        "date": "2026-10-24",
        "platform": "PC",
        "device": "PC",
        "store": "Fanatical",
        "edition": "Standard Edition",
        "status": "active",
        "dateKind": "observed",
        "endDate": "2026-10-31",
        "statusBasis": "Current store quote shows a discount at the check time.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/cities-skylines/history/",
        "offerUrl": "https://itad.link/018d9386-3c80-7213-afd2-2c802de6eac1/"
      },
      {
        "finalCents": 1199,
        "originalCents": 3999,
        "cut": 70,
        "date": "2026-10-19",
        "platform": "PC",
        "device": "PC",
        "store": "Epic Games Store",
        "edition": "Standard Edition",
        "status": "active",
        "dateKind": "observed",
        "endDate": "2026-11-02",
        "statusBasis": "Current store quote shows a discount at the check time.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/cities-skylines/history/",
        "offerUrl": null
      },
      {
        "finalCents": 1199,
        "originalCents": 3999,
        "cut": 70,
        "date": "2026-10-01",
        "platform": "PC",
        "device": "PC",
        "store": "Steam",
        "edition": "Standard Edition",
        "status": "ended",
        "dateKind": "observed",
        "endDate": null,
        "statusBasis": "A later regular-price observation confirms this promotion ended.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/cities-skylines/history/",
        "offerUrl": "https://store.steampowered.com/app/255710/"
      }
    ],
    "isFree": false,
    "guideHubUrl": "https://steamcommunity.com/app/255710/guides/"
  },
  {
    "id": "street-fighter-6",
    "slug": "street-fighter-6",
    "title": "Street Fighter 6",
    "primaryGenre": "Fighting",
    "genres": [
      "Fighting"
    ],
    "tags": [
      "2D fighter",
      "Competitive",
      "Multiplayer"
    ],
    "cardBlurb": "A 2D fighter with Drive mechanics, World Tour and online ranked play.",
    "platforms": [
      "PC",
      "PlayStation",
      "Xbox",
      "Nintendo"
    ],
    "platformDetails": [
      "PC",
      "PS5 / PS4",
      "Xbox Series X|S",
      "Nintendo Switch 2"
    ],
    "modes": [
      "Single-player",
      "Multiplayer"
    ],
    "multiplayer": [
      "Online PvP",
      "Local versus"
    ],
    "description": "A 2D fighting game. Learn a character, use Drive mechanics and fight through World Tour, Battle Hub or online ranked modes.",
    "releaseDate": "2023-06-02",
    "developer": "CAPCOM Co., Ltd.",
    "publisher": "CAPCOM Co., Ltd.",
    "cover": {
      "src": "/assets/street-fighter-6-cover.jpg",
      "alt": "Street Fighter 6 cover art",
      "kind": "official"
    },
    "screenshots": [
      {
        "src": "/assets/street-fighter-6-scene-1.jpg",
        "alt": "Street Fighter 6 official screenshot 1",
        "kind": "official"
      },
      {
        "src": "/assets/street-fighter-6-scene-2.jpg",
        "alt": "Street Fighter 6 official screenshot 2",
        "kind": "official"
      }
    ],
    "ratings": [
      {
        "source": "Steam",
        "label": "Positive reviews",
        "score": 81,
        "count": 51082,
        "countLabel": "51k",
        "approxCount": false,
        "scale": "percent",
        "platform": "PC",
        "url": "https://steamcommunity.com/app/1364780/reviews/",
        "checkedOn": "2026-10-25"
      },
      {
        "source": "Metacritic User Score",
        "label": "User score",
        "score": 7.3,
        "count": 1281,
        "countLabel": "1k",
        "approxCount": false,
        "scale": "ten",
        "platform": "PC",
        "url": "https://metacritic.com/game/street-fighter-6/user-reviews/?platform=pc",
        "checkedOn": "2026-10-25"
      }
    ],
    "basePrices": [
      {
        "platform": "PC",
        "device": "PC",
        "store": "Steam",
        "edition": "Standard Edition",
        "cents": 5499,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://store.steampowered.com/app/1364780/",
        "checkedOn": "2026-10-25",
        "source": "Steam Store"
      },
      {
        "platform": "PC",
        "device": "PC",
        "store": "Fanatical",
        "edition": "Standard Edition",
        "cents": 5499,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://itad.link/018d9386-d551-7173-84ae-808711f55c8a/",
        "checkedOn": "2026-10-25",
        "source": "IsThereAnyDeal"
      },
      {
        "platform": "PC",
        "device": "PC",
        "store": "GameBillet",
        "edition": "Standard Edition",
        "cents": 5600,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://itad.link/018d9386-d551-7173-84ae-80870d856d78/",
        "checkedOn": "2026-10-25",
        "source": "IsThereAnyDeal"
      }
    ],
    "historicalLow": {
      "cents": 2199,
      "date": "2026-10-01",
      "platform": "PC",
      "store": "Steam",
      "edition": "Standard Edition",
      "url": "https://isthereanydeal.com/game/street-fighter-6/history/"
    },
    "discounts": [
      {
        "finalCents": 1870,
        "originalCents": 5499,
        "cut": 66,
        "date": "2026-10-23",
        "platform": "PC",
        "device": "PC",
        "store": "GreenManGaming",
        "edition": "Standard Edition",
        "status": "active",
        "dateKind": "observed",
        "endDate": null,
        "statusBasis": "Current store quote shows a discount at the check time.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/street-fighter-6/history/",
        "offerUrl": null
      },
      {
        "finalCents": 4640,
        "originalCents": 5600,
        "cut": 17.1,
        "date": "2026-10-19",
        "platform": "PC",
        "device": "PC",
        "store": "GameBillet",
        "edition": "Standard Edition",
        "status": "active",
        "dateKind": "observed",
        "endDate": null,
        "statusBasis": "Current store quote shows a discount at the check time.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/street-fighter-6/history/",
        "offerUrl": "https://itad.link/018d9386-d551-7173-84ae-80870d856d78/"
      },
      {
        "finalCents": 5039,
        "originalCents": 5600,
        "cut": 10,
        "date": "2026-10-18",
        "platform": "PC",
        "device": "PC",
        "store": "GamesPlanet US",
        "edition": "Standard Edition",
        "status": "active",
        "dateKind": "observed",
        "endDate": null,
        "statusBasis": "Current store quote shows a discount at the check time.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/street-fighter-6/history/",
        "offerUrl": null
      }
    ],
    "isFree": false,
    "guideHubUrl": "https://steamcommunity.com/app/1364780/guides/",
    "releaseDates": [
      {
        "platform": "Nintendo Switch 2",
        "date": "2025-06-05",
        "sourceUrl": "https://www.nintendo.com/en-ca/store/products/street-fighter-6-switch-2/",
        "checkedOn": "2026-10-26"
      }
    ]
  },
  {
    "id": "tekken-8",
    "slug": "tekken-8",
    "title": "TEKKEN 8",
    "primaryGenre": "Fighting",
    "genres": [
      "Fighting"
    ],
    "tags": [
      "3D fighter",
      "Competitive",
      "Multiplayer"
    ],
    "cardBlurb": "A 3D fighter about character mastery, juggles and local or online competition.",
    "platforms": [
      "PC",
      "PlayStation",
      "Xbox"
    ],
    "platformDetails": [
      "PC",
      "PS5",
      "Xbox Series X|S"
    ],
    "modes": [
      "Single-player",
      "Multiplayer"
    ],
    "multiplayer": [
      "Online PvP",
      "Local versus"
    ],
    "description": "A 3D fighting game. Pick a character, learn juggles and defensive options, and fight online or locally.",
    "releaseDate": "2024-01-26",
    "developer": "Bandai Namco Studios Inc.",
    "publisher": "Bandai Namco Entertainment",
    "cover": {
      "src": "/assets/tekken-8-cover.jpg",
      "alt": "TEKKEN 8 cover art",
      "kind": "official"
    },
    "screenshots": [
      {
        "src": "/assets/tekken-8-scene-1.jpg",
        "alt": "TEKKEN 8 official screenshot 1",
        "kind": "official"
      },
      {
        "src": "/assets/tekken-8-scene-2.jpg",
        "alt": "TEKKEN 8 official screenshot 2",
        "kind": "official"
      }
    ],
    "ratings": [
      {
        "source": "Steam",
        "label": "Positive reviews",
        "score": 56,
        "count": 46474,
        "countLabel": "46k",
        "approxCount": false,
        "scale": "percent",
        "platform": "PC",
        "url": "https://steamcommunity.com/app/1778820/reviews/",
        "checkedOn": "2026-10-25"
      },
      {
        "source": "Metacritic User Score",
        "label": "User score",
        "score": 6.1,
        "count": 1306,
        "countLabel": "1k",
        "approxCount": false,
        "scale": "ten",
        "platform": "PC",
        "url": "https://metacritic.com/game/tekken-8/user-reviews/?platform=pc",
        "checkedOn": "2026-10-25"
      }
    ],
    "basePrices": [
      {
        "platform": "PC",
        "device": "PC",
        "store": "Steam",
        "edition": "Standard Edition",
        "cents": 5349,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://store.steampowered.com/app/1778820/",
        "checkedOn": "2026-10-25",
        "source": "Steam Store"
      },
      {
        "platform": "PC",
        "device": "PC",
        "store": "Fanatical",
        "edition": "Standard Edition",
        "cents": 5349,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://itad.link/018d9386-dbed-7395-965a-a9779bf28893/",
        "checkedOn": "2026-10-25",
        "source": "IsThereAnyDeal"
      },
      {
        "platform": "PC",
        "device": "PC",
        "store": "GameBillet",
        "edition": "Standard Edition",
        "cents": 5600,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://itad.link/018d9386-dbed-7395-965a-a977a12a66e2/",
        "checkedOn": "2026-10-25",
        "source": "IsThereAnyDeal"
      }
    ],
    "historicalLow": {
      "cents": 3199,
      "date": "2025-12-11",
      "platform": "PC",
      "store": "Steam",
      "edition": "Standard Edition",
      "url": "https://isthereanydeal.com/game/tekken-8/history/"
    },
    "discounts": [
      {
        "finalCents": 4800,
        "originalCents": 5349,
        "cut": 10.3,
        "date": "2026-10-16",
        "platform": "PC",
        "device": "PC",
        "store": "Fanatical",
        "edition": "Standard Edition",
        "status": "active",
        "dateKind": "observed",
        "endDate": "2026-10-30",
        "statusBasis": "Current store quote shows a discount at the check time.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/tekken-8/history/",
        "offerUrl": "https://itad.link/018d9386-dbed-7395-965a-a9779bf28893/"
      },
      {
        "finalCents": 5011,
        "originalCents": 5600,
        "cut": 10.5,
        "date": "2026-10-16",
        "platform": "PC",
        "device": "PC",
        "store": "GameBillet",
        "edition": "Standard Edition",
        "status": "active",
        "dateKind": "observed",
        "endDate": null,
        "statusBasis": "Current store quote shows a discount at the check time.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/tekken-8/history/",
        "offerUrl": "https://itad.link/018d9386-dbed-7395-965a-a977a12a66e2/"
      },
      {
        "finalCents": 5039,
        "originalCents": 5600,
        "cut": 10,
        "date": "2026-10-15",
        "platform": "PC",
        "device": "PC",
        "store": "GamesPlanet US",
        "edition": "Standard Edition",
        "status": "active",
        "dateKind": "observed",
        "endDate": null,
        "statusBasis": "Current store quote shows a discount at the check time.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/tekken-8/history/",
        "offerUrl": null
      }
    ],
    "isFree": false,
    "guideHubUrl": "https://steamcommunity.com/app/1778820/guides/"
  },
  {
    "id": "hatsune-miku-project-diva-mega-mix",
    "slug": "hatsune-miku-project-diva-mega-mix",
    "title": "Hatsune Miku: Project DIVA Mega Mix+",
    "primaryGenre": "Rhythm",
    "genres": [
      "Rhythm"
    ],
    "tags": [
      "Music",
      "Anime",
      "Controller"
    ],
    "cardBlurb": "A rhythm game about hitting notes, unlocking modules and customising performances.",
    "platforms": [
      "PC",
      "Nintendo"
    ],
    "platformDetails": [
      "PC",
      "Switch"
    ],
    "modes": [
      "Single-player"
    ],
    "description": "A rhythm game. Play songs by tapping notes to the beat, unlock modules and customize the performance.",
    "releaseDate": "2022-05-26",
    "developer": "SEGA",
    "publisher": "SEGA",
    "cover": {
      "src": "/assets/hatsune-miku-project-diva-mega-mix-cover.jpg",
      "alt": "Hatsune Miku: Project DIVA Mega Mix+ cover art",
      "kind": "official"
    },
    "screenshots": [
      {
        "src": "/assets/hatsune-miku-project-diva-mega-mix-scene-1.jpg",
        "alt": "Hatsune Miku: Project DIVA Mega Mix+ official screenshot 1",
        "kind": "official"
      },
      {
        "src": "/assets/hatsune-miku-project-diva-mega-mix-scene-2.jpg",
        "alt": "Hatsune Miku: Project DIVA Mega Mix+ official screenshot 2",
        "kind": "official"
      }
    ],
    "ratings": [
      {
        "source": "Steam",
        "label": "Positive reviews",
        "score": 94,
        "count": 19678,
        "countLabel": "20k",
        "approxCount": false,
        "scale": "percent",
        "platform": "PC",
        "url": "https://steamcommunity.com/app/1761390/reviews/",
        "checkedOn": "2026-10-25"
      }
    ],
    "basePrices": [
      {
        "platform": "PC",
        "device": "PC",
        "store": "Steam",
        "edition": "Standard Edition",
        "cents": 5349,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://store.steampowered.com/app/1761390/",
        "checkedOn": "2026-10-25",
        "source": "Steam Store"
      },
      {
        "platform": "PC",
        "device": "PC",
        "store": "Fanatical",
        "edition": "Standard Edition",
        "cents": 5399,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://itad.link/018d9386-71f8-734d-bc3b-dfcdd6aa21c3/",
        "checkedOn": "2026-10-25",
        "source": "IsThereAnyDeal"
      },
      {
        "platform": "PC",
        "device": "PC",
        "store": "GameBillet",
        "edition": "Standard Edition",
        "cents": 5516,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://itad.link/018d9386-71f8-734d-bc3b-dfcdd163c7a5/",
        "checkedOn": "2026-10-25",
        "source": "IsThereAnyDeal"
      }
    ],
    "historicalLow": {
      "cents": 2139,
      "date": "2023-11-21",
      "platform": "PC",
      "store": "Steam",
      "edition": "Standard Edition",
      "url": "https://isthereanydeal.com/game/hatsune-miku-project-diva-mega-mix_plus/history/"
    },
    "discounts": [
      {
        "finalCents": 4570,
        "originalCents": 5516,
        "cut": 17.2,
        "date": "2026-10-08",
        "platform": "PC",
        "device": "PC",
        "store": "GameBillet",
        "edition": "Standard Edition",
        "status": "active",
        "dateKind": "observed",
        "endDate": null,
        "statusBasis": "Current store quote shows a discount at the check time.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/hatsune-miku-project-diva-mega-mix_plus/history/",
        "offerUrl": "https://itad.link/018d9386-71f8-734d-bc3b-dfcdd163c7a5/"
      },
      {
        "finalCents": 4964,
        "originalCents": 5516,
        "cut": 10,
        "date": "2026-10-08",
        "platform": "PC",
        "device": "PC",
        "store": "GamesPlanet US",
        "edition": "Standard Edition",
        "status": "active",
        "dateKind": "observed",
        "endDate": null,
        "statusBasis": "Current store quote shows a discount at the check time.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/hatsune-miku-project-diva-mega-mix_plus/history/",
        "offerUrl": null
      },
      {
        "finalCents": 2139,
        "originalCents": 5349,
        "cut": 60,
        "date": "2026-10-01",
        "platform": "PC",
        "device": "PC",
        "store": "Steam",
        "edition": "Standard Edition",
        "status": "ended",
        "dateKind": "observed",
        "endDate": null,
        "statusBasis": "A later regular-price observation confirms this promotion ended.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/hatsune-miku-project-diva-mega-mix_plus/history/",
        "offerUrl": "https://store.steampowered.com/app/1761390/"
      }
    ],
    "isFree": false,
    "guideHubUrl": "https://steamcommunity.com/app/1761390/guides/",
    "releaseDates": [
      {
        "platform": "PC",
        "date": "2022-05-26",
        "sourceUrl": "https://store.steampowered.com/app/1761390/",
        "checkedOn": "2026-10-26"
      }
    ]
  },
  {
    "id": "balatro",
    "slug": "balatro",
    "title": "Balatro",
    "primaryGenre": "Card",
    "genres": [
      "Card",
      "Roguelike"
    ],
    "tags": [
      "Deckbuilder",
      "Poker",
      "Runs"
    ],
    "cardBlurb": "A poker-inspired deckbuilder about jokers, scoring hands and increasingly hard blinds.",
    "platforms": [
      "PC",
      "PlayStation",
      "Xbox",
      "Nintendo"
    ],
    "platformDetails": [
      "PC",
      "PS4 / PS5",
      "Xbox One / Series",
      "Switch"
    ],
    "modes": [
      "Single-player"
    ],
    "description": "A poker-inspired deckbuilder. Build scoring hands with jokers and modifiers, then clear increasingly difficult blinds.",
    "releaseDate": "2024-02-20",
    "developer": "LocalThunk",
    "publisher": "Playstack",
    "cover": {
      "src": "/assets/balatro-cover.jpg",
      "alt": "Balatro cover art",
      "kind": "official"
    },
    "screenshots": [
      {
        "src": "/assets/balatro-scene-1.jpg",
        "alt": "Balatro official screenshot 1",
        "kind": "official"
      },
      {
        "src": "/assets/balatro-scene-2.jpg",
        "alt": "Balatro official screenshot 2",
        "kind": "official"
      }
    ],
    "ratings": [
      {
        "source": "Steam",
        "label": "Positive reviews",
        "score": 97,
        "count": 162125,
        "countLabel": "162k",
        "approxCount": false,
        "scale": "percent",
        "platform": "PC",
        "url": "https://steamcommunity.com/app/2379780/reviews/",
        "checkedOn": "2026-10-25"
      },
      {
        "source": "Metacritic User Score",
        "label": "User score",
        "score": 8.4,
        "count": 2082,
        "countLabel": "2k",
        "approxCount": false,
        "scale": "ten",
        "platform": "PC",
        "url": "https://metacritic.com/game/balatro/user-reviews/?platform=pc",
        "checkedOn": "2026-10-25"
      }
    ],
    "basePrices": [
      {
        "platform": "PC",
        "device": "PC",
        "store": "Steam",
        "edition": "Standard Edition",
        "cents": 1899,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://store.steampowered.com/app/2379780/",
        "checkedOn": "2026-10-25",
        "source": "Steam Store"
      },
      {
        "platform": "PC",
        "device": "PC",
        "store": "Fanatical",
        "edition": "Standard Edition",
        "cents": 1899,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://itad.link/018dc7ad-451d-702f-a514-9a39a43e2ebc/",
        "checkedOn": "2026-10-25",
        "source": "IsThereAnyDeal"
      },
      {
        "platform": "PC",
        "device": "PC",
        "store": "GameBillet",
        "edition": "Standard Edition",
        "cents": 2099,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://itad.link/018dd6b7-8347-73c2-aef9-a6a78b91f801/",
        "checkedOn": "2026-10-25",
        "source": "IsThereAnyDeal"
      },
      {
        "platform": "Nintendo",
        "device": "Nintendo Switch",
        "store": "Nintendo eShop",
        "edition": "Standard Edition",
        "cents": 1899,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://www.nintendo.com/en-ca/store/products/balatro-switch/",
        "checkedOn": "2026-10-26",
        "source": "Nintendo Canada"
      }
    ],
    "historicalLow": {
      "cents": 1519,
      "date": "2026-02-12",
      "platform": "PC",
      "store": "Steam",
      "edition": "Standard Edition",
      "url": "https://isthereanydeal.com/game/balatro/history/"
    },
    "discounts": [
      {
        "finalCents": 1507,
        "originalCents": 2099,
        "cut": 28.2,
        "date": "2026-10-23",
        "platform": "PC",
        "device": "PC",
        "store": "GameBillet",
        "edition": "Standard Edition",
        "status": "active",
        "dateKind": "observed",
        "endDate": null,
        "statusBasis": "Current store quote shows a discount at the check time.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/balatro/history/",
        "offerUrl": "https://itad.link/018dd6b7-8347-73c2-aef9-a6a78b91f801/"
      },
      {
        "finalCents": 1614,
        "originalCents": 1899,
        "cut": 15,
        "date": "2026-10-23",
        "platform": "PC",
        "device": "PC",
        "store": "GreenManGaming",
        "edition": "Standard Edition",
        "status": "active",
        "dateKind": "observed",
        "endDate": null,
        "statusBasis": "Current store quote shows a discount at the check time.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/balatro/history/",
        "offerUrl": null
      },
      {
        "finalCents": 1519,
        "originalCents": 1899,
        "cut": 20,
        "date": "2026-10-22",
        "platform": "PC",
        "device": "PC",
        "store": "GamersGate",
        "edition": "Standard Edition",
        "status": "active",
        "dateKind": "observed",
        "endDate": "2026-11-05",
        "statusBasis": "Current store quote shows a discount at the check time.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/balatro/history/",
        "offerUrl": null
      }
    ],
    "isFree": false,
    "guideHubUrl": "https://steamcommunity.com/app/2379780/guides/",
    "currentPrices": [
      {
        "platform": "Nintendo",
        "device": "Nintendo Switch",
        "store": "Nintendo eShop",
        "edition": "Standard Edition",
        "cents": 1614,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://www.nintendo.com/en-ca/store/products/balatro-switch/",
        "checkedOn": "2026-10-26",
        "source": "Nintendo Canada"
      }
    ]
  },
  {
    "id": "slay-the-spire",
    "slug": "slay-the-spire",
    "title": "Slay the Spire",
    "primaryGenre": "Card",
    "genres": [
      "Card",
      "Roguelike",
      "Strategy"
    ],
    "tags": [
      "Deckbuilder",
      "Relics",
      "Runs"
    ],
    "cardBlurb": "A roguelike deckbuilder about growing a deck, choosing relics and climbing the Spire.",
    "platforms": [
      "PC",
      "PlayStation",
      "Xbox",
      "Nintendo"
    ],
    "platformDetails": [
      "PC",
      "PS4",
      "Xbox One",
      "Switch"
    ],
    "modes": [
      "Single-player"
    ],
    "description": "A roguelike deckbuilder. Climb the Spire with a growing deck, choose relics and fight turn-based battles.",
    "releaseDate": "2019-01-23",
    "developer": "Mega Crit",
    "publisher": "Mega Crit",
    "cover": {
      "src": "/assets/slay-the-spire-cover.jpg",
      "alt": "Slay the Spire cover art",
      "kind": "official"
    },
    "screenshots": [
      {
        "src": "/assets/slay-the-spire-scene-1.jpg",
        "alt": "Slay the Spire official screenshot 1",
        "kind": "official"
      },
      {
        "src": "/assets/slay-the-spire-scene-2.jpg",
        "alt": "Slay the Spire official screenshot 2",
        "kind": "official"
      }
    ],
    "ratings": [
      {
        "source": "Steam",
        "label": "Positive reviews",
        "score": 97,
        "count": 192661,
        "countLabel": "193k",
        "approxCount": false,
        "scale": "percent",
        "platform": "PC",
        "url": "https://steamcommunity.com/app/646570/reviews/",
        "checkedOn": "2026-10-25"
      },
      {
        "source": "Metacritic User Score",
        "label": "User score",
        "score": 7.9,
        "count": 1480,
        "countLabel": "1k",
        "approxCount": false,
        "scale": "ten",
        "platform": "PC",
        "url": "https://metacritic.com/game/slay-the-spire/user-reviews/?platform=pc",
        "checkedOn": "2026-10-25"
      }
    ],
    "basePrices": [
      {
        "platform": "PC",
        "device": "PC",
        "store": "Steam",
        "edition": "Standard Edition",
        "cents": 3199,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://store.steampowered.com/app/646570/",
        "checkedOn": "2026-10-25",
        "source": "Steam Store"
      },
      {
        "platform": "PC",
        "device": "PC",
        "store": "GOG",
        "edition": "Standard Edition",
        "cents": 2899,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://itad.link/018d9386-cb20-727a-9d0d-2ea263e3f56e/",
        "checkedOn": "2026-10-25",
        "source": "IsThereAnyDeal"
      },
      {
        "platform": "PC",
        "device": "PC",
        "store": "Microsoft Store",
        "edition": "Standard Edition",
        "cents": 3199,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://itad.link/018d9386-cb21-72f4-bc6d-421f2806f189/",
        "checkedOn": "2026-10-25",
        "source": "IsThereAnyDeal"
      },
      {
        "platform": "Nintendo",
        "device": "Nintendo Switch",
        "store": "Nintendo eShop",
        "edition": "Standard Edition",
        "cents": 3349,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://www.nintendo.com/en-ca/store/products/slay-the-spire-switch/",
        "checkedOn": "2026-10-26",
        "source": "Nintendo Canada"
      }
    ],
    "historicalLow": {
      "cents": 319,
      "date": "2025-12-18",
      "platform": "PC",
      "store": "Steam",
      "edition": "Standard Edition",
      "url": "https://isthereanydeal.com/game/slay-the-spire/history/"
    },
    "discounts": [
      {
        "finalCents": 799,
        "originalCents": 3199,
        "cut": 75,
        "date": "2026-10-20",
        "platform": "PC",
        "device": "PC",
        "store": "Steam",
        "edition": "Standard Edition",
        "status": "active",
        "dateKind": "observed",
        "endDate": "2026-11-03",
        "statusBasis": "Current store quote shows a discount at the check time.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/slay-the-spire/history/",
        "offerUrl": "https://store.steampowered.com/app/646570/"
      },
      {
        "finalCents": 724,
        "originalCents": 2899,
        "cut": 75,
        "date": "2026-08-13",
        "platform": "PC",
        "device": "PC",
        "store": "Humble Store",
        "edition": "Standard Edition",
        "status": "ended",
        "dateKind": "observed",
        "endDate": null,
        "statusBasis": "A later regular-price observation confirms this promotion ended.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/slay-the-spire/history/",
        "offerUrl": null
      },
      {
        "finalCents": 729,
        "originalCents": 2899,
        "cut": 74.9,
        "date": "2024-05-28",
        "platform": "PC",
        "device": "PC",
        "store": "GOG",
        "edition": "Standard Edition",
        "status": "ended",
        "dateKind": "observed",
        "endDate": null,
        "statusBasis": "A later regular-price observation confirms this promotion ended.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/slay-the-spire/history/",
        "offerUrl": "https://itad.link/018d9386-cb20-727a-9d0d-2ea263e3f56e/"
      }
    ],
    "isFree": false,
    "guideHubUrl": "https://steamcommunity.com/app/646570/guides/"
  },
  {
    "id": "it-takes-two",
    "slug": "it-takes-two",
    "title": "It Takes Two",
    "primaryGenre": "Adventure",
    "genres": [
      "Adventure",
      "Platformer",
      "Puzzle"
    ],
    "tags": [
      "Co-op",
      "Story",
      "Asymmetric"
    ],
    "cardBlurb": "A two-player co-op adventure built around split abilities and cooperative puzzles.",
    "platforms": [
      "PC",
      "PlayStation",
      "Xbox",
      "Nintendo"
    ],
    "platformDetails": [
      "PC",
      "PS5 / PS4",
      "Xbox Series / One",
      "Nintendo Switch"
    ],
    "modes": [
      "Multiplayer"
    ],
    "multiplayer": [
      "Online co-op",
      "Local co-op"
    ],
    "description": "A two-player co-op adventure. Play as a split couple, use different abilities in each chapter and solve co-op puzzles together.",
    "releaseDate": "2021-03-26",
    "developer": "Hazelight Studios",
    "publisher": "Electronic Arts",
    "cover": {
      "src": "/assets/it-takes-two-cover.jpg",
      "alt": "It Takes Two cover art",
      "kind": "official"
    },
    "screenshots": [
      {
        "src": "/assets/it-takes-two-scene-1.jpg",
        "alt": "It Takes Two official screenshot 1",
        "kind": "official"
      },
      {
        "src": "/assets/it-takes-two-scene-2.jpg",
        "alt": "It Takes Two official screenshot 2",
        "kind": "official"
      }
    ],
    "ratings": [
      {
        "source": "Steam",
        "label": "Positive reviews",
        "score": 95,
        "count": 219648,
        "countLabel": "220k",
        "approxCount": false,
        "scale": "percent",
        "platform": "PC",
        "url": "https://steamcommunity.com/app/1426210/reviews/",
        "checkedOn": "2026-10-25"
      },
      {
        "source": "Metacritic User Score",
        "label": "User score",
        "score": 8.8,
        "count": 3424,
        "countLabel": "3k",
        "approxCount": false,
        "scale": "ten",
        "platform": "PC",
        "url": "https://metacritic.com/game/it-takes-two/user-reviews/?platform=pc",
        "checkedOn": "2026-10-25"
      }
    ],
    "basePrices": [
      {
        "platform": "PC",
        "device": "PC",
        "store": "Steam",
        "edition": "Standard Edition",
        "cents": 5499,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://store.steampowered.com/app/1426210/",
        "checkedOn": "2026-10-25",
        "source": "Steam Store"
      },
      {
        "platform": "PC",
        "device": "PC",
        "store": "Epic Games Store",
        "edition": "Standard Edition",
        "cents": 5499,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://itad.link/018d959d-d266-71b4-9f42-9ab7b2743534/",
        "checkedOn": "2026-10-25",
        "source": "IsThereAnyDeal"
      },
      {
        "platform": "PC",
        "device": "PC",
        "store": "EA Store",
        "edition": "Standard Edition",
        "cents": 5499,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://itad.link/018d9386-81d4-71ac-b2d5-c351da4cb827/",
        "checkedOn": "2026-10-25",
        "source": "IsThereAnyDeal"
      },
      {
        "platform": "Nintendo",
        "device": "Nintendo Switch",
        "store": "Nintendo eShop",
        "edition": "Standard Edition",
        "cents": 5499,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://www.nintendo.com/en-ca/store/products/it-takes-two-switch/",
        "checkedOn": "2026-10-26",
        "source": "Nintendo Canada"
      }
    ],
    "historicalLow": {
      "cents": 1099,
      "date": "2024-12-11",
      "platform": "PC",
      "store": "Steam",
      "edition": "Standard Edition",
      "url": "https://isthereanydeal.com/game/it-takes-two/history/"
    },
    "discounts": [
      {
        "finalCents": 1649,
        "originalCents": 5499,
        "cut": 70,
        "date": "2026-10-19",
        "platform": "PC",
        "device": "PC",
        "store": "Epic Games Store",
        "edition": "Standard Edition",
        "status": "active",
        "dateKind": "observed",
        "endDate": "2026-11-02",
        "statusBasis": "Current store quote shows a discount at the check time.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/it-takes-two/history/",
        "offerUrl": "https://itad.link/018d959d-d266-71b4-9f42-9ab7b2743534/"
      },
      {
        "finalCents": 1649,
        "originalCents": 5499,
        "cut": 70,
        "date": "2026-09-14",
        "platform": "PC",
        "device": "PC",
        "store": "Steam",
        "edition": "Standard Edition",
        "status": "ended",
        "dateKind": "observed",
        "endDate": null,
        "statusBasis": "A later regular-price observation confirms this promotion ended.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/it-takes-two/history/",
        "offerUrl": "https://store.steampowered.com/app/1426210/"
      },
      {
        "finalCents": 1649,
        "originalCents": 5499,
        "cut": 70,
        "date": "2026-09-14",
        "platform": "PC",
        "device": "PC",
        "store": "EA Store",
        "edition": "Standard Edition",
        "status": "ended",
        "dateKind": "observed",
        "endDate": null,
        "statusBasis": "A later regular-price observation confirms this promotion ended.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/it-takes-two/history/",
        "offerUrl": "https://itad.link/018d9386-81d4-71ac-b2d5-c351da4cb827/"
      }
    ],
    "isFree": false,
    "guideHubUrl": "https://steamcommunity.com/app/1426210/guides/",
    "releaseDates": [
      {
        "platform": "Nintendo Switch",
        "date": "2022-11-04",
        "sourceUrl": "https://www.nintendo.com/en-ca/store/products/it-takes-two-switch/",
        "checkedOn": "2026-10-26"
      }
    ]
  },
  {
    "id": "overcooked-2",
    "slug": "overcooked-2",
    "title": "Overcooked! 2",
    "primaryGenre": "Simulation",
    "genres": [
      "Simulation"
    ],
    "tags": [
      "Co-op",
      "Party",
      "Cooking"
    ],
    "cardBlurb": "A chaotic co-op cooking game about teamwork, moving kitchens and the next rush.",
    "platforms": [
      "PC",
      "PlayStation",
      "Xbox",
      "Nintendo"
    ],
    "platformDetails": [
      "PC",
      "PS4",
      "Xbox One",
      "Switch"
    ],
    "modes": [
      "Single-player",
      "Multiplayer"
    ],
    "multiplayer": [
      "Online co-op",
      "Local co-op"
    ],
    "description": "A chaotic co-op cooking game. Work as a team to prepare orders, move between kitchens and meet the next rush.",
    "releaseDate": "2018-08-07",
    "developer": "Ghost Town Games Ltd.",
    "publisher": "Team17",
    "cover": {
      "src": "/assets/overcooked-2-cover.jpg",
      "alt": "Overcooked! 2 cover art",
      "kind": "official"
    },
    "screenshots": [
      {
        "src": "/assets/overcooked-2-scene-1.jpg",
        "alt": "Overcooked! 2 official screenshot 1",
        "kind": "official"
      },
      {
        "src": "/assets/overcooked-2-scene-2.jpg",
        "alt": "Overcooked! 2 official screenshot 2",
        "kind": "official"
      }
    ],
    "ratings": [
      {
        "source": "Steam",
        "label": "Positive reviews",
        "score": 90,
        "count": 62543,
        "countLabel": "63k",
        "approxCount": false,
        "scale": "percent",
        "platform": "PC",
        "url": "https://steamcommunity.com/app/728880/reviews/",
        "checkedOn": "2026-10-25"
      },
      {
        "source": "Metacritic User Score",
        "label": "User score",
        "score": 7.7,
        "count": 424,
        "countLabel": "424",
        "approxCount": false,
        "scale": "ten",
        "platform": "PC",
        "url": "https://metacritic.com/game/overcooked-2/user-reviews/?platform=pc",
        "checkedOn": "2026-10-25"
      }
    ],
    "basePrices": [
      {
        "platform": "PC",
        "device": "PC",
        "store": "Steam",
        "edition": "Standard Edition",
        "cents": 5499,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://store.steampowered.com/app/728880/",
        "checkedOn": "2026-10-25",
        "source": "Steam Store"
      },
      {
        "platform": "PC",
        "device": "PC",
        "store": "Fanatical",
        "edition": "Standard Edition",
        "cents": 3523,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://itad.link/018d9386-a7ec-7177-a2aa-fe636de2de34/",
        "checkedOn": "2026-10-25",
        "source": "IsThereAnyDeal"
      },
      {
        "platform": "PC",
        "device": "PC",
        "store": "GameBillet",
        "edition": "Standard Edition",
        "cents": 3499,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://itad.link/018d9386-a7ed-7225-8c09-7e759e0ba837/",
        "checkedOn": "2026-10-25",
        "source": "IsThereAnyDeal"
      },
      {
        "platform": "Nintendo",
        "device": "Nintendo Switch",
        "store": "Nintendo eShop",
        "edition": "Standard Edition",
        "cents": 2799,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://www.nintendo.com/en-ca/store/products/overcooked-2-switch/",
        "checkedOn": "2026-10-26",
        "source": "Nintendo Canada"
      }
    ],
    "historicalLow": {
      "cents": 724,
      "date": "2021-11-24",
      "platform": "PC",
      "store": "Steam",
      "edition": "Standard Edition",
      "url": "https://isthereanydeal.com/game/overcooked-2/history/"
    },
    "discounts": [
      {
        "finalCents": 724,
        "originalCents": 2899,
        "cut": 75,
        "date": "2026-10-19",
        "platform": "PC",
        "device": "PC",
        "store": "Epic Games Store",
        "edition": "Standard Edition",
        "status": "active",
        "dateKind": "observed",
        "endDate": "2026-11-02",
        "statusBasis": "Current store quote shows a discount at the check time.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/overcooked-2/history/",
        "offerUrl": null
      },
      {
        "finalCents": 3015,
        "originalCents": 3523,
        "cut": 14.4,
        "date": "2026-10-16",
        "platform": "PC",
        "device": "PC",
        "store": "Fanatical",
        "edition": "Standard Edition",
        "status": "active",
        "dateKind": "observed",
        "endDate": "2026-10-30",
        "statusBasis": "Current store quote shows a discount at the check time.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/overcooked-2/history/",
        "offerUrl": "https://itad.link/018d9386-a7ec-7177-a2aa-fe636de2de34/"
      },
      {
        "finalCents": 3149,
        "originalCents": 3499,
        "cut": 10,
        "date": "2026-10-12",
        "platform": "PC",
        "device": "PC",
        "store": "GamesPlanet US",
        "edition": "Standard Edition",
        "status": "active",
        "dateKind": "observed",
        "endDate": null,
        "statusBasis": "Current store quote shows a discount at the check time.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/overcooked-2/history/",
        "offerUrl": null
      }
    ],
    "isFree": false,
    "guideHubUrl": "https://steamcommunity.com/app/728880/guides/"
  },
  {
    "id": "nba-2k25",
    "slug": "nba-2k25",
    "title": "NBA 2K25",
    "primaryGenre": "Sports",
    "genres": [
      "Sports",
      "Simulation"
    ],
    "tags": [
      "Basketball",
      "Career",
      "Multiplayer"
    ],
    "cardBlurb": "A basketball sim with career, team building and local or online play.",
    "platforms": [
      "PC",
      "PlayStation",
      "Xbox",
      "Nintendo"
    ],
    "platformDetails": [
      "PC",
      "PS5",
      "Xbox Series X|S",
      "Switch"
    ],
    "modes": [
      "Single-player",
      "Multiplayer"
    ],
    "multiplayer": [
      "Online co-op",
      "Online PvP"
    ],
    "description": "A basketball simulation. Play matches, manage a career, build a team and compete online or locally.",
    "releaseDate": "2024-09-06",
    "developer": "Visual Concepts",
    "publisher": "2K",
    "cover": {
      "src": "/assets/nba-2k25-cover.jpg",
      "alt": "NBA 2K25 cover art",
      "kind": "official"
    },
    "screenshots": [
      {
        "src": "/assets/nba-2k25-scene-1.jpg",
        "alt": "NBA 2K25 official screenshot 1",
        "kind": "official"
      },
      {
        "src": "/assets/nba-2k25-scene-2.jpg",
        "alt": "NBA 2K25 official screenshot 2",
        "kind": "official"
      }
    ],
    "ratings": [
      {
        "source": "Steam",
        "label": "Positive reviews",
        "score": 60,
        "count": 30984,
        "countLabel": "31k",
        "approxCount": false,
        "scale": "percent",
        "platform": "PC",
        "url": "https://steamcommunity.com/app/2878980/reviews/",
        "checkedOn": "2026-10-25"
      },
      {
        "source": "Metacritic User Score",
        "label": "User score",
        "score": 3.6,
        "count": 267,
        "countLabel": "267",
        "approxCount": false,
        "scale": "ten",
        "platform": "PC",
        "url": "https://metacritic.com/game/nba-2k25/user-reviews/?platform=pc",
        "checkedOn": "2026-10-25"
      }
    ],
    "basePrices": [
      {
        "platform": "PC",
        "device": "PC",
        "store": "Steam",
        "edition": "Standard Edition",
        "cents": 8999,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://store.steampowered.com/app/2878980/",
        "checkedOn": "2026-10-25",
        "source": "Steam Store"
      },
      {
        "platform": "PC",
        "device": "PC",
        "store": "Fanatical",
        "edition": "Standard Edition",
        "cents": 8999,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://itad.link/019f1e35-8f39-71de-a6b5-d4a80875352f/",
        "checkedOn": "2026-10-25",
        "source": "IsThereAnyDeal"
      },
      {
        "platform": "PC",
        "device": "PC",
        "store": "GameBillet",
        "edition": "Standard Edition",
        "cents": 9800,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://itad.link/0191c715-2167-7397-894d-32867404313a/",
        "checkedOn": "2026-10-25",
        "source": "IsThereAnyDeal"
      }
    ],
    "historicalLow": {
      "cents": 1259,
      "date": "2025-05-07",
      "platform": "PC",
      "store": "Steam",
      "edition": "Standard Edition",
      "url": "https://isthereanydeal.com/game/nba-2k25/history/"
    },
    "discounts": [
      {
        "finalCents": 7829,
        "originalCents": 8999,
        "cut": 13,
        "date": "2026-09-10",
        "platform": "PC",
        "device": "PC",
        "store": "Fanatical",
        "edition": "Standard Edition",
        "status": "active",
        "dateKind": "observed",
        "endDate": "2026-10-29",
        "statusBasis": "Current store quote shows a discount at the check time.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/nba-2k25/history/",
        "offerUrl": "https://itad.link/019f1e35-8f39-71de-a6b5-d4a80875352f/"
      },
      {
        "finalCents": 8099,
        "originalCents": 9800,
        "cut": 17.4,
        "date": "2025-11-13",
        "platform": "PC",
        "device": "PC",
        "store": "GameBillet",
        "edition": "Standard Edition",
        "status": "unverified",
        "dateKind": "observed",
        "endDate": null,
        "statusBasis": "A current discount exists, but continuity with this older observed promotion is not confirmed.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/nba-2k25/history/",
        "offerUrl": "https://itad.link/0191c715-2167-7397-894d-32867404313a/"
      },
      {
        "finalCents": 1260,
        "originalCents": 8999,
        "cut": 86,
        "date": "2025-07-23",
        "platform": "PC",
        "device": "PC",
        "store": "GamersGate",
        "edition": "Standard Edition",
        "status": "ended",
        "dateKind": "observed",
        "endDate": null,
        "statusBasis": "A later regular-price observation confirms this promotion ended.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/nba-2k25/history/",
        "offerUrl": null
      }
    ],
    "isFree": false,
    "guideHubUrl": "https://steamcommunity.com/app/2878980/guides/"
  },
  {
    "id": "ea-sports-fc-25",
    "slug": "ea-sports-fc-25",
    "title": "EA SPORTS FC 25",
    "primaryGenre": "Sports",
    "genres": [
      "Sports",
      "Simulation"
    ],
    "tags": [
      "Football",
      "Ultimate Team",
      "Multiplayer"
    ],
    "cardBlurb": "A football sim with club and national teams, management and Ultimate Team.",
    "platforms": [
      "PC",
      "PlayStation",
      "Xbox",
      "Nintendo"
    ],
    "platformDetails": [
      "PC",
      "PS5 / PS4",
      "Xbox Series / One",
      "Switch"
    ],
    "modes": [
      "Single-player",
      "Multiplayer"
    ],
    "multiplayer": [
      "Online co-op",
      "Online PvP",
      "Local co-op"
    ],
    "description": "A football simulation. Play matches with clubs and national teams, manage a club or build a squad in Ultimate Team.",
    "releaseDate": "2024-09-27",
    "developer": "EA Canada",
    "publisher": "Electronic Arts",
    "cover": {
      "src": "/assets/ea-sports-fc-25-cover.jpg",
      "alt": "EA SPORTS FC 25 cover art",
      "kind": "official"
    },
    "screenshots": [
      {
        "src": "/assets/ea-sports-fc-25-scene-1.jpg",
        "alt": "EA SPORTS FC 25 official screenshot 1",
        "kind": "official"
      },
      {
        "src": "/assets/ea-sports-fc-25-scene-2.jpg",
        "alt": "EA SPORTS FC 25 official screenshot 2",
        "kind": "official"
      }
    ],
    "ratings": [
      {
        "source": "Steam",
        "label": "Positive reviews",
        "score": 53,
        "count": 97943,
        "countLabel": "98k",
        "approxCount": false,
        "scale": "percent",
        "platform": "PC",
        "url": "https://steamcommunity.com/app/2669320/reviews/",
        "checkedOn": "2026-10-25"
      },
      {
        "source": "Metacritic User Score",
        "label": "User score",
        "score": 1.9,
        "count": 1261,
        "countLabel": "1k",
        "approxCount": false,
        "scale": "ten",
        "platform": "PC",
        "url": "https://metacritic.com/game/ea-sports-fc-25/user-reviews/?platform=pc",
        "checkedOn": "2026-10-25"
      }
    ],
    "basePrices": [
      {
        "platform": "PC",
        "device": "PC",
        "store": "Epic Games Store",
        "edition": "Standard Edition",
        "cents": 8999,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://itad.link/019231ac-e7cb-710c-bbf5-605d31580803/",
        "checkedOn": "2026-10-25",
        "source": "IsThereAnyDeal"
      }
    ],
    "historicalLow": {
      "cents": 1799,
      "date": "2025-06-19",
      "platform": "PC",
      "store": "Steam",
      "edition": "Standard Edition",
      "url": "https://isthereanydeal.com/game/ea-sports-fc-25/history/"
    },
    "discounts": [
      {
        "finalCents": 1799,
        "originalCents": 8999,
        "cut": 80,
        "date": "2025-07-17",
        "platform": "PC",
        "device": "PC",
        "store": "Epic Games Store",
        "edition": "Standard Edition",
        "status": "ended",
        "dateKind": "observed",
        "endDate": null,
        "statusBasis": "A later regular-price observation confirms this promotion ended.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/ea-sports-fc-25/history/",
        "offerUrl": "https://itad.link/019231ac-e7cb-710c-bbf5-605d31580803/"
      },
      {
        "finalCents": 1799,
        "originalCents": 8999,
        "cut": 80,
        "date": "2025-06-19",
        "platform": "PC",
        "device": "PC",
        "store": "Steam",
        "edition": "Standard Edition",
        "status": "ended",
        "dateKind": "observed",
        "endDate": null,
        "statusBasis": "A later regular-price observation confirms this promotion ended.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/ea-sports-fc-25/history/",
        "offerUrl": null
      },
      {
        "finalCents": 1799,
        "originalCents": 8999,
        "cut": 80,
        "date": "2025-06-19",
        "platform": "PC",
        "device": "PC",
        "store": "EA Store",
        "edition": "Standard Edition",
        "status": "ended",
        "dateKind": "observed",
        "endDate": null,
        "statusBasis": "A later regular-price observation confirms this promotion ended.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/ea-sports-fc-25/history/",
        "offerUrl": null
      }
    ],
    "isFree": false,
    "guideHubUrl": "https://steamcommunity.com/app/2669320/guides/"
  },
  {
    "id": "f1-24",
    "slug": "f1-24",
    "title": "F1 24",
    "primaryGenre": "Racing",
    "genres": [
      "Racing",
      "Sports",
      "Simulation"
    ],
    "tags": [
      "Formula 1",
      "Career",
      "Multiplayer"
    ],
    "cardBlurb": "A Formula 1 sim about race weekends, tyre and fuel strategy and the 2024 grid.",
    "platforms": [
      "PC",
      "PlayStation",
      "Xbox"
    ],
    "platformDetails": [
      "PC",
      "PS5 / PS4",
      "Xbox Series / One"
    ],
    "modes": [
      "Single-player",
      "Multiplayer"
    ],
    "multiplayer": [
      "Online PvP"
    ],
    "description": "A Formula 1 racing simulation. Drive the 2024 grid, manage tyres and fuel, and race across the calendar.",
    "releaseDate": "2024-05-31",
    "developer": "Codemasters",
    "publisher": "Electronic Arts",
    "cover": {
      "src": "/assets/f1-24-cover.jpg",
      "alt": "F1 24 cover art",
      "kind": "official"
    },
    "screenshots": [
      {
        "src": "/assets/f1-24-scene-1.jpg",
        "alt": "F1 24 official screenshot 1",
        "kind": "official"
      },
      {
        "src": "/assets/f1-24-scene-2.jpg",
        "alt": "F1 24 official screenshot 2",
        "kind": "official"
      }
    ],
    "ratings": [
      {
        "source": "Steam",
        "label": "Positive reviews",
        "score": 73,
        "count": 15621,
        "countLabel": "16k",
        "approxCount": false,
        "scale": "percent",
        "platform": "PC",
        "url": "https://steamcommunity.com/app/2488620/reviews/",
        "checkedOn": "2026-10-25"
      },
      {
        "source": "Metacritic User Score",
        "label": "User score",
        "score": 5,
        "count": 159,
        "countLabel": "159",
        "approxCount": false,
        "scale": "ten",
        "platform": "PC",
        "url": "https://metacritic.com/game/f1-24/user-reviews/?platform=pc",
        "checkedOn": "2026-10-25"
      }
    ],
    "basePrices": [
      {
        "platform": "PC",
        "device": "PC",
        "store": "Epic Games Store",
        "edition": "Standard Edition",
        "cents": 8999,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://itad.link/018fcf58-b553-7080-bfaa-de5c3c8ade27/",
        "checkedOn": "2026-10-25",
        "source": "IsThereAnyDeal"
      }
    ],
    "historicalLow": {
      "cents": 1349,
      "date": "2025-01-27",
      "platform": "PC",
      "store": "Steam",
      "edition": "Standard Edition",
      "url": "https://isthereanydeal.com/game/f1-24/history/"
    },
    "discounts": [
      {
        "finalCents": 1349,
        "originalCents": 8999,
        "cut": 85,
        "date": "2025-03-13",
        "platform": "PC",
        "device": "PC",
        "store": "Steam",
        "edition": "Standard Edition",
        "status": "ended",
        "dateKind": "observed",
        "endDate": null,
        "statusBasis": "A later regular-price observation confirms this promotion ended.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/f1-24/history/",
        "offerUrl": null
      },
      {
        "finalCents": 1349,
        "originalCents": 8999,
        "cut": 85,
        "date": "2025-03-13",
        "platform": "PC",
        "device": "PC",
        "store": "EA Store",
        "edition": "Standard Edition",
        "status": "ended",
        "dateKind": "observed",
        "endDate": null,
        "statusBasis": "A later regular-price observation confirms this promotion ended.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/f1-24/history/",
        "offerUrl": null
      },
      {
        "finalCents": 1349,
        "originalCents": 8999,
        "cut": 85,
        "date": "2025-02-10",
        "platform": "PC",
        "device": "PC",
        "store": "Epic Games Store",
        "edition": "Standard Edition",
        "status": "ended",
        "dateKind": "observed",
        "endDate": null,
        "statusBasis": "A later regular-price observation confirms this promotion ended.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/f1-24/history/",
        "offerUrl": "https://itad.link/018fcf58-b553-7080-bfaa-de5c3c8ade27/"
      }
    ],
    "isFree": false,
    "guideHubUrl": "https://steamcommunity.com/app/2488620/guides/"
  },
  {
    "id": "dead-cells",
    "slug": "dead-cells",
    "title": "Dead Cells",
    "primaryGenre": "Platformer",
    "genres": [
      "Platformer",
      "Roguelike",
      "Action"
    ],
    "tags": [
      "Roguelite",
      "Metroidvania",
      "Pixel art"
    ],
    "cardBlurb": "A roguelite action-platformer about changing runs, permanent upgrades and tough bosses.",
    "platforms": [
      "PC",
      "PlayStation",
      "Xbox",
      "Nintendo"
    ],
    "platformDetails": [
      "PC",
      "PS4",
      "Xbox One",
      "Switch"
    ],
    "modes": [
      "Single-player"
    ],
    "description": "A roguelite action-platformer. Fight through a changing castle, unlock permanent upgrades and push toward the next boss.",
    "releaseDate": "2018-08-07",
    "developer": "Motion Twin",
    "publisher": "Motion Twin",
    "cover": {
      "src": "/assets/dead-cells-cover.jpg",
      "alt": "Dead Cells cover art",
      "kind": "official"
    },
    "screenshots": [
      {
        "src": "/assets/dead-cells-scene-1.jpg",
        "alt": "Dead Cells official screenshot 1",
        "kind": "official"
      },
      {
        "src": "/assets/dead-cells-scene-2.jpg",
        "alt": "Dead Cells official screenshot 2",
        "kind": "official"
      }
    ],
    "ratings": [
      {
        "source": "Steam",
        "label": "Positive reviews",
        "score": 97,
        "count": 157072,
        "countLabel": "157k",
        "approxCount": false,
        "scale": "percent",
        "platform": "PC",
        "url": "https://steamcommunity.com/app/588650/reviews/",
        "checkedOn": "2026-10-25"
      },
      {
        "source": "Metacritic User Score",
        "label": "User score",
        "score": 8.2,
        "count": 1453,
        "countLabel": "1k",
        "approxCount": false,
        "scale": "ten",
        "platform": "PC",
        "url": "https://metacritic.com/game/dead-cells/user-reviews/?platform=pc",
        "checkedOn": "2026-10-25"
      }
    ],
    "basePrices": [
      {
        "platform": "PC",
        "device": "PC",
        "store": "Steam",
        "edition": "Standard Edition",
        "cents": 2999,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://store.steampowered.com/app/588650/",
        "checkedOn": "2026-10-25",
        "source": "Steam Store"
      },
      {
        "platform": "PC",
        "device": "PC",
        "store": "Fanatical",
        "edition": "Standard Edition",
        "cents": 2999,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://itad.link/018d9386-492c-7398-a932-81db0758d4a4/",
        "checkedOn": "2026-10-25",
        "source": "IsThereAnyDeal"
      },
      {
        "platform": "PC",
        "device": "PC",
        "store": "GameBillet",
        "edition": "Standard Edition",
        "cents": 3499,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://itad.link/018d9386-492c-7398-a932-81db1264b2ac/",
        "checkedOn": "2026-10-25",
        "source": "IsThereAnyDeal"
      },
      {
        "platform": "Nintendo",
        "device": "Nintendo Switch",
        "store": "Nintendo eShop",
        "edition": "Standard Edition",
        "cents": 3399,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://www.nintendo.com/en-ca/store/products/dead-cells-switch/",
        "checkedOn": "2026-10-26",
        "source": "Nintendo Canada"
      }
    ],
    "historicalLow": {
      "cents": 1199,
      "date": "2025-07-17",
      "platform": "PC",
      "store": "Steam",
      "edition": "Standard Edition",
      "url": "https://isthereanydeal.com/game/dead-cells/history/"
    },
    "discounts": [
      {
        "finalCents": 1563,
        "originalCents": 3499,
        "cut": 55.3,
        "date": "2026-10-23",
        "platform": "PC",
        "device": "PC",
        "store": "GameBillet",
        "edition": "Standard Edition",
        "status": "active",
        "dateKind": "observed",
        "endDate": null,
        "statusBasis": "Current store quote shows a discount at the check time.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/dead-cells/history/",
        "offerUrl": "https://itad.link/018d9386-492c-7398-a932-81db1264b2ac/"
      },
      {
        "finalCents": 1649,
        "originalCents": 3499,
        "cut": 52.9,
        "date": "2026-10-22",
        "platform": "PC",
        "device": "PC",
        "store": "GamesPlanet US",
        "edition": "Standard Edition",
        "status": "active",
        "dateKind": "observed",
        "endDate": null,
        "statusBasis": "Current store quote shows a discount at the check time.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/dead-cells/history/",
        "offerUrl": null
      },
      {
        "finalCents": 1379,
        "originalCents": 2999,
        "cut": 54,
        "date": "2026-10-22",
        "platform": "PC",
        "device": "PC",
        "store": "Fanatical",
        "edition": "Standard Edition",
        "status": "active",
        "dateKind": "observed",
        "endDate": "2026-11-02",
        "statusBasis": "Current store quote shows a discount at the check time.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/dead-cells/history/",
        "offerUrl": "https://itad.link/018d9386-492c-7398-a932-81db0758d4a4/"
      }
    ],
    "isFree": false,
    "guideHubUrl": "https://steamcommunity.com/app/588650/guides/",
    "currentPrices": [
      {
        "platform": "Nintendo",
        "device": "Nintendo Switch",
        "store": "Nintendo eShop",
        "edition": "Standard Edition",
        "cents": 1699,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://www.nintendo.com/en-ca/store/products/dead-cells-switch/",
        "checkedOn": "2026-10-26",
        "source": "Nintendo Canada"
      }
    ]
  },
  {
    "id": "disco-elysium",
    "slug": "disco-elysium",
    "title": "Disco Elysium - The Final Cut",
    "primaryGenre": "RPG",
    "genres": [
      "RPG",
      "Adventure"
    ],
    "tags": [
      "Detective",
      "Narrative",
      "Choices"
    ],
    "cardBlurb": "A detective RPG driven by skills, dialogue and choices.",
    "platforms": [
      "PC",
      "PlayStation",
      "Xbox",
      "Nintendo"
    ],
    "platformDetails": [
      "PC",
      "PS5 / PS4",
      "Xbox Series / One",
      "Switch"
    ],
    "modes": [
      "Single-player"
    ],
    "description": "A detective RPG. Build a character from a set of skills, interrogate a city's inhabitants and solve a murder through dialogue and choices.",
    "releaseDate": "2019-10-15",
    "developer": "ZA/UM",
    "publisher": "ZA/UM",
    "cover": {
      "src": "/assets/disco-elysium-cover.jpg",
      "alt": "Disco Elysium - The Final Cut cover art",
      "kind": "official"
    },
    "screenshots": [
      {
        "src": "/assets/disco-elysium-scene-1.jpg",
        "alt": "Disco Elysium - The Final Cut official screenshot 1",
        "kind": "official"
      },
      {
        "src": "/assets/disco-elysium-scene-2.jpg",
        "alt": "Disco Elysium - The Final Cut official screenshot 2",
        "kind": "official"
      }
    ],
    "ratings": [
      {
        "source": "Steam",
        "label": "Positive reviews",
        "score": 92,
        "count": 119021,
        "countLabel": "119k",
        "approxCount": false,
        "scale": "percent",
        "platform": "PC",
        "url": "https://steamcommunity.com/app/632470/reviews/",
        "checkedOn": "2026-10-25"
      },
      {
        "source": "Metacritic User Score",
        "label": "User score",
        "score": 8.4,
        "count": 2090,
        "countLabel": "2k",
        "approxCount": false,
        "scale": "ten",
        "platform": "PC",
        "url": "https://metacritic.com/game/disco-elysium-the-final-cut/user-reviews/?platform=pc",
        "checkedOn": "2026-10-25"
      }
    ],
    "basePrices": [
      {
        "platform": "PC",
        "device": "PC",
        "store": "Steam",
        "edition": "Standard Edition",
        "cents": 4799,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://store.steampowered.com/app/632470/",
        "checkedOn": "2026-10-25",
        "source": "Steam Store"
      },
      {
        "platform": "PC",
        "device": "PC",
        "store": "Fanatical",
        "edition": "Standard Edition",
        "cents": 4799,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://itad.link/019fa453-3ccb-73b0-b40e-ee230a12c6d2/",
        "checkedOn": "2026-10-25",
        "source": "IsThereAnyDeal"
      },
      {
        "platform": "PC",
        "device": "PC",
        "store": "GameBillet",
        "edition": "Standard Edition",
        "cents": 5600,
        "region": "Canada",
        "currency": "CAD",
        "url": "https://itad.link/018d9386-4e5d-715f-a47b-157796e6e84a/",
        "checkedOn": "2026-10-25",
        "source": "IsThereAnyDeal"
      }
    ],
    "historicalLow": {
      "cents": 454,
      "date": "2024-06-27",
      "platform": "PC",
      "store": "Steam",
      "edition": "Standard Edition",
      "url": "https://isthereanydeal.com/game/disco-elysium-the-final-cut/history/"
    },
    "discounts": [
      {
        "finalCents": 5039,
        "originalCents": 5600,
        "cut": 10,
        "date": "2026-10-20",
        "platform": "PC",
        "device": "PC",
        "store": "GamesPlanet US",
        "edition": "Standard Edition",
        "status": "active",
        "dateKind": "observed",
        "endDate": null,
        "statusBasis": "Current store quote shows a discount at the check time.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/disco-elysium-the-final-cut/history/",
        "offerUrl": null
      },
      {
        "finalCents": 4640,
        "originalCents": 5600,
        "cut": 17.1,
        "date": "2026-10-20",
        "platform": "PC",
        "device": "PC",
        "store": "GameBillet",
        "edition": "Standard Edition",
        "status": "active",
        "dateKind": "observed",
        "endDate": null,
        "statusBasis": "Current store quote shows a discount at the check time.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/disco-elysium-the-final-cut/history/",
        "offerUrl": "https://itad.link/018d9386-4e5d-715f-a47b-157796e6e84a/"
      },
      {
        "finalCents": 1099,
        "originalCents": 4399,
        "cut": 75,
        "date": "2026-10-19",
        "platform": "PC",
        "device": "PC",
        "store": "Epic Games Store",
        "edition": "Standard Edition",
        "status": "active",
        "dateKind": "observed",
        "endDate": "2026-11-02",
        "statusBasis": "Current store quote shows a discount at the check time.",
        "verifiedOn": "2026-10-25",
        "url": "https://isthereanydeal.com/game/disco-elysium-the-final-cut/history/",
        "offerUrl": null
      }
    ],
    "isFree": false,
    "guideHubUrl": "https://steamcommunity.com/app/632470/guides/"
  }
]

export const p2Guides: readonly P2Guide[] = [
  {
    "id": "guide-elden-ring-1",
    "gameId": "elden-ring",
    "title": "Elden Ring – Build Guide, Leveling Routes, Walkthroughs",
    "source": "Steam Community",
    "author": "DrummerBoy",
    "platform": "PC (Steam)",
    "versionNote": "",
    "type": "Build",
    "summary": "Explains how to assemble four early builds — Strength, Bleed, Intelligence and Faith — with leveling routes and step-by-step directions.",
    "url": "https://steamcommunity.com/sharedfiles/filedetails/?id=3067080786",
    "selection": "Steam Community top-rated listing; manually checked 2026-10-25",
    "checkedOn": "2026-10-25"
  },
  {
    "id": "guide-hades-1",
    "gameId": "hades",
    "title": "Beginner's Guide & Quick References",
    "source": "Steam Community",
    "author": "Brahms",
    "platform": "PC (Steam)",
    "versionNote": "",
    "type": "Beginner",
    "summary": "Covers the core loop, boons, rooms and early meta-progression for players starting their first runs.",
    "url": "https://steamcommunity.com/sharedfiles/filedetails/?id=2146459165",
    "selection": "Steam Community top-rated listing; manually checked 2026-10-25",
    "checkedOn": "2026-10-25"
  },
  {
    "id": "guide-hades-2",
    "gameId": "hades",
    "title": "Top Tips for a Good Start",
    "source": "Steam Community",
    "author": "mud",
    "platform": "PC (Steam)",
    "versionNote": "",
    "type": "Tips",
    "summary": "Practical early-run tips about boon choices, upgrades and resource management.",
    "url": "https://steamcommunity.com/sharedfiles/filedetails/?id=2924351662",
    "selection": "Steam Community top-rated listing; manually checked 2026-10-25",
    "checkedOn": "2026-10-25"
  },
  {
    "id": "guide-cyberpunk-2077-1",
    "gameId": "cyberpunk-2077",
    "title": "Beginner's Guide - Tips for Getting Started",
    "source": "IGN",
    "author": "IGN Guides",
    "platform": "PC / console",
    "versionNote": "",
    "type": "Beginner",
    "summary": "A starting checklist covering character creation, combat basics and early progression in Night City.",
    "url": "https://www.ign.com/wikis/cyberpunk-2077/Beginner%2527s_Guide_-_Tips_for_Getting_Started",
    "selection": "Editor-selected IGN guide; checked 2026-10-25",
    "checkedOn": "2026-10-25"
  },
  {
    "id": "guide-baldurs-gate-3-1",
    "gameId": "baldurs-gate-3",
    "title": "Things to Do First in Baldur's Gate 3",
    "source": "IGN",
    "author": "IGN Guides",
    "platform": "PC / console",
    "versionNote": "",
    "type": "Beginner",
    "summary": "A spoiler-light checklist for the opening hours, from character creation to the first companions and quests.",
    "url": "https://www.ign.com/wikis/baldurs-gate-3/Things_to_Do_First",
    "selection": "Editor-selected IGN guide; checked 2026-10-25",
    "checkedOn": "2026-10-25"
  },
  {
    "id": "guide-baldurs-gate-3-2",
    "gameId": "baldurs-gate-3",
    "title": "How to Build a Character",
    "source": "IGN",
    "author": "IGN Guides",
    "platform": "PC / console",
    "versionNote": "",
    "type": "Build",
    "summary": "A guide to races, classes, backgrounds and the choices that shape a character before the adventure starts.",
    "url": "https://www.ign.com/wikis/baldurs-gate-3/How_to_Build_a_Character",
    "selection": "Editor-selected IGN guide; checked 2026-10-25",
    "checkedOn": "2026-10-25"
  },
  {
    "id": "guide-hollow-knight-1",
    "gameId": "hollow-knight",
    "title": "112% Completion Guide & Route",
    "source": "Steam Community",
    "author": "wataniyob",
    "platform": "PC (Steam)",
    "versionNote": "",
    "type": "Collectibles",
    "summary": "Tracks the abilities, collectibles and bosses needed for 112% completion, with a route through the game.",
    "url": "https://steamcommunity.com/sharedfiles/filedetails/?id=936948247",
    "selection": "Steam Community top-rated listing; manually checked 2026-10-25",
    "checkedOn": "2026-10-25"
  },
  {
    "id": "guide-hollow-knight-2",
    "gameId": "hollow-knight",
    "title": "Hollow Knight Full Walkthrough",
    "source": "Steam Community",
    "author": "Steam Community author",
    "platform": "PC (Steam)",
    "versionNote": "",
    "type": "Progression",
    "summary": "A section-by-section route through Hallownest, from Dirtmouth to Deepnest.",
    "url": "https://steamcommunity.com/sharedfiles/filedetails/?id=2824709338",
    "selection": "Steam Community top-rated listing; manually checked 2026-10-25",
    "checkedOn": "2026-10-25"
  },
  {
    "id": "guide-hollow-knight-3",
    "gameId": "hollow-knight",
    "title": "Hollow Knight Bosses Guide",
    "source": "IGN",
    "author": "IGN Guides",
    "platform": "PC / console",
    "versionNote": "",
    "type": "Boss",
    "summary": "Boss-by-boss strategies and attack patterns for the main Hollow Knight fights.",
    "url": "https://www.ign.com/wikis/hollow-knight/Bosses",
    "selection": "Editor-selected IGN guide; checked 2026-10-25",
    "checkedOn": "2026-10-25"
  },
  {
    "id": "guide-stardew-valley-1",
    "gameId": "stardew-valley",
    "title": "First Year Walkthrough, Part 1 (Spring, Year 1)",
    "source": "Steam Community",
    "author": "Fujiiro",
    "platform": "PC (Steam)",
    "versionNote": "",
    "type": "Progression",
    "summary": "A season-by-season plan for the first year, aimed at new players building a stable farm.",
    "url": "https://steamcommunity.com/sharedfiles/filedetails/?id=2653922288",
    "selection": "Steam Community top-rated listing; manually checked 2026-10-25",
    "checkedOn": "2026-10-25"
  },
  {
    "id": "guide-stardew-valley-2",
    "gameId": "stardew-valley",
    "title": "FIsh Location Guide",
    "source": "Steam Community",
    "author": "Steam Community author",
    "platform": "PC (Steam)",
    "versionNote": "",
    "type": "Collectibles",
    "summary": "Locations and conditions for every fish in Stardew Valley.",
    "url": "https://steamcommunity.com/sharedfiles/filedetails/?id=2144476380",
    "selection": "Steam Community top-rated listing; manually checked 2026-10-25",
    "checkedOn": "2026-10-25"
  },
  {
    "id": "guide-stardew-valley-3",
    "gameId": "stardew-valley",
    "title": "The BEST Money Guide for Stardew Valley (Insane Year 1)",
    "source": "Steam Community",
    "author": "ASMR",
    "platform": "PC (Steam)",
    "versionNote": "",
    "type": "Tips",
    "summary": "Early-game money routes using crops, fishing and other first-year income.",
    "url": "https://steamcommunity.com/sharedfiles/filedetails/?id=3479832380",
    "selection": "Steam Community top-rated listing; manually checked 2026-10-25",
    "checkedOn": "2026-10-25"
  },
  {
    "id": "guide-terraria-1",
    "gameId": "terraria",
    "title": "Building tips and tricks",
    "source": "Steam Community",
    "author": "AnalPro",
    "platform": "PC (Steam)",
    "versionNote": "",
    "type": "Build",
    "summary": "Building tips for players who want to improve their Terraria houses and structures.",
    "url": "https://steamcommunity.com/sharedfiles/filedetails/?id=3449165244",
    "selection": "Steam Community top-rated listing; manually checked 2026-10-25",
    "checkedOn": "2026-10-25"
  },
  {
    "id": "guide-terraria-2",
    "gameId": "terraria",
    "title": "FULL Melee Class Setup Guide For Terraria 1.4 (All Modes)",
    "source": "Steam Community",
    "author": "exfem",
    "platform": "PC (Steam)",
    "versionNote": "Terraria 1.4; all modes as stated by the author.",
    "type": "Build",
    "summary": "Melee weapons, accessories and set-ups for each progression stage in Terraria 1.4.",
    "url": "https://steamcommunity.com/sharedfiles/filedetails/?id=2576306822",
    "selection": "Steam Community top-rated listing; manually checked 2026-10-25",
    "checkedOn": "2026-10-25"
  },
  {
    "id": "guide-forza-horizon-5-1",
    "gameId": "forza-horizon-5",
    "title": "Forza Horizon 5 Car Performance Tuning Guide",
    "source": "Steam Community",
    "author": "DIE Sh4rk",
    "platform": "PC (Steam)",
    "versionNote": "",
    "type": "Tips",
    "summary": "A practical tuning guide for improving car performance in Forza Horizon 5.",
    "url": "https://steamcommunity.com/sharedfiles/filedetails/?id=3280203343",
    "selection": "Steam Community top-rated listing; manually checked 2026-10-25",
    "checkedOn": "2026-10-25"
  },
  {
    "id": "guide-forza-horizon-5-2",
    "gameId": "forza-horizon-5",
    "title": "Forza 5 Build & Tuning Guide",
    "source": "Steam Community",
    "author": "PickleChunks",
    "platform": "PC (Steam)",
    "versionNote": "",
    "type": "Build",
    "summary": "Build and tuning notes for common Forza Horizon 5 car classes.",
    "url": "https://steamcommunity.com/sharedfiles/filedetails/?id=2651849910",
    "selection": "Steam Community top-rated listing; manually checked 2026-10-25",
    "checkedOn": "2026-10-25"
  },
  {
    "id": "guide-forza-horizon-5-3",
    "gameId": "forza-horizon-5",
    "title": "Forza Horizon 5 Handbook | 100% Achievements Guide",
    "source": "Steam Community",
    "author": "KUHA",
    "platform": "PC (Steam)",
    "versionNote": "",
    "type": "Collectibles",
    "summary": "A checklist of the base game and DLC achievements.",
    "url": "https://steamcommunity.com/sharedfiles/filedetails/?id=2646267108",
    "selection": "Steam Community top-rated listing; manually checked 2026-10-25",
    "checkedOn": "2026-10-25"
  },
  {
    "id": "guide-halo-infinite-1",
    "gameId": "halo-infinite",
    "title": "Halo Infinite: Collectibles",
    "source": "Steam Community",
    "author": "Psychedelic Adventurer",
    "platform": "PC (Steam)",
    "versionNote": "",
    "type": "Collectibles",
    "summary": "Locations for missable collectibles in Halo Infinite’s campaign, with a warning about level select.",
    "url": "https://steamcommunity.com/sharedfiles/filedetails/?id=2675714772",
    "selection": "Steam Community top-rated listing; manually checked 2026-10-25",
    "checkedOn": "2026-10-25"
  },
  {
    "id": "guide-god-of-war-1",
    "gameId": "god-of-war",
    "title": "God of War %100 Achievement Guide",
    "source": "Steam Community",
    "author": "Erick",
    "platform": "PC (Steam)",
    "versionNote": "",
    "type": "Collectibles",
    "summary": "A completion checklist for God of War’s achievements, including collectibles and side content.",
    "url": "https://steamcommunity.com/sharedfiles/filedetails/?id=2730145473",
    "selection": "Steam Community top-rated listing; manually checked 2026-10-25",
    "checkedOn": "2026-10-25"
  },
  {
    "id": "guide-marvels-spider-man-1",
    "gameId": "marvels-spider-man",
    "title": "All Suits | Marvel’s Spider-Man Remastered 🏆",
    "source": "Steam Community",
    "author": "XEALEEN",
    "platform": "PC (Steam)",
    "versionNote": "",
    "type": "Collectibles",
    "summary": "How to unlock and craft every suit in Spider-Man Remastered, including suit powers.",
    "url": "https://steamcommunity.com/sharedfiles/filedetails/?id=2847999188",
    "selection": "Steam Community top-rated listing; manually checked 2026-10-25",
    "checkedOn": "2026-10-25"
  },
  {
    "id": "guide-zelda-tears-of-the-kingdom-1",
    "gameId": "zelda-tears-of-the-kingdom",
    "title": "Great Sky Island Walkthrough: Shrines, Abilities and the Closed Door",
    "source": "Nintendo Life",
    "author": "Nintendo Life Guides",
    "platform": "Nintendo Switch",
    "versionNote": "",
    "type": "Progression",
    "summary": "A step-by-step opening walkthrough for Great Sky Island shrines, abilities and the Closed Door quest.",
    "url": "https://www.nintendolife.com/guides/zelda-tears-of-the-kingdom-great-sky-island-walkthrough-shrines-closed-door-quest-abilities",
    "selection": "Editor-selected Nintendo Life guide; checked 2026-10-25",
    "checkedOn": "2026-10-25"
  },
  {
    "id": "guide-super-mario-odyssey-1",
    "gameId": "super-mario-odyssey",
    "title": "Sand Kingdom Power Moon Locations",
    "source": "Nintendo Life",
    "author": "Nintendo Life Guides",
    "platform": "Nintendo Switch",
    "versionNote": "",
    "type": "Collectibles",
    "summary": "Locations for the Sand Kingdom’s Power Moons, including optional and hidden moons.",
    "url": "https://www.nintendolife.com/guides/super-mario-odyssey-sand-kingdom-power-moon-locations",
    "selection": "Editor-selected Nintendo Life guide; checked 2026-10-25",
    "checkedOn": "2026-10-25"
  },
  {
    "id": "guide-animal-crossing-new-horizons-1",
    "gameId": "animal-crossing-new-horizons",
    "title": "Animal Crossing: New Horizons Guide — Walkthrough, Tips and Hints",
    "source": "Nintendo Life",
    "author": "Nintendo Life Guides",
    "platform": "Nintendo Switch",
    "versionNote": "",
    "type": "Beginner",
    "summary": "A beginner walkthrough covering island setup, daily routines, events and common questions.",
    "url": "https://www.nintendolife.com/guides/animal-crossing-new-horizons-guide-walkthrough-tips-and-hints",
    "selection": "Editor-selected Nintendo Life guide; checked 2026-10-25",
    "checkedOn": "2026-10-25"
  },
  {
    "id": "guide-counter-strike-2-1",
    "gameId": "counter-strike-2",
    "title": "How to control spray in CS2✅",
    "source": "Steam Community",
    "author": "_.papieszpolak",
    "platform": "PC (Steam)",
    "versionNote": "",
    "type": "Tips",
    "summary": "Weapon-by-weapon spray patterns and control tips for CS2.",
    "url": "https://steamcommunity.com/sharedfiles/filedetails/?id=3415667709",
    "selection": "Steam Community top-rated listing; manually checked 2026-10-25",
    "checkedOn": "2026-10-25"
  },
  {
    "id": "guide-helldivers-2-1",
    "gameId": "helldivers-2",
    "title": "BEST FARM FOR SUPER CREDITS in Helldivers 2",
    "source": "Steam Community",
    "author": "Morze",
    "platform": "PC (Steam)",
    "versionNote": "",
    "type": "Tips",
    "summary": "A repeatable Super Credits farming route with loadout and difficulty advice.",
    "url": "https://steamcommunity.com/sharedfiles/filedetails/?id=3481034821",
    "selection": "Steam Community top-rated listing; manually checked 2026-10-25",
    "checkedOn": "2026-10-25"
  },
  {
    "id": "guide-helldivers-2-2",
    "gameId": "helldivers-2",
    "title": "All time-limited Unlockables / Commemorative Armor & Capes",
    "source": "Steam Community",
    "author": "Steam Community author",
    "platform": "PC (Steam)",
    "versionNote": "",
    "type": "Collectibles",
    "summary": "An archive of time-limited armor, capes and other unlockables.",
    "url": "https://steamcommunity.com/sharedfiles/filedetails/?id=3386077525",
    "selection": "Steam Community top-rated listing; manually checked 2026-10-25",
    "checkedOn": "2026-10-25"
  },
  {
    "id": "guide-civilization-6-1",
    "gameId": "civilization-6",
    "title": "[EN] Early game strategy, or how not to get overwhelmed",
    "source": "Steam Community",
    "author": "VolusFM_",
    "platform": "PC (Steam)",
    "versionNote": "",
    "type": "Beginner",
    "summary": "Early-game priorities for players who feel overwhelmed by Civ VI’s systems.",
    "url": "https://steamcommunity.com/sharedfiles/filedetails/?id=3006161462",
    "selection": "Steam Community top-rated listing; manually checked 2026-10-25",
    "checkedOn": "2026-10-25"
  },
  {
    "id": "guide-civilization-6-2",
    "gameId": "civilization-6",
    "title": "How Zany's Comprehensive Civ 6 Guide to Skilled/Advanced Play",
    "source": "Steam Community",
    "author": "How Zany",
    "platform": "PC (Steam)",
    "versionNote": "",
    "type": "Tips",
    "summary": "A broad strategy guide covering empire management and advanced play.",
    "url": "https://steamcommunity.com/sharedfiles/filedetails/?id=926983840",
    "selection": "Steam Community top-rated listing; manually checked 2026-10-25",
    "checkedOn": "2026-10-25"
  },
  {
    "id": "guide-civilization-6-3",
    "gameId": "civilization-6",
    "title": "A Guide to True Starting Locations in Civilization VI",
    "source": "Steam Community",
    "author": "Endicott",
    "platform": "PC (Steam)",
    "versionNote": "",
    "type": "Tips",
    "summary": "How to use true starting locations on Earth maps in Civilization VI.",
    "url": "https://steamcommunity.com/sharedfiles/filedetails/?id=2594624029",
    "selection": "Steam Community top-rated listing; manually checked 2026-10-25",
    "checkedOn": "2026-10-25"
  },
  {
    "id": "guide-xcom-2-1",
    "gameId": "xcom-2",
    "title": "Specialized Soldiers Builds V1.2",
    "source": "Steam Community",
    "author": "Uncle Fester",
    "platform": "PC (Steam)",
    "versionNote": "",
    "type": "Build",
    "summary": "Soldier build templates and equipment choices for XCOM 2.",
    "url": "https://steamcommunity.com/sharedfiles/filedetails/?id=641028751",
    "selection": "Steam Community top-rated listing; manually checked 2026-10-25",
    "checkedOn": "2026-10-25"
  },
  {
    "id": "guide-portal-2-1",
    "gameId": "portal-2",
    "title": "100% Achievement Guide: Portal 2",
    "source": "Steam Community",
    "author": "Cynic 0055",
    "platform": "PC (Steam)",
    "versionNote": "",
    "type": "Collectibles",
    "summary": "A step-by-step achievement and collectible checklist for Portal 2.",
    "url": "https://steamcommunity.com/sharedfiles/filedetails/?id=2936034273",
    "selection": "Steam Community top-rated listing; manually checked 2026-10-25",
    "checkedOn": "2026-10-25"
  },
  {
    "id": "guide-portal-2-2",
    "gameId": "portal-2",
    "title": "Portal 2 Walkthrough — Test Chamber Solutions",
    "source": "IGN",
    "author": "IGN Guides",
    "platform": "PC / console",
    "versionNote": "Single-player campaign; check the page for platform tabs.",
    "type": "Puzzle",
    "summary": "A chapter-by-chapter walkthrough for the single-player test chambers, explaining the puzzle solution in each room.",
    "url": "https://www.ign.com/wikis/portal-2/Walkthrough",
    "selection": "Editor-selected IGN guide; checked 2026-10-25",
    "checkedOn": "2026-10-25"
  },
  {
    "id": "guide-celeste-1",
    "gameId": "celeste",
    "title": "Chapter 1: Forsaken City - Complete Walkthrough [All Strawberries, Cassette Tape, and Crystal Heart]",
    "source": "Steam Community",
    "author": "Abbilieve",
    "platform": "PC (Steam)",
    "versionNote": "",
    "type": "Progression",
    "summary": "A GIF-guided route through Chapter 1 with all strawberries, the cassette tape and Crystal Heart.",
    "url": "https://steamcommunity.com/sharedfiles/filedetails/?id=3474899136",
    "selection": "Steam Community top-rated listing; manually checked 2026-10-25",
    "checkedOn": "2026-10-25"
  },
  {
    "id": "guide-resident-evil-4-1",
    "gameId": "resident-evil-4",
    "title": "Resident Evil 4 Separate Ways Puzzles Guide",
    "source": "Steam Community",
    "author": "Gunny",
    "platform": "PC (Steam)",
    "versionNote": "Separate Ways DLC.",
    "type": "DLC",
    "summary": "Solutions to the puzzles in the Separate Ways DLC.",
    "url": "https://steamcommunity.com/sharedfiles/filedetails/?id=3121780587",
    "selection": "Steam Community top-rated listing; manually checked 2026-10-25",
    "checkedOn": "2026-10-25"
  },
  {
    "id": "guide-resident-evil-4-2",
    "gameId": "resident-evil-4",
    "title": "RE4R Weapons Max Stat Comparison Table",
    "source": "Steam Community",
    "author": "illusWav",
    "platform": "PC (Steam)",
    "versionNote": "",
    "type": "Build",
    "summary": "Maximum weapon stats, exclusives and upgrade costs for planning a loadout.",
    "url": "https://steamcommunity.com/sharedfiles/filedetails/?id=2959791533",
    "selection": "Steam Community top-rated listing; manually checked 2026-10-25",
    "checkedOn": "2026-10-25"
  },
  {
    "id": "guide-resident-evil-4-3",
    "gameId": "resident-evil-4",
    "title": "Interactive Map",
    "source": "Steam Community",
    "author": "oficialLuke",
    "platform": "PC (Steam)",
    "versionNote": "",
    "type": "Collectibles",
    "summary": "An interactive map for collectibles, bosses and resources.",
    "url": "https://steamcommunity.com/sharedfiles/filedetails/?id=3363600451",
    "selection": "Steam Community top-rated listing; manually checked 2026-10-25",
    "checkedOn": "2026-10-25"
  },
  {
    "id": "guide-subnautica-1",
    "gameId": "subnautica",
    "title": "(NO SPOILERS) Beginner tips and tricks that I had to Google",
    "source": "Steam Community",
    "author": "Milleuros",
    "platform": "PC (Steam)",
    "versionNote": "",
    "type": "Beginner",
    "summary": "Spoiler-light tips for early survival, crafting and exploration.",
    "url": "https://steamcommunity.com/sharedfiles/filedetails/?id=2928870196",
    "selection": "Steam Community top-rated listing; manually checked 2026-10-25",
    "checkedOn": "2026-10-25"
  },
  {
    "id": "guide-the-sims-4-1",
    "gameId": "the-sims-4",
    "title": "The Sims 4 Interface Guide",
    "source": "IGN",
    "author": "IGN Guides",
    "platform": "PC / console",
    "versionNote": "",
    "type": "Beginner",
    "summary": "A tour of the interface, needs, moods and build tools for a first household.",
    "url": "https://www.ign.com/wikis/the-sims-4/Interface",
    "selection": "Editor-selected IGN guide; checked 2026-10-25",
    "checkedOn": "2026-10-25"
  },
  {
    "id": "guide-cities-skylines-1",
    "gameId": "cities-skylines",
    "title": "Cities Skylines: An In-Depth Beginner's Guide & Walkthrough",
    "source": "Steam Community",
    "author": "Maestro",
    "platform": "PC (Steam)",
    "versionNote": "",
    "type": "Progression",
    "summary": "A milestone-by-milestone guide to building a stable, profitable city.",
    "url": "https://steamcommunity.com/sharedfiles/filedetails/?id=418195753",
    "selection": "Steam Community top-rated listing; manually checked 2026-10-25",
    "checkedOn": "2026-10-25"
  },
  {
    "id": "guide-cities-skylines-2",
    "gameId": "cities-skylines",
    "title": "Traffic Planning Guide for Realistic Cities",
    "source": "Steam Community",
    "author": "Dimethylmercury",
    "platform": "PC (Steam)",
    "versionNote": "",
    "type": "Tips",
    "summary": "Traffic-planning principles for reducing congestion in larger cities.",
    "url": "https://steamcommunity.com/sharedfiles/filedetails/?id=475455648",
    "selection": "Steam Community top-rated listing; manually checked 2026-10-25",
    "checkedOn": "2026-10-25"
  },
  {
    "id": "guide-cities-skylines-3",
    "gameId": "cities-skylines",
    "title": "UnicornPoacher's Shiny Noob Cities Skylines Guide",
    "source": "Steam Community",
    "author": "UnicornPoacher",
    "platform": "PC (Steam)",
    "versionNote": "",
    "type": "Beginner",
    "summary": "Basic city-building principles for new players.",
    "url": "https://steamcommunity.com/sharedfiles/filedetails/?id=1128876599",
    "selection": "Steam Community top-rated listing; manually checked 2026-10-25",
    "checkedOn": "2026-10-25"
  },
  {
    "id": "guide-street-fighter-6-1",
    "gameId": "street-fighter-6",
    "title": "Vel's Rank Up Checklist and Guide. Tips, terms and tutorial resources.",
    "source": "Steam Community",
    "author": "vel",
    "platform": "PC (Steam)",
    "versionNote": "",
    "type": "Beginner",
    "summary": "A checklist of terms, habits and resources for improving ranked play.",
    "url": "https://steamcommunity.com/sharedfiles/filedetails/?id=3152029643",
    "selection": "Steam Community top-rated listing; manually checked 2026-10-25",
    "checkedOn": "2026-10-25"
  },
  {
    "id": "guide-street-fighter-6-2",
    "gameId": "street-fighter-6",
    "title": "Street Fighter 6 X Banshee's Last Cry - All Endings",
    "source": "Steam Community",
    "author": "Spoon",
    "platform": "PC (Steam)",
    "versionNote": "Banshee’s Last Cry World Tour collaboration.",
    "type": "Collectibles",
    "summary": "How to unlock every ending in the Banshee’s Last Cry World Tour collaboration.",
    "url": "https://steamcommunity.com/sharedfiles/filedetails/?id=3589711681",
    "selection": "Steam Community top-rated listing; manually checked 2026-10-25",
    "checkedOn": "2026-10-25"
  },
  {
    "id": "guide-tekken-8-1",
    "gameId": "tekken-8",
    "title": "100% ACHIEVEMENT GUIDE | TEKKEN 8",
    "source": "Steam Community",
    "author": "XEALEEN",
    "platform": "PC (Steam)",
    "versionNote": "",
    "type": "Collectibles",
    "summary": "A step-by-step checklist for Tekken 8’s achievements.",
    "url": "https://steamcommunity.com/sharedfiles/filedetails/?id=3147260435",
    "selection": "Steam Community top-rated listing; manually checked 2026-10-25",
    "checkedOn": "2026-10-25"
  },
  {
    "id": "guide-hatsune-miku-project-diva-mega-mix-1",
    "gameId": "hatsune-miku-project-diva-mega-mix",
    "title": "How to get good at Project Diva",
    "source": "Steam Community",
    "author": "Mekki",
    "platform": "PC (Steam)",
    "versionNote": "Controller recommended by the author.",
    "type": "Tips",
    "summary": "Timing, scoring and controller tips for clearing harder Project Diva songs.",
    "url": "https://steamcommunity.com/sharedfiles/filedetails/?id=2815329154",
    "selection": "Steam Community top-rated listing; manually checked 2026-10-25",
    "checkedOn": "2026-10-25"
  },
  {
    "id": "guide-hatsune-miku-project-diva-mega-mix-2",
    "gameId": "hatsune-miku-project-diva-mega-mix",
    "title": "Project Diva MM+ 100% Achievement guide",
    "source": "Steam Community",
    "author": "Steam Community author",
    "platform": "PC (Steam)",
    "versionNote": "",
    "type": "Collectibles",
    "summary": "A checklist for Project Diva Mega Mix+ achievements.",
    "url": "https://steamcommunity.com/sharedfiles/filedetails/?id=3147492970",
    "selection": "Steam Community top-rated listing; manually checked 2026-10-25",
    "checkedOn": "2026-10-25"
  },
  {
    "id": "guide-balatro-1",
    "gameId": "balatro",
    "title": "Getting that first winning run",
    "source": "Steam Community",
    "author": "zirune",
    "platform": "PC (Steam)",
    "versionNote": "",
    "type": "Beginner",
    "summary": "Beginner tips for building a winning first run.",
    "url": "https://steamcommunity.com/sharedfiles/filedetails/?id=3273420629",
    "selection": "Steam Community top-rated listing; manually checked 2026-10-25",
    "checkedOn": "2026-10-25"
  },
  {
    "id": "guide-balatro-2",
    "gameId": "balatro",
    "title": "Balatro Achievements and Challenge Guide",
    "source": "Steam Community",
    "author": "Altivu",
    "platform": "PC (Steam)",
    "versionNote": "",
    "type": "Collectibles",
    "summary": "An achievement and challenge checklist with general tips.",
    "url": "https://steamcommunity.com/sharedfiles/filedetails/?id=3166389891",
    "selection": "Steam Community top-rated listing; manually checked 2026-10-25",
    "checkedOn": "2026-10-25"
  },
  {
    "id": "guide-slay-the-spire-1",
    "gameId": "slay-the-spire",
    "title": "Slaying The Spire From The Ground Up: Building a Good Foundation",
    "source": "Steam Community",
    "author": "mldb88",
    "platform": "PC (Steam)",
    "versionNote": "",
    "type": "Beginner",
    "summary": "Core deckbuilding habits and mistakes to avoid across all characters.",
    "url": "https://steamcommunity.com/sharedfiles/filedetails/?id=2673443183",
    "selection": "Steam Community top-rated listing; manually checked 2026-10-25",
    "checkedOn": "2026-10-25"
  },
  {
    "id": "guide-slay-the-spire-2",
    "gameId": "slay-the-spire",
    "title": "Slay the Spire Silent Style",
    "source": "Steam Community",
    "author": "Lightja",
    "platform": "PC (Steam)",
    "versionNote": "",
    "type": "Build",
    "summary": "A Silent card, relic and route guide from low to high Ascension.",
    "url": "https://steamcommunity.com/sharedfiles/filedetails/?id=1331551053",
    "selection": "Steam Community top-rated listing; manually checked 2026-10-25",
    "checkedOn": "2026-10-25"
  },
  {
    "id": "guide-slay-the-spire-3",
    "gameId": "slay-the-spire",
    "title": "Slay the Spire 100% Achievement Guide",
    "source": "Steam Community",
    "author": "LukewarmYeti",
    "platform": "PC (Steam)",
    "versionNote": "2020 guide; later balance patches may apply.",
    "type": "Collectibles",
    "summary": "A 2020 achievement checklist including the Watcher.",
    "url": "https://steamcommunity.com/sharedfiles/filedetails/?id=2077110546",
    "selection": "Steam Community top-rated listing; manually checked 2026-10-25",
    "checkedOn": "2026-10-25"
  },
  {
    "id": "guide-it-takes-two-1",
    "gameId": "it-takes-two",
    "title": "It Takes Two — 100% Achievement Guide",
    "source": "Steam Community",
    "author": "KageAqua",
    "platform": "PC (Steam)",
    "versionNote": "Requires two players (local or online).",
    "type": "Collectibles",
    "summary": "A co-op achievement guide covering chapters, minigames and collectibles.",
    "url": "https://steamcommunity.com/sharedfiles/filedetails/?id=3553877069",
    "selection": "Steam Community top-rated listing; manually checked 2026-10-25",
    "checkedOn": "2026-10-25"
  },
  {
    "id": "guide-overcooked-2-1",
    "gameId": "overcooked-2",
    "title": "Ingredients, Tools, Dishes, Levels and Recipes",
    "source": "Steam Community",
    "author": "Kingofbyd",
    "platform": "PC (Steam)",
    "versionNote": "",
    "type": "Collectibles",
    "summary": "An illustrated reference for ingredients, dishes, levels and recipes.",
    "url": "https://steamcommunity.com/sharedfiles/filedetails/?id=1769729191",
    "selection": "Steam Community top-rated listing; manually checked 2026-10-25",
    "checkedOn": "2026-10-25"
  },
  {
    "id": "guide-nba-2k25-1",
    "gameId": "nba-2k25",
    "title": "Badge Requirements | NBA 2K25",
    "source": "Steam Community",
    "author": "Shifty Kiwiahi",
    "platform": "PC (Steam)",
    "versionNote": "",
    "type": "Tips",
    "summary": "Badge requirements and usage for NBA 2K25 builds.",
    "url": "https://steamcommunity.com/sharedfiles/filedetails/?id=3386622877",
    "selection": "Steam Community top-rated listing; manually checked 2026-10-25",
    "checkedOn": "2026-10-25"
  },
  {
    "id": "guide-nba-2k25-2",
    "gameId": "nba-2k25",
    "title": "the best pg position build",
    "source": "Steam Community",
    "author": "svmuughh",
    "platform": "PC (Steam)",
    "versionNote": "",
    "type": "Build",
    "summary": "A point-guard build with attributes and physical measurements.",
    "url": "https://steamcommunity.com/sharedfiles/filedetails/?id=3640286157",
    "selection": "Steam Community top-rated listing; manually checked 2026-10-25",
    "checkedOn": "2026-10-25"
  },
  {
    "id": "guide-ea-sports-fc-25-1",
    "gameId": "ea-sports-fc-25",
    "title": "All Male FC 25 Icons & Heroes [Guide for collectors]",
    "source": "Steam Community",
    "author": "1701",
    "platform": "PC (Steam)",
    "versionNote": "",
    "type": "Collectibles",
    "summary": "A collector’s list of male Icons and Heroes in FC 25.",
    "url": "https://steamcommunity.com/sharedfiles/filedetails/?id=3550081025",
    "selection": "Steam Community top-rated listing; manually checked 2026-10-25",
    "checkedOn": "2026-10-25"
  },
  {
    "id": "guide-f1-24-1",
    "gameId": "f1-24",
    "title": "F1 2024 - Every Track Best Car Setup",
    "source": "Steam Community",
    "author": "JoaoPedro1221",
    "platform": "PC (Steam)",
    "versionNote": "F1 24.",
    "type": "Tips",
    "summary": "General car set-ups for every track in F1 24.",
    "url": "https://steamcommunity.com/sharedfiles/filedetails/?id=3256362447",
    "selection": "Steam Community top-rated listing; manually checked 2026-10-25",
    "checkedOn": "2026-10-25"
  },
  {
    "id": "guide-dead-cells-1",
    "gameId": "dead-cells",
    "title": "Ultimate Guide - Everything you need!",
    "source": "Steam Community",
    "author": "SpeedyCookie",
    "platform": "PC (Steam)",
    "versionNote": "",
    "type": "Tips",
    "summary": "A large collection of tips and detailed systems advice for new and experienced players.",
    "url": "https://steamcommunity.com/sharedfiles/filedetails/?id=2834339334",
    "selection": "Steam Community top-rated listing; manually checked 2026-10-25",
    "checkedOn": "2026-10-25"
  },
  {
    "id": "guide-dead-cells-2",
    "gameId": "dead-cells",
    "title": "Explorer's Guide 1.4",
    "source": "Steam Community",
    "author": "Ray G.",
    "platform": "PC (Steam)",
    "versionNote": "Dead Cells 1.4.",
    "type": "Collectibles",
    "summary": "A progression map and intermediate-to-advanced exploration guide.",
    "url": "https://steamcommunity.com/sharedfiles/filedetails/?id=1214490016",
    "selection": "Steam Community top-rated listing; manually checked 2026-10-25",
    "checkedOn": "2026-10-25"
  },
  {
    "id": "guide-dead-cells-3",
    "gameId": "dead-cells",
    "title": "[How to] Dead Cells",
    "source": "Steam Community",
    "author": "Sunny Senpai",
    "platform": "PC (Steam)",
    "versionNote": "",
    "type": "Beginner",
    "summary": "Core survival, combat and route-planning basics.",
    "url": "https://steamcommunity.com/sharedfiles/filedetails/?id=973253526",
    "selection": "Steam Community top-rated listing; manually checked 2026-10-25",
    "checkedOn": "2026-10-25"
  },
  {
    "id": "guide-disco-elysium-1",
    "gameId": "disco-elysium",
    "title": "Character Build Ideas for You",
    "source": "Steam Community",
    "author": "Maxine",
    "platform": "PC (Steam)",
    "versionNote": "",
    "type": "Build",
    "summary": "Six attribute and skill builds covering the main archetypes.",
    "url": "https://steamcommunity.com/sharedfiles/filedetails/?id=3413524703",
    "selection": "Steam Community top-rated listing; manually checked 2026-10-25",
    "checkedOn": "2026-10-25"
  }
]

export const p2BySlug = new Map(p2Games.map(game => [game.slug, game]))
export const p2ById = new Map(p2Games.map(game => [game.id, game]))
export const p2Genres = [...new Set(p2Games.flatMap(game => game.genres))].sort((a,b)=>a.localeCompare(b,'en'))
export function guidesForGame(gameId: string) { return p2Guides.filter(guide => guide.gameId === gameId).slice(0, 3) }
export function primaryRating(game: P2Game) { return game.ratings[0] ?? null }
export function compareMostReviewed(a: P2Game, b: P2Game) { return (primaryRating(b)?.count ?? 0) - (primaryRating(a)?.count ?? 0) || a.title.localeCompare(b.title, 'en') }
export function compactCount(count: number) { return count >= 1000000 ? (count/1000000).toFixed(1).replace('.0','')+'M' : count >= 1000 ? Math.round(count/1000)+'k' : String(count) }
export function formatCad(cents: number) { return 'CA$' + new Intl.NumberFormat('en-CA',{minimumFractionDigits:2,maximumFractionDigits:2}).format(cents/100) }
export function formatRating(rating: P2Rating) { return rating.scale === 'percent' ? `${rating.score}%` : `${rating.score.toFixed(1)}/10` }export interface P2PriceCoverage { baseStores: string[]; basePlatforms: string[]; historicalLowStores: string[]; promotionStores: string[]; consoleIncluded: boolean }
export function priceCoverage(game: P2Game): P2PriceCoverage {
  const unique = (items: string[]) => [...new Set(items)]
  const basePlatforms = unique(game.basePrices.map(price => price.platform))
  return {
    baseStores: unique(game.basePrices.map(price => price.store)),
    basePlatforms,
    historicalLowStores: unique(game.historicalLow ? [game.historicalLow.store] : []),
    promotionStores: unique(game.discounts.map(discount => discount.store)),
    consoleIncluded: basePlatforms.some(platform => platform !== 'PC'),
  }
}
