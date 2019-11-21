import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import { CarouselHolderComponent } from '../../../shared/factories/owncarousel/carouselOption';
import { EnrollService } from '../../../services/enroll.service';
import { SecurityService } from '../../../services/security.service';
import { CourseService } from '../../../services/course.service';
import { Course } from 'src/app/models/course.model';
import { ModalQuizComponent } from './modal-quiz/modal-quiz.component';
import { UnitVideoComponent } from './unit-video/unit-video.component';
import { Quiz } from '../../../models/quiz.model';
import { QuizService } from '../../../services/quiz.service';
import { environment } from '../../../../environments/environment';

declare const swal: any;

@Component({
  selector: 'app-course-visualization',
  templateUrl: './course-visualization.component.html',
  styleUrls: ['./course-visualization.component.scss']
})
export class CourseVisualizationComponent implements OnInit {
  loading: Boolean = false;
  customOption: CarouselHolderComponent = new CarouselHolderComponent();
  course: Course;
  courseId: String;
  userId: String;
  quiz: Quiz;
  bsModalRef: BsModalRef;
  fileList = [];
  urlCourseFile: String = environment.apiBaseUrl + '/courses/files';

  constructor(private enrollService: EnrollService,
              private securityService: SecurityService,
              private courseService: CourseService,
              private route: ActivatedRoute,
              private modalService: BsModalService,
              private quizService: QuizService) { }

  async ngOnInit() {
    this.loading = true;
    this.courseId = this.route.snapshot.params['id'];
    this.course = await this.courseService.getByIdFull(this.courseId);
    const loggedUser = this.securityService.getUser();
    if(loggedUser){
      this.userId = loggedUser.id;
    }
    await this.getFiles();
    this.loading = false;
  }

  async conclusion() {
    const response = await this.enrollService.completeCourse(this.courseId, this.userId);
    if(response._id)
      swal('Parabéns!', 'Você conclui o curso com sucesso', 'success');
  }

  async openModalQuiz(activity: String, unit: Number) {
    this.quiz = await this.quizService.getById(activity);
    const initialState = {
      course: this.courseId,
      user: this.userId,
      unit: unit,
      ...this.quiz
    };
    this.bsModalRef = this.modalService.show(ModalQuizComponent, { initialState, class: 'modal-xl' });
    this.bsModalRef.content.quiz = this.quiz;
  }

  async openModalVideo(videos, unit: Number) {
    const initialState = {
      course: this.courseId,
      user: this.userId,
      unit: unit,
      videos: videos
    };
    this.bsModalRef = this.modalService.show(UnitVideoComponent, { initialState });
    this.bsModalRef.content.unitVideos = videos;
    console.log(videos)
  }

  async getFiles(){
    const response = await this.courseService.getFiles(this.courseId);
    response.subscribe((res: any) => {
      console.log(res)
      if(res.err) return;
      if(res && res.length){
        res.forEach(file => {
            this.fileList.push(file)
            if(file.filename.includes('unit')){
              let unit = parseInt(file.filename.split('unit')[1].split('.')[0])-1;
              this.course.units[unit].material = file;
            }
        });
      }
    })
    console.log('files los', this.fileList)
  }

}
