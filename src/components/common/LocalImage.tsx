import { useState } from 'react'
import type { Media } from '../../data/types'

export function LocalImage({ media, className, loading = 'lazy', fallbackAlt }: { media: Media; fallbackAlt?: string; className?: string; loading?: 'lazy' | 'eager' }) {
  const [failedSource, setFailedSource] = useState<string | null>(null)
  const failed = failedSource === media.src
  return <img
    src={failed ? '/assets/fallback.svg' : media.src}
    alt={failed && fallbackAlt ? fallbackAlt : media.alt}
    className={className}
    loading={loading}
    style={media.focalPoint ? { objectPosition: media.focalPoint } : undefined}
    onError={failed ? undefined : () => setFailedSource(media.src)}
  />
}
