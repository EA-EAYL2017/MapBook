import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { DataService } from '../data.service';

@Component({
  selector: 'mapbook-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  thisCourse: Course;
  data: DataService;

  constructor(dataService: DataService) { 
    this.data = dataService;
  }

  ngOnInit() {
  }

}
