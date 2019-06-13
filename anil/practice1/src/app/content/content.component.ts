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
	data:arr = {
		name : "",
		age : null
		};
   
	

	// name = "Dr. Stephen Strange"; 
	@Output() goObj = new EventEmitter();

	

  constructor() { 
  
  }

  ngOnInit() {
  }

  send(){
		
		this.goObj.emit(this.data);
		this.data.name="";
		this.data.age=null;
		console.log("++++++++++=", this.data);
	}
 
}
