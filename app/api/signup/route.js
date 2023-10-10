import Connect from "@/app/db/Connect";
import User from "@/app/models/User";
import { NextResponse } from "next/server"

let GET=async ()=>{
   await Connect();
   let data=await User.find({});
   return NextResponse.json({data})
}