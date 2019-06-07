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

  comeObj = {} as arr;

  come(a:arr){

  	console.log("The name is", a)
  	this.comeObj = a;
  	return 0;
  }
  
}
