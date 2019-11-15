import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { environment } from '../../../../environments/environment';
import { Category } from '../../../models/category.model';
import { Course } from '../../../models/course.model';
import { Unit } from '../../../models/unit.model';
import { CategoryService } from '../../../services/category.service';
import { CourseService } from '../../../services/course.service';
import { Quiz } from 'src/app/models/quiz.model';
import { Video } from 'src/app/models/video.model';
declare const swal: any;

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.scss']
})
export class CourseEditComponent implements OnInit {
  loading: Boolean = false;
  course: Course = new Course();
  categories: Category[];
  quizzes: any[];
  categName: String = '';
  fileList = [];
  selectedFiles:FileList;
  downloadUrl: String = '';
  urlCourseFile: String = environment.apiBaseUrl + '/courses/files';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private courseService: CourseService,
              private categoryService: CategoryService) { }

  async ngOnInit() {
    this.loading = true;
    const id = this.route.snapshot.params['id'];
    this.categories = await this.categoryService.getAll();
    this.course = await this.courseService.getById(id);
    console.log(this.course)
    await this.changeQuizCategory();

    await this.getFiles();
    console.log(this.fileList)
    if(this.fileList && this.fileList.length > 0){
      this.download(this.fileList[0].Key);
    }
    console.log(this.urlCourseFile)

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

  async edit(){
    console.log(this.course)
    try{
      let response = await this.courseService.update(this.course);
      if(response._id)
        swal("Curso atualizado com sucesso", "", "success");
      else
        swal("Erro", "Erro ao atualizar curso", "error");
      this.router.navigate(['/categories']);
    } catch(err){
      swal("Erro", "Erro ao atualizar curso", "error");
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
    console.log(this.quizzes)
  }

  addVideo(i){
    const video = new Video();
    this.course.units[i].videos.push(video);
  }

  removeVideo(i, j){
    this.course.units[i].videos.splice(j, 1);
  }

  async getFiles(){
    console.log('get file')
    const response = await this.courseService.getFiles(this.course._id);
    response.subscribe((res: any) => {
      res.forEach(file => {
          this.fileList.push(file)
      });
      // return this.fileList
    })
    console.log('files los', this.fileList)
  }


  
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
  async deleteFile(name){
    await this.courseService.deleteFile(name)
    await this.getFiles();
  }
  async download(name){
    this.downloadUrl = await this.courseService.download(name);
  }

}
