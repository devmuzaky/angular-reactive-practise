import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Course} from '../model/course';
import {Lesson} from '../model/lesson';


@Component({
  selector: 'course', templateUrl: './course.component.html', styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  course: Course;

  lessons: Lesson[];

  constructor(private route: ActivatedRoute) {


  }

  ngOnInit() {


  }


}
