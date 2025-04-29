'use client'

import UserDetails from '@/components/user/user-details'
import { useTRPC } from '@/lib/trpc/context'
import PageContainer from '@/views/page-container'
import { useQuery } from '@tanstack/react-query'
import { notFound, useParams } from 'next/navigation'

type ProfileLayoutProps = React.PropsWithChildren

const ProfileLayout: React.FC<ProfileLayoutProps> = ({ children }) => {
    const params = useParams()

    const username = params.username as string

    if (!username) notFound()

    const api = useTRPC()

    const {
        data: user,
        isLoading,
        isError,
        error,
    } = useQuery(api.user.info.queryOptions({ username }))

    if (isLoading) return <div>Loading...</div>

    if (isError) {
        return <div>Error: {error.message}</div>
    }

    if (!user) {
        return <div>User not found</div>
    }

    return (
        <PageContainer>
            <section className={`h-screen pt-20 pb-20 w-full`}>
                <UserDetails {...user} />
                {children}
            </section>
        </PageContainer>
    )
}

export default ProfileLayout
