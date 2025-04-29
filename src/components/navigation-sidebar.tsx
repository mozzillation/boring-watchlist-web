'use client'

import Link from 'next/link'
import NavigationSidebarButton from './navigation-sidebar-button'

import { usePathname } from 'next/navigation'
import { Bell, Globe, Search } from 'lucide-react'

const TABS = [
    {
        name: 'Explore',
        route: '/',
        inactiveIcon: () => <Globe strokeWidth={2} />,
        activeIcon: () => <Globe strokeWidth={2} />,
    },
    {
        name: 'Search',
        route: '/search',
        inactiveIcon: () => <Search strokeWidth={2} />,
        activeIcon: () => <Search strokeWidth={2} />,
    },
    {
        name: 'Activity',
        route: '/activity',
        inactiveIcon: () => <Bell strokeWidth={2} />,
        activeIcon: () => <Bell strokeWidth={2} />,
    },
]

const NavigationSidebar = () => {
    const pathname = usePathname()

    return (
        <aside
            className={`w-20 h-svh flex flex-col items-center content-center justify-between p-2 border-r border-zinc-50`}
        >
            <header>
                <Link href={`/`}>
                    <div className={`w-16 h-16 bg-slate-100 rounded-full`} />
                </Link>
            </header>
            <nav className={`flex flex-col items-center justify-center gap-1`}>
                {TABS.map((tab) => {
                    const isActive = pathname === tab.route
                    return (
                        <Link
                            href={tab.route}
                            key={tab.name}
                            passHref
                            tabIndex={-1}
                        >
                            <NavigationSidebarButton
                                key={tab.name}
                                variant={isActive ? 'active' : 'default'}
                            >
                                {isActive
                                    ? tab.activeIcon()
                                    : tab.inactiveIcon()}
                            </NavigationSidebarButton>
                        </Link>
                    )
                })}
            </nav>
            <footer></footer>
        </aside>
    )
}

export default NavigationSidebar
