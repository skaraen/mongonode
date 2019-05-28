const mongoose = require('mongoose')

let subwayOrderSchema = mongoose.Schema({
    bread : String,
    patty : String,
    fillers : Array,
    sauces : Array,
    size : String,
    number : Number,
    responseText : String
})

module.exports = subwayOrderSchema;