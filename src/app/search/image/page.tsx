import { ImageData } from ".."
import ImageSearchResults from "@/app/components/ImageSearchResults"
import NoResultsFoundOnSearch from "@/app/components/NoResultsFoundOnSearch"

const getSearchData = async (search: string | undefined, startIndex: string) => {
  if (!search) return

  const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${search}&searchType=image&start=${startIndex}`)
  
  if (!response.ok) {
    throw new Error('Failed to fetch search data')
  }
  

  const data: ImageData | undefined = await response.json()

  return data;

}

export default async function ImageSearchPage({ searchParams }: { searchParams: { searchTerm: string, startIndex: string } | undefined }) {
  const startIndex = searchParams?.startIndex ?? '1'
  const searchData = await getSearchData(searchParams?.searchTerm, startIndex)

  const { items } = searchData ?? {};

  if (!items) {
    return <NoResultsFoundOnSearch />
  }

  return (
    <>
      {searchData && <ImageSearchResults results={searchData} />}
    </>
  )


}
