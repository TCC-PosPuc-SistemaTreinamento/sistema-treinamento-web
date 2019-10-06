import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  private loading: boolean = true;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
    }, 4000);
  }

}
