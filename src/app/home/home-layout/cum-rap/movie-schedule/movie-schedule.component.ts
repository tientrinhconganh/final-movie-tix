

import {
  Component,
  OnInit,
  OnChanges,
  Input,
  HostListener,
} from '@angular/core';
import { TheaterService } from '../../../../core/services/theater.service';


@Component({
  selector: 'app-movie-schedule',
  templateUrl: './movie-schedule.component.html',
  styleUrls: ['./movie-schedule.component.scss']
})
export class MovieScheduleComponent implements OnInit {
  @Input() isTheme;
  @Input() maRap: string;
  @Input() maCumRap: string;
  constructor(private theaterService: TheaterService) {}
  phimChieu: boolean = true;
  lichChieuPhim: [] = [];
  suatChieu: [] = [];
  MaPhim: number;
  isShowGio: boolean = false;
  currentWindowWidth: Number;
  @HostListener('window:resize')
  onResize() {
    this.currentWindowWidth = window.innerWidth;
  }
  showGio() {
    this.isShowGio = !this.isShowGio; //Show-hide giờ ở màn hình đt
  }
  layMaPhim(value:number) {
    this.MaPhim = value; //get mã phim
  }
  ngOnInit(): void {
    this.currentWindowWidth = window.innerWidth;
  }
  ngOnChanges(): void {
    this.theaterService.layLichChieuTheoRap(this.maRap).subscribe({
      next: (result) => {
        let dsRap: any[] = result[0].lstCumRap;
          let a = dsRap.filter((item) => item.maCumRap === this.maCumRap);
          if (a.length > 0) {
            // tìm trong lịch chiếu nếu không có mã cụm rạp tương ứng ==> không có lịch chiếu
            this.lichChieuPhim = a[0].danhSachPhim;
            this.phimChieu = true;
          } else {
            this.phimChieu = false;
          }
      },
      error: (err) => {

      },
    });
  }
}
