import Connect from "@/app/db/Connect"
import Cartitems from "@/app/models/Cartitems";
import { NextResponse } from "next/server";

export let GET=async ()=>{
    await Connect();
    try{
        let data=await Cartitems.find({});
        return NextResponse.json({data})
    }
    catch(e){
        throw new Error(e)
    }
}
export let POST=async (req)=>{
    await Connect();
     let data=await req.json();
     let newdata=new Cartitems(data);
     try{
        newdata.save();
        return NextResponse.json({newdata,"msg":"data inserted successfully"})
     }
     catch(e){
        throw new Error(e);
     }
}