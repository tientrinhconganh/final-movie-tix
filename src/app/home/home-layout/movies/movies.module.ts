import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhimDangChieuComponent } from './phim-dang-chieu/phim-dang-chieu.component';
import { PhimSapChieuComponent } from './phim-sap-chieu/phim-sap-chieu.component';
import { ItemPhimComponent } from './item-phim/item-phim.component';
import { MoviesComponent } from './movies.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ItemPhimScComponent } from './item-phim-sc/item-phim-sc.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    
        path: 'detail/:id',
        component: MoviesComponent,
        data: { title: 'Movie-detail' },
  }]

@NgModule({
  declarations: [PhimDangChieuComponent, PhimSapChieuComponent, ItemPhimComponent, MoviesComponent, ItemPhimScComponent],
  imports: [
    CommonModule,
    SlickCarouselModule,
    RouterModule,
  ],
  exports: [
    PhimDangChieuComponent, PhimSapChieuComponent, ItemPhimComponent,MoviesComponent,ItemPhimScComponent
  ]
})
export class MoviesModule { }
