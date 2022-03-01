const mongoose = require("mongoose")
const { boolean } = require("webidl-conversions")

const UserSchema = new mongoose.Schema({

    
        username:{type:String, required:true,unique:true},
        email:{type:String, requrired:true, unique:true},
        password:{type:String, required: true},
        isAdmin: {
        type:Boolean,
        default:false,
        },
   
    //createdAt:Date.now()
},
{ timestamps:true },
);

module.exports = mongoose.model("User",UserSchema);