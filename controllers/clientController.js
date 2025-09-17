// const invoiceModel = require("../models/invoiceModel");
const Client = require("../models/clientModel")

const getAllClients = async(req,res) =>{
  try{
    const clients = await Client.find();
    res.status(200).json({
        data:clients.length,
        clients
    })

  }catch(err){
    console.log(err)
     res.status(404).json({ message:"data Not found"})
  }
}

const getClient = async(req,res) =>{
    try{
        const id = req.params.id;
   const client = await Client.findById(id);
   res.status(200).json({
      data:client
   })
}catch(err){
    console.log(err);
    res.status(404).json({ message:"data Not found"})
}
}


const createClient = async(req,res) =>{
    // res.send("Hello World from the controller create invoices")
    try{
        const body = req.body;
        const createdClient = await Client.create(body);
        res.status(201).json({
            data:createdClient
        })

    }catch(err){
        console.log(err);
        res.status(500).json({
            message:"Internal Server error "
        })
    }

}


const updateClient = async(req,res) =>{
    // res.send("Hello World from the controller update invoices")
    try{
        const id = req.params.id;
        const body = req.body;
        const updatedBody = await Client.findByIdAndUpdate(id,body);
        res.status(200).json({
            data:updatedBody
        })
    }catch(err){
        console.log(err)
        res.status(500).json("Internal srever error ")
    }
}



const deleteClient = async(req,res) =>{
    // res.send("Hello World from the controller delete invoices")
    try{
        const id = req.params.id;
        const deletedData = await Client.findByIdAndDelete(id)
        res.status(200).json({
            data:"data deleted successfully ",
            deletedData
        })
    }catch(err){
        console.log(err);
        res.status(500).json("Internal srever error ")

    }
}


module.exports = {getAllClients,getClient,createClient,updateClient,deleteClient}


