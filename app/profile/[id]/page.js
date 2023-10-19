import Header from '@/app/components/Header';
import UserProfileForm from '@/app/components/Updateprofile'
import React from 'react'

let updateprofile =async ({params}) => {
    let {id}=params;
      let data=await fetch(`http://127.0.0.1:3000/api/mydata/${id}`,{cache:'no-store'})
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