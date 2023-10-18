import { NextResponse } from "next/server"

export let GET=async ()=>{
     try{
        let response=NextResponse.json({"msg":"Logout Suceessfull"});
        response.cookies.set("usercookies","",{httpOnly:true,expires:new Date(0)})
        return response;
     }
     catch(e){
        return NextResponse.json({"msg":e.message})
     }
}