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
  	this.http.get("http://localhost:3000").subscribe((info : any)=>{
  		return info ;
  	});
  }

}
