// const invoiceModel = require("../models/invoiceModel");
const User = require("../models/userModel")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

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
        // Hash the password before saving
        const saltRounds = 10;
        body.password = await bcrypt.hash(body.password, saltRounds);
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


const login = async(req,res)=>{
try{
    const {email , password} = req.body;
    const userData = await User.findOne({email});
    if(!userData){
        return res.status(404).json({
            message:"User not found!"
        })
    }
    // Compare hashed password
    const isMatch = await bcrypt.compare(password, userData.password);
    if(!isMatch){
        return res.status(401).json({
            message:"password is Incorrect"
        })
    }
      const token = jwt.sign({ userId: userData._id }, process.env.JWT_SECRET_KEY, { expiresIn: '312525d' });
      res.status(200).json({"Access Token":token})
}catch(err){
    console.log(err);
    res.status(401).json({
        message:"unauthorized"
    })
}
}












module.exports = {getAllUsers,getUser,createUser,updateUser,deleteUser,login}