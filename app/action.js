"use server"

import { writeFile } from 'fs/promises'
import { redirect } from 'next/navigation';
import { join } from 'path'


export const handleSubmit =async (fordata) => {
  let id=fordata.get('id');
  let name=fordata.get('name');
  let email=fordata.get('email');
  let number=fordata.get('number');
  let district=fordata.get('district');
  let address=fordata.get('address');
  let pincode=fordata.get('pincode');
  let profileimage=fordata.get('profileimage');
//   console.log(profileimage)
let bytes=await profileimage.arrayBuffer();
let buffer=Buffer.from(bytes);
let path=join('./public',profileimage.name)
await writeFile(path,buffer)
   let data=await fetch(`http://127.0.0.1:3000/api/mydata/${id}`,{
    method:'PUT',
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({username:name,email:email,number:number,district:district, address:address,pincode:pincode,profileimage:profileimage.name}),
   })
   data=await data.json();
   redirect('/profile')
};
