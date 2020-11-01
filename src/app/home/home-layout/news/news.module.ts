import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewComponent } from './review/review.component';
import { KhuyenMaiComponent } from './khuyen-mai/khuyen-mai.component';
import { DienAnhComponent } from './dien-anh/dien-anh.component';
import { NewsComponent } from './news.component';



@NgModule({
  declarations: [ReviewComponent, KhuyenMaiComponent, DienAnhComponent, NewsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ReviewComponent, KhuyenMaiComponent, DienAnhComponent, NewsComponent
  ]
})
export class NewsModule { }
