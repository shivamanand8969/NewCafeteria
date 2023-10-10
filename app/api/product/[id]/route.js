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