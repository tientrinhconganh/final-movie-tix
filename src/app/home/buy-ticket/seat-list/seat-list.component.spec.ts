import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatListComponent } from './seat-list.component';

describe('SeatListComponent', () => {
  let component: SeatListComponent;
  let fixture: ComponentFixture<SeatListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
