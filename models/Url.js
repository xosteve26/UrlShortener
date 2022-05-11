const mongoose = require('mongoose');

const UrlSchema = new mongoose.Schema({
    urlCode: String,
    longUrl: String,
    shortUrl: String,
    date: {type: String, default:Date.now},
},{
    timeseries:true
})


module.exports=mongoose.model('Url',UrlSchema);