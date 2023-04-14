import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Course} from "../model/course";
import {map, shareReplay} from "rxjs/operators";
import {Lesson} from "../model/lesson";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) {
  }

  loadCourseById(courseId: number) {
    return this.http.get<Course>(`/api/courses/${courseId}`)
      .pipe(
        shareReplay()
      );
  }



  loadAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>('/api/courses').pipe(map(res => res['payload']), shareReplay());
  }

  saveCourse(courseId: string, changes: Partial<Course>): Observable<any> {
    return this.http.put(`/api/courses/${courseId}`, changes)
      .pipe(
        shareReplay()
      );
  }

  searchLessons(searchValue: string): Observable<Lesson[]> {
    return this.http.get<Lesson[]>('/api/lessons', {
      params: {
        filter: searchValue,
        pageSize: '100'
      }
    }).pipe(
      map(res => res['payload']),
      shareReplay()
    ); // shareReplay() is not needed here because the http request is already cached
  }


  loadAllCourseLessons(courseId: number) {
    return this.http.get<Lesson[]>(`/api/lessons`, {
      params: {
        courseId: courseId.toString(),
        pageSize: '1000'
      }
    }).pipe(
      map(res => res['payload']),
      shareReplay()
    );
  }
}
