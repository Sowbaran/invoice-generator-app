// const invoiceModel = require("../models/invoiceModel");
const Invoice = require("../models/invoiceModel")

const getAllInvoices = async(req,res) =>{
  try{
    const invoices = await Invoice.find();
    res.status(200).json({
        data:invoices.length,
        invoices
    })

  }catch(err){
    console.log(err)
     res.status(404).json({ message:"data Not found"})
  }
}

const getInvoice = async(req,res) =>{
    try{
        const id = req.params.id;
   const invoice = await Invoice.findById(id);
   res.status(200).json({
      data:invoice
   })
}catch(err){
    console.log(err);
    res.status(404).json({ message:"data Not found"})
}
}


const createInvoice = async(req,res) =>{
    // res.send("Hello World from the controller create invoices")
    try{
        const body = req.body;
        const createdInvoice = await Invoice.create(body);
        res.status(201).json({
            data:createdInvoice
        })

    }catch(err){
        console.log(err);
        res.status(500).json({
            message:"Internal Server error "
        })
    }

}


const updateInvoice = async(req,res) =>{
    // res.send("Hello World from the controller update invoices")
    try{
        const id = req.params.id;
        const body = req.body;
        const updatedBody = await Invoice.findByIdAndUpdate(id,body);
        res.status(200).json({
            data:updatedBody
        })
    }catch(err){
        console.log(err)
        res.status(500).json("Internal srever error ")
    }
}



const deleteInvoice = async(req,res) =>{
    // res.send("Hello World from the controller delete invoices")
    try{
        const id = req.params.id;
        const deletedData = await Invoice.findByIdAndDelete(id)
        res.status(200).json({
            data:"data deleted successfully ",
            deletedData
        })
    }catch(err){
        console.log(err);
        res.status(500).json("Internal srever error ")

    }
}


module.exports = {getAllInvoices,getInvoice,createInvoice,updateInvoice,deleteInvoice}


