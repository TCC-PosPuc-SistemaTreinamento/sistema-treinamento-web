import { Component, OnInit } from '@angular/core';

import { EnrollService } from '../../../services/enroll.service';
import { SecurityService } from '../../../services/security.service';

@Component({
  selector: 'app-course-my',
  templateUrl: './course-my.component.html',
  styleUrls: ['./course-my.component.scss']
})
export class CourseMyComponent implements OnInit {
  loading: Boolean = false;
  myCourses: any[];

  constructor(
    private enrollService: EnrollService,
    private securityService: SecurityService,
  ) { }

  async ngOnInit() {
    this.loading = true;
    const loggedUser = this.securityService.getUser();
    if(loggedUser){
      this.myCourses = await this.enrollService.getCoursesByUser(loggedUser.id);
      this.myCourses = this.myCourses.filter(({course}) => course.visible);
    }

    this.loading = false;
  }

}
