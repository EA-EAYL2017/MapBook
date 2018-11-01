import { Injectable } from '@angular/core';
import { Course } from './course';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  courses;

  public getCourses(): void {
    this.http.get<Course[]>('/api/courses')
    .subscribe(data => {
      this.courses = data;
      console.log(this.courses);
    })
  }
}
