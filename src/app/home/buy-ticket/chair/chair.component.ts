import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-chair',
  templateUrl: './chair.component.html',
  styleUrls: ['./chair.component.scss']
})
export class ChairComponent implements OnInit {
  @Input() isWarning:boolean;
  @Input() gheItem;
  @Output() getGhe = new EventEmitter()
  isDatGhe:boolean = false
  tenGhe:string
  constructor() { }
  datGhe(){
    this.isDatGhe = !this.isDatGhe
    const ghe:any ={
      tenGhe: this.gheItem.tenGhe,
      daDat : this.isDatGhe,
      giaVe: this.gheItem.giaVe,
      maGhe: this.gheItem.maGhe
    }
    this.getGhe.emit(ghe)
  }
  ngOnInit(): void {
  }
}
