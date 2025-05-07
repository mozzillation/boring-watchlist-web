import SearchView from '@/views/search-view'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Search',
}

const SearcPage = () => {
  return <SearchView />
}

export default SearcPage
