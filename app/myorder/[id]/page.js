import OrderTracking from '@/app/components/OrderTracking'
import React from 'react'

let page =async ({params}) => {
  let {id}=params;
  let data=await fetch(`${process.env.HOST}/api/orderapi/${id}`,{cache:'no-store'});
  data=await data.json();
  return (
    <div>
        <OrderTracking data1={data.data}/>
    </div>
  )
}

export default page