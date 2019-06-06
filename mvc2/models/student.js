var connect = require("../config/connect");

module.exports.find=function(cb){
	connect(function(err, client){
		var db = client.db("tss4");
		db.collection("student").find().toArray(cb);
	});
}



module.exports.insert=function(obj, cb){
	connect(function(err, client){
		var db = client.db("tss4");
		db.collection("student").insert(obj, cb);

	});	
}


