"use server"

import { writeFile } from 'fs/promises'
import { redirect } from 'next/navigation';
import { join } from 'path';
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
   let data=await fetch(`${process.env.NEXT_PUBLIC_NOT_SECRET_MESSAGE}/api/mydata/${id}`,{
    method:'PUT',
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({username:name,email:email,number:number,district:district, address:address,pincode:pincode,profileimage:profileimage.name}),
   })
   data=await data.json();
   redirect('/profile')
};


export   let handlesignup = async (data) => {
  "use server"
  let username = data.get('username')
  let email = data.get('email')
  let password = data.get('password')
  let number = data.get('number')
  let district = data.get('district')
  let address = data.get('address')
  let pincode = data.get('pincode')
  let profileimage = data.get('profileimage')
  let bytes = await profileimage.arrayBuffer();
  let buffer = Buffer.from(bytes);
  let path = join('./public', profileimage.name);
  await writeFile(path, buffer);                                                                                                                                                                                                                        
  if (username.length > 1 && email.length > 1 && password.length > 6 && number.length >= 10 && district.length > 1 && address.length > 1 && pincode.length > 5) {
      let datafetche = await fetch(`/api/signup`,{
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({ username, email, password, number, district, address, pincode, profileimage: profileimage.name })
      })
      datafetche = await datafetche.json();
      if(datafetche.msg==='Sign Up successfully'){         
          console.log(datafetche.msg)
          redirect('/login')
      }
      else if(datafetche.msg==='Email Already Exist'){ 
          console.log(datafetche.msg)
          redirect('/signup')
      }
  }
  else{
      console.log("Please fill Correct Data")
  }
}