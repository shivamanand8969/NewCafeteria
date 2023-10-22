"use client"
import { useRouter } from 'next/navigation';
import React, {useState } from 'react'

const Updatefrom = ({data1, id}) => {
   
    
    let [prname,setprName]=useState(data1.prname);
    let [prPrice,setprPrice]=useState(data1.prPrice);
    let [desc,setDesc]=useState(data1.desc);
    let [discount,setDiscount]=useState(data1.discount);
  let router=useRouter();
      let handleUpdate=async (e)=>{
       e.preventDefault();
       let updatedata=await fetch(`${process.env.NEXT_PUBLIC_NOT_SECRET_MESSAGE}/api/product/${id}`,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({prname,prPrice,desc,discount})
       })
       updatedata=await updatedata.json();
       alert(updatedata.msg);
       router.push('/api/admin/layoutdesign/viewproduct')
    }

  return (
    <div className='h-auto lg:h-[90vh] lg:w-full lg:flex lg:justify-center lg:items-center bg-slate-900'>
      <div>
        <form className='px-3'>
        <h2 className='text-center text-2xl lg:text-8xl shadow-lg flex justify-center items-center text-red-500 font-bold font-sans'>Update Your Product</h2>
              <div className='flex flex-col lg:flex-row  shadow-2xl'>
              <div className='flex flex-col gap-2 lg:p-10'>
                <label className='text-center text-2xl text-white font-bold font-sans'>Product Name</label>
                <input value={prname} onChange={(e)=>setprName(e.target.value)} type='text' name='prname' className='h-10 w-full lg:w-[45vw] outline-none border-slate-700 rounded-md text-2xl border-2'/>
                <label className='text-center text-2xl text-white font-bold font-sans'>Price</label>
                <input value={prPrice} onChange={(e)=>setprPrice(e.target.value)} type='number' name='prPrice' className='h-10 w-full lg:w-[45vw] outline-none border-slate-700 rounded-md text-2xl border-2'/>
                <label className='text-center text-2xl text-white font-bold font-sans'>Description</label>
                <textarea rows={4} type='text' onChange={(e)=>setDesc(e.target.value)} className=' w-full lg:w-[45vw] outline-none border-slate-700 rounded-md text-2xl border-2'>{desc}</textarea>
                </div>
                <div className='flex flex-col gap-2 w-[45vw] lg:p-10'>
                <label className='text-center text-2xl text-white font-bold font-sans'>Discount</label>
                <input value={discount} type='number' onChange={(e)=>setDiscount(e.target.value)} className='h-10 sm:w-[273px]  lg:w-[35vw] outline-none border-slate-700 rounded-md text-2xl border-2' placeholder='10%....' />
                <button onClick={handleUpdate} className='text-center px-5 text-lg lg:text-2xl py-3 mx-auto rounded-md bg-slate-700 text-white hover:shadow-2xl hover:bg-slate-950'>Update</button>
                </div>
              </div>
        </form>
      </div>
        
    </div>
  )
}

export default Updatefrom