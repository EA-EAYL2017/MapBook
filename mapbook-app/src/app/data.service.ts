import { Injectable } from '@angular/core';
import { Course } from './course';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  courses;
  constructor(private http: HttpClient) { }

  public getCourses(): void {
    this.http.get<Course[]>('/courses')
    .subscribe(data => {
      this.courses = data;
    });
  }
}
