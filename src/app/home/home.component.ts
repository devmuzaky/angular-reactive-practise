import {Component, OnInit} from '@angular/core';
import {Course, sortCoursesBySeqNo} from '../model/course';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {CourseDialogComponent} from '../course-dialog/course-dialog.component';
import {CoursesService} from "../services/courses.service";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";


@Component({
  selector: 'home', templateUrl: './home.component.html', styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  beginnerCourses$: Observable<Course[]>;
  advancedCourses$: Observable<Course[]>;

  constructor(private courseService: CoursesService, private dialog: MatDialog) {

  }

  ngOnInit() {
    const courses$ = this.courseService.loadAllCourses()
      .pipe(
        map(courses => courses.sort(sortCoursesBySeqNo))
      );


    this.beginnerCourses$ = courses$
      .pipe(
        map(courses => courses.filter(course => course.category == 'BEGINNER'))
      );

    this.advancedCourses$ = courses$
      .pipe(
        map(courses => courses.filter(course => course.category == 'ADVANCED'))
      );
  }

  editCourse(course: Course) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "400px";

    dialogConfig.data = course;

    const dialogRef = this.dialog.open(CourseDialogComponent, dialogConfig);

  }
}
