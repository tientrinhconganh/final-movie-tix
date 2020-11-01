import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class SharingDataService {

  private pushingTrailerToStore = new BehaviorSubject('' as string);
  sharingTrailerFromShowingItemComponent = this.pushingTrailerToStore.asObservable();

  // Film list from showtime
  private pushingFilmListToStore = new BehaviorSubject([] as any);
  sharingFilmListFromShowtimeComponent = this.pushingFilmListToStore.asObservable();

   // Film detail from buy ticket theatres, hometools, banner in detail page
   private pushingFilmDetailToStore = new BehaviorSubject({} as object);
   sharingFilmDetailFromBannerInDetailComponent = this.pushingFilmDetailToStore.asObservable();
  constructor() { }
  sharingFilmListMethod(filmListFromShowtimeComponent: any) {
    this.pushingFilmListToStore.next(filmListFromShowtimeComponent);
  }

  sharingTrailerMethod(trailerFromShowingItemComponent: any) {
    this.pushingTrailerToStore.next(trailerFromShowingItemComponent);
  }

  sharingFilmDetailMethod(filmDetailFromBannerInDetailComponent: any) {
    this.pushingFilmDetailToStore.next(filmDetailFromBannerInDetailComponent);
  }
}