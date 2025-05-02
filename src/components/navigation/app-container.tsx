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
        className={`h-auto w-screen sm:w-full overflow-scroll grow bg-background p-2`}
      >
        {children}
      </main>
    </div>
  )
}

export default AppContainer
