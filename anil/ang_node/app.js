var express = require("express");
var app = express();
<<<<<<< HEAD
// var MongoClient = require("mongodb").MongoClient;
// var url = "mongodb+srv://anil:Anilsgs@26@cluster0-qcioq.gcp.mongodb.net/test?retryWrites=true&w=majority";
=======
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";

>>>>>>> 23119738f59e1ab9da47c4fb219a470f4232f436

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/", function(req, res){
<<<<<<< HEAD
	const mongo = require('mongodb').MongoClient
function doConnect() {
 	var url = 'mongodb+srv://anil:Anilsgs@26@cluster0-qcioq.gcp.mongodb.net/test?retryWrites=true&w=majority'
	mongo.connect(url, (err, db) => {
		if(err) { 
			throw err
		} else {
			console.log('Successfully connected to MongoDB')
		}
	})
}
doConnect()
	// MongoClient.connect(url, function(err, client){
	// 	var db = client.db("anil");
	// 	db.collection("user").find({}, function(err, result){
	// 		console.log(result);
	// 		res.send(result);
	// 	});
	// });
});

app.post("/", function(req, res){
	MongoClient.connect(url, function(err, client){
		var db = client.db("anil");
		db.collection("user").insert(req.body, function(err, result){
			console.log(result);
			res.send(result);
		});
	});
});

=======
  MongoClient.connect(url, function(err, client){
    client.db("anil").collection("user").find().toArray(function(err, result){
      console.log(result);
      res.send(result);
    });
  })
})

app.post("/", function(req, res){
  MongoClient.connect(url, function(err, client){
    client.db("anil").collection("user").insert(req.body, function(err, result){
      console.log(result);
      res.send(result);
    });
  })
})
>>>>>>> 23119738f59e1ab9da47c4fb219a470f4232f436

app.listen(3000, function(){
	console.log("Running");
});