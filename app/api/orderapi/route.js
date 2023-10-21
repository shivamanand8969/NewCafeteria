import Connect from "@/app/db/Connect"
import Demoorder from "@/app/models/Demoorder"
import { NextResponse } from "next/server"

export let GET=async ()=>{
   await Connect()
   try{
      let data=await Demoorder.find({});
      return NextResponse.json({data})
   }
   catch(e){
      return NextResponse.json({"msg":e.message})
   }
}
