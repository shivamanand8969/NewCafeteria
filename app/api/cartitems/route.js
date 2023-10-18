import Connect from "@/app/db/Connect"
import { getDataFromToken } from "@/app/helper/getDataFromToken";
import Cartitem from "@/app/models/Cartitem";
import { NextResponse } from "next/server";

export let GET=async (req)=>{
    await Connect();
    // let id= getDataFromToken(req);
    // try{
    //     let data=await Cartitem.find({userId:id})
    //     return NextResponse.json({"msg":id, data})
    // }
    // catch(e){
    //     return NextResponse.json({"msg":e.message});
    // }
    let data=await Cartitem.find({});
    return NextResponse.json({data});
}
export let POST=async (req)=>{
    await Connect();
     let data=await req.json();
     let newdata=new Cartitem(data);
     try{
        newdata.save();
        return NextResponse.json({newdata,"msg":"Order Added into Cart successfully"})
     }
     catch(e){
        throw new Error(e);
     }
}