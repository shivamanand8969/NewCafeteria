"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const adminlogin = () => {
  let [name,setName]=useState('');
  let [password,setPassword]=useState('');
  let router=useRouter();

  let loginSubmit=async ()=>{
        let data=await fetch("/api/adminlogin",{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({name,password})
        })
        data=await data.json();
        alert(data)
        if(data==='ok'){
            router.push("/api/admin/layoutdesign")
        }
        }
  return (
    <div className='bg-slate-950 flex justify-center items-center h-screen w-full '>
        <div className='flex flex-col  border-white border px-10 py-14 rounded-md shadow-2xl'>
            <lable className='text-center text-white text-2xl font-sans '>ADMIN NAME</lable>
            <input type='text' value={name} onChange={(e)=>setName(e.target.value)} className='h-9 w-64 outline-0 text-lg rounded-md' />
            <lable className='text-center text-white text-2xl font-sans mt-1'>PASSWORD</lable>
            <input type='text' value={password} onChange={(e)=>setPassword(e.target.value)} className='h-9 w-64 outline-0 text-lg rounded-md' />
            <button onClick={loginSubmit} className='w-64 h-12 rounded-md bg-red-600 hover:bg-red-700 mt-3 text-white text-2xl '>Login</button>
         
            </div>
    </div>
  )
}

export default adminlogin