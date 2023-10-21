import Header from '@/app/components/Header';
import UserProfileForm from '@/app/components/Updateprofile'
import React from 'react'

let updateprofile =async ({params}) => {
    let {id}=params;
      let data=await fetch(`${process.env.HOST}/api/mydata/${id}`,{cache:'no-store'})
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