import React from 'react'
import Dashboard from '../../(design)/Dashboard';
import Image from 'next/image';

const page = () => {


  return (
    <div>
      <div className="flex justify-center bg-black">
       
      </div>
      <div className="flex justify-center bg-black p-8 ">
        <div className="flex flex-col justify-center">

          <div className="flex flex-col lg:flex-row max-w-7xl justify-center items-center p-2 space-y-3 w-full">
            <div className="flex flex-col  text-white md:items-start items-center justify-between  space-y-3 px-8">
              <div className="text-5xl md:text-7xl font-bold ">
                Welcome  </div>
              <div className="text-lg uppercase md:text-3xl   ">
                My Shop</div>
              <div className="text-xl md:text-3xl   ">
                Ecommerce </div>
            </div>
            <div className="flex space-x-2 md:space-x-6 md:m-4">

              <div className="md:w-20 w-10 h-60 md:h-96  overflow-hidden rounded-xl">
                <Image src="/pexels-caleb-oquendo-3023476" width={100} height={500} alt=""/>
              </div>
              <div className="md:w-60 w-28 h-60 md:h-96  overflow-hidden rounded-xl">
                <img src="https://source.unsplash.com/200x400/?girl" className="h-full w-full" alt=""/>

              </div>
              <div className="md:w-28  w-16 h-60 md:h-96  overflow-hidden rounded-xl">
                <img src="https://source.unsplash.com/100x400/?boy" className="h-full w-full" alt=""/>

              </div>
              <div className="md:w-20 w-10 h-60 md:h-96  overflow-hidden rounded-xl">
                <img src="https://source.unsplash.com/100x400/?women" className="h-full w-full" alt=""/>

              </div>
            </div>

          </div>
        </div>
      </div>
      <script src="https://cdn.tailwindcss.com"></script>
      <script src="https://use.fontawesome.com/03f8a0ebd4.js"></script>
    </div>
  )
}

export default page