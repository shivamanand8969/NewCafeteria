import Connect from "@/app/db/Connect"
import Cartitem from "@/app/models/Cartitem";
import { NextResponse } from "next/server";

export let GET=async (req,{params})=>{
    await Connect();
    let {id}=params;
    try{
        let data=await Cartitem.findById(id);
        return NextResponse.json({data})
    }
    catch(e){
        return NextResponse.json({"msg":e.message})
    }
}