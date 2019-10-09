import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseVisualizationComponent } from './course-visualization.component';

describe('CourseVisualizationComponent', () => {
  let component: CourseVisualizationComponent;
  let fixture: ComponentFixture<CourseVisualizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseVisualizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseVisualizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
