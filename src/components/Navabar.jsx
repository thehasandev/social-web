import React, { useState } from 'react'

import { FaTimes, FaBars, FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Navabar() {
    const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div>
        <header>
            <nav className=" fixed bg-[#575757] z-50 text-white  md:flex items-center    py-6  top-0  w-full">
                <div className='flex justify-between mx-4'>
                    <div className='flex gap-6'>
                        <div className='flex items-center  gap-2'>
                            <div className='w-16 h-10'><img className=' w-full h-full' src="https://i.ibb.co/7yfbZN6/logo.png" alt="" /></div>
                            <p className='w-2 h-8 border-r border-white'></p>
                            <Link to="/" className="font-bold md:text-xl font-mono uppercase md:ml-5 text-black">web teraffic magnet</Link>
                        </div>
                        <Link> <p className=' md:hidden text-xs'>About</p></Link>
                        <p className='mt-1 md:hidden ml-5'><FaSearch /></p>
                    </div>

                    <small onClick={() => setMenuOpen(!menuOpen)} className=' md:hidden '>{menuOpen === true ? <FaTimes size={20} /> : <FaBars size={20} />}</small>
                </div>
                <div className="">
                    <ul className={`md:flex md:top-6 md:right-20 md:space-x-8 absolute ${menuOpen === true ? 'top-20 rounded-md pl-3 bg-[#575757]  w-full pt-3 pb-5 space-y-5 z-10' : '-top-48'}`}>
                        <li><Link to="/" className=" text-white text-2xl font-mono hover:text-[30px]">About</Link></li>

                        <li><Link to="/shop" className=" text-white text-2xl font-mono hover:text-[30px]">Services</Link></li>
                        <li><Link to="/about" className=" text-white text-2xl font-mono hover:text-[30px]">Blog</Link></li>
                        <li><Link to="/contact" className=" text-white text-2xl font-mono hover:text-[30px]">Contact</Link></li>
                        <li className=' hidden md:block'><Link to="/contact" className=" text-white text-3xl font-mono hover:text-[30px]"><p className='flex items-center mt-1'><FaSearch /></p></Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    </div>
  )
}

export default Navabar