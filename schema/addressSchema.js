const mongoose = require('mongoose');

let addressSchema=mongoose.Schema({
    door:String,
    building:String,
    street:String,
    locality:String,
    city:String,
    state:String,
    country:String
})

module.exports = addressSchema;