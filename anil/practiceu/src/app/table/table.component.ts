import { Component, OnInit,Input } from '@angular/core';
import { obj } from '../models/inter'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

	// childObj : obj;

	@Input() childObj : obj;

  constructor() { }

  ngOnInit() {
  }

}
