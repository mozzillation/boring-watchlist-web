import { RouterOutputs } from '@/lib/trpc/shared'

type UserDetailsProps = RouterOutputs['user']['info']

const UserDetails: React.FC<UserDetailsProps> = ({ username, name, bio }) => {
    return (
        <header className={`flex items-center gap-4`}>
            <picture
                className={`w-[92px] h-[92px] rounded-full overflow-hidden relative bg-zinc-50 shrink-0`}
            >
                {/* <img src={avatarUrl} alt={`${username}'s avatar`} /> */}
            </picture>
            <div className={`w-full`}>
                <div className={`text-zinc-800 text-xl`}>
                    <h1>{name}</h1>
                </div>

                <div className={`text-zinc-500 text-sm`}>
                    <p>@{username}</p>
                </div>
                {bio && (
                    <div className={`text-zinc-400 text-sm pt-4`}>
                        <p>{bio}</p>
                    </div>
                )}
            </div>
        </header>
    )
}

export default UserDetails
