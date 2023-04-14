import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Course} from '../model/course';
import {Lesson} from '../model/lesson';
import {Observable} from "rxjs";
import {CoursesService} from "../services/courses.service";


@Component({
  selector: 'course', templateUrl: './course.component.html', styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  course$: Observable<Course>;

  lessons$: Observable<Lesson[]>;

  constructor(private route: ActivatedRoute, private coursesService: CoursesService) {


  }

  ngOnInit() {
    const courseId = parseInt(this.route.snapshot.paramMap.get('courseId'));
    this.course$ = this.coursesService.loadCourseById(courseId);

    this.lessons$ = this.coursesService.loadAllCourseLessons(courseId);
  }


}
