import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  // loaiTinTuc: string = 'dienAnh';
  constructor() { }

  ngOnInit(): void {
  }

  // selection(value){
  //   this.loaiTinTuc = value;
  // }
  isChanged: string = 'dienAnh';
  isActivated: string = 'dienAnh';
  
  changeTab(tabId){
    this.isChanged = tabId;
    this.isActivated = tabId;
    // window.scrollTo({
    //   top: 450,
    //   behavior: 'smooth'
    // })
  }
}
