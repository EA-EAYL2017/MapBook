import { Component, ViewChild } from '@angular/core';
import { NgbModule, NgbTabset } from '@ng-bootstrap/ng-bootstrap';
import { AddEmployeeToCourseComponent } from './add-employee-to-course/add-employee-to-course.component';

@Component({
  selector: 'mapbook-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mapbook-app';

  @ViewChild('tabs')
  private tabs: NgbTabset;
  addEmployee: AddEmployeeToCourseComponent;

  constructor(addEmployee: AddEmployeeToCourseComponent){
    this.addEmployee = addEmployee;
  }

  applyToJoin(selectedCourseId: number) {
    console.log('got clicked    ' + selectedCourseId);
    this.addEmployee.sendData(selectedCourseId);
    this.tabs.select('ngb-tab-1');
  }
}
