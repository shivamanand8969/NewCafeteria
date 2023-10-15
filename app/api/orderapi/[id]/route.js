import Connect from "@/app/db/Connect";
import Demoorder from "@/app/models/Demoorder";
import { NextResponse } from "next/server";

export let GET=async (req,{params})=>{
      let {id}=params;
      await Connect();
      try{
        let data=await Demoorder.findById(id);
        return NextResponse.json({data});
      }
      catch(e){
        throw new Error(e.message);
      }
}
export let DELETE=async (req,{params})=>{
     let {id}=params;
     await Connect();
     try{
        let deletedata=await Demoorder.findByIdAndDelete(id);
        return NextResponse.json({"msg":"Order Cencle Successlly",deletedata})
     }
     catch(e){
        throw new Error(e.message)
     }
}
export let PUT=async (req,{params})=>{
  await Connect();
   let {id}=params;
   let data=await req.json();
   try{
     let newdata=await Demoorder.findByIdAndUpdate(id,data);
     return NextResponse.json({"msg":"data Updated Successfully",newdata})
   }
   catch(e){
     return NextResponse.json({'msg':e.message})
   }

}