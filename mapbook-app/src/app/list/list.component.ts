import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { DataService } from '../data.service';
import { SwitchboardService } from '../switchboard.service';
import { $$ } from 'protractor';

@Component({
  selector: 'mapbook-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  thisCourse: Course;
  data: DataService;
  switchboard: SwitchboardService;
  angular: any;

  constructor(dataService: DataService, switchboard: SwitchboardService) { 
    this.data = dataService;
    this.switchboard = switchboard;
    this.data.getCourses();
  }

  ngOnInit() {
  }

  onSelect(newCourse: Course): void{
    this.thisCourse = newCourse;
    this.switchboard.switchCourse(this.thisCourse);
  }

  getTitle(){
    return this.angular.element(document.querySelector('#title').textContent)
  }
}
