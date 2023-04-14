import {Injectable} from '@angular/core';
import {Course, sortCoursesBySeqNo} from "../model/course";
import {BehaviorSubject, throwError} from "rxjs";
import {catchError, map, shareReplay, tap} from "rxjs/operators";
import {CoursesService} from "./courses.service";
import {LoadingService} from "../loading/loading.service";
import {MessagesService} from "../messages/messages.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class CoursesStoreService {

  private subject = new BehaviorSubject<Course[]>([]);
  courses$ = this.subject.asObservable();

  constructor(
    private http: HttpClient,
    private coursesService: CoursesService,
    private loadingService: LoadingService,
    private messageService: MessagesService) {
    this.loadAllCourses();
  }

  filterByCategory(category: string) {
    return this.courses$
      .pipe(
        map(courses => courses.filter(course => course.category == category)
          .sort(sortCoursesBySeqNo)
        )
      )
  }

  private loadAllCourses() {
    const loadCourses$ = this.http.get<Course[]>('/api/courses')
      .pipe(
        map(res => res['payload']),
        shareReplay(),
        catchError(err => {
          const message = 'Could not load courses';
          this.messageService.showMessage(message);
          console.log(message, err);
          return throwError(err);
        }),
        tap(courses => this.subject.next(courses))
      )

    this.loadingService.showLoaderUntilCompleted(loadCourses$)
      .subscribe();
  }
}
