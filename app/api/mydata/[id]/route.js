import Connect from "@/app/db/Connect";
import User from "@/app/models/User";
import { NextResponse } from "next/server";

const { getDataFromToken } = require("@/app/helper/getDataFromToken");

export let GET=async (req,{params})=>{
    let {id}=params;
    await Connect();
    try{
        let data=await User.findById(id);
        return NextResponse.json({data});
    }
    catch(e){
        return NextResponse.json({"msg":e.message});
    }
}
export let PUT=async (req,{params})=>{
         let {id}=params;
        let data=await req.json();
         try{
             let updatedata=await User.findByIdAndUpdate(id,data)
            return NextResponse.json({"msg":"Profile Update SuccessFully"})
         }
         catch(e){
            return NextResponse.json({"msg":e.message})
         }
}