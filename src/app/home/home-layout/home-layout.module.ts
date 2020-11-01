import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderModule } from './slider/slider.module';
import { HomeLayoutComponent } from './home-layout.component'
import { MoviesModule } from './movies/movies.module';
import { UngDungComponent } from './ung-dung/ung-dung.component'

import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CumRapComponent } from './cum-rap/cum-rap.component';
import { NewsModule } from './news/news.module';

import { NgxSpinnerModule } from "ngx-spinner";
import { ShowTheatersComponent } from './cum-rap/show-theaters/show-theaters.component';
import { ShowTimeComponent } from './cum-rap/show-time/show-time.component';
import { MovieScheduleComponent } from './cum-rap/movie-schedule/movie-schedule.component';
import {PipeModule} from '../../core/pipe/pipe.module'

@NgModule({
  declarations: [HomeLayoutComponent, UngDungComponent, CumRapComponent, ShowTheatersComponent, ShowTimeComponent, MovieScheduleComponent],
  imports: [
    CommonModule,
    SliderModule,
    MoviesModule,
    SlickCarouselModule,
    NewsModule,
    NgxSpinnerModule,
    PipeModule
  ]
})
export class HomeLayoutModule { }
