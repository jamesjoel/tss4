var con = require("../config/connect");

module.exports.select = function(cb){
	con.connect(function(err){
		con.query("SELECT * FROM employee", cb);
	});
}

module.exports.select_by_id = function(id, cb){
	con.connect(function(err){
		con.query("SELECT * FROM employee WHERE id="+id, cb);
	});
}

module.exports.update=function(obj, cb){
	con.connect(function(err){
		var id = obj.eid;

		var a = obj.name;
		var b = obj.salary;
		var c = obj.city;
		var d = obj.gender;

		con.query("UPDATE employee SET name = '"+a+"', salary = '"+b+"', city = '"+c+"', gender='"+d+"' WHERE id="+id, cb);
	});

}





module.exports.insert=function(obj, cb){
	con.connect(function(err){
		var a = obj.name;
		var b = obj.salary;
		var c = obj.city;
		var d = obj.gender;

		// console.log("INSERT INTO employee (name, salary, gender, city) VALUES ('"+a+"', '"+b+"', '"+c+"', '"+d+"')");

		con.query("INSERT INTO employee (name, salary, gender, city) VALUES ('"+a+"', '"+b+"', '"+d+"', '"+c+"')", cb)
	});
}
module.exports.delete=function(where, cb){
	con.connect(function(err){
		var a = where.eid;
		console.log("DELETE FROM employee WHERE id="+a);
		con.query("DELETE FROM employee WHERE id="+a, cb)
	});
}