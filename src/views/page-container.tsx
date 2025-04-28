'use client'

type PageContainerProps = React.PropsWithChildren

const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  return (
    <section className={`max-w-3xl m-auto w-full h-screen`}>{children}</section>
  )
}

export default PageContainer
