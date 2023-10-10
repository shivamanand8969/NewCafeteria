import React from 'react'
import Header from './components/Header'
import Mainsection from './components/Mainsection'
import Cart from './components/Cart'
import Product from './components/Product'
import Footer from './components/Footer'

const page = async () => {
  let data1=await fetch("http://127.0.0.1:3000/api/cartitems");
  data1=await data1.json();
  return (
    <div className='bg-[#141449] '>
      <Header data={data1.data}/>
      <div className='pt-16 pb-4 md:pt-20'><Mainsection/></div>
      <div className=' pb-10 px-3'><Cart/></div>
      <div><Product/></div>
      <div className='mt-4'><Footer/></div>
    </div>
  )
}

export default page