import { Component, OnInit, Input} from '@angular/core';
import { arr } from '../models/interface'
// interface arr{
// 	name : string;
// 	age : number;
// }
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  
	@Input() tableData = {} as arr;

  constructor() { 
  	console.log("------------", this.tableData);
  }

  ngOnInit() {

  }
  ngAfterOnInit(){

    // console.log("------------",this.tableData);
  }

}
