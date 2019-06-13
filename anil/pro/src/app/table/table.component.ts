import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { GetService } from '../services/get.service';
import { obj } from '../models'

=======
import { obj } from '../models';
import { GetService } from '../services/get.service'
>>>>>>> 23119738f59e1ab9da47c4fb219a470f4232f436


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
<<<<<<< HEAD
	data : obj[];

=======
 
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
>>>>>>> 23119738f59e1ab9da47c4fb219a470f4232f436

  constructor(private dulClass:GetService) { }
  ngOnInit() {
<<<<<<< HEAD
  	this.dulClass.getData().subscribe((info : obj[])=>{
  		this.data=info;
  	})

  	// this.data = this.dulClass.getData();
=======
   
  let info = this.dulClass.getData().subscribe((data : obj[])=>{
    this.info = data;
  })
>>>>>>> 23119738f59e1ab9da47c4fb219a470f4232f436
  }
  // add(){
  //   this.dulClass.postData(this.newData).subscribe((data :any)=>{
  //     this.info.push(data);
  //   });

  // }

}
