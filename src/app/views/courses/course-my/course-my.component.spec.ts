import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseMyComponent } from './course-my.component';

describe('CourseMyComponent', () => {
  let component: CourseMyComponent;
  let fixture: ComponentFixture<CourseMyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseMyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseMyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
