import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Mainsection = () => {
    return (
        <div >
            <section>
                <div className='container text-white flex flex-col items-center gap-10 '>
                    <div className=''>
                        <Image className='sm:hidden' src="/burger.jpg" height={300} width={300} alt='image not found' />
                        <Image className='max-sm:hidden ' src="/burger.jpg" height={800} width={800} alt='image not found' />
                    </div>
                    <div className='text-center'>
                        <h1 className='text-4xl font-sans font-bold '>HAPPY TUMMY WITH TASTY BURGERS</h1>
                        <div className='w-32 h-[2px] bg-yellow-500 mx-auto my-5 '></div>
                    </div></div>
                <p className='text-gray-300 text-xs leading-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis distinctio officia quasi error dicta, culpa molestiae ex eum, facilis corporis architecto enim deserunt omnis facere pariatur, nisi atque magnam mollitia?</p>
                <div className='text-base flex items-center justify-center  py-10 gap-4'>
                    <div>
                        <p>yellow spoon image</p>
                        <br />
                        <div className='text-lg text-yellow-400 font-sans font-bold '>Delociours</div>
                    </div>
                    <div>
                        <p>yellow water Drop</p>
                        <br />
                        <div className='text-lg font-sans font-bold text-yellow-400 '>Fresh</div>
                    </div>
                    <div>
                        <p>yellow tree pata</p>
                        <br />
                        <div className='text-lg font-sans font-bold  text-yellow-400'>Organic</div>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <button className=' inline-block text-sm py-3 px-8 capitalize text-center cursor-pointer rounded-md font-sans font-bold ease-linear duration-200 text-black  bg-yellow-400 hover:opacity-75 lg:text-6xl'><Link href={'/'}>Learn More</Link></button>
                </div>
            </section>
        </div>
    )
}

export default Mainsection