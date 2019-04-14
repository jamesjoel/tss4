var connect = require("../config/connect");

module.exports.find=function(where, cb){
	connect(function(err, client){
	var db = client.db("anil");
	db.collection("emp").find(where).toArray(cb);
		
	});
}

module.exports.insert=function(obj, cb){
	connect(function(err, client){
		var db = client.db("anil");
		db.collection("emp").insert(obj, cb);
	});
}

module.exports.edit=function(where, obj, cb){
	connect(function(err, client){
	var db = client.db("anil");
	db.collection("emp").updataMany(where, { $set : obj }, cb)
		
	});
}

module.exports.delete=function(where, cb){
	connect(function(err, client){
	var db = client.db("anil");
	db.collection("emp").remove(where, cb)
		
	});
}



