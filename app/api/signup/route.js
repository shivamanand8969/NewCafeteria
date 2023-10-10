import Connect from "@/app/db/Connect";
import User from "@/app/models/User";
import { NextResponse } from "next/server"

export let GET=async ()=>{
   await Connect();
   let data=await User.find({});
   return NextResponse.json({data})
}
export let POST=async (req)=>{
     let data=await req.json();
     let newUser=new User(data);
     try{
        let newdata=await newUser.save();
        return NextResponse.json({"msg":"data inserted successfully",newdata})
     }catch(e){
        return NextResponse.json({"msg":e.message})
     }
}