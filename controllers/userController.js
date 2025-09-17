// const invoiceModel = require("../models/invoiceModel");
const User = require("../models/userModel")

const getAllUsers = async(req,res) =>{
  try{
    const users = await User.find();
    res.status(200).json({
        data:users.length,
        users
    })

  }catch(err){
    console.log(err)
     res.status(404).json({ message:"data Not found"})
  }
}

const getUser = async(req,res) =>{
    try{
        const id = req.params.id;
   const user = await User.findById(id);
   res.status(200).json({
      data:user
   })
}catch(err){
    console.log(err);
    res.status(404).json({ message:"data Not found"})
}
}


const createUser = async(req,res) =>{
    // res.send("Hello World from the controller create invoices")
    try{
        const body = req.body;
        const createdUser = await User.create(body);
        res.status(201).json({
            data:createdUser
        })

    }catch(err){
        console.log(err);
        res.status(500).json({
            message:"Internal Server error "
        })
    }

}


const updateUser = async(req,res) =>{
    // res.send("Hello World from the controller update invoices")
    try{
        const id = req.params.id;
        const body = req.body;
        const updatedBody = await User.findByIdAndUpdate(id,body);
        res.status(200).json({
            data:updatedBody
        })
    }catch(err){
        console.log(err)
        res.status(500).json("Internal srever error ")
    }
}



const deleteUser = async(req,res) =>{
    // res.send("Hello World from the controller delete invoices")
    try{
        const id = req.params.id;
        const deletedData = await User.findByIdAndDelete(id)
        res.status(200).json({
            data:"data deleted successfully ",
            deletedData
        })
    }catch(err){
        console.log(err);
        res.status(500).json("Internal srever error ")

    }
}


module.exports = {getAllUsers,getUser,createUser,updateUser,deleteUser}


