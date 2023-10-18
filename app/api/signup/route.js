import Connect from "@/app/db/Connect";
import User from "@/app/models/User";
import { NextResponse } from "next/server"

export let GET=async ()=>{
   await Connect();
   let data=await User.find({});
   return NextResponse.json({data})
}
export let POST=async (req)=>{
   await Connect();
     let data=await req.json();
     let {username, email, password, number, district, address, pincode, profileimage}=data;
     let checkmail=await User.findOne({email})
     if(checkmail){
        return NextResponse.json({"msg":"Email Already Exist"})
     }
     let newUser=new User(data);

     try{
        let newdata=await newUser.save();
        return NextResponse.json({"msg":"Sign Up successfully",newdata})
     }catch(e){
        return NextResponse.json({"msg":e.message})
     }
}