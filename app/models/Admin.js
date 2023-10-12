import mongoose from "mongoose";
let AdminSchema=new mongoose.Schema({
    name:{type:String,required:true},
    password:{type:String,required:true}
},{timestamps:true})
export default mongoose.models.Admin || mongoose.model("Admin",AdminSchema);