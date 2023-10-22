import Header from '@/app/components/Header';
import UserProfileForm from '@/app/components/Updateprofile'
import React from 'react'

let updateprofile =async ({params}) => {
    let {id}=params;
      let data=await fetch(`${process.env.NEXT_PUBLIC_NOT_SECRET_MESSAGE}/api/mydata/${id}`,{cache:'no-store'})
      data=await data.json();
     
  return (
    <>
    <Header/>
    <div className='mt-14'>
      
      <UserProfileForm data={data.data} id={id}/>
  </div>
  </>
  )
}

export default updateprofile