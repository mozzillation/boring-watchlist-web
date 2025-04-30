import { cache } from 'react'
import { db } from '../db'

export const useProfileDetails = cache((username: string) => {
  const query = {
    profiles: {
      $: {
        where: {
          username: username,
        },
        first: 2,
      },
      user: {},
      posts: {},
    },
  }

  const { data, ...others } = db.useQuery(username ? query : null)

  return {
    profile: data?.profiles?.[0] ?? null,
    ...others,
  }
})
