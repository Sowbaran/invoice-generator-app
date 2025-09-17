const mongoose = require("mongoose");

const userSchema =  new mongoose.Schema({
    username:{
        type:String,
        required:[true,"username must be entered"]
    },
     email:{
        type:String,
        required:[true,"email must be entered"]
    },
    contact:{type:Number,
       required:[true,"Contact number must be enter"]},
    password:{
        type:String,
        required:[true,"password must be enter"]
    },
    passwordConfirm:{
        type:String,
          required:[true,"password confirm must be enter"]
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model("User",userSchema)