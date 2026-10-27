import { useDesign } from '../app/DesignProvider'
import { PageHeader } from '../components/common/PageHeader'
import { ReleaseList } from '../components/content/ReleaseList'
import { releases } from '../data/releases'
import type { Platform } from '../data/types'
import { usePageQuery } from '../hooks/usePageQuery'
import { monthKey } from '../utils/format'
import { P1ReleaseCalendar } from './P1ReleaseCalendar'
import '../styles/pages.css'

const platforms: readonly Platform[] = ['PC', 'PlayStation', 'Xbox', 'Nintendo']
const month = new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' })

export function ReleaseCalendar() {
  const { design } = useDesign()
  return design === '1' ? <P1ReleaseCalendar /> : <P2ReleaseCalendar />
}

function P2ReleaseCalendar() {
  const { params, update } = usePageQuery()
  const value = params.get('platform') ?? ''
  const platform = platforms.includes(value as Platform) ? value : ''
  const results = releases.filter(release => !platform || release.platforms.includes(platform as Platform)).sort((a, b) => a.date.localeCompare(b.date))
  const months = [...new Set(results.map(release => monthKey(release.date)))]

  return <div className="calendar-page">
    <p className="eyebrow">A date for your next adventure</p>
    <PageHeader title="Release Calendar" description="Explore a monthly timeline with platform filters." />
    <p className="details-meta">Sample release dates · Illustrative scheduling examples, not live release announcements. All samples remain available for this class prototype.</p>
    <div className="editorial-filters" role="group" aria-label="Platforms">{['', ...platforms].map(option => <button type="button" key={option} aria-pressed={platform === option} onClick={() => update({ platform: option || null })}>{option || 'All platforms'}</button>)}</div>
    <div className="release-months">{months.map(key => {
      const label = month.format(new Date(`${key}-01T00:00:00Z`))
      return <section key={key} aria-label={label}><h2>{label}</h2><ReleaseList items={results.filter(release => monthKey(release.date) === key)} /></section>
    })}</div>
  </div>
}
