var data={
	name:"Anil",
	add:function(a){

		//recurision 
		console.log(a+ data.name);
		return a + "TAha";
	}
}
var pr=data.add("hello");
console.log(pr);