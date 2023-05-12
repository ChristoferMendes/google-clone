import Link from "next/link"
import { Data } from "."
import WebSearchResults from "@/app/components/WebSearchResults"

const getSearchData = async (search: string | undefined) => {
  if (!search) return

  const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${search}`)

  console.log(`triggered search for ${search}`)
  if (!response.ok) {
    throw new Error('Failed to fetch search data')
  }

  const data: Data | undefined = await response.json()

  return data;

}

export default async function WebSearchPage({ searchParams }: { searchParams: { searchTerm: string } | undefined }) {
  const searchData = await getSearchData(searchParams?.searchTerm)

  const { items } = searchData ?? {};

  if (!items) {
    return (
      <div className="flex flex-col justify-center items-center mt-4">
        <h1 className="text-3xl mb-4">No results found</h1>
        <p className="text-lg">Try searching for something else or go back to the homepage.</p>
        <Link href={`/`} className="text-blue-500">Home</Link>
      </div>
    )
  }

  return (
    <>
      {searchData && <WebSearchResults results={searchData} />}
    </>
  )


}
