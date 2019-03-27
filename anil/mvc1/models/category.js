var connect = require("../config/connect");

module.exports.find=function(where, cb){
	connect(function(err, client){
		var db= client.db("anil");
		db.collection("category").find(where).toArray(cb);

	});
}
