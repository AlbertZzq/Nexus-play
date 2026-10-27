import { useDesign } from '../app/DesignProvider'
import { P1Guides } from './P1Guides'
import { P2Guides } from './P2Guides'
import '../styles/pages.css'

export function Guides() {
  const { design } = useDesign()
  return design === '1' ? <P1Guides /> : <P2Guides />
}
