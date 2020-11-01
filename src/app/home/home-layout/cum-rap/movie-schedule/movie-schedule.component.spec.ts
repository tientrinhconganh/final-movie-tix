import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieScheduleComponent } from './movie-schedule.component';

describe('MovieScheduleComponent', () => {
  let component: MovieScheduleComponent;
  let fixture: ComponentFixture<MovieScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
