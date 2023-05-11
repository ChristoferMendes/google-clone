import { Data } from "."

const getSearchData = async (search: string | undefined) => {
  if (!search) return

  const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${search}`)
  const data: Data | undefined = await response.json()

  return data;

}

export default async function WebSearchPage({ searchParams }: { searchParams: { searchTerm: string } | undefined } ) {
  if (!searchParams) {
    throw new Error()
  }
  
  const searchData = await getSearchData(searchParams?.searchTerm)


  return (
    <>
      {searchData && searchData.items.map(item => (
        <h1 key={item.cacheId}>{item.title}</h1>
      ))}
    </>
  )


}
