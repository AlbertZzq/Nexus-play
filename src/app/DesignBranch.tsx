import type { ReactNode } from 'react'
import { useDesign } from './DesignProvider'

export function DesignBranch({ p1, p2 }: { p1: ReactNode; p2: ReactNode }) {
  const { design } = useDesign()
  return <>{design === '1' ? p1 : p2}</>
}
