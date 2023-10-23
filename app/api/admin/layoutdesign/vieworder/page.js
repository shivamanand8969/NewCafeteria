import Dashboard from '@/app/api/(design)/Dashboard'
import React from 'react'

const page =async () => {

  const order1=await fetch(`${process.env.NEXT_PUBLIC_NOT_SECRET_MESSAGE}/api/demodata`,{cache:"no-store"});
  const order=await order1.json();
  
  return (
    <div>
        <Dashboard order={order}/>
    </div>
  )
}

export default page
