import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-info-movie',
  templateUrl: './info-movie.component.html',
  styleUrls: ['./info-movie.component.scss']
})
export class InfoMovieComponent implements OnInit {
  @Input() phim:any
  @Input() isTheme:boolean
  constructor() { }

  ngOnInit(): void {
  }

}
