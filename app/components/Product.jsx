import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const Product =async () => {
    let data=await fetch('http://127.0.0.1:3000/api/additem',{cache:"no-store"});
    data=await data.json();
  return (
    <div>
        <div>
            <ul className='grid grid-cols-1 px-2 md:px-4 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-7 lg:px-4'>
        {
            data.data.map((value,key)=>(
                <li key={key} className='text-white p-4 grid grid-cols-1 gap-5 border-blue-700  hover:border-white ease-linear duration-100 rounded-md shadow-xl border-4'>
                <div className='grid place-items-center rounded-3xl ease-linear duration-200 lg:h-40'>
                    <Image src={`/${value.imageurl}`} height={300} width={300} alt='food image' className='hover:scale-110 ease-linear duration-200'/>
                </div>
                <div className='pt-2'>
                    <div className='mb-2'>
                        <h4 className='text-xl font-bold capitalize font-sans'>{value.prname}</h4>
                        <p className='mt-2 line-clamp-3'>{value.desc}</p>
                    </div>
                    <div className='flex gap-2'>
                    <p className='text-red-500 line-through '><span>₹</span>{value.prPrice}</p>
                    <p className='text-green-500'> {value.discount}% Off</p>
                    <p className='text-yellow-400 truncate w-[5rem]'><span>₹</span>{value.prPrice-((value.discount/100)*value.prPrice)}</p>

                    </div>
                    <Link href={`singleproduct/${value._id}`}><button className='px-8 py-3 mt-5 bg-red-600 text-xl text-white ease-linear duration-100 hover:bg-red-800 rounded-md '>Order</button></Link>
                </div>
            </li>
            ))
        }       
           
               
                
            </ul>
        </div>
    </div>
  )
}

export default Product