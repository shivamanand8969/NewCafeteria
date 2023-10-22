'use client'
import Image from 'next/image'
import React, { useState } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingleProduct = (props) => {
  const notify = () => toast.success(`🦄 Thanyou ${myinfo.username.split(' ')[0]} jii For Order !`, {
    position: "top-right",
    autoClose: 10000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
  const notifycart = () => toast.success(`🦄 ${myinfo.username.split(' ')[0]} jii Your Order has been added into Cart !`, {
    position: "top-right",
    autoClose: 10000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
  let today = new Date();
  let dd = String(today.getDate())
  let mm = String(today.getMonth())
  let yy = String(today.getFullYear())
  let fdate = dd + '-' + mm + '-' + yy;
 
  let data1 = props.data1;
  let myinfo = props.mydata1.data;
  let id1 = props.id;
  let data = [123456, 854305]
  let [pin, setPin] = useState('');
  let [isable, setIsAble] = useState(false);
  const [prname, setname] = useState(data1.prname)
  const [prPrice, setPrice] = useState(data1.prPrice)
  const [quantity, setQuantity] = useState(1)
  let fetchuserid = props.mydata1;
  let handleSetpin=(e)=>{
    setPin(e.target.value)
  
   }
  let addCart = async () => {
    if(isable){
      if(pin.length>5){
        let data = await fetch("/api/cartitems", {
          method: 'POST',
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify({ userId:fetchuserid.data._id, prname:prname, desc:data1.desc,imageurl:data1.imageurl, quantity, prPrice:prPrice})
        })
        data = await data.json();
        console.log(data)
        alert(data.msg)
        notifycart();
      }else{
        alert("Enter valid pin code")
      }
    }
    else{
      alert('Please Enter the Valid PinCode and press check button')
    }
    }

  let order = async () => {
    if(isable){
      let data = await fetch(`/api/demodata`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ userId: id1, username:myinfo.username,email:myinfo.email,number:myinfo.number, district:myinfo.district, address:myinfo.address, pincode:myinfo.pincode, prname:prname, prPrice:prPrice * quantity, quantity: quantity, desc: data1.desc, imageurl: data1.imageurl, date: fdate })
      })
      data = await data.json();
      alert(data.msg);
      notify();
    }
    else{
      alert("Please Enter the Valid PinCode and press check button")
    }
  }

  let handlecheck = async () => {

    if (data.includes(parseInt(pin))) {
      setIsAble(true)
    }
    else {
      setIsAble(false)
    }

  }

  return (
    <>
    <ToastContainer position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light" />

      <section className="text-gray-600  body-font overflow-hidden bg-[#141449]">
        <div className="container py-16 flex flex-col lg:flex-row gap-2 px-2">
        <div className='flex flex-col'>
        <div className='flex flex-col items-center gap-2 mt-2'>
          <h1 className='text-3xl text-white  text-center'>Delever Here </h1>
          <div className='text-white  px-6 py-5  duration-100 ease-linear border-white border-2 w-92  shadow-2xl shadow-blue-950'>
            <div className='text-xl '><span className='text-yellow-500'>Name</span> {myinfo.username}</div>
            <div className='text-xl '><span className='text-yellow-500'>Email</span> {myinfo.email}</div>
            <div className='text-xl'><span className='text-yellow-500'>Number</span> {myinfo.number}</div>
            <div className='text-xl'><span className='text-yellow-500'>District</span> {myinfo.district}</div>
            <div className='text-xl'><span className='text-yellow-500'>Address</span> {myinfo.address}</div>
            <div className='text-xl'><span className='text-yellow-500'>Pin Code</span> {myinfo.pincode}</div>

          </div>
        </div>
        <div>
        <div className="p-2 border-2 border-white">
      <h2 className="text-2xl font-bold text-red-500 text-center">Payments</h2>
      <div className="bg-gray-800  p-4 rounded-lg">
        
        <p className='text-yellow-500 text-3xl text-center'>{prname}</p>
        <div className='border-2 text-center flex justify-center border-white w-48'></div>
        <p className='text-white text-xl '>Quantity <span className='text-green-500'>{quantity} </span></p>
        <p className='text-white text-xl '>Price <span className='text-green-500 px-4'>{prPrice}</span></p>
        <div className='border-2 flex justify-center text-center border-white w-48'></div>
        <p className='text-2xl text-white px-2 '>Total <span className='text-bold text-red-500 text-3xl'> ₹ </span><span className='text-green-500'>{quantity*prPrice}</span></p>
      </div>
    </div>
   
        </div>
        </div>
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={`/${data1.imageurl}`}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm  lg:text-3xl text-yellow-500 ">
                {prname}
              </h2>
              <h1 className="text-white text-3xl title-font font-medium mb-1">
                <span className='text-bold text-white text-3xl mr-2 '> ₹ </span>{prPrice}
              </h1>

              <p className="leading-relaxed text-white">
                {data1.desc}
              </p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">

                <div className="flex ml-6 items-center">
                  <span className="mr-3 text-yellow-500 font-bold font-sans text-2xl">Quantity</span>
                  <div className="relative">
                    <input type='number' value={quantity} onChange={(e) => setQuantity(e.target.value)} className='h-9 w-36 border-2 px-2 border-black' placeholder='Quantity..' />
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="title-font font-medium text-2xl text-white">
                <span className='text-bold text-red-500 text-3xl '> ₹ </span><span className=' text-white'>{quantity*prPrice}</span>
                </div>
                <button onClick={order} className="flex ml-auto text-white px-2 bg-green-600 border-0 py-2 lg:px-6 focus:outline-none hover:bg-green-800 rounded">
                  Order
                </button>
                <button onClick={addCart} className="flex ml-auto text-white px-2  bg-red-600 border-0 py-2 lg:px-6 focus:outline-none hover:bg-red-800 rounded">
                  Add To Cart
                </button>
              </div>
              <div className='flex flex-col gap-2 mt-3 '>
                <lable className='text-white font-bold font-sans text-xl '>Enter the Pin Code to verify the Service: for Demo dial 854305 or 123456</lable>
                <input type='text' value={pin} onChange={(e)=>handleSetpin(e)} className='h-9 w-36 px-2 border-2 border-black outline-none' placeholder='Pin Code..' />

                {isable ? (isable ? <p className='text-green-500 text-lg'>Delivery Available At this Pin Code</p> :
                  <p className='text-red-500 text-lg'>Sorry! Delivery Not Available At this Pin Code</p>
                ) : " "
                }
                <button className='bg-slate-600 text-white rounded px-3 py-2 hover:bg-slate-800' onClick={handlecheck}>Check PinCode</button>
              </div>
            </div>
          </div>
         
        </div>
        
      </section>

    </>
  )
}

export default SingleProduct