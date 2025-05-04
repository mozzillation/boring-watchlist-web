import { CircleAlert } from 'lucide-react'

const SearchEmptyState = () => {
  return (
    <div
      className={`flex flex-col w-full items-center bg-muted text-muted-foreground content-center justify-center rounded-lg p-8 gap-2`}
    >
      <CircleAlert />
      <div className={`text-center`}>
        <h2 className={`font-medium`}>Uh-oh</h2>
        <p className={`text-sm`}>Sorry, didn`t find any result. Try again</p>
      </div>
    </div>
  )
}

export default SearchEmptyState
