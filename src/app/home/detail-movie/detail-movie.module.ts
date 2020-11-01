import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailMovieComponent } from './detail-movie.component'
// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';
import { InfoMovieComponent } from './info-movie/info-movie.component';
import { MovieShowtimesInformationComponent } from './movie-showtimes-information/movie-showtimes-information.component';
import { FilmReviewComponent } from './film-review/film-review.component';
import { DanhGIaComponent } from './danh-gia/danh-gia.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import {SharingModule} from '../../core/share/sharing.module' 
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "detail", component: DetailMovieComponent,children:[
      {
          path: 'detail', component: DetailMovieComponent, data: {title: 'Movie-detail'}
        }
  ] },
  
];

@NgModule({
  declarations: [ DetailMovieComponent, InfoMovieComponent, MovieShowtimesInformationComponent, FilmReviewComponent, DanhGIaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgCircleProgressModule.forRoot({
      "showSubtitle": false,
      "showUnits": false,
      "space": 0,
      "maxPercent":100,
      "backgroundColor": "#33333391",
      "titleColor": "#ffffff"  ,
      "showTitle": false,   
      "animationDuration": 5000,
      "startFromZero": true
    }),
    FormsModule,
    ReactiveFormsModule,
    SharingModule,
    NgxPageScrollCoreModule,
    NgxPageScrollModule
  ]
})
export class DetailMovieModule { }
