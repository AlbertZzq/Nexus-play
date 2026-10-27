import { PageHeader } from '../components/common/PageHeader'
import { DesignLink } from '../components/navigation/DesignLink'

export function NotFound() {
  return <div className="not-found">
    <p className="eyebrow">404 / Lost in the library</p>
    <PageHeader title="Page not found" description="We couldn’t find that page. Head back to NexusPlay to keep exploring." />
    <DesignLink to="/" className="button-link">Back to home</DesignLink>
  </div>
}
