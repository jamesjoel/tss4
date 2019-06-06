import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  sname = "Anil";
  title = 'practice';
  index=0;
  cityname=[
  { city : "Dewas"},
  { city : "indore"},
  { city : "Ujjain"},
  { city : "Mumbai"},
  { city : "Bhopal"}];


  data(){
    this.cityname[this.index].city=this.sname;
    
  }

  edit(y , i){
    // this.cityname[i].city
    this.index = i;
    this.sname = y.city;
  }


  

  constructor( private routes : Router ) { }

  ngOnInit() {
  }

}
