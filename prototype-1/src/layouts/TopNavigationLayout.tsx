import { p1Navigation } from '../app/navigation'
import { Navigation } from '../components/navigation/Navigation'

export function TopNavigationLayout() {
  return <div className="top-navigation"><Navigation label="Primary navigation" items={p1Navigation} /></div>
}
