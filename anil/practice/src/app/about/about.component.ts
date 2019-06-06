import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
// import { variabl} from '../models/home'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  // @Input() name : variabl ;
  constructor(private Routes : Router) { }

  ngOnInit() {
  }

}
