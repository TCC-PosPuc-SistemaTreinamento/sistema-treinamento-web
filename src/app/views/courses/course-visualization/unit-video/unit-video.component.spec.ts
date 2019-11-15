import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitVideoComponent } from './unit-video.component';

describe('UnitVideoComponent', () => {
  let component: UnitVideoComponent;
  let fixture: ComponentFixture<UnitVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
