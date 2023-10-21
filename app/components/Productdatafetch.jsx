'use client'
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'
import Header from './Header';

const Productfetchdata = ({ data1 }) => {
    let [searchdata, setSearchdata] = useState('');
    let [data, setData] = useState(data1.data);
    let [ascsort, setAscsort] = useState(false)
    let [descsort, setDescsort] = useState(false)
    let filterdata =
        data.filter((value) => {
            if (searchdata == '') {
                return value
            }
            else if (value.prname.toLowerCase().includes(searchdata.toLowerCase())) {
                return value
            }
        })
    {
        (ascsort) ? filterdata.sort((a, b) => a.prPrice - b.prPrice) : filterdata
    }
    {
        (descsort) ? filterdata.sort((a, b) => b.prPrice - a.prPrice) : filterdata
    }
    return (
        <>
        <div className='bg-[#141449]'>
         <Header/>
     </div>
            <div className='p-4 lg:flex lg:gap-3 lg:w-1/2'>
                <div className='flex'>
                    <div className='h-9 w-14 flex justify-center items-center text-2xl font-bold text-yellow-500 bg-white rounded-bl-xl rounded-tl-xl'>S</div>
                    <input type='text' value={searchdata} onChange={(e) => setSearchdata(e.target.value)} placeholder='Search here...' className='text-black outline-none  h-9 w-full rounded-tr-xl rounded-br-xl' />
                </div>
                <div className='flex gap-6 mt-1 justify-center'>
                    <div className='flex gap-2 items-center'>
                        <input type='checkbox' className='text-2xl' value={ascsort} onChange={(e) => setAscsort(!ascsort)} />
                        <lable className='text-sm text-yellow-500'>Price L To H</lable>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <input type='checkbox' className='text-2xl' value={descsort} onChange={(e) => setDescsort(!descsort)} />
                        <lable className='text-sm text-yellow-500 '>Price H To L</lable>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <ul className='grid grid-cols-1 px-2 md:px-4 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-7 lg:px-4'>
                        {
                            filterdata.map((value, key) => (
                                <li key={key} className='text-white p-4 grid grid-cols-1 gap-5 border-blue-700  hover:border-white ease-linear duration-100 rounded-md shadow-xl border-4'>
                                    <div className='grid place-items-center rounded-3xl ease-linear duration-200 lg:h-40'>
                                        <Image src={`/${value.imageurl}`} height={300} width={300} alt='food image' className='hover:scale-110 ease-linear duration-200' />
                                    </div>
                                    <div className='pt-2'>
                                        <div className='mb-2'>
                                            <h4 className='text-xl font-bold capitalize font-sans'>{value.prname}</h4>
                                            <p className='mt-2 line-clamp-3'>{value.desc}</p>
                                        </div>
                                        <div className='flex gap-2'>
                                            <p className='text-red-500 line-through '><span>₹</span>{value.prPrice}</p>
                                            <p className='text-green-500'> {value.discount}% Off</p>
                                            <p className='text-yellow-400 truncate w-[5rem]'><span>₹</span>{value.prPrice - ((value.discount / 100) * value.prPrice)}</p>

                                        </div>
                                        <Link href={`singleproduct/${value._id}`}><button className='px-8 py-3 mt-5 bg-red-600 text-xl text-white ease-linear duration-100 hover:bg-red-800 rounded-md '>Order</button></Link>
                                    </div>
                                </li>
                            ))
                        }



                    </ul>
                </div>
            </div>
        </>

    )
}

export default Productfetchdata