import { init } from '@instantdb/admin'
import schema from '../../instant.schema'

const APP_ID = process.env.NEXT_PUBLIC_INSTANT_APP_ID as string
const ADMIN_TOKEN = process.env.INSTANT_APP_ADMIN_TOKEN as string

const admin = init({
  appId: APP_ID,
  adminToken: ADMIN_TOKEN,
  schema: schema,
})

export { admin }
