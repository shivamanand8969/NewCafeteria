import Link from 'next/link'
import React from 'react'

const login = () => {
  return (
    <div className='bg-slate-950 flex justify-center items-center h-screen w-full '>
        <div className='flex flex-col  border-white border px-10 py-14 rounded-md shadow-2xl'>
            <lable className='text-center text-white text-2xl font-sans '>USER NAME</lable>
            <input type='text' className='h-9 w-64 outline-0 text-lg rounded-md' />
            <lable className='text-center text-white text-2xl font-sans mt-1'>PASSWORD</lable>
            <input type='text' className='h-9 w-64 outline-0 text-lg rounded-md' />
            <button className='w-64 h-12 rounded-md bg-red-600 hover:bg-red-700 mt-3 text-white text-2xl '>Login</button>
          <div className='flex mt-2'>
          <p className='text-blue-600'>did not have account ?</p>
           <Link href={'/signup'} className='text-md underline text-white ml-2'>signup</Link>
      
          </div>
            </div>
    </div>
  )
}

export default login