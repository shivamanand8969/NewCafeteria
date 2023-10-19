import { redirect } from 'next/navigation'
import React from 'react'
import { writeFile } from 'fs/promises'
import { join } from 'path'
import Header from '../components/Header'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const signup = () => {
    const notifysuccess = () => toast.success('🦄 SignUp Successfully ! please wait a minute ot redirect Login page!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    const notifyunerror = () => toast.error('🦄 Login Unsuccessfull !', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
     
    let handleSubmit = async (data) => {
        "use server"
        let username = data.get('username')
        let email = data.get('email')
        let password = data.get('password')
        let number = data.get('number')
        let district = data.get('district')
        let address = data.get('address')
        let pincode = data.get('pincode')
        let profileimage = data.get('profileimage')
        let bytes = await profileimage.arrayBuffer();
        let buffer = Buffer.from(bytes);
        let path = join('./public', profileimage.name);
        await writeFile(path, buffer);
    
                                                                                                                                                                                                                                
        if (username.length > 1 && email.length > 1 && password.length > 8 && number.length >= 10 && district.length > 1 && address.length > 1 && pincode.length > 5) {
            
            let datafetche = await fetch('http://127.0.0.1:3000/api/signup', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username, email, password, number, district, address, pincode, profileimage: profileimage.name })
            })
            datafetche = await datafetche.json();
            if(datafetche.msg==='Sign Up successfully'){
                
                console.log(datafetche.msg)
                redirect('/login')
            }
            else if(datafetche.msg==='Email Already Exist'){ 
                console.log(datafetche.msg)
                redirect('/signup')
            }
        }
        else{
            console.log("Please fill Correct Data")
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
            <Header />
            <div className='w-full h-[146vh] lg:h-[100vh] bg-slate-900 flex justify-center items-center'>
                <div className='w-[80vw] h-[80vh] flex flex-col  justify-center items-center'>
                    <form className='flex gap-3 flex-col lg:flex-row  ' action={handleSubmit}>
                        <div className='flex flex-col gap-3 '>
                            <div className='flex flex-col gap-2 bg-slate-950 rounded-sm px-5 py-2'>
                                <lable className='text-white text-center text-lg'>Name</lable>
                                <input required placeholder='Enter the Name' className='h-9 w-80 outline-0 rounded-sm text-lg text-black' type='text' name='username' />
                            </div>
                            <div className='flex flex-col gap-2 bg-slate-950 rounded-sm px-5 py-2'>
                                <lable className='text-white text-center text-lg'>Email</lable>
                                <input required placeholder='Enter the Email' className='h-9 w-80 outline-0 rounded-sm text-lg text-black' type='email' name='email' />
                            </div>
                            <div className='flex flex-col gap-2 bg-slate-950 rounded-sm px-5 py-2'>
                                <lable className='text-white text-center text-lg'>Create Password</lable>
                                <input placeholder='Password Must be 9 Digit' required className='h-9 w-80 outline-0 rounded-sm text-lg text-black' type='text' name='password' />
                            </div>
                            <div className='flex flex-col gap-2 bg-slate-950 rounded-sm px-5 py-2'>
                                <lable className='text-white text-center text-lg'>Mobile Number</lable>
                                <input placeholder='Number Must be 10 Digit' required className='h-9 w-80 outline-0 rounded-sm text-lg text-black' type='text' name='number' />
                            </div>
                            <div className='flex flex-col gap-2 bg-slate-950 rounded-sm px-5 py-2'>
                                <lable className='text-white text-center text-lg'>District</lable>
                                <input placeholder='purnia..' required className='h-9 w-80 outline-0 rounded-sm text-lg text-black' type='text' name='district' />
                            </div>
                        </div>
                        <div>
                            <div className='flex flex-col gap-2 bg-slate-950 rounded-sm px-5 py-2'>
                                <lable className='text-white text-center text-lg'>Address</lable>
                                <input placeholder='Khoksibag...' required className='h-9 w-80 outline-0 rounded-sm text-lg text-black' type='text' name='address' />
                            </div>
                            <div className='flex flex-col gap-2 bg-slate-950 rounded-sm px-5 py-2'>
                                <lable className='text-white text-center text-lg'>PinCode</lable>
                                <input placeholder='Pin Code Must be 8 Digit' required className='h-9 w-80 outline-0 rounded-sm text-lg text-black' type='number' name='pincode' />
                            </div>
                            <div className='flex flex-col gap-2 bg-slate-950 rounded-sm px-5 py-2'>
                                <lable className='text-white text-center text-lg'>Upload Your Profile Image</lable>
                                <input className='h-9 w-80 outline-0 rounded-sm text-lg text-black' type='file' name='profileimage' />
                            </div>
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