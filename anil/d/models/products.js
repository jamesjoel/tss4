var connect = require("../config/connect");

module.exports.find=function(where, cb){
	connect(function(err, client){
	var db = client.db("anil");
	db.collection("products").find(where).toArray(cb);

});
}