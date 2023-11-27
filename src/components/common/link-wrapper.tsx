'use client'

import Link from 'next/link'

export interface LinkItem {
  url: string
  className?: string
  children: React.ReactNode
}

const LinkWrapper = ({ url, className, children }: LinkItem) => {
  return (
    <Link href={url} className={className}>
      {children}
    </Link>
  )
}

export { LinkWrapper }
