const mongoose = require("mongoose");
require('dotenv').config();

const db = async() =>{
    try{
    const mongo = await mongoose.connect(process.env.MONGODB);
    console.log("DB connected successfully")
    return mongo;

    }
    catch(err){
        console.log(err)
        process.exit(0)
    }
}

module.exports = db;