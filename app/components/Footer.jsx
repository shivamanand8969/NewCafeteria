import Link from 'next/link'
import React from 'react'
import { FaPhoneVolume } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <div>
        <section>
            <div>
                <ul className='grid grid-cols-1 items-start gap-5 pb-5 px-4 md:grid-cols-2 lg:grid-cols-4'>
                    <li>
                        <div className='space-y-3'>
                            <Link href={'/'} className='text-4xl font-sans uppercase text-white'>cry<span className='text-yellow-500'>pt</span></Link>
                            <p className='text-sm text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam rem illum est repellat beatae, ipsa consectetur alias aut sequi autem!</p>
                        </div>
                    </li>
                    <li>
                        <div className='flex flex-col gap-3 text-white '>
                            <h3 className='text-lg uppercase font-sans cursor-pointer'>support</h3>
                            <Link href={'/'} className='text-sm cursor-pointer hover:text-yellow-400 '>FAQs</Link>
                            <Link href={'/'} className='text-sm cursor-pointer hover:text-yellow-400 '>Privacy Policy</Link>
                            <Link href={'/'} className='text-sm cursor-pointer  hover:text-yellow-400 '>Term & Condition</Link>
                            <Link href={'/'} className='text-sm cursor-pointer hover:text-yellow-400 '>Condition</Link>
                        </div>
                    </li>
                    <li className='space-y-8 text-white'>
                        <div className='space-y-2'>
                            <h3 className='text-2xl uppercase font-sans '>Phone</h3>
                            <p className='flex items-center gap-2 text-xs'><span className='text-2xl'><FaPhoneVolume/></span> +1 8969171781</p>
                        </div>
                          <div className='space-y-2'>
                            <h3 className='text-2xl uppercase font-sans '>email</h3>
                            <p className='flex items-center gap-2 text-xs'><span className='text-2xl'><MdEmail/> </span> shivamanand1234@gmail.com</p>
                        </div>
                    </li>
                     <li className='space-y-8 text-white'>
                        <div className='space-y-2'>
                            <h3 className='text-2xl uppercase font-sans '>address</h3>
                            <p className='flex items-center gap-2 text-xs'>Vidya Vihar Institute of Technology</p>
                        </div>
                          <div className='space-y-2'>
                            <h3 className='text-2xl uppercase font-sans '>Follow Us</h3>
                            <div className='flex gap-3'>
                                <div className='border-black border-2 bg-yellow-500 flex justify-center items-center w-9 h-9'>
                                 <div className='h-3 w-3 rounded-full bg-white'></div>
                            </div>
                            <div className='border-black border-2 bg-blue-500 flex justify-center items-center w-9 h-9'>
                                 <div className='text-2xl text-white'>f</div>
                            </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    </div>
  )
}

export default Footer