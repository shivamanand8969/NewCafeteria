"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import Loader from '../components/Loading1';
import Header from '../components/Header';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const login = () => {
  const notify = () => toast.success('🦄 Login Successfully ! please wait a minute ot redirect home page!', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  const notifyunsuccess = () => toast.error('🦄 Login Unsuccessfull !', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
  let [email, setEmail] = useState();
  let [password, setPassword] = useState();
  let router = useRouter();
  let [loading, setLoadin] = useState(false)
  let loginSubmit = async () => {
    notify();
    <ToastContainer />
    setLoadin(true)
    let data = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    })
    data = await data.json();
    alert(data.msg);
    setLoadin(false)
    if (data.msg === 'Login Successfully') {
      notify();
      router.push("/")
    }
    else {
      notifyunsuccess();
      router.push("/login")
    }
  }
  return (
    (loading) ? <div className='w-full h-screen bg-slate-950'>
      <Loader />
    </div> :
      <div className='bg-slate-950 flex justify-center items-center h-screen w-full '>
        <Header />

        <div className='flex flex-col  border-white border px-10 py-14 rounded-md shadow-2xl'>
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

          <lable className='text-center text-white text-2xl font-sans '>EMAIL</lable>
          <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} className='h-9 w-64 outline-0 text-lg rounded-md' />
          <lable className='text-center text-white text-2xl font-sans mt-1'>PASSWORD</lable>
          <input type='text' value={password} onChange={(e) => setPassword(e.target.value)} className='h-9 w-64 outline-0 text-lg rounded-md' />
          <button onClick={loginSubmit} className='w-64 h-12 rounded-md bg-red-600 hover:bg-red-700 mt-3 text-white text-2xl '>Login</button>
          <div className='flex mt-2'>
            <p className='text-blue-600'>did not have account ?</p>
            <Link href={'/signup'} className='text-md underline text-white ml-2'>signup</Link>

          </div>
        </div>
      </div>
  )
}

export default login