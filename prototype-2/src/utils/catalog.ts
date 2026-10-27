import type { Game, Platform } from '../data/types'

export interface GameQuery {
  q: string
  genre: string
  platform: Platform | ''
  rating: number
  year: string
  sort: 'rating' | 'popularity' | 'release' | 'name'
}

export function selectGames(items: readonly Game[], query: GameQuery): Game[] {
  const titleSearch = query.q.trim().toLocaleLowerCase('en')
  const filtered = items.filter((game) =>
    game.title.toLocaleLowerCase('en').includes(titleSearch)
    && (!query.genre || game.genres.includes(query.genre))
    && (!query.platform || game.platforms.includes(query.platform))
    && (query.rating === 0 || (game.playerRating !== null && game.playerRating >= query.rating))
    && (!query.year || game.releaseDate?.startsWith(`${query.year}-`)),
  )

  return filtered.sort((a, b) => {
    let order: number
    switch (query.sort) {
      case 'rating': order = (b.playerRating ?? -1) - (a.playerRating ?? -1); break
      case 'release': order = (b.releaseDate ?? '').localeCompare(a.releaseDate ?? ''); break
      case 'name': order = a.title.localeCompare(b.title, 'en'); break
      default: order = b.popularity - a.popularity
    }
    return order || a.title.localeCompare(b.title, 'en') || a.id.localeCompare(b.id, 'en')
  })
}
