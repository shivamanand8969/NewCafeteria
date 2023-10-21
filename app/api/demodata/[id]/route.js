import Connect from "@/app/db/Connect"
import Demoorder from "@/app/models/Demoorder";
import { NextResponse } from "next/server";

export let GET=async (req,{params})=>{
    let {id}=params;
    await Connect();
    try{
        let data=await Demoorder.findById(id);
        return NextResponse.json({data})
    }catch(e){
        return NextResponse.json({"msg":e.message})  
  }
    
}