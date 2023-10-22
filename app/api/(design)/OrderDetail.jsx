"use client"
import React, { useState } from 'react'

const OrderDetail = ({order,id1}) => {
    let [isConfirm,setIsConfirm]=useState(false);
    let [isProcced,setIsProcced]=useState(false);
    let [isShipped,setIsShipped]=useState(false);
    let [isDelivery,setIsDelivery]=useState(false);
    let [dateandtime,setDateAndTime]=useState(order.createdAt);
    
    let handleConfirm=async()=>{
          setIsConfirm(!isConfirm)
      let confirmdata=await fetch(`${process.env.HOST}/api/orderapi/${id1}`,{
          method:"PUT",
          headers:{
              "Content-Type":"application/json"
          },
          body:JSON.stringify({isConfirm:isConfirm})
      });
      confirmdata=await confirmdata.json();
      console.log(confirmdata.msg);
  }
  let handleProcesed=async()=>{
       setIsProcced(!isProcced)
      let confirmdata=await fetch(`${process.env.HOST}/api/orderapi/${id1}`,{
          method:"PUT",
          headers:{
              "Content-Type":"application/json"
          },
          body:JSON.stringify({isProcced:isProcced})
      });
      confirmdata=await confirmdata.json();
      console.log(confirmdata.msg);
  } 
  let handleShipped=async()=>{
       setIsShipped(!isShipped);
      let confirmdata=await fetch(`${process.env.HOST}/api/orderapi/${order._id}`,{
          method:"PUT",
          headers:{
              "Content-Type":"application/json"
          },
          body:JSON.stringify({isShipped:isShipped})
      });
      confirmdata=await confirmdata.json();
      console.log(confirmdata.msg);
  } 
  let handleDelivery=async()=>{
      setIsDelivery(!isDelivery)
      let confirmdata=await fetch(`${process.env.HOST}/api/orderapi/${order._id}`,{
          method:"PUT",
          headers:{
              "Content-Type":"application/json"
          },
          body:JSON.stringify({isDelivery:isDelivery})
      });
      confirmdata=await confirmdata.json();
      console.log(confirmdata.msg);
  }
   
  return (
    <div>
        <section className="text-gray-400 bg-gray-900 body-font">
  <div className="container px-2 py-8 mx-auto flex flex-wrap">
    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
      <img alt="feature" className="object-cover object-center lg:h-[80%] h-full w-full lg:w-[80%]" src={`/${order.imageurl}`}/>
       <div className='flex gap-5 ml-5 items-center mt-8 '>
       {
        (isConfirm)?<button onClick={handleConfirm} className='bg-green-500 hover:bg-green-700 rounded-md px-5 py-3 text-white '>Confirm</button>
        :<button onClick={handleConfirm} className='bg-green-800 hover:bg-green-900 rounded-md px-5 py-3 text-white '>Confirmed</button>
       }
        {
            (isProcced)? <button onClick={handleProcesed} className='bg-green-500 hover:bg-green-700 rounded-md px-5 py-3 text-white '>Packing</button>
            : <button onClick={handleProcesed} className='bg-green-800 hover:bg-green-900 rounded-md px-5 py-3 text-white '>Packed</button>
            
        }
        {
            (isShipped)?
            <button onClick={handleShipped} className='bg-green-500 hover:bg-green-700 rounded-md px-5 py-3 text-white '>Shipping</button>
            :
            <button onClick={handleShipped} className='bg-green-800 hover:bg-green-900 rounded-md px-5 py-3 text-white '>Shipped</button>
            
        }
        {
            (isDelivery)?<button onClick={handleDelivery} className='bg-green-500 hover:bg-green-700 rounded-md px-5 py-3 text-white '>Deliery</button>
            :<button onClick={handleDelivery} className='bg-green-800 hover:bg-green-900 rounded-md px-5 py-3 text-white '>Delivered</button>
           
        }
        </div>
    </div>
    <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
      <div className="flex flex-col mb-10 lg:items-start items-center">
        <div className="text-sm p-0 rounded-md lg:p-2  lg:text-2xl inline-flex items-center justify-center bg-gray-800 text-indigo-400 mb-5">
           Product Detail
        </div>
        <div className="flex-grow">
        <div className='flex gap-2'>
        <h2 className="text-white text-lg title-font font-medium mb-1">Product Name</h2>
          <p className="leading-relaxed text-base text-green-500 ">{order.prname}</p>
        </div>
        <div className='flex gap-2'>
        <h2 className="text-white text-lg title-font font-medium mb-1">Product Name</h2>
        <p className="leading-relaxed text-green-500 text-base">{order.prPrice}</p>

        </div>
        <div className='flex gap-2'>
          <h2 className="text-white text-lg title-font font-medium mb-1">Product Quantity</h2>
          <p className="leading-relaxed text-green-500 text-base">{order.quantity}</p>
         
        </div>
        <div className='flex gap-2'>
          
        <h2 className="text-white text-lg title-font font-medium mb-1">Order Date</h2>
          <p className="leading-relaxed text-lg text-green-500 ">{dateandtime?.split('T')[0]}</p> 
        </div>
        <div className='flex gap-2'>
          <h2 className="text-white text-lg title-font font-medium mb-1">Order Time</h2>
            <p className="leading-relaxed text-lg text-green-500 ">{dateandtime?.split('T')[1].split('.')[0]}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col mb-10 lg:items-start items-center">
        <div className="text-sm lg:text-2xl  inline-flex items-center justify-center p-0 lg:p-2 rounded-md bg-gray-800 text-indigo-400 mb-5">
          Customer Address Detail
        </div>
        <div className="flex-grow">
            <div className='flex gap-2'>
                 <h2 className="text-white text-lg title-font font-medium mb-1">Cutomer Address</h2>
          <p className="leading-relaxed text-base">{order.address}</p>
         
            </div>
            <div className='flex gap-2'>
                 <h2 className="text-white text-lg title-font font-medium mb-1">Cutomer District</h2>
          <p className="leading-relaxed text-base">{order.district}</p>         
            </div>
            <div className='flex gap-2'>
                 <h2 className="text-white text-lg title-font font-medium mb-1">Cutomer Pin Code</h2>
          <p className="leading-relaxed text-base">{order.pincode}</p>
         
            </div>
         </div>
      </div>
      <div className="flex flex-col mb-10 lg:items-start items-center">
        <div className="p-0 lg:p-2 rounded-md  inline-flex items-center justify-center  bg-gray-800 text-indigo-400 mb-5">
        Customer Details
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font font-medium mb-3">Customer Details</h2>
            <div className='flex gap-2'>
            <h2 className="text-white text-lg title-font font-medium mb-3">Name </h2>
          <p className="leading-relaxed text-base">{order.username}</p>
         
            </div>
            <div className='flex gap-2'>
            <h2 className="text-white text-lg title-font font-medium mb-3">Email </h2>
          <p className="leading-relaxed text-base">{order.email}</p>
            </div>
            <div className='flex gap-2'>
            <h2 className="text-white text-lg title-font font-medium mb-3">Mobile Number </h2>
          <p className="leading-relaxed text-base">{order.number}</p>
         
            </div>
        
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default OrderDetail