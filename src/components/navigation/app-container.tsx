'use client'

import Sidebar from './sidebar'

type AppContainerProps = React.PropsWithChildren

const AppContainer: React.FC<AppContainerProps> = ({ children }) => {
  return (
    <div
      className={`flex flex-col-reverse sm:flex-row h-screen w-screen relative`}
    >
      <Sidebar />
      <main
        className={`h-full w-screen sm:w-full bg-card sm:bg-background overflow-y-scroll`}
      >
        {children}
      </main>
    </div>
  )
}

export default AppContainer
