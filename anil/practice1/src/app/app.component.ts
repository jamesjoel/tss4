import { Component } from '@angular/core';
// import { obj } from './models/interface'
interface obj{
  name : string;
  age : number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'practice1';

  comeObj : obj; 

  come(a:obj){

  	console.log("The name is", a)
  	this.comeObj = a;
  	return 0;
  }
  
}
