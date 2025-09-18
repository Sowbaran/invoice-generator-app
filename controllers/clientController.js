// const invoiceModel = require("../models/invoiceModel");
const Client = require("../models/clientModel")

const getAllClients = async(req,res) =>{
  try{
    // Filter clients by userId from authenticated user
    const clients = await Client.find({ userId: req.user.id });
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
   if (!client || client.userId !== req.user.id) {
       return res.status(404).json({ message: "Client not found or access denied" });
   }
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
        // Attach userId from authenticated user to client data
        body.userId = req.user.id;
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
        // Ensure only the owner can update
        const updatedBody = await Client.findOneAndUpdate({ _id: id, userId: req.user.id }, body, { new: true });
        if (!updatedBody) {
            return res.status(404).json({ message: "Client not found or access denied" });
        }
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
        // Ensure only the owner can delete
        const deletedData = await Client.findOneAndDelete({ _id: id, userId: req.user.id });
        if (!deletedData) {
            return res.status(404).json({ message: "Client not found or access denied" });
        }
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


