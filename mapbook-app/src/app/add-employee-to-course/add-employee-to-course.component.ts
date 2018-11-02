import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { Employee } from '../employee';
import { DataService } from '../data.service';

@Component({
  selector: 'mapbook-add-employee-to-course',
  templateUrl: './add-employee-to-course.component.html',
  styleUrls: ['./add-employee-to-course.component.css']
})
export class AddEmployeeToCourseComponent implements OnInit {

  public newCourse: Course;
  public newEmployee: Employee;
  data: DataService;

  constructor(dataService: DataService) {
    this.data=dataService;
  }

  ngOnInit() {
    this.newEmployee = new Employee();
  }
  
  addEmployeeToCourse(): void {
    var employeeToAdd = this.newEmployee;
    this.newEmployee = new Employee();
    this.data.addEmployeeToCourse(this.newCourse, employeeToAdd);
  }
}
