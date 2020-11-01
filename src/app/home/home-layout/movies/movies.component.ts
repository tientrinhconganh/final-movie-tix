import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  dangChieuStatus: boolean = true;
  constructor() { }
  HienPhimDangChieu(){
    this.dangChieuStatus = true;
  }
  HienPhimSapChieu(){
    this.dangChieuStatus = false;
  }

  ngOnInit(): void {
  }

}
