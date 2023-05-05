import React from 'react'
import CountryLookup from './CountryLookup'

const paddings = 'px-8 py-3'

export default function Footer() {
  console.log(Intl.DateTimeFormat().resolvedOptions().timeZone)

  return (
    <footer className='absolute bottom-0 text-sm text-gray-500 bg-[#f2f2f2] w-full'>
      <div className={`border-b ${paddings}`}>
        <CountryLookup />
      </div>
      <div className={`flex flex-col sm:flex-row justify-between items-center ${paddings} space-y-7 sm:space-y-0`}>
        <ul className='flex items-center space-x-6 '>
          <li>About</li>
          <li>Advertising</li>
          <li>Business</li>
          <li>How Search Works</li>
        </ul>

        <ul className='flex items-center space-x-6'>
          <li>Privacy</li>
          <li>Terms</li>
          <li>Settings</li>
        </ul>
      </div>
    </footer>
  )
}
