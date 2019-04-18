var connect = require("../config/connect");

module.exports.find=function(where, cb){
	connect(function(err, client){
		var db = client.db("pro");
		db.collection("users").find(where).toArray(cb);
	});
}

module.exports.insert=function(obj, cb){
	connect(function(err, client){
		var db = client.db("pro");
		db.collection("users").insert(obj, cb);
	});
}

