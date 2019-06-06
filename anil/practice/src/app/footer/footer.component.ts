import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'
import { variabl, obj, arr} from '../models/home';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {


  @Input() student : variabl ;
  @Input() cities : obj ;
  @Input() stu : arr[];

  constructor( private routes : Router ) { 
    
  }

  ngOnInit() {
  }

}
