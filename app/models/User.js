import mongoose from 'mongoose'
let Userdata=new mongoose.Schema({
    username:{type:String},                                             
    email:{type:String},
    password:{type:String},
    number:{type:String},
    district:{type:String},
    address:{type:String},
    pincode:{type:Number},
    profileimage:{type:String}
},{timestamps:true})
export default mongoose.models.User || mongoose.model("User",Userdata);