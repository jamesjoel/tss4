var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localost:27017";

module.exports = function(cb){
	MongoClient.connect(url, cb);
}