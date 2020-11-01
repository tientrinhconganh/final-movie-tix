import { Injectable } from '@angular/core';
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { BuyTicketComponent } from '../../home/buy-ticket/buy-ticket.component';

@Injectable({
  providedIn: 'root',
})
export class MuaVeGuard implements CanDeactivate<BuyTicketComponent> {
  canDeactivate(
    component: BuyTicketComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean

    | UrlTree {
      const gheDangChon = component.gheDangChon
      if(gheDangChon.length > 0){
        return window.confirm('Bạn có muốn thoát trang mua vé ?');
      }
    return true;
  }
}
