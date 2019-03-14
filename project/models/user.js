var connect = require("../config/connect");

module.exports.insert=function(obj,cb){
	connect(function(err, client){
		var db = client.db("tss4");
		db.collection("user").insert(obj, cb);
	});
}