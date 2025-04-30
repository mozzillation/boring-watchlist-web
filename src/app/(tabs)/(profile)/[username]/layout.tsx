import Wrapper from '@/components/layout/wrapper'
import UserDetails from '@/components/profile/user-details'
import { usernameURLParser } from '@/lib/utils'
import { notFound } from 'next/navigation'

type Params = Promise<{ username: string }>

type ProfileLayoutProps = Readonly<{
  params: Params
  children: React.ReactNode
}>

const ProfileLayout: React.FC<ProfileLayoutProps> = async ({
  params,
  children,
}) => {
  const { username } = await params
  const parsedUsername = usernameURLParser(username)

  if (!parsedUsername) notFound()

  return (
    <Wrapper>
      <UserDetails username={parsedUsername} />
      {children}
    </Wrapper>
  )
}

export default ProfileLayout
