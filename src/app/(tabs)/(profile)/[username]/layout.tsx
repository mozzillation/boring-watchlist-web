import Wrapper from '@/components/layout/wrapper'
import UserDetails from '@/components/profile/user-details'
import UserDetailsSkeleton from '@/components/profile/user-details-skeleton'
import { usernameURLParser } from '@/lib/utils'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'

type Params = Promise<{ username: string }>

type ProfileLayoutProps = Readonly<{
  params: Params
  children: React.ReactNode
}>

export const dynamic = 'force-static'

const ProfileLayout: React.FC<ProfileLayoutProps> = async ({
  params,
  children,
}) => {
  const { username } = await params
  const parsedUsername = usernameURLParser(username)

  if (!parsedUsername) notFound()

  return (
    <Wrapper>
      <Suspense fallback={<UserDetailsSkeleton />}>
        <UserDetails username={parsedUsername} />
      </Suspense>
      {children}
    </Wrapper>
  )
}

export default ProfileLayout
