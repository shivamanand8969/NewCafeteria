import { redirect } from 'next/navigation'
import React from 'react'
import { writeFile } from 'fs/promises'
import { join } from 'path'

const signup = () => {
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

        let datafetche = await fetch('http://127.0.0.1:3000/api/signup', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, email, password, number, district, address, pincode, profileimage: profileimage.name })
        })
        datafetche = await datafetche.json();

        redirect('/signup')
    }
    return (
        <>
            <div className='w-full h-[146vh] lg:h-[100vh] bg-slate-900 flex justify-center items-center '>
                <div className='w-[80vw] h-[80vh] flex flex-col  justify-center items-center'>
                    <form className='flex gap-3 flex-col lg:flex-row  ' action={handleSubmit}>
                        <div className='flex flex-col gap-3 '>
                            <div className='flex flex-col gap-2 bg-slate-950 rounded-sm px-5 py-2'>
                                <lable className='text-white text-center text-lg'>Name</lable>
                                <input className='h-9 w-80 outline-0 rounded-sm text-lg text-black' type='text' name='username' />
                            </div>
                            <div className='flex flex-col gap-2 bg-slate-950 rounded-sm px-5 py-2'>
                                <lable className='text-white text-center text-lg'>Email</lable>
                                <input className='h-9 w-80 outline-0 rounded-sm text-lg text-black' type='text' name='email' />
                            </div>
                            <div className='flex flex-col gap-2 bg-slate-950 rounded-sm px-5 py-2'>
                                <lable className='text-white text-center text-lg'>Password</lable>
                                <input className='h-9 w-80 outline-0 rounded-sm text-lg text-black' type='text' name='password' />
                            </div>
                            <div className='flex flex-col gap-2 bg-slate-950 rounded-sm px-5 py-2'>
                                <lable className='text-white text-center text-lg'>Number</lable>
                                <input className='h-9 w-80 outline-0 rounded-sm text-lg text-black' type='text' name='number' />
                            </div>
                            <div className='flex flex-col gap-2 bg-slate-950 rounded-sm px-5 py-2'>
                                <lable className='text-white text-center text-lg'>District</lable>
                                <input className='h-9 w-80 outline-0 rounded-sm text-lg text-black' type='text' name='district' />
                            </div>
                        </div>
                        <div>
                            <div className='flex flex-col gap-2 bg-slate-950 rounded-sm px-5 py-2'>
                                <lable className='text-white text-center text-lg'>Address</lable>
                                <input className='h-9 w-80 outline-0 rounded-sm text-lg text-black' type='text' name='address' />
                            </div>
                            <div className='flex flex-col gap-2 bg-slate-950 rounded-sm px-5 py-2'>
                                <lable className='text-white text-center text-lg'>PinCode</lable>
                                <input className='h-9 w-80 outline-0 rounded-sm text-lg text-black' type='number' name='pincode' />
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