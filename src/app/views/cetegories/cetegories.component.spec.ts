import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CetegoriesComponent } from './cetegories.component';

describe('CetegoriesComponent', () => {
  let component: CetegoriesComponent;
  let fixture: ComponentFixture<CetegoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CetegoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CetegoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
