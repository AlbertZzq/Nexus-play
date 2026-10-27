import { PageHeader } from '../components/common/PageHeader'
import { P1NewsCard } from '../components/content/P1NewsCard'
import { p1Newsroom, selectP1News } from '../data/p1Newsroom'
import { usePageQuery } from '../hooks/usePageQuery'
export function P1News() {
  const { params, update } = usePageQuery()
  const categories = [...new Set(p1Newsroom.map(item => item.category))]
  const value = params.get('category') ?? ''
  const category = categories.some(item => item === value) ? value : ''
  const matches = (item: (typeof p1Newsroom)[number]) => !category || item.category === category
  const dated = selectP1News().filter(matches)
  const undated = p1Newsroom.filter(item => item.publishedAt === null && matches(item))
  return <div className="editorial-page p1-news-page">
    <p className="eyebrow">New games, original sources</p><PageHeader title="News" description="Official new-game reporting, ordered by verified publication date. Release dates are shown separately." />
    <div className="editorial-filters" role="group" aria-label="News categories">{['', ...categories].map(option => <button key={option} aria-pressed={category === option} onClick={() => update({ category: option || null })}>{option || 'All'}</button>)}</div>
    <p role="status">{dated.length + undated.length} stories</p>
    <section className="editorial-results" aria-labelledby="p1-latest-news"><h2 id="p1-latest-news">Latest published stories</h2><div className="news-list">{dated.map(item => <P1NewsCard key={item.id} item={item} />)}</div></section>
    {undated.length > 0 && <section className="editorial-results" aria-labelledby="p1-undated-news"><h2 id="p1-undated-news">Official updates · publication date unavailable</h2><p>These sources are kept separate from the chronological news feed.</p><div className="news-list">{undated.map(item => <P1NewsCard key={item.id} item={item} />)}</div></section>}
  </div>
}
