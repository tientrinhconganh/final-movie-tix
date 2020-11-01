import { Component, OnInit, Input } from '@angular/core';
import { SharingDataService } from '../../../../core/share/sharing-data.service'

@Component({
  selector: 'app-item-phim',
  templateUrl: './item-phim.component.html',
  styleUrls: ['./item-phim.component.scss']
})
export class ItemPhimComponent implements OnInit {
  @Input() Phim;
  constructor(private sharing:SharingDataService) { }

  ngOnInit(): void {
  }

  clickPlayButton(){
    this.sharing.sharingTrailerMethod(this.Phim.trailer);
  }
}
