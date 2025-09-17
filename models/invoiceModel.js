const mongoose = require("mongoose");

const invoiceSchema =  new mongoose.Schema({
    bill:{
        type:Number,
        required:[true,"the bill amount must entered"]
    },
    dueDate:{
        type:String,
        required:[true,"the due date must be entered"]
    },
    status:{type:String,
        enum:["Pending","Paid"], default:"Pending"},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model("Invoice",invoiceSchema)