import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmReviewComponent } from './film-review.component';

describe('FilmReviewComponent', () => {
  let component: FilmReviewComponent;
  let fixture: ComponentFixture<FilmReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
