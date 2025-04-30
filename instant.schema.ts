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
