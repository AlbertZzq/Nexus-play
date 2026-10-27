import { LocalImage } from '../common/LocalImage'
import type { NewsroomItem } from '../../data/types'
import { formatDate } from '../../utils/format'

export function NewsCard({ item }: { item: NewsroomItem }) {
  return <article className="editorial-card news-card" aria-labelledby={`${item.id}-title`}>
    <LocalImage media={item.image} className="editorial-card-image" />
    <div className="editorial-card-content">
      <div className="editorial-meta"><span className="editorial-category">{item.category}</span><time dateTime={item.date}>{formatDate(item.date)}</time></div>
      <h3 id={`${item.id}-title`}>{item.title}</h3>
      <p className="editorial-summary">{item.summary}</p>
      <div className="news-source-row">
        <span className="news-source">Source: {item.source}</span>
        <a className="news-read-more" href={item.sourceUrl} target="_blank" rel="noopener noreferrer">Read full story <span aria-hidden="true">↗</span></a>
      </div>
    </div>
  </article>
}
