'use client'

import { toggleFollowStatus, useFollowStatus } from '@/server/queries/user'
import { Button } from '../ui/button'

const FollowButton = () => {
  const { followId, isLoading, error } = useFollowStatus()

  if (isLoading) return <>loading</>
  if (error) return <>error</>

  const handleToggleFollow = () => {
    toggleFollowStatus(followId)
  }

  return (
    <Button onClick={handleToggleFollow} size="lg">
      {followId ? 'Following' : 'Follow'}
    </Button>
  )
}

export default FollowButton
