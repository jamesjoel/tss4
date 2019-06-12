import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http';
import { obj } from '../models'



@Injectable({
  providedIn: 'root'
})
export class GetService {
	data : obj[];

  constructor( private http : HttpClient) { }

  getData(){
  	return this.http.get("http://localhost:3000");
  }
  postData(data : obj){
    let url = "http://localhost:3000";
    // console.log(event);
    return this.http.post(url, data);
  }

}
