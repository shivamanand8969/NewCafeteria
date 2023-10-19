import React from 'react'
import Header from '../components/Header'
import About from '../components/Aboutus'
import { cookies } from 'next/headers'
import JWT from 'jsonwebtoken'
import Footer from '../components/Footer'
const page = async () => {
  let data=await fetch('http://127.0.0.1:3000/api/review',{cache:'no-store'});
  data=await data.json();
  // console.log(data);
   let cookie=cookies().get('usercookies')?.value ?? ''
   let verifyToken=JWT.verify(cookie,'tokenname');
  //  console.log(verifyToken.id)
  
  return (
    <>
        <Header/>
        <About data={data.data} id={verifyToken.id}/>
        <div className='bg-[#141449] pt-10'>

        <Footer/>
        </div>
    </>
    
  )
}

export default page