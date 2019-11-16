import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserService } from '../../../services/user.service';
import { EnrollService } from '../../../services/enroll.service';
import { User } from '../../../models/user.model';
import { Course } from '../../../models/course.model';
import { CourseService } from '../../../services/course.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  loading: Boolean = false;
  user: User = new User();
  courses: any[];
  certificates: any[];
  userProgress: any;
  evaluates: any;

  constructor(private route: ActivatedRoute,
              private userService: UserService,
              private enrollmentService: EnrollService,
              
              private courseService: CourseService) { }

  async ngOnInit() {
    this.loading = true;
    const id = this.route.snapshot.params['id'];
    this.user = await this.userService.getById(id);
    this.courses = await this.enrollmentService.getCoursesByUser(id);
    this.certificates = this.courses.filter(c => c.completed == true);
    this.userProgress = await this.userService.getUserProgress(id);
    this.evaluates = await this.userService.getEvaluatesByUser(id);
    this.loading = false;
  }

}
