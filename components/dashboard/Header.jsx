import React from 'react'
import { History } from 'lucide-react'
import Search from './Search'

export default function Header() {
  return (
    <div className='bg-gray-100 h-14 flex items-center justify-between px-8'>
        <div className='flex gap-3'>
          <button> <History className='w-6 h-6'/>  </button>
          <Search />
        </div>
    </div>
  )
}
