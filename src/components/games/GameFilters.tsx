import { useState } from 'react'
import type { FormEvent } from 'react'
import { p1Catalog } from '../../data/p1Catalog'
import { games } from '../../data/games'
import type { GameQuery } from '../../utils/catalog'

const genres = [...new Set(games.flatMap(game => game.genres))].sort()
const years = [...new Set(games.flatMap(game => game.releaseDate ? [game.releaseDate.slice(0, 4)] : []))].sort().reverse()
const platforms = ['PC', 'PlayStation', 'Xbox', 'Nintendo'] as const
const ratings = [0, 7, 8, 9, 9.5]

export function GameFilters({ query, onChange, searchLabel = 'Search Discover', p1 = false }: { query: GameQuery; onChange: (patch: Partial<GameQuery>) => void; searchLabel?: string; p1?: boolean }) {
  const availableGenres = p1 ? [...new Set(p1Catalog.flatMap(game => game.genres))].sort() : genres
  const availableYears = p1 ? [...new Set(p1Catalog.flatMap(game => game.releaseDate ? [game.releaseDate.slice(0, 4)] : []))].sort().reverse() : years
  const [draft, setDraft] = useState(query.q)
  const [previousQuery, setPreviousQuery] = useState(query.q)
  if (query.q !== previousQuery) {
    setPreviousQuery(query.q)
    setDraft(query.q)
  }
  const ratingOptions = ratings.includes(query.rating) ? ratings : [...ratings, query.rating].sort((a, b) => a - b)

  function search(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setDraft(draft.trim())
    onChange({ q: draft.trim() })
  }

  function reset() {
    setDraft('')
    onChange({ q: '', genre: '', platform: '', rating: 0, year: '', sort: p1 ? 'release' : 'popularity' })
  }

  return <section className="game-filters" aria-labelledby="filter-heading">
    <div className="filter-heading"><h2 id="filter-heading">Find your next game</h2><button type="button" onClick={reset}>Reset filters</button></div>
    <form className="discover-search" role="search" aria-label={searchLabel} onSubmit={search}>
      <label htmlFor="discover-search">{searchLabel}</label>
      <div className="discover-search-controls"><input id="discover-search" type="search" placeholder="Search a game title…" value={draft} onChange={event => setDraft(event.target.value)} /><button type="submit" aria-label="Apply search">Search</button></div>
    </form>
    <div className="filter-controls">
      <label htmlFor="filter-genre">Genre<select id="filter-genre" value={query.genre} onChange={event => onChange({ genre: event.target.value })}><option value="">All genres</option>{availableGenres.map(genre => <option key={genre} value={genre}>{genre}</option>)}</select></label>
      {!p1 && <label htmlFor="filter-platform">Platform<select id="filter-platform" value={query.platform} onChange={event => onChange({ platform: event.target.value as GameQuery['platform'] })}><option value="">All platforms</option>{platforms.map(platform => <option key={platform} value={platform}>{platform}</option>)}</select></label>}
      {!p1 && <label htmlFor="filter-rating">Minimum player rating<select id="filter-rating" value={query.rating} onChange={event => onChange({ rating: Number(event.target.value) })}>{ratingOptions.map(rating => <option key={rating} value={rating}>{rating === 0 ? 'Any rating' : `${rating.toFixed(1)} and above`}</option>)}</select></label>}
      <label htmlFor="filter-year">Release year<select id="filter-year" value={query.year} onChange={event => onChange({ year: event.target.value })}><option value="">All years</option>{availableYears.map(year => <option key={year} value={year}>{year}</option>)}</select></label>
      <label htmlFor="filter-sort">Sort by<select id="filter-sort" value={query.sort} onChange={event => onChange({ sort: event.target.value as GameQuery['sort'] })}>{!p1 && <><option value="popularity">Most popular</option><option value="rating">Highest player rating</option></>}<option value="release">{p1 ? 'Release priority' : 'Newest release'}</option><option value="name">Title A–Z</option></select></label>
    </div>
  </section>
}
