import { Link, parsePath } from 'react-router-dom'
import type { LinkProps } from 'react-router-dom'

export function DesignLink({ to, children, ...linkProps }: LinkProps) {
  const target = typeof to === 'string' ? parsePath(to) : to
  const params = new URLSearchParams(target.search)
  params.delete('design')
  return <Link {...linkProps} to={{ ...target, search: params.size ? `?${params.toString()}` : '' }}>{children}</Link>
}
