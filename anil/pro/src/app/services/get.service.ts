import { Injectable } from '@angular/core';
import {obj} from '../models'

import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GetService {

  data : obj[];
  getData(){
    this.data = this.http.get("http://localhost:3000")
  }
  constructor(private http : HttpClient) { }
}
