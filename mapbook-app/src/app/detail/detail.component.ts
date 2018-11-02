import { Component, OnInit, OnDestroy, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbTabset } from '@ng-bootstrap/ng-bootstrap';

import { Course } from '../course';
import { SwitchboardService } from '../switchboard.service';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';
import { AppComponent } from '../app.component';
import { AddEmployeeToCourseComponent } from '../add-employee-to-course/add-employee-to-course.component';

@Component({
  selector: 'mapbook-detail',
  templateUrl: './detail.component.html',
  //providers: AddEmployeeToCourseComponent,
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit, OnDestroy {

  @Input() course: Course;
  switchboard: SwitchboardService;
  dataService: DataService;
  app: AppComponent;
  addEmployee: AddEmployeeToCourseComponent;

  constructor(switchboard: SwitchboardService, dataService: DataService, app: AppComponent, addEmployee: AddEmployeeToCourseComponent) {
    this.switchboard = switchboard;
    this.dataService = dataService;
    this.app = app;
    this.addEmployee = addEmployee;
  }

  subCourse: Subscription;
  ngOnInit(): void {
    this.subCourse = this.switchboard.course$.subscribe((c) => {
      this.course = c;
    });
  }

  ngOnDestroy(): void {
    this.subCourse.unsubscribe();
  }

  delete(oldCourse: Course): void {
    this.dataService.deleteCourse(oldCourse);
    this.course = null;
  }

  @ViewChild('tabs')
  private tabs:NgbTabset;

  applyToJoin(selectedCourseId: number) {
    this.app.applyToJoin(selectedCourseId);
  }
}
