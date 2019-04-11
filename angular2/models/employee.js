var con = require("../config/connect");

module.exports.find=function(where, cb){
	con(function(err, client){
		var db = client.db("tss4");
		db.collection("employee").find(where).toArray(cb);
	});
}