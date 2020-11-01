import { Component, OnInit } from '@angular/core';
import { SharingDataService } from '../../share/sharing-data.service';

@Component({
  selector: 'app-modal-trailer',
  templateUrl: './modal-trailer.component.html',
  styleUrls: ['./modal-trailer.component.scss']
})
export class ModalTrailerComponent implements OnInit {

  trailerInModal: string = '';

  constructor(private sharing: SharingDataService) { }

  ngOnInit(): void {
    this.sharing.sharingTrailerFromShowingItemComponent.subscribe((data: any) => {
      console.log("TEST THU NGHIEM")
      if (data != '') {
        this.trailerInModal = data.replace('watch?v=', 'embed/');
        console.log(this.trailerInModal);
      }
    })
  }
  closeTrailer() {
    this.trailerInModal = '';
  }
}
