var connect = require("../config/connect");

module.exports.find=function(where, cb){
	connect(function(err, client){
		if(err){
			console.log("Connection Error");
		}
		else{
	var db = client.db("anil");
	db.collection("category").find(where).toArray(cb);
		}
	});
}
