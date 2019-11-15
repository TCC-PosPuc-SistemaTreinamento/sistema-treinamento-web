import { Component, OnInit } from '@angular/core';

import { Course } from '../../../models/course.model';
import { EnrollService } from '../../../services/enroll.service';
import { SecurityService } from '../../../services/security.service';

@Component({
  selector: 'app-course-my',
  templateUrl: './course-my.component.html',
  styleUrls: ['./course-my.component.scss']
})
export class CourseMyComponent implements OnInit {
  loading: Boolean = false;
  courses: Course[];

  constructor(private enrollService: EnrollService,
              private securityService: SecurityService) { }

  async ngOnInit() {
    this.loading = true;
    const loggedUser = this.securityService.getUser();
    if(loggedUser){
      this.courses = await this.enrollService.getCoursesByUser(loggedUser.id);
      console.log(this.courses)
    }
    this.loading = false;
  }

}
