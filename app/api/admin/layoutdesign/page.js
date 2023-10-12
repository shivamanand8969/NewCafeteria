import React from 'react'
import Dashboard from '../../(design)/Dashboard';

const page =async () => {
    let order=await fetch("http:127.0.0.1:3000/api/demodata",{cache:"no-store"});
    order=await order.json();
 
    
  return (
    <div>
       <Dashboard orders={order}/>
    </div>
  )
}

export default page