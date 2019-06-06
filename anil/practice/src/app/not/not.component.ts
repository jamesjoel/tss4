import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-not',
  templateUrl: './not.component.html',
  styleUrls: ['./not.component.scss']
})
export class NotComponent implements OnInit {


  constructor( private routes : Router) { }

  ngOnInit() {
  }

}
