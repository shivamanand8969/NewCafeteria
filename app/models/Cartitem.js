import mongoose, { Schema } from "mongoose";
import User from "./User";

let Cartschema=new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
    prname:{type:String},
    desc:{type:String},
    imageurl:{type:String},
    quantity:{type:Number},
    prPrice:{type:Number},

},{timestamps:true})
export default mongoose.models.Cartitem || mongoose.model("Cartitem",Cartschema)