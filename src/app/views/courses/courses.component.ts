import { Component, OnInit } from '@angular/core';

import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  loading: boolean = true;
  courses: Course[];

  constructor() { }

  ngOnInit() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 4000);
    this.loading = false;
  }

}
