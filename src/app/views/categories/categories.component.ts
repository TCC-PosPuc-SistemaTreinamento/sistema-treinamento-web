import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Course } from '../../models/course.model';
import { Category } from '../../models/category.model';
import { CategoryService } from '../../services/category.service';
declare const swal: any;

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  loading: boolean = true;
  categories: Category[];
  category: Category = new Category();
  courses: Course[] = [];

  constructor(private categoryService: CategoryService,
              private router: Router) { }

  async ngOnInit() {
    this.loading = true;
    this.categories = await this.categoryService.getAll();
    this.loading = false;
  }

  async save() {
    try{
      let response = await this.categoryService.create(this.category);
      if(response._id){
        this.categories.push(this.category);
        swal("Categoria cadastrada com sucesso", "", "success");
        this.category = new Category();
      }
    } catch(err) {
      swal("Erro", "Erro ao cadastrar categoria", "error");
    }
  }

  resetCategory(){
    this.category = new Category();
  }
  
  async edit(category) {
    try{
      let response = await this.categoryService.edit(category);
      if(response._id)
        swal("Categoria atualizada com sucesso", "", "success");
    } catch(err) {
      swal("Erro", "Erro ao atualizar categoria", "error");
    }
  }

  async changeCategory(category) {
    this.courses = await this.categoryService.getCoursesByCategory(category);
    console.log(this.courses)
  }

}
