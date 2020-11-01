import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhGiaComponent } from './danh-gia.component';

describe('DanhGiaComponent', () => {
  let component: DanhGiaComponent;
  let fixture: ComponentFixture<DanhGiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhGiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhGiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
