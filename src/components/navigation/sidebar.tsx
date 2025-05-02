'use client'

import Link from 'next/link'

import { usePathname } from 'next/navigation'
import { Globe, Search } from 'lucide-react'
import SidebarButton from './sidebar-button'

export const NAVIGATION_TABS = [
  {
    name: 'Explore',
    route: '/',
    icon: () => <Globe strokeWidth={2} />,
  },
  {
    name: 'Search',
    route: '/search',
    icon: () => <Search strokeWidth={2} />,
  },
]

const Sidebar = () => {
  const pathname = usePathname()

  return (
    <aside
      className={`w-full sm:w-20 sm:h-svh flex sm:flex-col items-center content-center justify-between p-2 border-t sm:border-r border-zinc-50`}
    >
      <header className={`hidden sm:block`}>
        <Link href={`/`}>
          <div className={`w-16 h-10 bg-slate-200 rounded-sm`} />
        </Link>
      </header>
      <nav
        className={`flex flex-row sm:flex-col w-full items-center content-center justify-evenly sm:justify-center gap-1`}
      >
        {NAVIGATION_TABS.map((tab) => {
          const isActive = pathname === tab.route
          return (
            <SidebarButton
              route={tab.route}
              key={tab.name}
              label={tab.name}
              variant={isActive ? 'active' : 'default'}
            >
              {tab.icon()}
            </SidebarButton>
          )
        })}
      </nav>
      <footer>
        {
          // Avatar
        }
      </footer>
    </aside>
  )
}

export default Sidebar
