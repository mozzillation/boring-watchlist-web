'use client'

import { useProfileDetails } from '@/server/queries/user'
import { notFound } from 'next/navigation'
import { Avatar, AvatarFallback } from '../ui/avatar'
import UserDetailsSkeleton from './user-details-skeleton'

type UserDetailsProps = {
  username: string
}

const UserDetails: React.FC<UserDetailsProps> = ({ username }) => {
  const { profile, isLoading, error } = useProfileDetails(username)

  if (isLoading) return <UserDetailsSkeleton />
  if (error) return notFound()
  if (!profile) return notFound()

  console.log(profile)

  return (
    <header className={`flex items-center gap-4 py-6`}>
      <Avatar className={`w-[92px] aspect-square h-full grow-0`}>
        {/* <AvatarImage src={avatarUrl} /> */}
        <AvatarFallback />
      </Avatar>
      <div className={`w-full`}>
        <div className={`text-primary text-xl`}>
          <h1>{profile.displayName}</h1>
        </div>

        <div className={`text-secondary-foreground text-sm`}>
          <p>@{profile.username}</p>
        </div>
        {profile.bio && (
          <div className={`text-muted-foreground text-sm pt-4`}>
            <p>{profile.bio}</p>
          </div>
        )}
      </div>
    </header>
  )
}

export default UserDetails
