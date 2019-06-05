import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  home(){
    this.routes.navigate([ 'home']);
  }
  about(){
    this.routes.navigate(['about']);
  }
  contact(){
    this.routes.navigate(['contact'])
  }
  not(){
    this.routes.navigate(['not'])
  }

  constructor( private routes : Router){

  }
 
}

