var con = require("../config/connect");

module.exports.find=function(where, cb){
	con(function(err, client){
		var db = client.db("tss4");
		db.collection("employee").find(where).toArray(cb);
	});
}


module.exports.insert=function(obj, cb){
	con(function(err, client){
		var db = client.db("tss4");
		db.collection("employee").insert(obj, cb);
	});
}

module.exports.update=function(where, obj, cb){
	con(function(err, client){
		var db = client.db("tss4");
		db.collection("employee").updateMany(where, { $set : obj}, cb);
	});
}
module.exports.delete=function(where, cb){
	con(function(err, client){
		var db = client.db("tss4");
		db.collection("employee").remove(where, cb);
	});
}