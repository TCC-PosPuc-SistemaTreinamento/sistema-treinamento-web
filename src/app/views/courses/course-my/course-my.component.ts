import { Component, OnInit } from '@angular/core';

import { CarouselHolderComponent } from '../../../shared/factories/owncarousel/carouselOption';

@Component({
  selector: 'app-course-my',
  templateUrl: './course-my.component.html',
  styleUrls: ['./course-my.component.scss']
})
export class CourseMyComponent implements OnInit {
  customOption: CarouselHolderComponent = new CarouselHolderComponent();
  courses = [1,2,3,4,5,6,7,8]

  constructor() { }

  ngOnInit() {
    console.log(this.customOption)
  }

}
