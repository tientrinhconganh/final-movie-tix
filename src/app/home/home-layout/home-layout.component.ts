import { Component, QueryList, ViewChildren,OnInit} from '@angular/core';
import {MoviesModule} from './movies/movies.module'
import {PhimService} from '../../core/services/phim.service'
@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss']
})
export class HomeLayoutComponent implements OnInit {
  // @ViewChildren(MoviesModule) viewChildren: QueryList<MoviesModule>;
  loading: boolean = false;
  error: boolean = false;
  constructor(private phimService:PhimService) { }

  ngOnInit(): void {
    this.loading = true;
    this.phimService.layDanhSachPhim().subscribe({
      next: (result) => {
        // this.danhSachPhim = result;
        this.loading = false;
      },
      error: (err) => {
        console.log(err);
        this.error = true;
        this.loading = false;
      },
    });
  }


}
