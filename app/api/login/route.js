import User from "@/app/models/User";
import { NextResponse } from "next/server";
import JWT from "jsonwebtoken";
import Connect from "@/app/db/Connect";
export let POST=async(req)=>{
    await Connect();
   let data=await req.json();
   let {username,password}=data;
   let checkusername=await User.findOne({username});
   if(!checkusername){
    return NextResponse.json({"msg":"Invalid UserName!"}) 
   }
   let matchpassword=checkusername.password===password;
   if(!matchpassword){
    return NextResponse.json({"msg":"Invalid Password"});
   }
   let tokendata={
    id:checkusername._id,
    username:checkusername.username
   }
   let token=JWT.sign(tokendata,"tokenname",{expiresIn:"2h"});
   let response=NextResponse.json({"msg":"Login Successfully"});
   response.cookies.set("usercookies",token,{
    httpOnly:true
   })
   return response;
}