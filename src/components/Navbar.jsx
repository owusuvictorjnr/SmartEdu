import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import NavItems from './NavItems'

function Navbar() {
  return (

    <nav className='fixed top-0 right-0 left-0 border-1 uppercase bg-white flex justify-between py-5 px-20 shadow-xl'>
        <h3 className='hover:text-blue-300 border-spacing-20 border-none font-sarif font-bold text-1xl'>
            anu
        </h3>

        {/* NavItems */}
        <ul className='flex gap-[2rem] text-[1rem]'>
            <NavItems menu= {<a href="home" className="hover:text-blue-300 border-spacing-20 py-1 px-3">home</a>}/>
            <NavItems menu= {<a href="about" className="hover:text-blue-300 border-spacing-20 py-1 px-3">about</a> }/>
            <NavItems menu= {<a href="contact" className="hover:text-blue-300 border-spacing-20 py-1 px-3">contact</a>}/>
            <NavItems menu= {<a href="courses" className="hover:text-blue-300 border-spacing-20 py-1 px-3">courses</a>}/>
            <NavItems menu= {<a href="associations" className="hover:text-blue-300 border-spacing-20 py-1 px-3">associations</a>}/>  
            <NavItems menu= {<a href="blog" className="hover:text-blue-300 border-spacing-20 py-1 px-3">blog</a>}/>
            <AiOutlineSearch/>
        </ul>
    </nav>
  )
}

export default Navbar