const mongoose = require('mongoose')

let tagSchema=mongoose.Schema({
    tag_id:String,
    tag_name:String
})

module.exports = tagSchema;