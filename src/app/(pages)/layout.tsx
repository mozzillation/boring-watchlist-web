import AppContainer from '@/views/app-container'

type AuthenticatedLayoutProps = React.PropsWithChildren

const AuthenticatedLayout: React.FC<AuthenticatedLayoutProps> = ({
  children,
}) => {
  return <AppContainer>{children}</AppContainer>
}

export default AuthenticatedLayout
