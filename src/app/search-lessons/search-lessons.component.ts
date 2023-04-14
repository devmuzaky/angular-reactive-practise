import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {EMPTY, Observable} from "rxjs";
import {Lesson} from "../model/lesson";
import {CoursesService} from "../services/courses.service";

@Component({
  selector: 'course',
  templateUrl: './search-lessons.component.html',
  styleUrls: ['./search-lessons.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchLessonsComponent implements OnInit {

  activeLesson: Lesson;

  searchResult$: Observable<Lesson[]> = EMPTY;

  constructor(private coursesService: CoursesService) {
  }

  ngOnInit() {
  }

  onSearch(searchValue: string) {
    this.searchResult$ = this.coursesService.searchLessons(searchValue);
  }

  openLesson(lesson: Lesson) {
    this.activeLesson = lesson;
  }

  onBackToSearch() {
    this.activeLesson = null;
  }
}
