import { useDesign } from '../app/DesignProvider'
import { P1News } from './P1News'
import { PageHeader } from '../components/common/PageHeader'
import { NewsCard } from '../components/content/NewsCard'
import { newsroom } from '../data/newsroom'
import type { NewsCategory } from '../data/types'
import { usePageQuery } from '../hooks/usePageQuery'
import '../styles/pages.css'

const categories: readonly NewsCategory[] = ['Industry', 'Updates', 'Esports', 'Releases']

export function News() {
  const { design } = useDesign()
  return design === '1' ? <P1News /> : <LegacyNews />
}

function LegacyNews() {
  const { params, update } = usePageQuery()
  const value = params.get('category') ?? ''
  const category = categories.includes(value as NewsCategory) ? value : ''
  const results = newsroom.filter(item => !category || item.category === category)
    .sort((a, b) => b.date.localeCompare(a.date) || a.id.localeCompare(b.id))

  return <div className="editorial-page">
    <p className="eyebrow">Stories from across gaming</p>
    <PageHeader title="News" description="Release, update and platform stories from July to December 2026, with a link to the official source on every card." />
    <p className="details-meta">Coverage: July 1 – December 31, 2026 · November–December entries are officially confirmed schedules.</p>
    <div className="editorial-filters" role="group" aria-label="News categories">
      {['', ...categories].map(option => <button type="button" key={option} aria-pressed={category === option} onClick={() => update({ category: option || null })}>{option || 'All'}</button>)}
    </div>
    <section aria-labelledby="news-results-heading" className="editorial-results">
      <div className="editorial-results-heading"><h2 id="news-results-heading">{category || 'Latest stories'}</h2><p role="status" aria-live="polite">{results.length} {results.length === 1 ? 'story' : 'stories'}</p></div>
      <div className="news-list">{results.map(item => <NewsCard key={item.id} item={item} />)}</div>
    </section>
  </div>
}
