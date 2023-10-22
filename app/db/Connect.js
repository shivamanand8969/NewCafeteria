import mongoose from "mongoose"
import { NextResponse } from "next/server"

     async function Connect(){
      try{
      await mongoose.connect(process.env.connectionStr)
      }
      catch(e){
        return NextResponse.json({"msg":e.message})
      }
}

export default Connect