import { Component, OnInit, AfterViewInit, Input  } from '@angular/core';
declare var $: any;
import { Movie } from '../../../../core/models/movies';
import { PhimService } from '../../../../core/services/phim.service'

@Component({
  selector: 'app-phim-dang-chieu',
  templateUrl: './phim-dang-chieu.component.html',
  styleUrls: ['./phim-dang-chieu.component.scss']
})
export class PhimDangChieuComponent implements OnInit {
  danhSachPhim: Movie[];
  loading: boolean = true;
  error: boolean = false;
  // slideConfig = {dots: false};
  // moviesPerSlide = 8;

  @Input() phimDC;
  trailer: string;
  isModal: boolean;
  slideConfig = {
    slidesToShow: 4,
    // dots: true,
    slidesToScroll: 1,
    autoplay: true,
    enabled: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1921,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      }, 
      {
        breakpoint: 421,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 376,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      
    ],
  };

  constructor(private moviesService: PhimService) {}
  
  ngOnInit(): void {
    this.loading = true;

    this.moviesService.layDanhSachPhim().subscribe({
      next: (listPhim) => {
        this.loading = false;
        this.danhSachPhim = listPhim ;
      },
      error: (err) => {
        console.log(err);
        this.error = true;
        this.loading = false;
      },
      complete: () => {

      }
    });

    // this.moviesService.movieList.subscribe({
    //   next: (result) => {
    //     this.danhSachPhim = result;
    //   },
    // });
  }

  getTrailer(value) {
    this.trailer = value;
  }
  closeModal() {
    this.trailer = '';
  }
  ngAfterViewInit(): void {}
}