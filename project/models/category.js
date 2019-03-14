var connect = require("../config/connect");

module.exports.find=function(cb){
	connect(function(err, client){
		var db = client.db("tss4");
		db.collection("category").find().toArray(cb);
	});
}