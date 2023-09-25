import mongoose from "mongoose";
let ProductSchema=new mongoose.Schema({
    prname:{type:String,required:true},
    prPrice:{type:Number,required:true},
    desc:{type:String,required:true},
    imageurl:{type:String,required:true},
    discount:{type:Number},

},{timestamps:true})
export default mongoose.models.Product || mongoose.model("Product",ProductSchema)