const mongoose = require("mongoose");

const InvoiceSchema = new mongoose.Schema({
  billNumber: { type: String, required: true, unique: true },
  description: { type: String, default: '' },
  dueDate: { type: String, required: true },
  amount: { type: Number, required: true },
  status: { type: String, enum: ['Pending', 'Paid', 'Overdue'], default: 'Pending' },
  clientId: { type: String, ref: 'Client', required: [true,"Client id must be entered"]},
  userId: { type: String, ref: 'User', required: [true,"User id must be entered"] },
  items: [
    {
      description: { type: String, required: true },
      quantity: { type: Number, required: true },
      unitPrice: { type: Number, required: true },
      total: { type: Number, required: true },
    }
  ],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Invoice', InvoiceSchema);
