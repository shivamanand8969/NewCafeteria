import Image from 'next/image'
import React from 'react'

const Product = () => {
  return (
    <div>
        <div>
            <ul className='grid grid-cols-1 px-2 md:px-4 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-7 lg:px-4'>
               
            <li className='text-white p-4 grid grid-cols-1 gap-5 border-blue-700  hover:border-white ease-linear duration-100 rounded-md shadow-xl border-4'>
                    <div className='grid place-items-center rounded-3xl ease-linear duration-200 lg:h-40'>
                        <Image src={'/burger.jpg'} height={300} width={300} alt='food image' className='hover:scale-110 ease-linear duration-200'/>
                    </div>
                    <div className='pt-2'>
                        <div className='mb-2'>
                            <h4>REGULAR BEEF BURGER</h4>
                            <p>Lorem ipsum dolor sit amet conseearum quos magni, atque</p>
                        </div>
                        <p className='text-yellow-400 '>$42</p>
                    </div>
                </li>
                <li className='text-white p-4 grid grid-cols-1 gap-5 border-blue-700 hover:border-white ease-linear duration-100 rounded-md shadow-xl border-4'>
                    <div className='grid place-items-center rounded-3xl ease-linear duration-200 lg:h-40'>
                        <Image src={'/burger.jpg'} height={300} width={300} alt='food image' className='hover:scale-110 ease-linear duration-200'/>
                    </div>
                    <div className='pt-2'>
                        <div className='mb-2'>
                            <h4>REGULAR BEEF BURGER</h4>
                            <p>Lorem ipsum dolor sit amet conseearum quos magni, atque</p>
                        </div>
                        <p className='text-yellow-400 '>$42</p>
                    </div>
                </li>
                <li className='text-white p-4 grid grid-cols-1 gap-5 border-blue-700 hover:border-white ease-linear duration-100 rounded-md shadow-xl border-4'>
                    <div className='grid place-items-center rounded-3xl ease-linear duration-200 lg:h-40'>
                        <Image src={'/burger.jpg'} height={300} width={300} alt='food image' className='hover:scale-110 ease-linear duration-200'/>
                    </div>
                    <div className='pt-2'>
                        <div className='mb-2'>
                            <h4>REGULAR BEEF BURGER</h4>
                            <p>Lorem ipsum dolor sit amet conseearum quos magni, atque</p>
                        </div>
                        <p className='text-yellow-400 '>$42</p>
                    </div>
                </li>
                <li className='text-white p-4 grid grid-cols-1 gap-5 border-blue-700 hover:border-white ease-linear duration-100 rounded-md shadow-xl border-4'>
                    <div className='grid place-items-center rounded-3xl ease-linear duration-200 lg:h-40'>
                        <Image src={'/burger.jpg'} height={300} width={300} alt='food image' className='hover:scale-110 ease-linear duration-200'/>
                    </div>
                    <div className='pt-2'>
                        <div className='mb-2'>
                            <h4>REGULAR BEEF BURGER</h4>
                            <p>Lorem ipsum dolor sit amet conseearum quos magni, atque</p>
                        </div>
                        <p className='text-yellow-400 '>$42</p>
                    </div>
                </li>
                <li className='text-white p-4 grid grid-cols-1 gap-5 border-blue-700 hover:border-white ease-linear duration-100 rounded-md shadow-xl border-4'>
                    <div className='grid place-items-center rounded-3xl ease-linear duration-200 lg:h-40'>
                        <Image src={'/burger.jpg'} height={300} width={300} alt='food image' className='hover:scale-110 ease-linear duration-200'/>
                    </div>
                    <div className='pt-2'>
                        <div className='mb-2'>
                            <h4>REGULAR BEEF BURGER</h4>
                            <p>Lorem ipsum dolor sit amet conseearum quos magni, atque</p>
                        </div>
                        <p className='text-yellow-400 '>$42</p>
                    </div>
                </li>
               
                
            </ul>
        </div>
    </div>
  )
}

export default Product