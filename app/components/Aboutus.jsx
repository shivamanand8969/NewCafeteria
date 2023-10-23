"use client"
import Link from 'next/link';
import {  useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { BiLogInCircle } from 'react-icons/bi';
import Header from './Header';
import Footer from './Footer';
let Aboutus = ({data,id}) => {

       let router=useRouter();
         let [comment,setCommet]=useState();
         let handleSubmit=async ()=>{
            let postcomment=await fetch(`${process.env.NEXT_PUBLIC_NOT_SECRET_REVIEW}/api/review`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({userId:id,comment})
            })
            postcomment=await postcomment.json();
            alert(postcomment.msg)
            router.push('/aboutus')
         }

    return (
        <>
        <div className='pt-14'>
           <Header/>
        </div>
    <div>
        <div>
        <div className='w-full bg-[#141449] pt-14'>
            <div className='p-5 flex flex-col justify-start items-center'>
            <div className='h-48 w-48  rounded-full '>
                <img src='amdinprofile.jpg' className='h-48 w-48 rounded-full'/>
            </div>
             <div className='font-bold text-white text-2xl mt-2 ml-2'>Shivam Anand </div>
             <Link href={'/api/admin'} className='bg-green-500 px-5 py-3 rounded text-white text-lg font-sans hover:bg-green-800 shadow-2xl flex gap-2'><span>Go To Admin Pannel</span><span className='text-2xl text-black'><BiLogInCircle/></span></Link>
            </div>
        </div>
        <section>
        <section className="text-gray-400 bg-[#141449] body-font relative">
  <div className="container px-5 pt-5 mx-auto">
    <div className="flex flex-col text-start w-full">
      <div className="sm:text-3xl text-2xl font-medium title-font mb-1  text-gray-500 ">
        Write your Review 
        <h1>And Suggestion</h1>
      </div>
      <div className='w-full h-[2px] bg-slate-500 '></div>
     
    </div>
    <div className=" mx-auto">
      <div className="flex flex-wrap -m-2">
       <div className="p-2 w-full">
          <div className="relative">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-white"
            >
             write here....
            </label>
            <textarea
              value={comment}
              className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-[#141449] focus:bg-[#141449] focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              defaultValue={""}
              onChange={(e)=>setCommet(e.target.value)}
            />
          </div>
        </div>
        <div className="p-1 w-full flex ">
          <button onClick={handleSubmit} className="flex text-white bg-gray-600  border-0 py-2 px-8 focus:outline-none hover:bg-gray-800 rounded text-lg">
            Add Review
          </button>
        </div>
       
      </div>
    </div>
  </div>
</section>

        </section>
        <footer>
        <section className="text-gray-400 bg-[#141449] body-font shadow-2xl">
  <div className="container px-5 pt-5 mx-auto">
    <div className="flex flex-wrap -m-4 justify-center">
      <div className='w-full h-[2px]  mt-3 bg-slate-500 '></div>
      
      {
        data.map((value, key)=>(
            <div key={key} className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div className="h-full text-center">
              <img
                alt="upload image"
                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10"
                src={value.userId?.profileimage}
                
              />
              <p className="leading-relaxed">
                {value.comment}
                  </p>
              <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-4 mb-1" />
              <h2 className="text-yellow-500 font-medium title-font tracking-wider text-xl">
                {value.userId?.username}
              </h2>
              
            </div>
          </div>
        ))
      }
    </div>
  </div>
</section>
<div className='w-full mt-2 px-5 h-[2px] bg-slate-800'></div>
        </footer>
    </div>
    </div>
    <div className='bg-[#141449] pt-10'>

    <Footer/>
    </div>
    </>
  )
}

export default Aboutus