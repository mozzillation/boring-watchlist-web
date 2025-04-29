'use client'

type PageContainerProps = React.PropsWithChildren

const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  return (
    <section className={`max-w-xl m-auto w-full h-screen`}>{children}</section>
  )
}

export default PageContainer
