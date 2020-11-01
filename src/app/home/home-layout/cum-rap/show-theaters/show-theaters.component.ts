import {
  Component,
  OnInit,
  Input,
  OnChanges,
  HostListener,
  OnDestroy,
} from '@angular/core';
import { SubscriptionLike } from 'rxjs';
import { TheaterService } from '../../../../core/services/theater.service';


@Component({
  selector: 'app-show-theaters',
  templateUrl: './show-theaters.component.html',
  styleUrls: ['./show-theaters.component.scss']
})
export class ShowTheatersComponent implements OnInit {
  @Input() maRap: string;
  @Input() isTheme:boolean;
  subscription: SubscriptionLike;
  indexActive: number = 0;
  maCumRap: string = '';
  isShowCumRap: boolean = false;
  public currentWindowWidth: number;
  @HostListener('window:resize')
  onResize() {
    this.currentWindowWidth = window.innerWidth;
  }
  showCumRap() {
    this.isShowCumRap = !this.isShowCumRap; // show hide cụm rạp khi ở màn hình đt
  }
  layMaCupRap(value) {
    this.maCumRap = value; // get cụm rạp 
  }
  changeIndex(index) {
    this.indexActive = index;
  }

  thongTinRap: [] = [];
  constructor(private theaterService: TheaterService) {}
  ngOnInit(): void {
    this.currentWindowWidth = window.innerWidth;
  }
  ngOnChanges(): void {
    this.subscription = this.theaterService
      .layThongTinCumRap(this.maRap)
      .subscribe({
        next: (result) => {
          this.thongTinRap = result;
          this.maCumRap = result[0].maCumRap; // set maCumRap ban đầu
        },
        error: () => {
        }
      });
    this.indexActive = 0;
  };
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }}
