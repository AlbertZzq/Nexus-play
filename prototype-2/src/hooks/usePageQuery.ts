import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'

export function usePageQuery() {
  const [params] = useSearchParams()
  const location = useLocation()
  const navigate = useNavigate()

  function update(patch: Record<string, string | null>, options?: { replace?: boolean }) {
    const updated = new URLSearchParams(params)
    for (const [key, value] of Object.entries(patch)) {
      if (value === null) updated.delete(key)
      else updated.set(key, value)
    }
    updated.delete('design')
    void navigate({ pathname: location.pathname, search: updated.size ? `?${updated.toString()}` : '', hash: location.hash }, options)
  }

  return { params, update }
}
