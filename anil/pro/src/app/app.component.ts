import { Component } from '@angular/core';
import  { FormBuilder, FormGroup } from '@angular/forms'
import { staticViewQueryIds } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private fb : FormBuilder){}
}
