import React from 'react'
import Header from './components/Header'
import Mainsection from './components/Mainsection'
import Cart from './components/Cart';
import Footer from './components/Footer'
let page = async () => {
  return (
    <div className='bg-[#141449]  md:p-4 lg:pl-1'>
      <Header />
      <div className=' pb-4 mt-10 lg:mt-0 pt-3 lg:pt-0'><Mainsection /></div>
      <div className=' pb-10 '><Cart /></div>
      <div className='pt-4'><Footer /></div>
    </div>
  )
}

export default page