import { Component } from '@angular/core';
import { arr } from './models/interface'
// interface obj{
//   name : string;
//   age : number;
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  

  title = 'practice1';

  // comeObj = {} as arr;
  comeObj:arr;

  come(a:arr){

  	this.comeObj = a;
  	console.log("The name is", this.comeObj);
  	// return 0;
  }
  
}
