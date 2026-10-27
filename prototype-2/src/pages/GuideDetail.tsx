import { useDesign } from '../app/DesignProvider'
import { games } from '../data/games'
import type { P1Guide } from '../data/p1GuideLibrary'
import { useParams } from 'react-router-dom'
import { LocalImage } from '../components/common/LocalImage'
import { PageHeader } from '../components/common/PageHeader'
import { DesignLink } from '../components/navigation/DesignLink'
import { guides } from '../data/guides'
import { p1GuideLibrary } from '../data/p1GuideLibrary'
import { p1Catalog } from '../data/p1Catalog'
import { formatDate } from '../utils/format'
import '../styles/pages.css'

export function GuideDetail() {
  const { guideId } = useParams()
  const { design } = useDesign()
  const guide = (design === '1' ? p1GuideLibrary : guides).find(item => item.id === guideId)
  const game = (design === '1' ? p1Catalog : games).find(item => item.id === guide?.gameId)
  const structured = design === '1' ? guide as P1Guide | undefined : undefined
  if (!guide || !game) return <div className="editorial-page">
    <PageHeader title="Guide not found" description="This guide is not in the prototype library." />
    <DesignLink className="button-link" to="/guides">Back to Guides</DesignLink>
  </div>

  return <div className="editorial-page guide-detail-page">
    <DesignLink className="details-back" to="/guides">Back to Guides</DesignLink>
    <article className="guide-detail" aria-labelledby="guide-detail-title">
      <DesignLink className="guide-detail-media" to={`/games/${game.slug}`} aria-label={`View ${game.title}`}><LocalImage media={game.cover} /></DesignLink>
      <div className="guide-detail-content">
        <p className="eyebrow">{game.title} · {guide.type}</p>
        <h1 id="guide-detail-title">{guide.title}</h1>
        <p className="details-meta">Difficulty: {guide.difficulty} · Updated <time dateTime={guide.updatedDate}>{formatDate(guide.updatedDate)}</time></p>
        {structured && <p className="editorial-category">{structured.kind === 'prep' ? 'Preparation checklist' : 'Practical guide'}</p>}
        <p className="guide-detail-summary">{guide.summary}</p>
        <div className="guide-detail-body">
          {guide.body.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
          {structured && <>
            <section><h2>Your goal</h2><p>{structured.goal}</p></section>
            {structured.sections.map(section => <section key={section.title}>
              <h2>{section.title}</h2>
              <ol>{section.steps.map(step => <li key={step}>{step}</li>)}</ol>
              {section.media && <figure className="guide-section-media"><LocalImage media={section.media} /><figcaption>{section.caption}</figcaption></figure>}
            </section>)}
            <section><h2>Before you commit</h2><ul>{structured.cautions.map(caution => <li key={caution}>{caution}</li>)}</ul></section>
            <section><h2>Official sources</h2><p className="details-meta">Checked {formatDate(structured.updatedDate)}. Practice suggestions are editorial; mechanics are limited to these official explanations.</p><ul>{structured.sources.map(source => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.title} ↗</a></li>)}</ul></section>
          </>}
        </div>
        <DesignLink className="button-link" to={`/games/${game.slug}`}>View game <span aria-hidden="true">↗</span></DesignLink>
      </div>
    </article>
  </div>
}
