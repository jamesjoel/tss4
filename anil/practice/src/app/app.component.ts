import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  stu = "Dr. Stephen Strange";

  cities={
    name : "London",
    pop : 552425
  }

  student = [{
    name : "Johny",
    age : 32,
    gender : "male"
  },
  {
    name : "Shahu",
    age : 43,
    gender : "female"
  },
  {
    name : "Shivani",
    age : 21,
    gender : "Female"
  },
  {
    name : "Sonu",
    age : 43,
  }
]

  // home(){
  //   this.routes.navigate([ 'home']);
  // }
  // about(){
  //   this.routes.navigate(['about']);
  // }
  // contact(){
  //   this.routes.navigate(['contact'])
  // }
  // not(){
  //   this.routes.navigate(['not'])
  // }

  constructor( private routes : Router){

  }
 
}

