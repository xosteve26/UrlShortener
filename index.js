const express = require('express');

const session = require('express-session');
const { v4: uuidv4 } = require('uuid');
const redis = require('redis');
let RedisStore = require("connect-redis")(session)

require('dotenv').config()
const app=express();
const connectDB=require('./config/db');
connectDB();


app.use(express.json({extended: false}));


const { createClient } = require("redis")

let redisClient = createClient({ legacyMode: true })
redisClient.connect().catch(console.error)

//Configure session middleware
app.use(
    session({
        store: new RedisStore({ client: redisClient }),
        saveUninitialized: false,
        secret: "keyboard cat",
        resave: false,
    })
)

const PORT=process.env.PORT || 5000;


 //Define Routes
app.use('/',require('./routes/index'));
app.use('/api/url',require('./routes/url'));

//Start Server
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})