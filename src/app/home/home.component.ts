import {Component, OnInit} from '@angular/core';
import {Course, sortCoursesBySeqNo} from '../model/course';
import {CoursesService} from "../services/courses.service";
import {Observable, throwError} from "rxjs";
import {catchError, map} from "rxjs/operators";
import {LoadingService} from "../loading/loading.service";
import {MessagesService} from "../messages/messages.service";


@Component({
  selector: 'home', templateUrl: './home.component.html', styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  beginnerCourses$: Observable<Course[]>;
  advancedCourses$: Observable<Course[]>;

  constructor(
    private courseService: CoursesService,
    private loadingService: LoadingService,
    private messagesService: MessagesService
  ) {

  }

  ngOnInit() {
    this.reloadCourses();
  }

  reloadCourses() {

    const courses$ = this.courseService.loadAllCourses()
      .pipe(
        map(courses => courses.sort(sortCoursesBySeqNo)),
        catchError(err => {
          const message = 'Could not load courses';
          this.messagesService.showMessage(message);
          return throwError(err)
        })

      );

    const loadCourses$ = this.loadingService.showLoaderUntilCompleted(courses$);

    this.beginnerCourses$ = loadCourses$
      .pipe(map(courses => courses.filter(course => course.category == 'BEGINNER')));

    this.advancedCourses$ = loadCourses$
      .pipe(map(courses => courses.filter(course => course.category == 'ADVANCED')));
  }
}
