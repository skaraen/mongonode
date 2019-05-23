const mongoose = require('mongoose')

let reviewSchema=mongoose.Schema({
    user_id:String,
    product_id:String,
    stars:String,
    content:String,
    date:String
})

module.exports = reviewSchema;