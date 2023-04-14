import {Component, OnInit} from '@angular/core';
import {Course, sortCoursesBySeqNo} from '../model/course';
import {CoursesService} from "../services/courses.service";
import {Observable, throwError} from "rxjs";
import {catchError, map} from "rxjs/operators";
import {LoadingService} from "../loading/loading.service";
import {MessagesService} from "../messages/messages.service";
import {CoursesStoreService} from "../services/courses-store.service";


@Component({
  selector: 'home', templateUrl: './home.component.html', styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  beginnerCourses$: Observable<Course[]>;
  advancedCourses$: Observable<Course[]>;

  constructor(
    private courseStore: CoursesStoreService
  ) {

  }

  ngOnInit() {
    this.reloadCourses();
  }

  reloadCourses() {

    this.beginnerCourses$ = this.courseStore.filterByCategory('BEGINNER');

    this.advancedCourses$ = this.courseStore.filterByCategory('ADVANCED');
  }
}
