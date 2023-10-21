import OrderDetail from '@/app/api/(design)/OrderDetail';
import React from 'react'

const OrderDetails =async ({params}) => {
    let {id}=params;

    let order=await fetch(`${process.env.HOST}/api/demodata/${id}`);
     order=await order.json();
     
  return (
    <div>
        <OrderDetail order={order.data} id1={id}/>
    </div>
  )
}

export default OrderDetails