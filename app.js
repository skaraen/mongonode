const mongoose=require('mongoose')
const userSchema=require('./schema/userSchema')
const productSchema=require('./schema/productSchema')
const cartSchema=require('./schema/cartSchema')
const wishlistSchema=require('./schema/wishlistSchema')
const transactionSchema=require('./schema/transactionSchema')
const orderSchema=require('./schema/orderSchema')
const reviewSchema=require('./schema/reviewSchema')

const url='mongodb://localhost/shoppingV2'
// const urlCloud='mongodb+srv://skaraen:skaraen@democluster-gjung.mongodb.net/test?retryWrites=true'

mongoose.connect(url,{useNewUrlParser: true})
                    .then(res => console.log("Connected to DB"))
                    .catch(err => console.log(err)); 
     
let userData=[{"user_id":"001","name":"Karaen","phno":"8667225496","address":{"door":"Door 1","building":"Building 1","street":"1st street","locality":"Locality one","city":"City one","state":"State one","country":"Country one"},"email":"skaraen@gmail.com","tags":[{"tag_id":"T01","tag_name":"computers"},{"tag_id":"T03","tag_name":"tech"}]},{"user_id":"002","name":"Diksha","phno":"7008087140","address":{"door":"Door 2","building":"Building 2","street":"2nd street","locality":"Locality two","city":"City two","state":"State two","country":"Country two"},"email":"diksha@gmail.com","tags":[{"tag_id":"T05","tag_name":"clothes"},{"tag_id":"T04","tag_name":"phones"}]},{"user_id":"003","name":"Senthil","phno":"9442619040","address":{"door":"Door 3","building":"Building 3","street":"3rd street","locality":"Locality three","city":"City three","state":"State three","country":"Country three"},"email":"tsenthil70@gmail.com","tags":[{"tag_id":"T03","tag_name":"tech"},{"tag_id":"T08","tag_name":"utility"}]},{"user_id":"004","name":"Mohana","phno":"9486425787","address":{"door":"Door 1","building":"Building 4","street":"4th street","locality":"Locality four","city":"City four","state":"State four","country":"Country four"},"email":"monaktv@gmail.com","tags":[{"tag_id":"T02","tag_name":"grocery"},{"tag_id":"T07","tag_name":"decor"}]},{"user_id":"005","name":"Sarath","phno":"9834056790","address":{"door":"Door 1","building":"Building 5","street":"5th street","locality":"Locality five","city":"City five","state":"State five","country":"Country five"},"email":"sarath@gmail.com","tags":[{"tag_id":"T04","tag_name":"phones"},{"tag_id":"T06","tag_name":"sports"}]}];                    
let productData=[{"product_id":"P001","product_name":"Macbook Air","cost":"65000","seller":"Apple","discount":"3.0%","desc":"Light as air, Fast as the wind","stock":"200","avg_rating":"4.6","orders":"150","tag":"computers"},{"product_id":"P002","product_name":"Bournvita","cost":"95","seller":"Cadbury","discount":"5.0%","desc":"Tasty tasty","stock":"3000","avg_rating":"4.3","orders":"1000","tag":"grocery"},{"product_id":"P003","product_name":"Aukey bluetooth earphones","cost":"5000","seller":"Aukey Ltd","discount":"0.0%","desc":"Real Sound","stock":"300","avg_rating":"4.6","orders":"50","tag":"tech"},{"product_id":"P004","product_name":"Lenovo K7","cost":"20000","seller":"Lenovo","discount":"2.0%","desc":"Fast as lightning","stock":"200","avg_rating":"4.7","orders":"300","tag":"phones"},{"product_id":"P005","product_name":"Yellow croptop","cost":"3000","seller":"Fashionistas","discount":"2.0%","desc":"Quality assured","stock":"100","avg_rating":"4.8","orders":"200","tag":"clothes"},{"product_id":"P006","product_name":"Nike Football","cost":"2000","seller":"Nike sports","discount":"0.0%","desc":"High quality material","stock":"50","avg_rating":"4.5","orders":"450","tag":"sports"},{"product_id":"P007","product_name":"Modern Art Wall Hangings","cost":"5000","seller":"Ajanta art works","discount":"2.0%","desc":"Design redesigned","stock":"20","avg_rating":"4.8","orders":"40","tag":"decor"},{"product_id":"P008","product_name":"Sticky Notes","cost":"50","seller":"Faber Castel","discount":"0.0%","desc":"Sticky notes taken to another level","stock":"300","avg_rating":"4.4","orders":"200","tag":"utility"}];
let orderData=[{"order_id":"O001","transaction_id":"T001","user_id":"001","products":[{"product_id":"P001","quantity":"1"}],"dispatch_destination":"Bangalore, India","dispatch_date":"31\/06\/2018","dispatch_time":"14:00","delivery_destination":"Madurai, India","delivery_date":"02\/07\/2018","delivery_time":"10:00","amount":"65000","status":"Delivered"},{"order_id":"O002","transaction_id":"T002","user_id":"001","products":[{"product_id":"P003","quantity":"1"}],"dispatch_destination":"Bangalore, India","dispatch_date":"10\/10\/2018","dispatch_time":"20:00","delivery_destination":"Chennai, India","delivery_date":"13\/10\/2018","delivery_time":"14:00","amount":"5000","status":"delivered"},{"order_id":"O003","transaction_id":"T003","user_id":"002","products":[{"product_id":"P004","quantity":"1"},{"product_id":"P005","quantity":"1"}],"dispatch_destination":"Mumbai, India","dispatch_date":"22\/10\/2018","dispatch_time":"10:00","delivery_destination":"Jharsuguda, India","delivery_date":"25\/10\/2018","delivery_time":"16:00","amount":"28000","status":"delivered"},{"order_id":"O004","transaction_id":"T004","user_id":"003","products":[{"product_id":"P003","quantity":"1"},{"product_id":"P008","quantity":"3"}],"dispatch_destination":"Bangalore, India","dispatch_date":"28\/10\/2018","dispatch_time":"10:00","delivery_destination":"Chennai, India","delivery_date":"31\/10\/2018","delivery_time":"15:00","amount":"5150","status":"delivered"},{"order_id":"O005","transaction_id":"T005","user_id":"004","products":[{"product_id":"P005","quantity":"1"},{"product_id":"P007","quantity":"1"}],"dispatch_destination":"Bangalore, India","dispatch_date":"10\/11\/2018","dispatch_time":"12:00","delivery_destination":"Madurai, India","delivery_date":"15\/11\/2018","delivery_time":"17:00","amount":"8000","status":"delivered"},{"order_id":"O006","transaction_id":"T006","user_id":"005","products":[{"product_id":"P004","quantity":"1"}],"dispatch_destination":"Bangalore, India","dispatch_date":"02\/12\/2018","dispatch_time":"14:00","delivery_destination":"Neyveli, India","delivery_date":"10\/12\/2018","delivery_time":"15:00","amount":"20000","status":"delivered"},{"order_id":"O007","transaction_id":"T007","user_id":"005","products":[{"product_id":"P006","quantity":"4"}],"dispatch_destination":"Hyderabad, India","dispatch_date":"20\/12\/2018","dispatch_time":"06:00","delivery_destination":"Trichy, India","delivery_date":"26\/12\/2018","delivery_time":"11:00","amount":"8000","status":"delivered"}];
let transactionData=[{"transaction_id":"T001","user_id":"001","mode":"Card","date":"30\/06\/2018","time":"19:00"},{"transaction_id":"T002","user_id":"001","mode":"Cash on delivery","date":"13\/10\/2018","time":"14:00"},{"transaction_id":"T003","user_id":"002","mode":"Card","date":"20\/10\/2018","time":"14:00"},{"transaction_id":"T004","user_id":"003","mode":"Cash on delivery","date":"31\/10\/2018","time":"15:00"},{"transaction_id":"T005","user_id":"004","mode":"Card","date":"08\/11\/2018","time":"12:00"},{"transaction_id":"T006","user_id":"005","mode":"Card","date":"01\/12\/2018","time":"20:00"},{"transaction_id":"T007","user_id":"005","mode":"Cash","date":"26\/12\/2018","time":"11:00"}];
let cartData=[{"user_id":"001","products":[{"product_id":"P006","quantity":"1"}]},{"user_id":"002","products":[{"product_id":"P003","quantity":"1"}]},{"user_id":"003","products":[{"product_id":"P001","quantity":"1"}]},{"user_id":"004","products":[{"product_id":"P008","quantity":"3"}]},{"user_id":"005","products":[{"product_id":"P001","quantity":"1"},{"product_id":"P002","quantity":"2"}]}];
let wishlistData=[{"user_id":"001","products":[{"product_id":"P004","date_added":"12\/05\/2018"}]},{"user_id":"002","products":[{"product_id":"P001","date_added":"16\/07\/2018"}]},{"user_id":"003","products":[{"product_id":"P007","date_added":"11\/08\/2018"}]},{"user_id":"004","products":[{"product_id":"P003","date_added":"09\/10\/2018"}]},{"user_id":"005","products":[{"product_id":"P003","date_added":"12\/11\/2018"}]}];
let reviewData=[{"user_id":"001","product_id":"P001","stars":"5.0","content":"Very good performance. Must try","date":"24\/07\/2018"},{"user_id":"001","product_id":"P003","stars":"4.0","content":"Good iniatially, lost its bass later","date":"10\/10\/2018"},{"user_id":"002","product_id":"P004","stars":"4.5","content":"Best phone out there","date":"25\/10\/2018"},{"user_id":"003","product_id":"P008","stars":"4.0","content":"Handy when needed","date":"08\/11\/2018"},{"user_id":"005","product_id":"P006","stars":"5.0","content":"Long lasting...Thoroughly enjoyed them","date":"24\/02\/2019"}]

// let cartProductSchema=mongoose.Schema({
//     product_id:String,
//     quantity:String
// })

// let productSchema=mongoose.Schema({
//     product_id:String,
//     product_name:String,
//     cost:String,
//     seller:String,
//     discount:String,
//     desc:String,
//     stock:String,
//     rating:String,
//     orders:String,
//     tag:String
// })

// let transactionSchema=mongoose.Schema({
//     transaction_id:String,
//     user_id:String,
//     mode:String,
//     date:String,
//     time:String
// })

// let orderSchema=mongoose.Schema({
//     order_id:String,
//     transaction_id:String,
//     user_id:String,
//     products:[cartProductSchema],
//     dispatch_destination:String,
//     dispatch_date:String,
//     dispatch_time:String,
//     delivery_destination:String,
//     delivery_date:String,
//     delivery_time:String,
//     amount:String,
//     status:String
// })

// let cartSchema=mongoose.Schema({
//     user_id:String,
//     products:[cartProductSchema]
// })

// let wishlistSchema=mongoose.Schema({
//     user_id:String,
//     products:{
//         product_id:String,
//         date_added:String
//     }
// })

// let reviewSchema=mongoose.Schema({
//     user_id:String,
//     product_id:String,
//     stars:String,
//     content:String,
//     date:String
// })

// let addressSchema=mongoose.Schema({
//     door:String,
//     building:String,
//     street:String,
//     locality:String,
//     city:String,
//     state:String,
//     country:String
// })

// let tagSchema=mongoose.Schema({
//     tag_id:String,
//     tag_name:String
// })

// let userSchema=mongoose.Schema({
//     user_id:String,
//     name:String,
//     phno:String,
//     address:addressSchema,
//     email_id:String,
//     tags:[tagSchema]
// })

const userModel = mongoose.model('user',userSchema);
const productModel = mongoose.model('product',productSchema);
const transactionModel = mongoose.model('transaction',transactionSchema);
const orderModel = mongoose.model('order',orderSchema);
const cartModel = mongoose.model('cart',cartSchema);
const wishlistModel = mongoose.model('wishlist',wishlistSchema);
const reviewModel = mongoose.model('review',reviewSchema);

userModel.insertMany(userData,function(err,docs){
    if(err) throw err;
    console.log("Users added");
})

productModel.insertMany(productData,function(err,docs){
    if(err) throw err;
    console.log("Products added");
})

transactionModel.insertMany(transactionData,function(err,docs){
    if(err) throw err;
    console.log("transactions added");
})

orderModel.insertMany(orderData,function(err,docs){
    if(err) throw err;
    console.log("Orders added");
})

cartModel.insertMany(cartData,function(err,docs){
    if(err) throw err;
    console.log("carts added");
})

wishlistModel.insertMany(wishlistData,function(err,docs){
    if(err) throw err;
    console.log("Wishlist added");
})

reviewModel.insertMany(reviewData,function(err,docs){
    if(err) throw err;
    console.log("Reviews added");
})

// orderData.forEach(function(data,index){
//     let order=new orderModel();
//     order=data;
//     data.products.forEach(function(product,index){
//         order.products.push(product);
//     })
//     order.save(function(err){
//         if(err) throw err;
//         console.log("Order placed: "+index);
//     });
// })

// cartData.forEach(function(data,index){
//     let cart=new cartModel();
//     cart=data;
//     data.products.forEach(function(product,index){
//         cart.products.push(product);
//     })
//     cart.save(function(err){
//         if(err) throw err;
//         console.log("Cart entered: "+index);
//     });
// })