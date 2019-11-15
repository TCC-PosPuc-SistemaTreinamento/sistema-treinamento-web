import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { Unit } from '../../../models/unit.model';
import { Course } from '../../../models/course.model';
import { Category } from '../../../models/category.model';
import { CategoryService } from '../../../services/category.service';
import { CourseService } from '../../../services/course.service';
import { Quiz } from 'src/app/models/quiz.model';
import { Video } from 'src/app/models/video.model';
declare const swal: any;

@Component({
  selector: 'app-course-create',
  templateUrl: './course-create.component.html',
  styleUrls: ['./course-create.component.scss']
})
export class CourseCreateComponent implements OnInit {

  loading: Boolean = false;
  course: Course = new Course();
  categories: Category[];
  quizzes: any[];
  categName: String = '';
  files = [];

  constructor(private categoryService: CategoryService,
              private courseService: CourseService,
              private router: Router) { }

  async ngOnInit() {
    this.loading = true;
    this.categories = await this.categoryService.getAll();
    
    const unit = new Unit();
    unit.name = 'Unidade 1';
    unit.position = 1;
    this.course.units.push(unit);
    this.loading = false;
  }

  cancel(){}

  addUnit() {
    const qtdUnit = this.course.units.length;
    const unit = new Unit();
    unit.name = `Unidade ${qtdUnit+1}`;
    unit.position = qtdUnit+1;
    this.course.units.push(unit);
  }

  removeUnit(i) {
    swal({
      title: "Você tem certeza?",
      text: "Uma vez excluída, você não poderá recuperar os arquivos desta unidade",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        this.course.units.splice(i, 1);
        let position = 1;
        this.course.units = this.course.units.map(unit => {
          unit.position = position; position++;
          return unit;
        })
        swal("Unidade removida com sucesso", "", "success");
      }
    });
  }

  async save(){
    try{
      let response = await this.courseService.create(this.course);
      if(response._id){
        if(this.files)
          this.upload(response._id)
        swal("Curso cadastrado com sucesso", "", "success");
      }
      else
        swal("Erro", "Erro ao cadastrar curso", "error");
      this.router.navigate(['/categories']);
    } catch(err){
      swal("Erro", "Erro ao cadastrar curso", "error");
    }
  }

  courseInvalid() {
    if(this.course.name == '' || this.course.category == '' || this.course.instructor == '' || this.course.units.length == 0)
      return true;
    return false;
  }

  async changeQuizCategory(){
    this.categName = this.categories.find(c => c._id === this.course.category).name;
    this.quizzes = await this.categoryService.getQuizzesByCategory(this.course.category);
  }

  addVideo(i){
    const video = new Video();
    this.course.units[i].videos.push(video);
  }

  removeVideo(i, j){
    this.course.units[i].videos.splice(j, 1);
  }

  selectFile(event, unit){
    this.files.push({ file: event.target.files, unit: unit });
  }
  
  async upload(courseId) {
    let length = this.files.length;
    for(let i=0; i<length; i++){      
      let response = await this.courseService.uploadFiles(this.files[i], courseId);
      console.log(response)
    }
  }


}
