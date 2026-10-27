import { createContext, useContext } from 'react'
import type { ReactNode } from 'react'

export type DesignId = '1' | '2'
const DesignContext = createContext<{ design: DesignId } | null>(null)

// Standalone Prototype 2: the design is fixed at build time.
export function DesignProvider({ children }: { children: ReactNode }) {
  return <DesignContext.Provider value={{ design: '2' }}>{children}</DesignContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useDesign() {
  const context = useContext(DesignContext)
  if (!context) throw new Error('useDesign must be used within DesignProvider')
  return context
}
