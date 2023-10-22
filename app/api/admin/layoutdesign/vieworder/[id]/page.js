import OrderDetail from '@/app/api/(design)/OrderDetail';
import React from 'react'

const OrderDetails =async ({params}) => {
    let {id}=params;

    let order=await fetch(`${process.env.NEXT_PUBLIC_NOT_SECRET_MESSAGE}/api/demodata/${id}`);
     order=await order.json();
     
  return (
    <div>
        <OrderDetail order={order.data} id1={id}/>
    </div>
  )
}

export default OrderDetails