import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Course} from '../model/course';
import {Observable} from "rxjs";
import {CoursesStoreService} from "../services/courses-store.service";


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
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
