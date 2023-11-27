'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HorizontalSeparator } from './horizontal-separator'

export interface LinkItem {
  name: string
  url: string
}

const SideBarList = ({ items }: { items: LinkItem[] }) => {
  const pathname = usePathname()
  return (
    <ul className='flex flex-col w-full'>
      {items.map(({ name, url }: LinkItem) => (
        <li key={name} className='flex flex-col items-center font-bold w-full text-center'>
          <HorizontalSeparator percentage={100}/>
          <Link href={url} className={`w-full py-2 rounded-full ${pathname === url ? 'actual-page' : ''}`}>{name}</Link>
        </li>
      ))}
    </ul>
  )
}

export { SideBarList }
