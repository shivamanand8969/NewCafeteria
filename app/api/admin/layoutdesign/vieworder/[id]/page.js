import OrderDetail from '@/app/api/(design)/OrderDetail';
import React from 'react'

const OrderDetails =async ({params}) => {
    let {id}=params;

    let order=await fetch(`http://127.0.0.1:3000/api/demodata/${id}`);
     order=await order.json();
     
  return (
    <div>
        <OrderDetail order={order.data} id1={id}/>
    </div>
  )
}

export default OrderDetails