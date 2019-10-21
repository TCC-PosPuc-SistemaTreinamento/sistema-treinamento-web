import { Component, OnInit } from '@angular/core';

import { Course } from '../../../models/course.model';

@Component({
  selector: 'app-course-create',
  templateUrl: './course-create.component.html',
  styleUrls: ['./course-create.component.scss']
})
export class CourseCreateComponent implements OnInit {
  course: Course = new Course();

  constructor() { }

  ngOnInit() {
  }

  cancel(){}

  save(){}

}
