import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselItemComponent } from './carousel-item/carousel-item.component'
import { SharingModule } from '../../../core/share/sharing.module'
// import {SharingModule} from 'src/app/core/sharing/sharing.module'

@NgModule({
  declarations: [ SliderComponent, CarouselComponent, CarouselItemComponent ],
  imports: [
    CommonModule,
    SharingModule
  ],
  exports: [
    SliderComponent,
  ]
})
export class SliderModule { }
