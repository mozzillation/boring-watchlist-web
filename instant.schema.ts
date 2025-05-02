// Docs: https://www.instantdb.com/docs/modeling-data

import { i, InstaQLEntity } from '@instantdb/react'

const _schema = i.schema({
  entities: {
    $files: i.entity({
      path: i.string().unique().indexed(),
      url: i.any(),
    }),
    $users: i.entity({
      email: i.string().unique().indexed(),
    }),
    posts: i.entity({
      createdAt: i.date(),
    }),
    profiles: i.entity({
      bio: i.string().optional(),
      displayName: i.string().indexed(),
      username: i.string().unique().indexed(),
    }),
    follows: i.entity({}),
  },
  links: {
    postsAuthorId: {
      forward: {
        on: 'posts',
        has: 'one',
        label: 'authorId',
        onDelete: 'cascade',
      },
      reverse: {
        on: 'profiles',
        has: 'many',
        label: 'posts',
      },
    },
    profilesUser: {
      forward: {
        on: 'profiles',
        has: 'one',
        label: 'user',
        onDelete: 'cascade',
      },
      reverse: {
        on: '$users',
        has: 'one',
        label: 'profile',
        onDelete: 'cascade',
      },
    },
    following: {
      forward: {
        on: 'follows',
        has: 'many',
        label: 'following',
      },
      reverse: {
        on: 'profiles',
        has: 'many',
        label: 'followers',
      },
    },
    followers: {
      forward: {
        on: 'follows',
        has: 'many',
        label: 'follower',
      },
      reverse: {
        on: 'profiles',
        has: 'many',
        label: 'followings',
      },
    },
  },
  rooms: {},
})

// This helps Typescript display nicer intellisense
type AppSchema = typeof _schema
const schema: AppSchema = _schema

export default schema

export type { AppSchema }

export type Profile = InstaQLEntity<AppSchema, 'profiles'>
