import React from 'react'

export default function WebSearchFavIcon({ domain }: { domain: string }) {
  return (
    <div className='flex items-center mr-4'>
      <img src={`https://www.google.com/s2/favicons?domain=${domain}&sz=24`} alt="" />
    </div>
  )
}
