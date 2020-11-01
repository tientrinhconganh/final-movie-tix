import { Component, OnInit, Input } from '@angular/core';
import { SharingDataService } from '../../../../core/share/sharing-data.service'

@Component({
  selector: 'app-item-phim-sc',
  templateUrl: './item-phim-sc.component.html',
  styleUrls: ['./item-phim-sc.component.scss']
})
export class ItemPhimScComponent implements OnInit {
  @Input() PhimSC;
  constructor(private sharing:SharingDataService) { }

  ngOnInit(): void {
  }
  clickPlayButton(){
    this.sharing.sharingTrailerMethod(this.PhimSC.trailer);
  }
}
