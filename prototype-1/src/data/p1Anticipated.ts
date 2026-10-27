import type { Platform } from './types'

export type AnticipatedStatus = 'Released' | 'Upcoming' | 'Date TBA'
export type AnticipatedEdition = 'Remake' | 'Remaster' | 'Re-release'

export interface AnticipatedRelease {
  gameId: string
  wishlistAvailable?: boolean
  edition?: AnticipatedEdition
  /** Short, source-backed reason this game is in the editorial selection. */
  trending: string
  officialUrl: string
  /** Used for a direct Steam store link when the app is known; otherwise a Steam search link is used. */
  steamAppId?: number
}

// Editorial selection; canonical catalog supplies all release dates and status.
// No wishlist counts, pre-order numbers or rankings are claimed: trending notes use only public
// release/status facts. Remake / Remaster / Re-release records use their new-edition date.
export const p1Anticipated: readonly AnticipatedRelease[] = [
  {
    gameId: 'halloween-the-game',
    trending: 'Asymmetrical Michael Myers horror with single-player and multiplayer modes.',
    officialUrl: 'https://halloweengame.com/',
    steamAppId: 3219630,
  },
  {
    gameId: 'fire-emblem-fortunes-weave',
    trending: 'Tactical role-playing journeys on Nintendo Switch 2.',
    officialUrl: 'https://www.nintendo.com/hk/topics/article/6TmiV6zUXU8YEQzNj5NvgQ',
  },
  {
    gameId: 'control-resonant',
    trending: 'Paranormal action role-playing in a transformed Manhattan.',
    officialUrl: 'https://www.remedygames.com/games/control-2',
  },
  {
    gameId: 'the-witcher-3-remastered',
    edition: 'Remaster',
    trending: 'An open-world Geralt adventure in a remastered edition.',
    officialUrl: 'https://www.thewitcher.com/witcher3',
    steamAppId: 292030,
  },
  {
    gameId: 'star-wars-galactic-racer',
    trending: 'Star Wars racing through the Galactic League.',
    officialUrl: 'https://starwarsgalacticracer.com/',
    steamAppId: 4078430,
  },
  {
    gameId: 'final-fantasy-resonance',
    trending: 'A new journey in the Final Fantasy role-playing series.',
    officialUrl: 'https://www.square-enix.com/finalfantasyresonance/en_US/',
    steamAppId: 3259780,
  },
  {
    gameId: 'fatal-fury-city-of-the-wolves',
    edition: 'Re-release',
    trending: 'SNK fighting with Smart and Arcade control styles.',
    officialUrl: 'https://www.snk-corp.co.jp/official/fatalfury-cotw/',
  },
  {
    gameId: 'modern-warfare-4',
    trending: 'Campaign, multiplayer and DMZ extraction combat.',
    officialUrl: 'https://www.xbox.com/en-US/games/call-of-duty-modern-warfare-4',
  },
  {
    gameId: 'the-wolf-among-us-remastered',
    edition: 'Remaster',
    trending: 'A remastered edition of Telltale’s noir adventure.',
    officialUrl: 'https://telltale.com/games/the-wolf-among-us-remastered/',
    steamAppId: 3884860,
  },
  {
    gameId: 'zelda-ocarina-of-time',
    edition: 'Remake',
    trending: 'A rebuilt Hyrule adventure for Nintendo Switch 2.',
    officialUrl: 'https://www.nintendo.com/sg/news/article/3Uvp2H1iPLLLSnR4MJgmq1',
  },
  {
    gameId: 'grand-theft-auto-vi',
    trending: 'Rockstar’s next Grand Theft Auto adventure.',
    officialUrl: 'https://www.rockstargames.com/newswire/article/ak3ak31a49a221/grand-theft-auto-vi-is-now-set-to-launch-november-19-2026',
  },
  {
    gameId: 'hela-of-mice-and-magic',
    wishlistAvailable: true,
    trending: 'A cooperative mouse adventure in a magical world.',
    officialUrl: 'https://www.microids.com/fr/hela-of-mice-magic-enchantera-les-joueurs-du-monde-entier-le-1er-decembre-2026/',
    steamAppId: 3161310,
  },
  {
    gameId: 'dragon-quest-monsters-the-withered-world',
    wishlistAvailable: true,
    trending: 'Monster-focused role-playing in the Dragon Quest series.',
    officialUrl: 'https://www.square-enix.com/asia/newsportal/ja/jp/dragonquest-monsters4/',
    steamAppId: 3681610,
  },
  {
    gameId: 'rayman-legends-retold',
    wishlistAvailable: true,
    edition: 'Remake',
    trending: 'Platforming with new visuals and local cooperative play.',
    officialUrl: 'https://raymanlegendsretold.com/',
    steamAppId: 4084710,
  },
  {
    gameId: 'fable',
    trending: 'A return to Albion in a fantasy role-playing adventure.',
    officialUrl: 'https://www.fablethegame.com/',
  },
]

export const anticipatedPlatforms: readonly Platform[] = ['PC', 'PlayStation', 'Xbox', 'Nintendo']
export const anticipatedStatuses: readonly AnticipatedStatus[] = ['Released', 'Upcoming', 'Date TBA']

export type AnticipatedGroupKey = string
export function anticipatedGroupKey(date: string | null): string { return date ? date.slice(0, 7) : 'tba' }
export function anticipatedGroupLabel(key: string): string {
  return key === 'tba' ? 'Date TBA' : new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${key}-01T00:00:00Z`))
}
