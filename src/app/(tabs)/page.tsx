'use client'

import { Button } from '@/components/ui/button'
import { signOut } from '@/lib/auth-actions'

const Home = () => {
  return (
    <div>
      <Button onClick={() => signOut()}>Sign Out</Button>
    </div>
  )
}

export default Home
