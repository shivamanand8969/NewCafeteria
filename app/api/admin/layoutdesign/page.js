import React from 'react';
import Image from 'next/image';

const page = () => {


  return (
    <div>
      <div className="flex justify-center bg-black  h-screen w-full">
        <div className="flex flex-col justify-center">
          <div className="flex flex-col lg:flex-row max-w-7xl justify-center items-center w-full">
            <div className="flex flex-col  text-white md:items-start items-center justify-between  space-y-3 px-8">
              <div className="text-5xl md:text-7xl font-bold ">
                Welcome  </div>
              <div className="text-lg uppercase md:text-3xl   ">
                My Shop</div>
              <div className="text-xl md:text-3xl   ">
                Ecommerce </div>
            </div>
            <div className="flex md:space-x-6 md:m-4">            
          <Image src={'/d.jpg'} height={800} width={800}/>
            </div>
          </div>
        </div>
      </div>
       </div>
  )
}

export default page