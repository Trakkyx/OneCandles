const mongoose = require("mongoose")


const ProductSchema = new mongoose.Schema({

    
        title:{type:String, required:true,unique:true},
        desc:{type:String, requrired:true},
        img:{type:String, required: true},
        categories:{type:Array},
        size:{type: Array},
        color:{type:Array},
        price:{type:Number, required: true},
        inStock:{type:Boolean, default: true}
       
   
    //createdAt:Date.now()
},
{ timestamps:true },
);

module.exports = mongoose.model("Product",ProductSchema);