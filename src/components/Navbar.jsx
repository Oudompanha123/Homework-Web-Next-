import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-center '>
        <div className="navbar bg-transparent fixed top-0 z-40 w-[90%] mx-auto">
            <div className="flex-1">
                <Link className="btn btn-ghost text-xl text-white" href='/'>Lengend</Link>
            </div>
            <div className="space-x-4 me-2">
                <ul className='space-x-10'>
                    <Link href="#" className='p-2 text-white hover:bg-white rounded-md hover:text-black'>Home</Link>
                    <Link href="#" className='p-2 text-white hover:bg-white rounded-md hover:text-black'>Popular</Link>
                    <Link href="#" className='p-2 text-white hover:bg-white rounded-md hover:text-black'>Romance</Link>
                    <Link href="#" className='p-2 text-white hover:bg-white rounded-md hover:text-black'>Anime</Link>
                </ul>
                <input type="text" placeholder='type to search' className='bg-gray-50 border input border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-3  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
            </div>
        </div>
    </div>
  )
}

export default Navbar