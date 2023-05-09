'use client'
import { AiOutlineSearch } from "react-icons/ai";
import { usePathname, useRouter } from "next/navigation";

type Tab = 'All' | 'Images';

export default function SearchHeaderOptions() {
  const pathName = usePathname()
  const router = useRouter()

  const color = pathName === '/search/web' ? 'text-blue-500 border-blue-600' : 'text-gray-500'

  
  const selectTab = (tab: Tab) => {
   
    
  }

  return (
    <div>
      <div onClick={() => selectTab('All')} className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${color}`}>
        <AiOutlineSearch className="text-md" />
        <p className="">All</p>
      </div>
    </div>
  )
}
