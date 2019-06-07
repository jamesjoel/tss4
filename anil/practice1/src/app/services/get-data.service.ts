import { Injectable } from '@angular/core';
import { arr } from '../models/interface'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

	data : arr[];

	getData(){
		let data = this.http.get("http://localhost:3000");
		return data;
	}


  constructor(private http : HttpClient) { }
}
