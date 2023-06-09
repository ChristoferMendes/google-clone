'use client'
import React, { useEffect } from 'react'

export default function ErrorPage({ error, reset }: { error: Error, reset: () => void }) {
  return (
    <div className='flex flex-col justify-center items-center pt-10'>
      <h1 className='text-3xl mb-4'>Something went wrong</h1>
      <button onClick={reset} className='text-blue-500'>Try again</button>
    </div>
  )
}
