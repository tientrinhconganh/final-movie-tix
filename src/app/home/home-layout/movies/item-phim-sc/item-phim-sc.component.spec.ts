import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPhimScComponent } from './item-phim-sc.component';

describe('ItemPhimScComponent', () => {
  let component: ItemPhimScComponent;
  let fixture: ComponentFixture<ItemPhimScComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemPhimScComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPhimScComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
