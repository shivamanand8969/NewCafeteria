import Connect from "@/app/db/Connect"
import Review from "@/app/models/Review";
import { NextResponse } from "next/server";

export let GET=async()=>{
    await Connect();
    try {
        let data=await Review.find({}).populate('userId');
        return NextResponse.json({data});
    } catch (e) {
        return NextResponse.json({"msg":e.message})
    }
}
export let POST=async (req)=>{
    await Connect();
    let data= await req.json();
    let newdata=new Review(data);
    try{
        await newdata.save();
        return NextResponse.json({"msg":"Thanyou for Review"})
    }
    catch(e){
        return NextResponse.json({"msg":e.message})
    }
}