import { Injectable } from '@angular/core';
import { ApiService } from "./api.service";
import { Observable, BehaviorSubject } from "rxjs";
import { tap,catchError } from "rxjs/operators";
import {  HttpHeaders } from '@angular/common/http';

const HttpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
}

@Injectable({
  providedIn: 'root'
})
export class TrailerService {

trailerSuject=new BehaviorSubject([]);
trailer=this.trailerSuject.asObservable();

  constructor(api: ApiService) { }

  sharingTrailerMethod(trailerFromShowingItemComponent: any) {
    this.trailerSuject.next(trailerFromShowingItemComponent);
  }
}
