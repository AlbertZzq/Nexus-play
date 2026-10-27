import { LocalImage } from '../common/LocalImage'
import { DesignLink } from '../navigation/DesignLink'
import { p1Catalog } from '../../data/p1Catalog'
import { selectedGameDate, releaseStatus } from '../../data/p1GameFacts'
import type { P1NewsStory } from '../../data/p1Newsroom'
import { formatDate } from '../../utils/format'
export function P1NewsCard({ item }: { item: P1NewsStory }) {
  const games = item.gameIds.flatMap(id => p1Catalog.filter(game => game.id === id))
  return <article id={item.id} className="editorial-card news-card p1-news-card" aria-labelledby={`${item.id}-title`}>
    <LocalImage media={item.image} className="editorial-card-image" />
    <div className="editorial-card-content">
      <div className="editorial-meta"><span className="editorial-category">{item.category}</span>{item.publishedAt ? <span>Published <time dateTime={item.publishedAt}>{formatDate(item.publishedAt.slice(0, 10))}</time></span> : <span>Publication date unavailable</span>}</div>
      <h3 id={`${item.id}-title`}>{item.title}</h3>
      <p className="editorial-summary">{item.summary}</p>
      {item.updatedAt && <p>Updated {formatDate(item.updatedAt.slice(0, 10))}</p>}
      {games.map(game => <p key={game.id} className="p1-news-release">{releaseStatus(game)} · {selectedGameDate(game) ? `Catalog release: ${formatDate(selectedGameDate(game)!)}` : 'Release date TBA'} · <DesignLink to={`/games/${game.slug}`}>{game.title} details</DesignLink></p>)}
      <p className="details-meta">Editorial summary of {item.sourceKind === 'official-page' ? 'an official information page' : 'an official article'}.</p>
      <div className="news-source-row"><a className="news-read-more" href={item.sourceUrl} target="_blank" rel="noopener noreferrer">Read original · {item.source} ↗</a><DesignLink to="/calendar">Release calendar</DesignLink></div>
    </div>
  </article>
}
