import AppContainer from '@/components/navigation/app-container'

type TabLayoutProps = Readonly<{
  children: React.ReactNode
}>

const TabsLayout: React.FC<TabLayoutProps> = ({ children }) => {
  return <AppContainer>{children}</AppContainer>
}

export default TabsLayout
