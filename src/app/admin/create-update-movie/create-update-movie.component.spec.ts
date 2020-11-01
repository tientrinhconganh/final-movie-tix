import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateMovieComponent } from './create-update-movie.component';

describe('CreateUpdateMovieComponent', () => {
  let component: CreateUpdateMovieComponent;
  let fixture: ComponentFixture<CreateUpdateMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateUpdateMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUpdateMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
