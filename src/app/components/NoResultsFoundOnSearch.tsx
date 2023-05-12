import Link from 'next/link'

export default function NoResultsFoundOnSearch() {
  return (
    <div className="flex flex-col justify-center items-center mt-4">
      <h1 className="text-3xl mb-4">No results found</h1>
      <p className="text-lg">Try searching for something else or go back to the homepage.</p>
      <Link href={`/`} className="text-blue-500">Home</Link>
    </div>
  )
}
