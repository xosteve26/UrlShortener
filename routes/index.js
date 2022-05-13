const express = require('express');
const router=express.Router();

const Url= require('../models/Url');
//@route GET /
//@desc Introduction
router.get('/',(req,res)=>{
    res.send('Welcome to Node Url Shortener API');
});
//@route GET /:code
//@desc Redirect to long/original url
router.get('/:code', async(req,res)=>{
    try{
        const url=await Url.findOne({urlCode:req.params.code});

        if(url){
            return res.redirect(url.longUrl);
        }else{
            return res.status(404).json('Url not found');
        }
    }catch (err){
        console.log(err)
        res.status(500).json('Server Error');
    }
})


module.exports=router;