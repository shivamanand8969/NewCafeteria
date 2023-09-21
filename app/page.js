import React from 'react'
import Header from './components/Header'
import Mainsection from './components/Mainsection'
import Cart from './components/Cart'

const page = () => {
  return (
    <div className='bg-[#141449] '>
      <Header/>
      <div className='pt-16 pb-4 md:pt-20'><Mainsection/></div>
      <div className=' pb-10 px-3'><Cart/></div>
    </div>
  )
}

export default page