'use client'
import React from 'react'
import Header from '../components/Header'
import { handlesignup } from '../action'

let signup = () => {    
  

    return (
        <>       <Header />
            <div className='w-full h-[146vh] lg:h-[100vh] bg-slate-900 flex justify-center items-center'>
                <div className='w-[80vw] h-[80vh] flex flex-col  justify-center items-center'>
                    <form className='flex gap-3 flex-col lg:flex-row pt-6' action={handlesignup}>
                        <div className='flex flex-col gap-3  '>
                            <div className='flex flex-col gap-2 bg-slate-950 rounded-sm px-5 py-2'>
                                <lable htmlFor='name' className='text-white text-center text-lg'>Name</lable>
                                <input id='name' required placeholder='Enter the Name' className='h-9 w-80 outline-0 rounded-sm text-lg text-black' type='text' name='username' />
                            </div>
                            <div className='flex flex-col gap-2 bg-slate-950 rounded-sm px-5 py-2'>
                                <lable htmlFor='email' className='text-white text-center text-lg'>Email</lable>
                                <input id='email' required placeholder='Enter the Email' className='h-9 w-80 outline-0 rounded-sm text-lg text-black' type='email' name='email' />
                            </div>
                            <div className='flex flex-col gap-2 bg-slate-950 rounded-sm px-5 py-2'>
                                <lable htmlFor='password' className='text-white text-center text-lg'>Create Password</lable>
                                <input id='password' placeholder='Password Must be 9 Digit' required className='h-9 w-80 outline-0 rounded-sm text-lg text-black' type='text' name='password' />
                            </div>
                            <div className='flex flex-col gap-2 bg-slate-950 rounded-sm px-5 py-2'>
                                <lable htmlFor='mnumber' className='text-white text-center text-lg'>Mobile Number</lable>
                                <input id='mnumber' placeholder='Number Must be 10 Digit' required className='h-9 w-80 outline-0 rounded-sm text-lg text-black' type='text' name='number' />
                            </div>
                            <div className='flex flex-col gap-2 bg-slate-950 rounded-sm px-5 py-2'>
                                <lable htmlFor='district' className='text-white text-center text-lg'>District</lable>
                                <input id='district' placeholder='purnia..' required className='h-9 w-80 outline-0 rounded-sm text-lg text-black' type='text' name='district' />
                            </div>
                        </div>
                        <div>
                            <div className='flex flex-col gap-2 bg-slate-950 rounded-sm px-5 py-2'>
                                <lable htmlFor='addres' className='text-white text-center text-lg'>Address</lable>
                                <input id='addres' placeholder='Khoksibag...' required className='h-9 w-80 outline-0 rounded-sm text-lg text-black' type='text' name='address' />
                            </div>
                            <div className='flex flex-col gap-2 bg-slate-950 rounded-sm px-5 py-2'>
                                <lable htmlFor='pincode' className='text-white text-center text-lg'>PinCode</lable>
                                <input id='pincode' placeholder='Pin Code Must be 8 Digit' required className='h-9 w-80 outline-0 rounded-sm text-lg text-black' type='number' name='pincode' />
                            </div>
                            {/* <div className='flex flex-col gap-2 bg-slate-950 rounded-sm px-5 py-2'>
                                <lable htmlFor='profile' className='text-white text-center text-lg'>Upload Your Profile Image</lable>
                                <input id='profile' className='h-9 w-80 outline-0 rounded-sm text-lg text-black' type='file' name='profileimage' />
                            </div> */}
                            <div className='bg-black px-7 mt-2 py-5 rounded-md text-white  '>
                                <button type='submit' className='px-10 py-3 bg-red-600  hover:bg-red-500 text-white w-80 text-xl font-sans border-black border-5'>Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default signup