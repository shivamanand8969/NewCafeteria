"use client"
import Link from 'next/link'
import React, { useRef, useState } from 'react'
import { BsCartFill } from 'react-icons/bs'
import { BiSolidUserCircle } from 'react-icons/bi'

let Header = () => {

    let logout = async () => {
        let logoutdata = await fetch("/api/logout", { cache: "no-store" });
        logoutdata = await logoutdata.json();
        alert(logoutdata.msg)
    }

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
                                <Link className='text-yellow-500 hover:text-yellow-700 hover:underline ease-in duration-200 text-lg' href='/profile'>Profile</Link>
                            </li>
                            <li>
                                <Link className='text-yellow-500 hover:text-yellow-700 hover:underline text-lg ease-in duration-200' href='/aboutus'>About Us</Link>
                            </li>
                            <li>
                                <Link className='text-yellow-500 hover:underline text-lg  hover:text-yellow-700 ease-in duration-200' href='/myorder'>My Order</Link>
                            </li>
                            <li>
                                <Link className='text-yellow-500 text-lg hover:underline hover:text-yellow-500 ease-in duration-200' href='/cart'>cart</Link>
                            </li>
                            
                            <li>
                                <Link className='text-yellow-500 text-lg hover:underline hover:text-yellow-500 ease-in duration-200' href='/login'>Login</Link>
                            </li>
                            <button onClick={logout} className='text-red-500 hover:text-red-700  hover:underline ease-linear duration-200 text-xl'>Logout</button>
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
                            <Link className=' hover:text-yellow-500 ease-in duration-200' href='/aboutus'>About Us</Link>
                        </li>

                        <li>
                            <Link className=' hover:text-yellow-500 ease-in duration-200' href='/#ch4'>Order</Link>
                        </li>
                        <li>
                            <Link className=' hover:text-yellow-500 ease-in duration-200' href='/myorder'>My order</Link>
                        </li>
                        <button onClick={logout} className=' rounded-md hover:underline text-red-500 ease-in duration-200'>Logout</button>

                        <li>
                            <Link className='bg-green-500 px-5 py-3 rounded-md hover:bg-green-700 ease-in duration-200' href='/login'>Login</Link>
                        </li>

                        <li>
                            <Link className='bg-green-500 px-5 py-3 rounded-md hover:bg-green-700 ease-in duration-200' href='/signup'>Sign Up</Link>
                        </li>
                    </ul>
                </div>
                 <div>
                    <Link href={'/cart'} className=' text-3xl relative right-0'><BsCartFill /></Link>
                </div>
                <div>
                    <Link href={'/profile'} className=' text-4xl relative right-0'><BiSolidUserCircle/></Link>
                </div>

            </nav>
        </header>
    )
}

export default Header