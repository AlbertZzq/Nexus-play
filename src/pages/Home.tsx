import { useDesign } from '../app/DesignProvider'
import { P2Home } from './P2Home'
import { ReleaseHome } from './ReleaseHome'

export function Home() {
  const { design } = useDesign()
  return design === '1' ? <ReleaseHome /> : <P2Home />
}
