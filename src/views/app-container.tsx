'use client'

import NavigationSidebar from '@/components/navigation-sidebar'

type AppContainerProps = React.PropsWithChildren

const AppContainer: React.FC<AppContainerProps> = ({ children }) => {
  return (
    <div className={`flex flex-row h-screen w-screen`}>
      <NavigationSidebar />
      <main
        className={`flex h-full w-full overflow-auto grow shrink bg-background items-center content-center`}
      >
        {children}
      </main>
    </div>
  )
}

export default AppContainer
