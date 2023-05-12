export interface Data {
  kind:              string;
  url:               URL;
  queries:           Queries;
  context:           Context;
  searchInformation: SearchInformation;
  items:             Item[];
}

export interface ImageData extends Data {
  items: ImageItem[]
}

interface ImageItem extends Item {
  image: {
    contextLink: string
  }
}

export interface Context {
  title: string;
}

export interface Item {
  kind:             Kind;
  title:            string;
  htmlTitle:        string;
  link:             string;
  displayLink:      string;
  snippet:          string;
  htmlSnippet:      string;
  cacheId?:         string;
  formattedUrl:     string;
  htmlFormattedUrl: string;
  pagemap:          Pagemap;
}

export enum Kind {
  CustomsearchResult = "customsearch#result",
}

export interface Pagemap {
  metatags:               Metatag[];
  hcard?:                 Hcard[];
  cse_thumbnail?:         CSEThumbnail[];
  imageobject?:           Imageobject[];
  person?:                Person[];
  cse_image?:             CSEImage[];
  broadcastevent?:        Broadcastevent[];
  webpage?:               Sitenavigationelement[];
  sitenavigationelement?: Sitenavigationelement[];
}

export interface Broadcastevent {
  duration?: string;
  name:      string;
  startdate: string;
  url:       string;
}

export interface CSEImage {
  src: string;
}

export interface CSEThumbnail {
  src:    string;
  width:  string;
  height: string;
}

export interface Hcard {
  fn:  string;
  url: string;
}

export interface Imageobject {
  width:  string;
  url:    string;
  height: string;
}

export interface Metatag {
  referrer?:                      string;
  "og:image"?:                    string;
  "theme-color"?:                 string;
  "og:image:width"?:              string;
  "og:type"?:                     string;
  viewport?:                      string;
  "og:title"?:                    string;
  "og:image:height"?:             string;
  "format-detection"?:            string;
  "twitter:app:url:iphone"?:      string;
  "twitter:app:id:googleplay"?:   string;
  "twitter:card"?:                string;
  "og:site_name"?:                string;
  "twitter:url"?:                 string;
  "twitter:app:url:ipad"?:        string;
  "al:android:package"?:          string;
  "twitter:app:name:googleplay"?: string;
  "al:ios:url"?:                  string;
  "twitter:app:id:iphone"?:       string;
  "og:description"?:              string;
  "al:ios:app_store_id"?:         string;
  "twitter:image"?:               string;
  "twitter:site"?:                string;
  "twitter:title"?:               string;
  "al:ios:app_name"?:             string;
  "twitter:app:id:ipad"?:         string;
  "al:web:url"?:                  string;
  "og:video:tag"?:                string;
  "al:android:url"?:              string;
  "fb:app_id"?:                   string;
  "twitter:app:url:googleplay"?:  string;
  "twitter:app:name:ipad"?:       string;
  "twitter:description"?:         string;
  "og:url"?:                      string;
  "al:android:app_name"?:         string;
  "twitter:app:name:iphone"?:     string;
  "msapplication-tilecolor"?:     string;
  "twitter:aria-text"?:           string;
  "og:aria-text"?:                string;
  author?:                        string;
  "msapplication-tileimage"?:     string;
  image?:                         string;
  "twitter:creator"?:             string;
  "article:published_time"?:      Date;
  "article:author"?:              string;
  created?:                       string;
  title?:                         string;
  revised?:                       string;
}

export interface Person {
  name: string;
  url:  string;
}

export interface Sitenavigationelement {
  headline: string;
}

export interface Queries {
  request:  NextPage[];
  nextPage: NextPage[];
}

export interface NextPage {
  title:          string;
  totalResults:   string;
  searchTerms:    string;
  count:          number;
  startIndex:     number;
  inputEncoding:  string;
  outputEncoding: string;
  safe:           string;
  cx:             string;
}

export interface SearchInformation {
  searchTime:            number;
  formattedSearchTime:   string;
  totalResults:          string;
  formattedTotalResults: string;
}

export interface URL {
  type:     string;
  template: string;
}
