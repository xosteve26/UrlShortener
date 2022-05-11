const express = require('express');
const router = express.Router();
const validUrl=require('valid-url');
const shortid=require('shortid');
const config=require('config');

const Url=require('../models/Url');

//@route POST /api/url/shrink
//@desc Shrink a URL
router.post('/shrink',async (req,res)=>{
    const { longUrl } = req.body
    const baseUrl = config.get('baseUrl');

    if(!validUrl.isUri(baseUrl)){
        return res.status(401).json('Invalid Base Url')
    }

    //Create a url code
    const urlCode = shortid.generate();

    //Check long url
    if(validUrl.isUri(longUrl)){
        try{
            let url = await Url.findOne({ longUrl: longUrl });
            if (url) {
                res.json(url);
            }
            else {
                const shortUrl = baseUrl + '/' + urlCode;
                const urlDocument = new Url({
                    longUrl,
                    shortUrl,
                    urlCode,
                    date: new Date()
                });

                await urlDocument.save()

                res.status(200).json(urlDocument);
            }

        }
        catch(err){
            console.error(err.message);
            return res.status(500).json('Server Error');
        }
         
    }else{
        res.status(401).json('Invalid Long Url');
    }
});

module.exports = router;