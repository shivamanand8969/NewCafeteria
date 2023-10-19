import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {cookies} from 'next/headers';
import  JWT from 'jsonwebtoken';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { redirect } from 'next/navigation';
const cart = async () => {
    let data1=await fetch("http://127.0.0.1:3000/api/cartitems",{cache:"no-store"});
    data1=await data1.json();
    const cookie= cookies().get('usercookies')?.value ?? '';
    let decodedToken=JWT.verify(cookie,'tokenname');
    let id=decodedToken.id

    let handledelete=async(fordata)=>{
      
      "use server"
      let id=fordata.get('id');

        let delet=await fetch(`http://127.0.0.1:3000/api/cartitems/${id}`,{
          method:"DELETE",
          headers:{
            "Content-Type":"application/json"
          }
        })
        delet=await delet.json();
        console.log(delet.msg);
        redirect('/cart')
    }
   
  return (
  <>
  <Header/>
  <div className='mt-3'>
    <h1 className='text-white bg-slate-900 py-3 text-4xl text-center mt-14'>Your Cart Item</h1>
  </div>
   <div className='px-3 bg-[#141449] grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4'>
   
    {
      data1.data.map((value,key)=>(value.userId==id?
        <div key={key} className=' bg-[#141449] px-3 border-gray-500 border rounded-sm shadow-lg flex flex-col h-[40vh] w-full'>
        <div className='flex justify-center  gap-2 h-44 w-full'>
            <div className='w-[48%] bg-[#141449] h-40 flex justify-center  items-center'><Image src={`/${value.imageurl}`} height={600} width={600}/></div>
            <div className='w-[48%] h-32 flex flex-col gap-1 mt-5 ml-4'>
                <p className='text-base text-white capitalize font-medium font-sans line-clamp-2'>{value.desc}</p>
                 <p className='text-xl text-yellow-500  font-bold'>{value.prname}</p>
                <p className='text-blue-500 font-bold text-2xl '>₹ {value.prPrice} </p>
                </div>  
        </div>
        <div>
            <div className=' flex justify-between  '>
              <form action={handledelete}>
                     <input type='hidden' name='id' value={value._id}/>
                <button type='submit' className='px-5 py-2 text-lg  rounded-md bg-red-500 text-white hover:bg-red-700 '>Delete</button>
              </form>
                <Link className='px-5 py-2 text-lg  rounded-md bg-green-500 text-white hover:bg-green-700 ' href={`/cart/${value._id}`}>Order</Link>
            </div>
        </div>
    </div>:''
      ))
    }
   </div>
   <div className='bg-[#141449] py-8'>
   <Footer/>
   </div>
  </>
  )
}

export default cart