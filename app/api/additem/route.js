import Connect from "@/app/db/Connect"
import Product from "@/app/models/Product";
import { NextResponse } from "next/server";

export let GET=async()=>{
    await Connect();
    try{
        let data=await Product.find({});
        return NextResponse.json({data});
    }
    catch(e){
        return NextResponse.json({"msg":e.messsage})
    }
}
export let POST=async (req)=>{
    await Connect();
   let data=await req.json();
   let newdata=new Product(data);
   try{
    await newdata.save();
    return NextResponse.json({newdata,"msg":"data inserted successfully"})
   }
   catch(e){
    return NextResponse.json({"msg":e.messsage})
   }
}