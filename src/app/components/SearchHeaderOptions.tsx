'use client'
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import SearchHeaderSelectButton from "./SearchHeaderSelectButton";

type Tab = 'All' | 'Images';

export default function SearchHeaderOptions() {
  const pathName = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()
  
  const searchTerm = searchParams.get('searchTerm')

  const getColor = (path: 'web' | 'image') => {
    const selectedStyle = 'border-blue-600 text-blue-500'
    const unselectedBorderStyle = 'border-transparent'

    return pathName === `/search/${path}` ? selectedStyle : unselectedBorderStyle
  }

  const selectTab = (tab: Tab) => {
    const path = tab === 'Images' ? 'image' : 'web'

    router.push(`search/${path}?${searchTerm}`)
  }

  return (
    <div className="flex space-x-2 select-none border-b w-full justify-center lg:justify-start lg:pl-48 text-sm">
      <SearchHeaderSelectButton onClick={selectTab} color={getColor('web')} tab="All" />
      <SearchHeaderSelectButton onClick={selectTab} color={getColor('image')} tab="Images" />
    </div>
  )
}
