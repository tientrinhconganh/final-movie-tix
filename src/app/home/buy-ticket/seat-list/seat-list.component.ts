import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-seat-list',
  templateUrl: './seat-list.component.html',
  styleUrls: ['./seat-list.component.scss']
})
export class SeatListComponent implements OnInit {
  @Input() isWarning:boolean;
  @Input() danhSachGhe:[]
  @Output() getGhe = new EventEmitter()
  sendTenGhe(value){
    this.getGhe.emit(value)
  }
  constructor() { }

  ngOnInit(): void {
  }


}
