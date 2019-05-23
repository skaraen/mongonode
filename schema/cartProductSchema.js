const mongoose = require('mongoose');

let cartProductSchema=mongoose.Schema({
    product_id:String,
    quantity:String
})

module.exports = cartProductSchema;

