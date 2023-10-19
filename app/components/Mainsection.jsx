import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { GiForkKnifeSpoon } from 'react-icons/gi';
import { BiSolidDroplet } from 'react-icons/bi';
import { PiTreePalm } from 'react-icons/pi';


const Mainsection = () => {
    return (
        <div >
            <section>
                <div className='container text-white flex flex-col items-center gap-10 '>
                    <div className=''>
                        <Image className='sm:hidden' src="/burger.jpg" height={300} width={300} alt='image not found' />
                        <div className='w-[100vw] left-0 bg-black  h-[100vh] max-sm:hidden flex justify-center items-center z-10 relative'>
                            <div className='flex justify-center items-center absolute flex-col'>
                                <div className='text-7xl text-white font-bold'>WELCOME TO OUR FOOD </div><div className='text-7xl font-bold text-yellow-500'>DELEVERY APP</div>
                                {/* <button className=' inline-block text-sm py-3 px-8 capitalize text-center cursor-pointer rounded-md font-sans font-bold ease-linear duration-200 text-black  bg-yellow-400 hover:opacity-75 lg:text-6xl'><Link href={'#ch4'}>Order Now</Link></button> */}
                            </div>
                            <video src='/burgervideo.mp4' height={200} width={1500} className=' bg-black object-cover text-center overflow-hidden' autoPlay muted loop />
                        </div>
                        {/* <Image className='max-sm:hidden ' src="/burger.jpg" height={800} width={800} alt='image not found' /> */}
                    </div>
                    <div className='text-center mt-0 lg:mt-6'>
                        <h1 className='text-4xl font-sans font-bold '>HAPPY TUMMY WITH TASTY FAST FOOD</h1>
                        <div className='w-32 h-[2px] bg-yellow-500 mx-auto my-5 '></div>
                    </div></div>
                <p className='text-gray-300 text-xs leading-5 px-5 text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis distinctio officia quasi error dicta, culpa molestiae ex eum, facilis corporis architecto enim deserunt omnis facere pariatur, nisi atque magnam mollitia?</p>
                <div className='text-base flex items-center justify-center  py-10 gap-4'>
                    <div>
                        <p className='text-3xl text-yellow-500 ml-4'><GiForkKnifeSpoon/></p>
                        <br />
                        <div className='text-lg text-yellow-400 font-sans font-bold '>Delociours</div>
                    </div>
                    <div>
                        <p className='text-3xl text-yellow-500 ml-3'><BiSolidDroplet/></p>
                        <br />
                        <div className='text-lg font-sans font-bold text-yellow-400 '>Fresh</div>
                    </div>
                    <div>
                        <p className='text-4xl text-yellow-500 ml-4'><PiTreePalm/></p>
                        <br />
                        <div className='text-lg font-sans font-bold  text-yellow-400'>Organic</div>
                    </div>
                </div>
                <div  className='flex justify-center items-center'>
                    <button className=' inline-block text-sm py-3 px-8 capitalize text-center cursor-pointer rounded-md font-sans font-bold ease-linear duration-200 text-black  bg-yellow-400 hover:opacity-75 lg:text-6xl'><Link href={'/'}>Learn More</Link></button>
                </div>
            </section>
             
        </div>
    )
}

export default Mainsection