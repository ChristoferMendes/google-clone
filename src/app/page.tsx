import { Inter } from 'next/font/google'
import HomeHeader from './components/HomeHeader'
import Image from 'next/image'
import HomeSearch from './components/HomeSearch'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="">
      <HomeHeader />

      <div className="flex flex-col items-center mt-24">
        <Image
          alt='Google logo'
          width="300"
          height="100"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png"
        />

        <HomeSearch />
      </div>
    </main>
  )
}
