'use client'
import React, { useState } from 'react'
import Header from '../components/Header'
import { useRouter } from 'next/navigation'
  //i am changing from here
let signup = () => {
    let router=useRouter();

    let [checksubmit, setChecksubmit] = useState(false)
    let [username, setUsername] = useState('')
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [number, setNumber] = useState('')
    let [district, setDistrict] = useState('')
    let [address, setAddress] = useState('')
    let [pincode, setPincode] = useState(0)
    let handleSignup =async (e) => {
        setChecksubmit(true)
        e.preventDefault()
        if(!username.length){
            setChecksubmit(false)
           alert("Enter Your Name")
           return
        }
        if (email.length < 6) {
            setChecksubmit(false)
            alert('Please enter a valid Email')
            return
        }   
        if (!password) {
            alert("Enter your Password")
            setChecksubmit(false)
            return
        } 
        if (number.length !== 10) {
            alert("Mobile Number must be 10 digits")
            setChecksubmit(false)
            return
        }
        if (district.length < 4) {
            alert("Please enter a valid District")
            setChecksubmit(false)
            return
        }
        if (address.length < 4) {
            alert("Please enter a valid Address")
            setChecksubmit(false)
            return
        }
        if (pincode.length !== 6) {
            alert("Please enter a valid 6-digit Pincode")
            setChecksubmit(false)
            return
        }
        console.log('username', username, 'email', email, 'password', password, 'number', number, 'district', district, 'address', address, 'pincode', pincode)
        
        let datafetche = await fetch(`${process.env.NEXT_PUBLIC_NOT_SECRET_MESSAGE}/api/signup`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, email, password, number, district, address, pincode })
        })
        datafetche = await datafetche.json();
        if(datafetche.msg==='Sign Up successfully'){    
            setChecksubmit(false)     
            alert(datafetche.msg)
            router.push('/login')
        }
      
    }
    
    return (
        <>
            <Header />
            <div className='w-full h-[152vh] lg:h-[100vh] bg-slate-900 flex justify-center items-center'>
                <div className='w-[80vw] h-[80vh] flex flex-col  justify-center items-center'>
                    <form className='flex gap-3 flex-col lg:flex-row  pt-24 '>
                        <div className='flex flex-col gap-3  '>
                            <div className='flex flex-col gap-2 bg-slate-950 rounded-sm px-5 py-2'>
                                <lable htmlFor='name' className='text-white text-center text-lg'>Name</lable>
                                <input id='name' value={username} onChange={(e)=>setUsername(e.target.value)} required placeholder='Enter the Name' className='h-10 w-80 outline-0 rounded-sm text-lg text-black px-1' type='text' />
                            </div>
                            <div className='flex flex-col gap-2 bg-slate-950 rounded-sm px-5 py-2'>
                                <lable htmlFor='email' className='text-white text-center text-lg'>Email</lable>
                                <input id='email' value={email} onChange={(e)=>setEmail(e.target.value)} required placeholder='Enter the Email' className='h-10 w-80 outline-0 rounded-sm text-lg text-black px-1' type='email' />
                            </div>
                            <div className='flex flex-col gap-2 bg-slate-950 rounded-sm px-5 py-2'>
                                <lable htmlFor='password' className='text-white text-center text-lg'>Create Password</lable>
                                <input id='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password Must be 9 Digit' required className='h-10 px-1 w-80 outline-0 rounded-sm text-lg text-black' type='text'/>
                            </div>
                            <div className='flex flex-col gap-2 bg-slate-950 rounded-sm px-5 py-2'>
                                <lable htmlFor='mnumber' className='text-white text-center text-lg'>Mobile Number</lable>
                                <input id='mnumber' value={number} onChange={(e)=>setNumber(e.target.value)} placeholder='Number Must be 10 Digit' required className='h-10 w-80 px-1 outline-0 rounded-sm text-lg text-black' type='text'/>
                            </div>
                            <div className='flex flex-col gap-2 bg-slate-950 rounded-sm px-5 py-2'>
                                <lable htmlFor='district' className='text-white text-center text-lg'>District</lable>
                                <input id='district' value={district} onChange={(e)=>setDistrict(e.target.value)} placeholder='purnia..' required className='h-10 w-80 outline-0 rounded-sm px-1 text-lg text-black' type='text' />
                            </div>
                        </div>
                        <div>
                            <div className='flex flex-col gap-2 bg-slate-950 rounded-sm px-5 py-2'>
                                <lable htmlFor='addres' className='text-white text-center text-lg'>Address</lable>
                                <input id='addres' value={address} onChange={(e)=>setAddress(e.target.value)} placeholder='Khoksibag...' required className='h-10 w-80 outline-0 rounded-sm px-1 text-lg text-black' type='text'/>
                            </div>
                            <div className='flex flex-col gap-2 bg-slate-950 rounded-sm px-5 py-2'>
                                <lable htmlFor='pincode' className='text-white text-center text-lg'>PinCode</lable>
                                <input id='pincode' value={pincode} onChange={(e)=>setPincode(e.target.value)} placeholder='Pin Code Must be 8 Digit' required className='h-10 w-80 outline-0 px-1 rounded-sm text-lg text-black' type='number'  />
                            </div>
                            {/* <div className='flex flex-col gap-2 bg-slate-950 rounded-sm px-5 py-2'>
                                <lable htmlFor='profile' className='text-white text-center text-lg'>Upload Your Profile Image</lable>
                                <input id='profile' className='h-9 w-80 outline-0 rounded-sm text-lg text-black' type='file' name='profileimage' />
                            </div> */}
                            <div className='bg-black px-7 mt-2 py-5 rounded-md text-white  '>
                                <button onClick={handleSignup} type='submit' className='px-10 py-3 bg-red-600  hover:bg-red-500 text-white w-80 text-xl font-sans border-black border-5'>
                                    {
                                        (checksubmit) ? <div className='flex  gap-2'><div className="w-8 h-8 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div><div>Verifying</div></div> : <div>Submit</div>
                                    }
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default signup