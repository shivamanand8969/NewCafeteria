"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const Header = () => {
    let [active,setActive]=useState(false)
  return (
   <header className='bg-blue-800 fixed top-0 left-0 w-full z-50 text-white font-sans'>
    <nav className='sm:hidden container relative h-14 flex justify-between items-center'>
        <div>
            <Link href='' className='text-2xl '>BUR<span className='text-yellow-300'>GUR</span></Link>
        </div>
       { active ?
         <div className='absolute top-0 left-0 w-full py-14 bg-blue-800 border-b border-yellow-400'>
         <ul className='flex flex-col text-center gap-5 text-xl'>
             <li>
                 <Link className=' hover:text-yellow-500 ease-in duration-200' href='/'>Home</Link>
             </li>
             <li>
                 <Link className=' hover:text-yellow-500 ease-in duration-200' href='/'>About Us</Link>
             </li>
             <li>
                 <Link className=' hover:text-yellow-500 ease-in duration-200' href='/'>Menu</Link>
             </li>
             <li>
                 <Link className=' hover:text-yellow-500 ease-in duration-200' href='/'>Review</Link>
             </li>
             <li>
                 <Link className=' hover:text-yellow-500 ease-in duration-200' href='/'>Contact</Link>
             </li>
         </ul>
         <div >
             <p className='absolute top-[0.7rem] right-4 text-2xl cursor-pointer text-white' onClick={()=>setActive(false)}>X</p>
         </div>
     </div>: <div><div><p className='flex items-center gap-5'>Monn Icon</p>
   
<div id='hamburger' onClick={()=>setActive(!active)}><p className='cursor-pointer ml-4 text-4xl'>+</p></div>
</div></div>
       }
        
    </nav>
   
     <nav className='max-sm:hidden container bg-blue-800 relative h-14 flex justify-between items-center '>
        <div>
            <Link href='' className='text-2xl'>BUR<span className='text-yellow-300'>GUR</span></Link>
        </div>
       
         <div className=''>
         <ul className='flex  text-center gap-5 text-xl py-10'>
             <li>
                 <Link className=' hover:text-yellow-500 ease-in duration-200' href='/'>Home</Link>
             </li>
             <li>
                 <Link className=' hover:text-yellow-500 ease-in duration-200' href='/'>About Us</Link>
             </li>
             <li>
                 <Link className=' hover:text-yellow-500 ease-in duration-200' href='/'>Menu</Link>
             </li>
             <li>
                 <Link className=' hover:text-yellow-500 ease-in duration-200' href='/'>Review</Link>
             </li>
             <li>
                 <Link className=' hover:text-yellow-500 ease-in duration-200' href='/'>Contact</Link>
             </li>
         </ul>
     </div> <div><p className='flex items-center gap-5'>Monn Icon</p>
</div>
       
        
    </nav>
   </header>
  )
}

export default Header