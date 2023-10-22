import SingleProduct from '@/app/components/SingleProduct';
import React from 'react'
import { cookies } from 'next/headers';
import JWT from 'jsonwebtoken';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
const singleproduct = async({params}) => {
  let {id}=params;
  let data= await fetch(`${process.env.NEXT_PUBLIC_NOT_SECRET_MESSAGE}/api/product/${id}`,{cache:"no-store"})
  data=await data.json();
 
let cookie=cookies().get('usercookies')?.value ?? '';
let verifycookie=JWT.verify(cookie,'tokenname');
  let mydata=await fetch(`${process.env.NEXT_PUBLIC_NOT_SECRET_MESSAGE}/api/mydata/${verifycookie.id}`,{cache:"no-store"})
  mydata=await mydata.json();

  return (
    <div>
      <Header/>
      <SingleProduct data1={data.data} mydata1={mydata} id={verifycookie.id}/>
      <div className='bg-[#141449] pt-4'>
       <Footer/>
      </div>
    </div>
  )
}

export default singleproduct