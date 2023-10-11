import Connect from "@/app/db/Connect";
import User from "@/app/models/User";
import { NextResponse } from "next/server";

const { getDataFromToken } = require("@/app/helper/getDataFromToken");

export let GET=async (req)=>{
    await Connect();
    try{
        let id=await getDataFromToken(req);
        let data=await User.findOne({_id:id});
        return NextResponse.json({data});
    }
    catch(e){
        return NextResponse.json({"msg":e.message});
    }
}