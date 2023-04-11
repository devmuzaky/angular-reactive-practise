import {AfterViewInit, Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Course} from "../model/course";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import * as moment from 'moment';
import {CoursesService} from "../services/courses.service";
import {LoadingService} from "../loading/loading.service";
import {MessagesService} from "../messages/messages.service";
import {catchError} from "rxjs/operators";
import {throwError} from "rxjs";

@Component({
  selector: 'course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrls: ['./course-dialog.component.css'],
  providers: [
    LoadingService,
    MessagesService
  ]
})
export class CourseDialogComponent implements AfterViewInit {

  form: FormGroup;

  course: Course;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CourseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) course: Course,
    private coursesService: CoursesService,
    private loadingService: LoadingService,
    private messagesService: MessagesService
  ) {

    this.course = course;

    this.form = fb.group({
      description: [course.description, Validators.required],
      category: [course.category, Validators.required],
      releasedAt: [moment(), Validators.required],
      longDescription: [course.longDescription, Validators.required]
    });

  }

  ngAfterViewInit() {

  }

  save() {
    const changes = this.form.value;

    const saveCourse$ = this.coursesService.saveCourse(this.course.id, changes).pipe(
      catchError(
        err => {
          const message = 'Could not save course';
          this.messagesService.showMessage(message);
          return throwError(err)
        }));

    this.loadingService.showLoaderUntilCompleted(saveCourse$)
      .subscribe(
        value => this.dialogRef.close(value)
      )
  }

  close() {
    this.dialogRef.close();
  }
}
