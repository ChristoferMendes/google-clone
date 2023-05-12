/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Data } from "../search";
import Parser from "html-react-parser";

export default function WebSearchResults({ results }: { results: Data }) {
  console.log(results.items)


  return (
    <div className="w-full mx-auto px-3 pb-24 sm:pl-[5%] md:pl-[13%] lg:pl-48">
      <p className="text-gray-600 text-sm mb-5 mt-3">
        About {results.searchInformation.formattedTotalResults} results ({results.searchInformation?.formattedSearchTime} seconds)
      </p>
      {results.items.map(result => (
        <div className="mb-8 max-w-xl " key={result.cacheId}>
          <div className="group flex flex-col">
            <Link href={result.link} className="flex">
              <img src={result.pagemap.cse_image?.[0].src} alt="" className="w-12 rounded-full h-12" />
              <div>
                <p className="text-md">{result.displayLink}</p>
                <p className="text-sm truncate text-zinc-700">{result.formattedUrl}</p>
              </div>


            </Link>
            <Link href={result.link}>
              <h2 className="truncate text-xl text-blue-800 font-medium group-hover:underline decoration-blue-800">{Parser(result.htmlTitle)}</h2>
            </Link>
          </div>
          <p className="text-gray-700">{Parser(result.htmlSnippet)}</p>
        </div>
      ))}
    </div>
  )
}
