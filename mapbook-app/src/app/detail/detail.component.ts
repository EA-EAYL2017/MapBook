import { Component, OnInit, OnDestroy, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbTabset } from '@ng-bootstrap/ng-bootstrap';

import { Course } from '../course';
import { SwitchboardService } from '../switchboard.service';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'mapbook-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() course: Course;
  switchboard: SwitchboardService;
  dataService: DataService;
  app: AppComponent;

  constructor(switchboard: SwitchboardService, dataService: DataService, app: AppComponent) {
    this.switchboard = switchboard;
    this.dataService = dataService;
    this.app = app;
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

  openForm(): void {
    this.app.openForm();
  }
}
