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
              </div>
              <div className="md:w-60 w-28 h-60 md:h-96  overflow-hidden rounded-xl">

              </div>
              <div className="md:w-28  w-16 h-60 md:h-96  overflow-hidden rounded-xl">

              </div>
              <div className="md:w-20 w-10 h-60 md:h-96  overflow-hidden rounded-xl">

              </div>
            </div>

          </div>
        </div>
      </div>
       </div>
  )
}

export default page