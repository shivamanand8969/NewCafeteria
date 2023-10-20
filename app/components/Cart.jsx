import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Cart = () => {
  return (
      <section>
            <div className='container flex flex-col gap-5 lg:flex-row '>
            <div className='bg-yellow-600 flex  rounded-lg overflow-hidden'>
                <div className='basis-1/3 relative '><Image src='/burger.jpg'  height={300} width={300} alt='image'/>
                </div>
                <div>
                    <div className=''>
                        <h4 className='text-xl ml-5 text-white font-sans font-bold uppercase lg:text-2xl'>Food</h4>
                        <p className='text-sm ml-5 text-white'>Lorem ipsum dolor sit.</p>
                    </div>
                    <Link className='text-black cursor-pointer text-lg ml-5 hover:underline ' href={'/order'}>Buy Online</Link>
                </div>
            </div>

            <div className='bg-red-600 flex  rounded-lg overflow-hidden'>
                <div className='basis-1/3 relative '><Image src='/burger.jpg'  height={300} width={300} alt='image'/>
                </div>
                <div>
                    <div className=''>
                        <h4 className='text-xl ml-5 text-white font-sans font-bold uppercase lg:text-4xl'>SNACK</h4>
                        <p className='text-sm ml-5 text-white'>Lorem ipsum dolor sit.</p>
                    </div>
                    <Link className='text-black cursor-pointer text-lg ml-5 hover:underline ' href={'/order'}>Buy Online</Link>
                </div>
            </div>

            <div className='bg-green-400 flex  rounded-lg overflow-hidden'>
                <div className='basis-1/3 relative '><Image src='/burger.jpg'  height={300} width={300} alt='image'/>
                </div>
                <div>
                    <div className=''>
                        <h4 className='text-xl ml-5 text-white font-sans font-bold uppercase lg:text-4xl'>Burger</h4>
                        <p className='text-sm ml-5 text-white'>Lorem ipsum dolor sit.</p>
                    </div>
                    <Link className='text-black cursor-pointer text-lg ml-5 hover:underline ' href={'/order'}>Buy Online</Link>
                </div>
            </div>
       </div>
        </section>
  )
}

export default Cart