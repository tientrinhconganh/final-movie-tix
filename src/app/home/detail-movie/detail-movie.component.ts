import { Component, OnInit,HostListener } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';
import { TheaterService } from '../../core/services/theater.service'
import { ChangeThemeService } from '../../core/services/change-theme.service';
import {SharingDataService} from '../../core/share/sharing-data.service'

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.scss'],
  animations: [
    trigger('enterAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('700ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('0s', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class DetailMovieComponent implements OnInit {

  chiTietPhim: any;
  loading: boolean = false;
  error: boolean = false;
  isTheme:any;
  trailer:string =''
  cumRapActive:[];
  maCumRapActive:string;
  dieuKien:string = 'lichChieu'
  currentWidth:number
  @HostListener('window:resize')
  onResize(){
    this.currentWidth = window.innerWidth;
  }
  changeDieuKien(value){
    // active khi click vào 'Lịch Chiếu' hoặc 'Thông tin' hoặc 'Đánh Giá'
    this.dieuKien = value
  }
  getTrailer(){
    this.trailer = this.chiTietPhim.trailer
  }
  removeTrailer(){
    this.trailer=''
  }
  constructor(private theaterService: TheaterService,
    private activatedRoute: ActivatedRoute,
    private data : ChangeThemeService,
    private sharing:SharingDataService
    ) { }

  ngOnInit(): void {
    this.currentWidth = window.innerWidth;
    this.activatedRoute.params.subscribe({
      next:(params)=>{
        this.theaterService.layLichChieuTheoPhim(params.maPhim).subscribe({
          next:(result)=>{
            this.chiTietPhim = result
            this.cumRapActive = result.heThongRapChieu[0].cumRapChieu
          }
        })
      },
      error:(err)=>{
      }
    })
    this.data.shareIsTheme.subscribe((data)=>{
      this.isTheme = data;
    })
    
  }

  clickPlayButton(){
    console.log(123456788)
    this.sharing.sharingTrailerMethod(this.chiTietPhim.trailer);
  }
}
