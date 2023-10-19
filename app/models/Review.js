import mongoose from "mongoose";
import User from "./User";
let Reviewschema=new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
    comment:{type:String},
    reply:{type:String}
},{timestamps:true})
export default mongoose.models.Review || mongoose.model("Review",Reviewschema)