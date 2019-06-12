import { Component, OnInit } from '@angular/core';
import { obj } from '../models';
import { GetService } from '../services/get.service'


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
 
  // info : obj[];
 
  newData : obj={
    fullname : null,
    city : null,
    contact :null
  };
  info= {} as [{ 
    fullname :"ronik",
    city :"bombay",
    contact : 87455555
  }];
 
 // info = {} as obj[];

  constructor(private dulClass : GetService ) { }

  ngOnInit() {
   
  let info = this.dulClass.getData().subscribe((data : obj[])=>{
    this.info = data;
  })
  }
  // add(){
  //   this.dulClass.postData(this.newData).subscribe((data :any)=>{
  //     this.info.push(data);
  //   });

  // }

}
