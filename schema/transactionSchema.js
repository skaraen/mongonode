const mongoose = require('mongoose');

let transactionSchema=mongoose.Schema({
    transaction_id:String,
    user_id:String,
    mode:String,
    date:String,
    time:String
})

module.exports = transactionSchema;