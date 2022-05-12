const mongoose = require('mongoose');
const config = require('config');
const dotenv = require('dotenv')

const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true,useUnifiedTopology:true});
        console.log("MongoDB Connected...");
    }
    catch (err) {
        console.log(err.message);
        process.exit(1)
    }
}

module.exports=connectDB;