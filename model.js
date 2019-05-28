var limdu = require('limdu');
var mongoose = require('mongoose')
var subwayOrderSchema = require('./schema/subwayOrderSchema')

const url = 'mongodb://localhost/subway';

mongoose.connect(url,{useNewUrlParser: true})
                    .then(res => console.log("Instantiating model..."))
                    .catch(err => console.log(err));

let subwayOrderModel = mongoose.model('subway-order',subwayOrderSchema);

var TextClassifier = limdu.classifiers.multilabel.BinaryRelevance.bind(0, {
	binaryClassifierType: limdu.classifiers.Winnow.bind(0, {retrain_count: 10})
});

// Now define our feature extractor - a function that takes a sample and adds features to a given features set:
var WordExtractor = function(input, features) {
	input.split(" ").forEach(function(word) {
		features[word]=1;
	});
};

var tempClassifier = new limdu.classifiers.EnhancedClassifier({
	classifierType: TextClassifier,
	featureExtractor: WordExtractor
});

subwayOrderModel.find({},function(err,res){
    if(err) throw err;
    console.log(res);
    res.forEach(function(doc,index){
        tempClassifier.trainOnline(doc.responseText, doc.number);
        console.log("Training "+index+" over");
    })
})

// intentClassifier.classifyAndLog("I want an apple and a banana");

module.exports = tempClassifier;
