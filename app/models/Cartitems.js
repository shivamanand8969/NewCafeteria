import mongoose, { Schema } from "mongoose";
let Cartschema=new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"user"},
    name:{type:String},
    desc:{type:String},
    imageurl:{type:String},
    quantity:{type:Number},
    price:{type:Number},

},{timestamps:true})
export default mongoose.models.Cartitems || mongoose.model("Cartitems",Cartschema)