import Connect from "@/app/db/Connect"
import Demoorder from "@/app/models/Demoorder"
import { NextResponse } from "next/server"

export let GET=async ()=>{
   await Connect()
   let data=await Demoorder.find({});
   return NextResponse.json({data})
}
