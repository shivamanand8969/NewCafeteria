"use client"
import Link from 'next/link'
import React, { useRef, useState } from 'react'
import { BsCartFill } from 'react-icons/bs'


const Header = () => {
    let [active, setActive] = useState(false)
    return (
        <header className='bg-[#141449] fixed top-0 left-0 w-full z-50 text-white font-sans shadow-2xl'>
            <nav className='sm:hidden container relative h-14 flex justify-between items-center'>
                <div>
                    <Link href='/' className='text-2xl '>HO<span className='text-yellow-300'>ME</span></Link>
                </div>
                {active ?
                    <div className='absolute top-0 left-0 w-full py-14 bg-blue-800 border-b border-yellow-400'>
                        <ul className='flex flex-col text-center gap-5 text-xl'>
                            <li>
                                <Link className=' hover:text-yellow-500 ease-in duration-200' href='/'>Home</Link>
                            </li>
                            <li>
                                <Link className=' hover:text-yellow-500 ease-in duration-200' href='/'>About Us</Link>
                            </li>
                            <li>
                                <Link className=' hover:text-yellow-500 ease-in duration-200' href='/myorder'>My Order</Link>
                            </li>
                            <li>
                                <Link className=' hover:text-yellow-500 ease-in duration-200' href='/cart'>cart</Link>
                            </li>
                            <li>
                                <Link className=' hover:text-yellow-500 ease-in duration-200' href='/'>Contact</Link>
                            </li>
                            <li>
                                <Link className=' hover:text-yellow-500 ease-in duration-200' href='/login'>Login</Link>
                            </li>
                        </ul>
                        <div >
                            <p className='absolute top-[0.7rem] right-4 text-2xl cursor-pointer text-white' onClick={() => setActive(false)}>X</p>
                        </div>
                    </div> : <div><div>

                        <div id='hamburger' onClick={() => setActive(!active)}><p className='cursor-pointer ml-4 text-4xl mr-9'>+</p></div>
                    </div></div>
                }

            </nav>

            <nav className='max-sm:hidden container  bg-[#141449] relative h-14 flex justify-between items-center '>
                <div>
                    <Link href='/' className='text-2xl ml-4'>HO<span className='text-yellow-300'>ME</span></Link>
                </div>

                <div className=''>
                    <ul className='flex  text-center gap-5 text-xl py-10'>
                       
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
                            <Link className=' hover:text-yellow-500 ease-in duration-200' href='/myorder'>My order</Link>
                        </li>
                        <li>
                            <Link className='bg-green-500 px-5 py-3 rounded-md hover:bg-green-700 ease-in duration-200' href='/login'>Login</Link>
                        </li>
                    </ul>
                </div> <div><Link href={'/cart'} className=' text-3xl relative right-0'><BsCartFill/></Link>
                </div>

            </nav>
        </header>
    )
}

export default Header