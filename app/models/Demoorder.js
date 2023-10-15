const { default: mongoose } = require("mongoose");
import  User from "./User"

let DemoSchema=new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
    username:{type:String},                                             
    email:{type:String},
    number:{type:String},
    district:{type:String},
    address:{type:String},
    pincode:{type:Number},
    prname:{type:String},
    prPrice:{type:Number},
    quantity:{type:Number},
    desc:{type:String},
    imageurl:{type:String}, 
    date:{type:String},
    isConfirm:{type:Boolean},
    isProcced:{type:Boolean},
    isShipped:{type:Boolean},
    isDelivery:{type:Boolean}
},{timestamps:true})
export default mongoose.models.Demoorder || mongoose.model("Demoorder",DemoSchema);