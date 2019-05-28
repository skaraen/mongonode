const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const subwayOrderSchema = require('./schema/subwayOrderSchema')
const tempClassifier = require('./model')
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

const url = 'mongodb://localhost/subway';

mongoose.connect(url,{useNewUrlParser: true})
                    .then(res => console.log("Connected to DB"))
                    .catch(err => console.log(err));

let subwayOrderModel = mongoose.model('subway-order',subwayOrderSchema);

app.post('/order',function(req,res){
    console.log(req.body);
    let bread, patty, fillers,sauces,size,number;

    bread=req.body.queryResult.parameters.SubwayBreads;
    patty=req.body.queryResult.parameters.SubwayPatties;
    fillers=req.body.queryResult.parameters.SubwayFillers;
    sauces=req.body.queryResult.parameters.SubwaySauces;
    size=req.body.queryResult.parameters.SubwaySizes;
    number=req.body.queryResult.parameters.number;

    let fillerList=fillers.join(' ');
    let sauceList=sauces.join(' ');

    let responseText="Here's your order : "+number+" "+size+" "+bread+" "+patty+" subs loaded with "+fillerList+" and spiced up with "+sauceList;

    tempClassifier.trainOnline(responseText, number);
    console.log("Training hit");
    tempClassifier.classifyAndLog("non-veg chicken tikka onion one foot");

    let response = {
        bread : bread,
        patty : patty,
        fillers : fillers,
        sauces : sauces,
        size : size,
        number : number,
        responseText : responseText
    }

    subwayOrderModel.create(response,function(err,docs){
        if(err) throw err;
        console.log("Order placed!");
    })

    console.log(responseText);

    return res.json({
        "fulfillmentText" : responseText,
        "fulfillmentMessages" : [{text:{text:[responseText]}}],
        "source" : ""
    })
});

app.get('/find',function(req,res){
    let query=req.query.id;
    console.log(query);
    subwayOrderModel.findOne({id:query},function(err,docs){
        if(err) throw err;
        res.send(docs);
        console.log(docs);
    })
})

var server=app.listen(3000,function(){
    var host=server.address().address;
    var port=server.address().port;
    console.log("Example app listening at http://%s:%s", host, port);
});