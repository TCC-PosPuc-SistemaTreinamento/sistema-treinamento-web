import { Component, OnInit } from '@angular/core';
import { getDefaultService } from 'selenium-webdriver/edge';
import { Router } from '@angular/router';

import { SecurityService } from 'src/app/services/security.service';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course.model';
import { Category } from '../../models/category.model';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loading: Boolean = false;
  courses: Course[];
  categories: Category[];
  category: Category = new Category();
  public loggedUser: any;

  constructor(private security: SecurityService,
              private router: Router,
              private courseService: CourseService,
              private categoryService: CategoryService) { }

  async ngOnInit() {
    this.loading = true;
    this.loggedUser = this.security.getUser();
    if(this.loggedUser)
        this.loggedUser.name = this.loggedUser.name.split(" ")[0];


    this.courses = await this.courseService.getAll();
    this.categories = await this.categoryService.getAll();
    this.loading = false;
  }

  listCoursesByCategory(categoryId) {
    this.router.navigate(['/courses'], { queryParams: { category: categoryId }})
  }

  register(id) {
    this.router.navigate(['/courses', id]);
  }

}
