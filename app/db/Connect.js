import mongoose from "mongoose"

let Connect =async () => {
      try{
      await mongoose.connect(process.env.connectionStr)
      }
      catch(e){
        throw new Error(e);
      }
}

export default Connect