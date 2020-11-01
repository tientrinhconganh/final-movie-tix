import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DienAnhComponent } from './dien-anh.component';

describe('DienAnhComponent', () => {
  let component: DienAnhComponent;
  let fixture: ComponentFixture<DienAnhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DienAnhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DienAnhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
