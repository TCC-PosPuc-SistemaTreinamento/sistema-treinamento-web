import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Course } from '../../../models/course.model';
import { CourseService } from '../../../services/course.service';
import { SecurityService } from '../../../services/security.service';
import { EnrollService } from '../../../services/enroll.service';
declare const swal: any;

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {
  loading: Boolean = false;
  courseId: String;
  userId: String;
  course: Course = new Course;

  constructor(private courseService: CourseService,
              private route: ActivatedRoute,
              private securityService: SecurityService,
              private enrollService: EnrollService,
              private router: Router) { }

  async ngOnInit() {
    this.loading = true;
    this.courseId = this.route.snapshot.params['id'];
    this.course = await this.courseService.getById(this.courseId);
    this.loading = false;
  }
  
  async enroll() {
    try{
      const loggedUser = this.securityService.getUser();
      if(loggedUser){
        this.userId = loggedUser.id;
        console.log(this.userId)
        let response = await this.enrollService.create({ course: this.courseId, user: this.userId });
        if(response._id)
          swal('Parabéns', 'Sua inscrição no curso for realizada com sucesso', 'success');
        else{
          swal('Erro', 'Não foi possível realizar a inscrição', 'error');
          console.log(response)
        }
        this.router.navigate(['/courses', 'my']);
      } 
    }catch(err){
      console.log(err)
    }

  }

}
