import { Component, OnInit, Input } from '@angular/core';
import { SharingDataService } from '../../../../core/share/sharing-data.service'
@Component({
  selector: 'app-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.scss']
})
export class CarouselItemComponent implements OnInit {
  @Input() item;
  constructor(private sharing: SharingDataService) { }

  ngOnInit(): void {
  }
  clickPlayButton(){
    this.sharing.sharingTrailerMethod(this.item.trailer);
  }
}
