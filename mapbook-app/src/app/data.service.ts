import { Injectable } from '@angular/core';
import { Course } from './course';
import { Employee } from './employee';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  courses;
  employees;

  public getCourses(): void {
    this.http.get<Course[]>('/api/courses')
    .subscribe(data => {
      this.courses = data;
      console.log(this.courses);
    });
  }

  public deleteCourse(oldCourse: Course): void {
    this.courses = this.http.delete<Course[]>('/api/course/' + oldCourse.id);
  }

  public updateCourse(courseToUpdate: Course): void {
    this.courses = this.http.put<Course[]>('/api/course/' + courseToUpdate.id, courseToUpdate);
  }

  public addEmployeeToCourse(selectedCourseId: number, employee: Employee): void {
    this.http.post<Employee[]>('/api/course/:id/book',selectedCourseId, employee);
  }
}
