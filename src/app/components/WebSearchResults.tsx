import Link from "next/link";
import { Data } from "../search";
import Parser from "html-react-parser";

export default function WebSearchResults({ results }: { results: Data }) {
  return (
    <div className="w-full mx-auto px-3 pb-24 sm:pl-[5%] md:pl-[13%] lg:pl-48">
      <p className="text-gray-600 text-sm mb-5 mt-3">
        About {results.searchInformation.formattedTotalResults} results ({results.searchInformation?.formattedSearchTime} seconds)
      </p>
      {results.items.map(result => (
        <div className="mb-8 max-w-xl " key={result.cacheId}>
          <div className="group flex flex-col">
            <Link className="text-sm truncate" href={result.link}>
              {result.formattedUrl}
            </Link>
            <Link href={result.link}>
              <h2 className="truncate text-xl text-blue-800 font-medium group-hover:underline decoration-blue-800">{result.title}</h2>
            </Link>
          </div>
          <p className="text-gray-700">{Parser(result.htmlSnippet)}</p>
        </div>
      ))}
    </div>
  )
}
