import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-center'>
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
                <input type="text" placeholder='type to search' className='bg-slate-50 p-2 rounded-lg'/>
                {/* <button className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                </button> */}
            </div>
        </div>
    </div>
  )
}

export default Navbar