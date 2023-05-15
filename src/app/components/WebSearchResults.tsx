/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Data } from "../search";
import Parser from "html-react-parser";
import WebSearchFavIcon from "./WebSearchFavIcon";
import PaginationButtons from "./PaginationButtons";

export default function WebSearchResults({ results }: { results: Data }) {
  return (
    <div className="w-full mx-auto px-3 pb-40 sm:pb-24 sm:pl-[5%] md:pl-[13%] lg:pl-48">
      <p className="text-rosePine-foam text-sm mb-5 mt-3">
        About {results.searchInformation.formattedTotalResults} results ({results.searchInformation?.formattedSearchTime} seconds)
      </p>
      {results.items.map(result => (
        <div className="mb-8 max-w-xl " key={result.cacheId}>
          <div className="group flex flex-col">
            <Link href={result.link} className="flex">
              <WebSearchFavIcon domain={result.displayLink}/>
              <div>
                <p className="text-md text-rosePine-love">{result.displayLink}</p>
                <p className="text-sm truncate text-rosePine-love opacity-40">{result.formattedUrl}</p>
              </div>
            </Link>
            <Link href={result.link}>
              <h2 className="truncate text-xl text-rosePine-text font-medium group-hover:underline decoration-rosePine-foam">{Parser(result.htmlTitle)}</h2>
            </Link>
          </div>
          <p className="text-gray-300">{Parser(result.htmlSnippet)}</p>
        </div>
      ))}
      <PaginationButtons />
    </div>
  )
}
