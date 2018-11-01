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

  constructor() { }

  ngOnInit() {
  }
}


@Component({
  selector: 'employee-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() employee: Employee;
  switchboard: SwitchboardService;
  dataService: DataService;
  app: AppComponent;


  constructor(switchboard: SwitchboardService, dataService: DataService, app: AppComponent) {
    this.switchboard = switchboard;
    this.dataService = dataService;
    this.app = app;
  }

  subEmployee: Subscription;
  ngOnInit(): void {
    this.subEmployee = this.switchboard.employee$.subscribe((c) => {
      this.employee = c;
    });
  }

  ngOnDestroy(): void {
    this.subEmployee.unsubscribe();
  }

  delete(oldEmployee: Employee): void{
    this.dataService.deleteEmployee(oldEmployee);
    this.employee = null;
  }

  openForm(): void{
    this.app.openForm();
  }
}
