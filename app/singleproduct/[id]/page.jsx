import SingleProduct from '@/app/components/SingleProduct';
import React from 'react'
import { cookies } from 'next/headers';
import JWT from 'jsonwebtoken';
const singleproduct = async({params}) => {
  let {id}=params;
  let data= await fetch(`http://127.0.0.1:3000/api/product/${id}`,{cache:"no-store"})
  data=await data.json();
 
let cookie=cookies().get('usercookies')?.value ?? '';
let verifycookie=JWT.verify(cookie,'tokenname');
  let mydata=await fetch(`http://127.0.0.1:3000/api/mydata/${verifycookie.id}`,{cache:"no-store"})
  mydata=await mydata.json();

  return (
    <div>
      <SingleProduct data1={data.data} mydata1={mydata} id={verifycookie.id}/>

    </div>
  )
}

export default singleproduct