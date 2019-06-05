import { Component, OnInit, Input} from '@angular/core';
// import { obj } from '../models/interface'
interface obj{
	name : string;
	age : number;
}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  
	@Input() tableData:obj;

  constructor() { 
  	//console.log("------------",this.tableData);
  }

  ngOnInit() {

  }
  ngAfterOnInit(){

    console.log("------------",this.tableData);
  }

}
