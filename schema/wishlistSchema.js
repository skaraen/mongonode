const mongoose = require('mongoose');

let wishlistSchema=mongoose.Schema({
    user_id:String,
    products:[{
        product_id:String,
        date_added:String
    }]
})

module.exports = wishlistSchema;