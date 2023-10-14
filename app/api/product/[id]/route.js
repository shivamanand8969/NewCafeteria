import Connect from "@/app/db/Connect";
import Product from "@/app/models/Product";
import { NextResponse } from "next/server";

export let GET=async (req,{params})=>{
     let {id}=params;
     await Connect();
     try{
        let data=await Product.findById(id);
        return NextResponse.json({data});
     }
     catch(e){
        return NextResponse.json({"msg":e.msg});
     }

}
export let DELETE=async(req,{params})=>{
      let {id}=params;
      await Connect();
      try {
         let deletedata=await Product.findByIdAndDelete(id)
         return NextResponse.json({"msg":"Product Deleted"})
      } catch (e) {
         throw new Error(e.message)
      }
}
export let PUT=async (req,{params})=>{
   await Connect();
    let {id}=params;
    let data=await req.json();
    try{
      let newdata=await Product.findByIdAndUpdate(id,data);
      return NextResponse.json({"msg":"data Updated Successfully",newdata})
    }
    catch(e){
      return NextResponse.json({'msg':e.message})
    }

}