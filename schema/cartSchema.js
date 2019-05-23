const mongoose = require('mongoose');
const cartProductSchema = require('./cartProductSchema');

let cartSchema=mongoose.Schema({
    user_id:String,
    products:[cartProductSchema]
})

module.exports = cartSchema;