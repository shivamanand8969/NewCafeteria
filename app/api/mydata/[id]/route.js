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