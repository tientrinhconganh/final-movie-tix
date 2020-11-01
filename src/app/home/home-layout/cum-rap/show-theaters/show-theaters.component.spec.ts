import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTheatersComponent } from './show-theaters.component';

describe('ShowTheatersComponent', () => {
  let component: ShowTheatersComponent;
  let fixture: ComponentFixture<ShowTheatersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowTheatersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTheatersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
