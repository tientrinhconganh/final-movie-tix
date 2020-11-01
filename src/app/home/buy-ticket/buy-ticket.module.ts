import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChairComponent } from './chair/chair.component';
import { SeatListComponent } from './seat-list/seat-list.component';
import {PipeModule} from '../../core/pipe/pipe.module'
import {BuyTicketComponent} from './buy-ticket.component'
import {SharingModule} from '../../core/share/sharing.module'
import { CountdownModule } from 'ngx-countdown';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [ChairComponent, SeatListComponent,BuyTicketComponent],
  imports: [
    CommonModule,
    PipeModule,
    SharingModule,
    CountdownModule,
    CountdownModule,
    NgxSpinnerModule
  ],
  exports:[
    BuyTicketComponent
  ]
})
export class BuyTicketModule { }
