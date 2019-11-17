import { Component, OnInit } from '@angular/core';

import { Course } from '../../models/course.model';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-course',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  loading: boolean = true;
  courses: Course[];


  constructor( private route: ActivatedRoute, private categoryService: CategoryService ) { }

  async ngOnInit() {
    this.loading = true;

    const categoryId = this.route.snapshot.queryParams['category'];

    if ( categoryId ) {
      this.courses = await this.categoryService.getCoursesByCategory(categoryId);
      this.courses = this.courses.filter(course => course.visible);
    }

    this.loading = false;
  }

}
