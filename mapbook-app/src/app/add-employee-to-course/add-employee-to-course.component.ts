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

  public newCourseId: number;
  public newEmployee: Employee;
  data: DataService;

  constructor(dataService: DataService) {
    this.data=dataService;
  }

  ngOnInit() {
    this.newEmployee = new Employee();
  }
  
  addEmployeeToCourse(): void {
    this.data.addEmployeeToCourse
  }

  sendData(selectedCourseId: number): void {
    this.newCourseId = selectedCourseId;
  }
}
