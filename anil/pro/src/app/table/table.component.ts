import { Component, OnInit } from '@angular/core';

import { GetService } from '../services/get.service';
import { obj } from '../models'

import { obj } from '../models';
import { GetService } from '../services/get.service'



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

	data : obj[];


 
  // info : obj[];
 
  newData : obj={
    fullname : null,
    city : null,
    contact :null
  };
  info= {} as [{ 
    fullname : null,
    city :null,
    contact : null
  }];
 
 // info = {} as obj[];



  constructor(private dulClass:GetService) { }
  ngOnInit() {

  	this.dulClass.getData().subscribe((info : obj[])=>{
  		this.data=info;
  	})
  }
  add(){
    this.dulClass.postData(this.newData).subscribe((data :any)=>{
      this.info.push(data);
    });

  }

}
