const mongoose = require('mongoose');

let productSchema=mongoose.Schema({
    product_id:String,
    product_name:String,
    cost:String,
    seller:String,
    discount:String,
    desc:String,
    stock:String,
    rating:String,
    orders:String,
    tag:String
})

module.exports = productSchema;