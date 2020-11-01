import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateShowtimesComponent } from './create-update-showtimes.component';

describe('CreateUpdateShowtimesComponent', () => {
  let component: CreateUpdateShowtimesComponent;
  let fixture: ComponentFixture<CreateUpdateShowtimesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateUpdateShowtimesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUpdateShowtimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
