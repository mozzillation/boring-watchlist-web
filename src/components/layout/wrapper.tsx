'use client'

type WrapperProps = React.PropsWithChildren

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return <div className={`max-w-2xl w-full px-4 m-auto`}>{children}</div>
}

export default Wrapper
