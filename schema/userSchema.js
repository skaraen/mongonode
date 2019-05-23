const mongoose = require('mongoose');
const addressSchema = require('./addressSchema')
const tagSchema = require('./tagSchema')

let userSchema=mongoose.Schema({
    user_id:String,
    name:String,
    phno:String,
    address:addressSchema,
    email_id:String,
    tags:[tagSchema]
})

module.exports = userSchema;