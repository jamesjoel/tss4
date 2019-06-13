import { Component, OnInit } from '@angular/core';
import { GetService } from '../services/get.service';
import { obj } from '../models'



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
	data : obj[];


  constructor(private dulClass:GetService) { }
  ngOnInit() {
  	this.dulClass.getData().subscribe((info : obj[])=>{
  		this.data=info;
  	})

  	// this.data = this.dulClass.getData();
  }

}
