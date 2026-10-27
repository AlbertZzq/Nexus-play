import { DesignLink } from '../navigation/DesignLink'

export function SectionHeader({ title, to, linkLabel = 'View all' }: { title: string; to?: string; linkLabel?: string }) {
  return <div className="section-header"><h2>{title}</h2>{to && <DesignLink to={to}>{linkLabel}<span aria-hidden="true"> →</span></DesignLink>}</div>
}
