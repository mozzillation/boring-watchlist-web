// import { cache } from 'react'
import { id } from '@instantdb/react'
import { admin } from '../admin'
import { db } from '../db'

export const getProfileDetails = async (username: string) => {
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

  const { profiles, ...others } = await admin.query(query)

  return {
    profile: profiles?.[0] ?? null,
    ...others,
  }
}

export const useFollowStatus = () => {
  const giuliano = 'e8738d22-097e-4505-a407-85de9a73a201'
  const gigi = '72911c8d-03bb-49a4-9e06-07b983e8c90d'

  const { data, ...others } = db.useQuery({
    follows: {
      $: {
        where: {
          follower: gigi,
          following: giuliano,
        },
      },
    },
  })

  return {
    followId: data?.follows?.[0]?.id ?? null,
    ...others,
  }
}

export const toggleFollowStatus = (followId: string | null) => {
  const following = 'e8738d22-097e-4505-a407-85de9a73a201'
  const follower = '72911c8d-03bb-49a4-9e06-07b983e8c90d'

  if (followId) {
    // already following, remove follow
    db.transact(db.tx.follows[followId].delete())
  } else {
    // create follow
    const newId = id()

    db.transact(
      db.tx.follows[newId].update({
        follower,
        following,
      }),
    )
  }
}
