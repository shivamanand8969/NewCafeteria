import Connect from "@/app/db/Connect"
import Admin from "@/app/models/Admin";
import { NextResponse } from "next/server";

export let GET=async ()=>{
    await Connect();
    try {
        let data=await Admin.find({});
        return NextResponse.json({data});
    } catch (e) {
        return NextResponse.json({"msg":e.message});
    }
}
export let POST=async (req)=>{
    await Connect();
    let data=await req.json();
    let {name,password}=data;
    let checkname=await Admin.findOne({name});
    let checkpassword=await Admin.findOne({password});
    if(!checkname){
        return NextResponse.json("Invalid Username");
    }
    if(!checkpassword){
        return NextResponse.json("Invalid Password");
    }
    return NextResponse.json("ok")

   
}