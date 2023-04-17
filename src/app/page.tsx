import { Inter } from 'next/font/google'
import HomeHeader from './components/HomeHeader'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="">
      <HomeHeader />
    </main>
  )
}
