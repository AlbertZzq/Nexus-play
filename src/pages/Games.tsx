import { useDesign } from '../app/DesignProvider'
import { P2Games } from './P2Games'
import { Discover } from './Discover'

// Prototype 1 keeps its Games hub; Prototype 2 gets the released-game library.
export function Games() {
  const { design } = useDesign()
  return design === '1' ? <Discover mode="games" /> : <P2Games />
}
