import { getProfileDetails } from '@/server/queries/user'
import { notFound } from 'next/navigation'
import { Avatar, AvatarFallback } from '../ui/avatar'
import FollowButton from './follow-button'

type UserDetailsProps = {
  username: string
}

const UserDetails: React.FC<UserDetailsProps> = async ({ username }) => {
  const { profile } = await getProfileDetails(username)

  if (!profile) notFound()

  return (
    <header className={`flex items-start gap-4 py-6`}>
      <div className={`w-full space-y-4`}>
        <div className={`w-full space-y-0`}>
          <div className={`text-primary text-xl`}>
            <h1>{profile.displayName}</h1>
          </div>

          <div className={`text-secondary-foreground text-sm`}>
            <p>@{profile.username}</p>
          </div>
          {profile.bio && (
            <div className={`text-muted-foreground text-sm pt-2`}>
              <p>{profile.bio}</p>
            </div>
          )}
        </div>
        <div>
          <FollowButton />
        </div>
      </div>
      <Avatar className={`w-[92px] aspect-square h-full grow-0`}>
        {/* <AvatarImage src={avatarUrl} /> */}
        <AvatarFallback />
      </Avatar>
    </header>
  )
}

export default UserDetails
