import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from './safe.pipe';
import { CurrencyPipe } from './currency.pipe';
import { DatePipe } from './date.pipe';
import { TimePipe } from './time.pipe';
import { StringPipe } from './string.pipe';
import { UrlYoutubePipe } from './url-youtube.pipe';



@NgModule({
  declarations: [SafePipe, CurrencyPipe, DatePipe, TimePipe, StringPipe, UrlYoutubePipe],
  imports: [
    CommonModule
  ],
  exports: [
    SafePipe, CurrencyPipe, DatePipe, TimePipe, StringPipe, UrlYoutubePipe
  ]
})
export class PipeModule { }
