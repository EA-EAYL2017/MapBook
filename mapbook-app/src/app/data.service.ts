import { Injectable } from '@angular/core';
import { Course } from './course';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
<<<<<<< HEAD
  courses = [
    {
      id: 1,
      name: 'Training',
      date: '23/04/18',
      location: 'Belfast'
    }
  ];
=======
>>>>>>> d3da73cf74b9a60c6a03610d233989708bf4a356
  constructor(private http: HttpClient) { }

  courses;

  public getCourses(): void {
    this.http.get<Course[]>('/api/courses')
    .subscribe(data => {
      this.courses = data;
      console.log(this.courses);
    })
  }

  public deleteCourse(oldCourse: Course): void {
    this.courses = this.http.delete<Course[]>('/api/course/' + oldCourse.id);
  }

  public updateCourse(courseToUpdate: Course): void {
    this.courses = this.http.put<Course[]>('/api/employee/' + courseToUpdate.id, courseToUpdate);
  }
}
