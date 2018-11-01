import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { DataService } from '../data.service';
import { SwitchboardService } from '../switchboard.service';

@Component({
  selector: 'mapbook-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  thisCourse: Course;
  data: DataService;
  switchboard: SwitchboardService;

  constructor(dataService: DataService, switchboard: SwitchboardService) { 
    this.data = dataService;
    this.switchboard = switchboard;
  }

  ngOnInit() {
  }

  onSelect(newCourse: Course): void{
    this.thisCourse = newCourse;
    this.switchboard.switchCourse(this.thisCourse);
  }
}
