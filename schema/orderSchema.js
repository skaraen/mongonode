const mongoose = require('mongoose');
const cartProductSchema = require('./cartProductSchema');

let orderSchema=mongoose.Schema({
    order_id:String,
    transaction_id:String,
    user_id:String,
    products:[cartProductSchema],
    dispatch_destination:String,
    dispatch_date:String,
    dispatch_time:String,
    delivery_destination:String,
    delivery_date:String,
    delivery_time:String,
    amount:String,
    status:String
})

module.exports = orderSchema;