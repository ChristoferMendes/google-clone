import Image from "next/image";
import Link from "next/link";
import SearchBox from "./SearchBox";
import { RiSettings3Line } from 'react-icons/ri'
import { TbGridDots } from 'react-icons/tb'
import SearchHeaderOptions from "./SearchHeaderOptions";
import { GiHamburgerMenu } from 'react-icons/gi'

export default function SearchHeader() {
  return (
    <header className="sticky top-0 bg-rosePine-overlay opacity-100">
      <div className="flex w-full p-6 items-center justify-between">
        <Link href={'/'}>
          <Image alt="google logo" width={'120'} height={'40'} src={'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png'} 
          className="hidden sm:flex"
          />
        </Link>
        <div className="flex-1">
          <SearchBox />
        </div>
        <div className="hidden md:inline-flex space-x-2">
          <RiSettings3Line className="header-icon text-white" />
          <TbGridDots className="header-icon text-white" />
        </div>
        <button className='hidden xsm:flex bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-all ml-2'>Sign in</button>
        <div>
          <GiHamburgerMenu className="text-xl xsm:hidden"/>
        </div>
      </div>
      <SearchHeaderOptions />
    </header>
  )
}
