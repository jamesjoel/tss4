import { Component, OnInit, Input} from '@angular/core';
import { arr } from '../models/interface';
import { GetDataService } from '../services/get-data.service';

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

  datago : arr[];




  constructor( private dulClass : GetDataService) { 
    tableData : {};
  	console.log("------------", this.tableData);
  }



  ngOnInit() {
    // console.log("------------+++++++++++++++=",this.dulClass.getData());
    this.datago=this.dulClass.getData();


  }
  // ngAfterOnInit(){

  //   // console.log("------------",this.tableData);
  // }

}
