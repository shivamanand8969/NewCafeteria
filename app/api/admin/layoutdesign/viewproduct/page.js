import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CustomerOrderList = async () => {
  let product= await fetch(`${process.env.HOST}/api/additem`,{cache:'no-store'});
  product=await product.json();

  let handleDelete=async (fordata)=>{
    "use server"
      let id=fordata.get('id');
      let datadelete=await fetch(`${process.env.HOST}/api/product/${id}`,{
        method:"DELETE",
        headers:{
          "Content-Type":"application/json"
        }
  })
  console.log(datadelete)
  }
  return (
    <>
    <div className="">
      <h2 className="text-2xl font-bold mb-4">Your All Product</h2>
      <div className=" text-white p-4 rounded-lg bg-gray-700">
        <ol className='flex flex-col gap-1'>
          
         {
          product.data.map((value,key)=>(
            <li key={key} className='flex justify-between bg-gray-950 px-3 py-1 rounded-md'>
            <div className='flex flex-col lg:flex-row gap-1 lg:gap-4 items-center'>
              <Image src={`/${value.imageurl}`} width={100} height={100}/>
             <div className='flex ml-2 gap-2'>
             <h1 className='text-white text-2xl capitalize'>{value.prname}</h1>
              <span className='text-bold text-red-500 text-3xl'>₹</span><span className='text-green-500 text-3xl'>{value.prPrice}</span>
             </div>
               </div>
            <div className='flex flex-col lg:flex-row gap-2 items-center'>
              <Link href={`/api/admin/layoutdesign/viewproduct/${value._id}`} className='bg-green-500 h-fit py-1 px-2 lg:py-2 lg:px-5 text-white hover:bg-green-700 rounded-md'>Update</Link>
             
             <form method='POST' action={handleDelete}>
               <input type='hidden'  name='id' value={value._id}/>
              <button type='submit' className='bg-red-500 text-white py-1 px-2 lg:py-2 lg:px-5 hover:bg-red-800 rounded-md'>Delete</button>
             </form>
            </div>
        </li>
          ))
         }
        
        </ol>
      </div>
    </div>
      </>
  );
};

export default CustomerOrderList;
