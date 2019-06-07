import { Component } from '@angular/core';
import { obj } from './models/inter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
 arr = [];
 page =[];


 pagen(p){
   this.arr = [];
       for(let i=((p-1)*10)+1;i<=p*10;i++){
         this.arr.push('Angular', i);
   }
 }


 
  constructor(){

 // arr : [];
 for (let i=1;i<=10;i++){
   this.arr.push('Angular', i);
 }


  for (let j=1;j<=10;j++){
    this.page.push(j);
  }
  }

}
