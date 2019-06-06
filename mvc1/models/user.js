var connect = require("../config/connect");

module.exports=function(cb){
		connect(function(err, client){
		var db = client.db("tss4");
		db.collection("student").find().toArray(cb);
	});
}