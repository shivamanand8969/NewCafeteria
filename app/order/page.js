import React from 'react'
import Product from '../components/Product'
import Header from '../components/Header';

const page =async () => {
    let data = await fetch('http://127.0.0.1:3000/api/additem', { cache: "no-store" });
    data = await data.json();
  return (
    <>
    <div className='bg-[#141449]'>
        <Header/>
    </div>
    <div className='bg-[#141449] pt-14'>
        <Product data1={data}/>
    </div>
    </>
  )
}

export default page