const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  userId:{type:String,required:[true,"User id must be entered!"]},
  email: { type: String },
  phoneNumber: { type: String },
  address: { type: String },
  companyName: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Client', clientSchema);
