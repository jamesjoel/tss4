import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http';
import { obj } from '../models'



@Injectable({
  providedIn: 'root'
})
export class GetService {
	// data : obj[];
	// data = [{
	// 	name : "anil",
	// 	age : 20,
	// 	city : "mumbai"
	// },
	// {
	// 	name : "anil",
	// 	age : 20,
	// 	city : "mumbai"
	// }];

  constructor( private http : HttpClient) { }

  getData(){
  	return this.http.get("http://localhost:3000");
<<<<<<< HEAD
  	// return this.data;
  
=======
  }
  postData(data : obj){
    let url = "http://localhost:3000";
    // console.log(event);
    return this.http.post(url, data);
>>>>>>> 23119738f59e1ab9da47c4fb219a470f4232f436
  }

}
