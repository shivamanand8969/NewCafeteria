import Connect from "@/app/db/Connect";
import User from "@/app/models/User";
import { NextResponse } from "next/server"
import bcrypt from 'bcryptjs'
export let GET=async ()=>{
   await Connect();
   try{
      let data=await User.find({});
      return NextResponse.json({data})
   }
   catch(e){
      return NextResponse.json({"msg":e.message})
   }
}
export let POST=async (req)=>{
   await Connect();
     let data=await req.json();
     let {username, email, password, number, district, address, pincode, profileimage}=data;
     let checkmail=await User.findOne({email})
     if(checkmail){
        return NextResponse.json({"msg":"Email Already Exist"})
     }
     let hashedpassword=await bcrypt.hash(password,8);


     let newUser=new User({username, email, password:hashedpassword, number, district, address, pincode, profileimage});

     try{
        let newdata=await newUser.save();
        return NextResponse.json({"msg":"Sign Up successfully",newdata})
     }catch(e){
        return NextResponse.json({"msg":e.message})
     }
}