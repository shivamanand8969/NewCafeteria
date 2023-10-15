"use client"
import React from 'react'
import { GiCheckMark } from 'react-icons/gi';
import Header from './Header';
import Footer from './Footer';
import { useRouter } from 'next/navigation';

const OrderTracking = ({data1}) => {
  let router=useRouter();
  let handleCencle=async ()=>{
    let bool=confirm("Do You Want To Cencle Order")
    if(bool){
   let deleteorder=await fetch(`/api/orderapi/${data1._id}`,{
     method:"DELETE",
     headers:{
       "Content-Type":"application/json"
     }
   })
    deleteorder=await deleteorder.json();
    alert(deleteorder.msg);
    router.push('/myorder')
  }
  else{
    alert('ook')
  }
  }
 
  return (
<>
<Header/>
<div className='flex flex-col-reverse md:flex-row lg:flex-row lg:pt-16 lg:pb-5 bg-gray-900'>
     <div className='flex gap-4 w-full md:w-40 lg:w-40 items-center justify-center bg-gray-900 h-auto '>
    <div>
        <ul className='flex flex-col md:flex-col lg:flex-col justify-center items-center '>
            {
              
            (data1.isConfirm)?<><li className='h-10 w-10 flex justify-center items-center text-3xl rounded-full bg-blue-500 text-black'><GiCheckMark/></li><span className='text-white text-sm'>Order Confirm</span>
            </>:<><li className='h-10 w-10 flex justify-center items-center text-3xl rounded-full bg-white text-black'><GiCheckMark/></li><span className='text-white text-sm'>Order Confirm</span>

            </>
            }
            {
              
            (data1.isProcced)?<>
            <li className='h-28 w-1 bg-blue-500'></li>
            <li className='h-10 w-10 flex justify-center items-center text-3xl rounded-full bg-blue-500 text-black'><GiCheckMark/></li><span className=' text-white text-sm'>Packed</span>
            </> :
            <>
            <li className='h-28 w-1 bg-white'></li>
            <li className='h-10 w-10 flex justify-center items-center text-3xl rounded-full bg-white text-black'><GiCheckMark/></li><span className=' text-white text-sm'>Packed</span>
          </>
           
              }
            {
             
              (data1.isShipped)? <>
            <li className='h-28 w-1 bg-blue-500'></li>
              <li className='h-10 w-10 flex justify-center items-center text-3xl rounded-full bg-blue-500 text-black'><GiCheckMark/></li><span className=' text-white text-sm'>Shipped</span>
         </> :<>
            <li className='h-28 w-1 bg-white'></li>
         <li className='h-10 w-10 flex justify-center items-center text-3xl rounded-full bg-white text-black'><GiCheckMark/></li><span className=' text-white text-sm'>Shipped</span>
            </>
          
              
            }
            {
              (data1.isDelivery)?<> <li className='h-28 w-1 bg-blue-500'></li>
              <li className='h-10 w-10 flex justify-center items-center text-3xl rounded-full bg-blue-500 text-black'><GiCheckMark/></li><span className='text-white text-sm'>Delivery</span>
            </>:<> <li className='h-28 w-1 bg-white'></li>
              <li className='h-10 w-10 flex justify-center items-center text-3xl rounded-full bg-white text-black'><GiCheckMark/></li><span className='text-white text-sm'>Delivery</span>
              </>
            }
          
        </ul>
    </div>
</div>
        <section class="text-gray-400 bg-gray-900 body-font overflow-hidden">
  <div class="container px-5 py-8  pt-2 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6  mb-6 lg:mb-0">
        <h2 class=" title-font text-white text-3xl tracking-widest">{data1.prname}</h2>
        <h1 class="text-white text-3xl title-font font-medium mb-4"></h1>
        <div class="flex mb-4">
          <a class="flex-grow text-indigo-400 border-b-2 border-indigo-500 py-2 text-lg px-1">Description</a>
          {/* <a class="flex-grow border-b-2 border-gray-800 py-2 text-lg px-1">Reviews</a> */}
          <a class="flex-grow border-b-2 border-gray-800 py-2 text-lg px-1">Details</a>
        </div>
        <p class="leading-relaxed mb-4">{data1.desc}</p>
        <div class="flex border-t border-gray-800 py-2">
          <span class="text-gray-500">Price</span>
          <span class="ml-auto text-white">{data1.prname}</span>
        </div>
        <div class="flex border-t border-gray-800 py-2">
          <span class="text-gray-500">Quantity</span>
          <span class="ml-auto text-white">{data1.quantity}</span>
        </div>
        <div class="flex border-t border-b mb-6 border-gray-800 py-2">
          <span class="text-gray-500">Total</span>
          <span class="ml-auto text-white">{data1.prPrice*data1.quantity}</span>
        </div>
        <div class="flex">
          <span class="title-font font-medium text-2xl text-white">$ {data1.prPrice*data1.quantity}</span>
          <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Pay Bill</button>
          <button onClick={handleCencle} class="flex ml-auto text-white bg-red-500  border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Cencle Order</button>
          </div>
      </div>
      <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={`/${data1.imageurl}`}/>
    </div>
    
  </div>
</section>
    </div>
   <div className='bg-gray-900 pt-4'>
   <Footer/>
   </div>
</>
  )
}

export default OrderTracking