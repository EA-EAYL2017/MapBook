import { Component, ViewChild } from '@angular/core';
import { NgbModule, NgbTabset, NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { AddEmployeeToCourseComponent } from './add-employee-to-course/add-employee-to-course.component';

@Component({
  selector: 'mapbook-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MAP Book';

  @ViewChild('tabs')
  private tabs: NgbTabset;
  addEmployee: AddEmployeeToCourseComponent;
  tabChangeAllowed: number;

  constructor(addEmployee: AddEmployeeToCourseComponent){
    this.addEmployee = addEmployee;
    this.tabChangeAllowed = 0;
  }

  applyToJoin(selectedCourseId: number) {
    console.log('got clicked    ' + selectedCourseId);
    this.tabChangeAllowed = 1;
    this.addEmployee.sendData(selectedCourseId);
    this.tabs.select('tab2');
    this.tabChangeAllowed = 0;
  }

  public beforeChange($event: NgbTabChangeEvent) {
    if(this.tabChangeAllowed == 0){
      if($event.nextId === 'tab2') {
        $event.preventDefault();
      }
    }
  }
}
