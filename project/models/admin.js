var connect = require("../config/connect");


// { username : 'admin'}
// {}

 
module.exports.select = function(where, cb){
	connect(function(err, client){
		var db = client.db("tss4");
		db.collection("admin").find(where).toArray(cb);
	});
}