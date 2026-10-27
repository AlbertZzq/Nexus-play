import { useEffect, useRef } from 'react'
import { LocalImage } from '../components/common/LocalImage'
import type { Media } from '../data/types'
export function ScreenshotViewer({ media, trigger, onClose }: { media: Media; trigger: HTMLButtonElement; onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null)
  useEffect(() => {
    dialog.current?.showModal()
    return () => { trigger.focus() }
  }, [trigger])
  return <dialog ref={dialog} className="release-image-viewer" aria-label={media.alt} onKeyDown={event => { if (event.key === 'Tab') { event.preventDefault(); dialog.current?.querySelector('button')?.focus() } }} onClose={onClose} onCancel={event => { event.preventDefault(); dialog.current?.close() }}>
    <button type="button" autoFocus aria-label="Close screenshot" onClick={() => dialog.current?.close()}>Close ✕</button>
    <LocalImage media={media} />
    <p>{media.alt}</p>
  </dialog>
}
