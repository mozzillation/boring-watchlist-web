'use client'

import Sidebar from './sidebar'

type AppContainerProps = React.PropsWithChildren

const AppContainer: React.FC<AppContainerProps> = ({ children }) => {
  return (
    <div className={`flex flex-row h-screen w-screen`}>
      <Sidebar />
      <main
        className={`flex h-full w-full overflow-auto grow shrink bg-background`}
      >
        {children}
      </main>
    </div>
  )
}

export default AppContainer
