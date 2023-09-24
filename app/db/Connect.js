import mongoose from "mongoose"

const Connect =async () => {
      try{
        mongoose.connect("mongodb://localhost:27017/NewCafeteria")
      }
      catch(e){
        throw new Error(e);
      }
}

export default Connect