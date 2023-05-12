'use client'
import React, { useEffect } from 'react'

export default function ErrorPage({ error, reset }: any) {
  
  useEffect(() => {
    console.log('Error', error)
  }, [error])

  return (
    <div className='flex flex-col justify-center items-center'>

    </div>
  )
}
