'use client'

import { Plus } from 'lucide-react'
import { Button } from '../ui/button'

const WatchlistButton = () => {
  return (
    <Button size="icon" className={`rounded-full`}>
      <Plus />
    </Button>
  )
}

export default WatchlistButton
