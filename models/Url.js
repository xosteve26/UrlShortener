const mongoose = require('mongoose');

const UrlSchema = new mongoose.Schema({
    urlCode: String,
    longUrl: String,
    shortUrl: String,
    createdAt: { type: Date, default: Date.now },
    expireAt: { type: Date, default: undefined }
})

UrlSchema.index({ "expireAt": 1 }, { expireAfterSeconds: 0 });

module.exports=mongoose.model('Url',UrlSchema);