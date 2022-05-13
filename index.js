const express = require('express');
require('dotenv').config()

const app=express();
const connectDB=require('./config/db');

connectDB();
app.use(express.json({extended: false}));

const PORT=process.env.PORT || 5000;


 //Define Routes
app.use('/',require('./routes/index'));
app.use('/api/url',require('./routes/url'));

//Start Server
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})