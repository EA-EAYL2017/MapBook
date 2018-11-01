import { Injectable } from '@angular/core';
import { Course } from './course';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SwitchboardService {

  private courseWatcher = new Subject<Course>();
  public course$ = this.courseWatcher.asObservable();

  public switchCourse(course: Course) {
    if (course) {
      this.courseWatcher.next(course);
    }
  }
  constructor() { }
}
