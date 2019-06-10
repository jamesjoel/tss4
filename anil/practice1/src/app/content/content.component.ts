import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { arr } from '../models/interface'
// interface obj{
// 	name : string;
// 	age : number;
// }
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
	data = {} as arr;
   
	// data : {
	// 	name : "anil",
	// 	age : 21
	// }

	// name = "Dr. Stephen Strange"; 
	@Output() goObj = new EventEmitter();

	send(){
		console.log("sending data", this.data);
		this.goObj.emit(this.data);
	}

  constructor() { 
   data : {}; 
   sending : {};
  }

  ngOnInit() {
  }
 
}
