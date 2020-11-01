import { TheaterSystem } from './../../../core/models/theater-system';
import { Theater } from '../../../core/models/theater';
import { TheaterService } from '../../../core/services/theater.service'

import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewChild, ElementRef, Input, HostListener, OnDestroy } from '@angular/core';
import { SubscriptionLike } from 'rxjs';


@Component({
  selector: 'app-cum-rap',
  templateUrl: './cum-rap.component.html',
  styleUrls: ['./cum-rap.component.scss']
})
export class CumRapComponent implements OnInit {
  @Input() isTheme;
  subscription: SubscriptionLike;
  dsRap: [] = []; // Ds rạp hiển thị giao diện (ngFor)
  maRap: string = '';
  public currentWindowWidth: number;
  @HostListener('window:resize')
  onResize() {
    this.currentWindowWidth = window.innerWidth;
  }
  indexActive: number = 0;
  changeIndex(index) {
    // Thay đổi logo rạp active
    this.indexActive = index;
  }
  constructor(private theaterService: TheaterService) {}

  layMaRap(value) {
    this.maRap = value;
  };
  ngOnInit(): void {
    this.currentWindowWidth = this.currentWindowWidth = window.innerWidth;
    if(this.currentWindowWidth <=420){
      this.maRap = null 
    }
    this.subscription = this.theaterService.layThongTinRap().subscribe({
      next: (result) => {
        this.maRap = result[0].maHeThongRap; // set mã rạp ban đầu
        this.dsRap = result;
      },
      error: () => {
      },
    });
  };
  ngOnDestroy(){
    this.subscription.unsubscribe()
  }
}
