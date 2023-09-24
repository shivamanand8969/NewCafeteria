"use client"
import Link from 'next/link'
import React, { useRef, useState } from 'react'
import { BsCartFill } from 'react-icons/bs';
import { AiFillCloseCircle, AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';


const Header = ({data}) => {
    
    
    
    let [active, setActive] = useState(false)
    let ref = useRef()

    let toglecart = () => {
        if (ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-full');
            ref.current.classList.add('translate-x-0')
        }
        else if (!ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-0');
            ref.current.classList.add('translate-x-full')
        }
    }
   
    return (
        <header className='bg-blue-800 fixed top-0 left-0 w-full z-50 text-white font-sans'>
            <nav className='sm:hidden container relative h-14 flex justify-between items-center'>
                <div>
                    <Link href='' className='text-2xl '>BUR<span className='text-yellow-300'>GUR</span></Link>
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
                            <p className='absolute top-[0.7rem] right-4 text-2xl cursor-pointer text-white' onClick={() => setActive(false)}>X</p>
                        </div>
                    </div> : <div><div><div className='flex items-center gap-5'><BsCartFill /></div>

                        <div id='hamburger' onClick={() => setActive(!active)}><p className='cursor-pointer ml-4 text-4xl'>+</p></div>
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
                </div> <div><div className='flex items-center gap-5' onClick={toglecart}><BsCartFill /></div>
                </div>
                <div ref={ref} className=' absolute top-0 right-0 h-[100vh] bg-white px-8 py-10 text-black transform transition-transform translate-x-full '>
                    <h2 className='font-bold text-xl'>Shopping Cart</h2>
                    <span onClick={toglecart} className='absolute top-5 right-2 cursor-pointer text-2xl' ><AiFillCloseCircle /></span>
                    <ol className='overflow-y-scroll '>
                        {
                            data.map((value)=>(
                                <li>
                                <div className='item flex my-5'>
                                    <div className='w-2/3 font-semibold'>{value.name} </div>
                                    <div className='flex font-semibold items-center justify-center w-1/3'><span><AiOutlineMinusCircle className='text-red-500 cursor-pointer m-1' /></span><span>{value.qunatity}</span><span><AiOutlinePlusCircle className='text-red-500 cursor-pointer m-1' /></span></div>
                                </div>
                            </li>
                            ))
                        }
                      
                    </ol>
                    <button className='bg-slate-700 text-white hover:bg-slate-900 font-sans rounded px-5 py-3'>CheckOut</button>
                    <button className='bg-slate-700 text-white hover:bg-slate-900 font-sans rounded px-5 py-3'>ClearCart</button>
                </div>

            </nav>
        </header>
    )
}

export default Header