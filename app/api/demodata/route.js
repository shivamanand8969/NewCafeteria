import Connect from "@/app/db/Connect"
import Demoorder from "@/app/models/Demoorder";
import { NextResponse } from "next/server";

export let GET=async()=>{
    await Connect();
    try{
        let data=await Demoorder.find({})
        return NextResponse.json({data});
    }catch(e){
        throw new Error(e.meesage);
    }
}
export let POST=async (res)=>{
    await Connect();
    let data=await res.json();
    let newdata=new Demoorder(data);
    try {
        await newdata.save();
        return NextResponse.json({"msg":"Order Successfully",newdata})
    } catch (error) {
        return NextResponse.json({"msg":error.message})
    }
}