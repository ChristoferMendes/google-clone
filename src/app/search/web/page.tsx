import Link from "next/link"
import { Data } from ".."
import WebSearchResults from "@/app/components/WebSearchResults"
import NoResultsFoundOnSearch from "@/app/components/NoResultsFoundOnSearch"

const getSearchData = async (search: string | undefined, startIndex: string) => {
  if (!search) return

  const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${search}&start=${startIndex}`)

  if (!response.ok) {
    throw new Error('Failed to fetch search data')
  }

  const data: Data | undefined = await response.json()

  return data;

}

export default async function WebSearchPage({ searchParams }: { searchParams: { searchTerm: string, startIndex: string } | undefined }) {
  const startIndex = searchParams?.startIndex || '1'
  const searchData = await getSearchData(searchParams?.searchTerm, startIndex)

  const { items } = searchData ?? {};

  if (!items) {
    return <NoResultsFoundOnSearch />
  }

  return (
    <>
      {searchData && <WebSearchResults results={searchData} />}
    </>
  )


}
