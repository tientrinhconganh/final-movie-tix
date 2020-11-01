import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieShowtimesInformationComponent } from './movie-showtimes-information.component';

describe('MovieShowtimesInformationComponent', () => {
  let component: MovieShowtimesInformationComponent;
  let fixture: ComponentFixture<MovieShowtimesInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieShowtimesInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieShowtimesInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
