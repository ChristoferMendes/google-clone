'use client'
import React from 'react'
import { AiOutlineCamera, AiOutlineSearch } from 'react-icons/ai'

const icons = {
  'All': <AiOutlineSearch className="text-md" />,
  'Images': <AiOutlineCamera className="text-md" />,
}

type Tab = keyof typeof icons

export default function SearchHeaderSelectButton({ onClick, tab, color }: { onClick: (tab: Tab) => void, tab: Tab, color: string }) {
  return (
    <div>
      <div onClick={() => onClick(tab)} className={`flex items-center space-x-1 border-b-4 active:text-blue-500 cursor-pointer pb-3 px-2 ${color}`}>
        {icons[tab]}
        <p className={`${color}`}>{tab}</p>
      </div>
    </div>
  )
}
