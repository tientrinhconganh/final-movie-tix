import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree, Router
} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../services/auth.service'

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router,private auth:AuthService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {

      const adminInfo = localStorage.getItem('userInfo');
      console.log(adminInfo)

      if (adminInfo) {
        const { maLoaiNguoiDung } = JSON.parse(adminInfo);
        console.log(333)
        console.log(maLoaiNguoiDung)
        if (maLoaiNguoiDung === 'QuanTri') {
          return true;
        }
    
        if (maLoaiNguoiDung === 'KhachHang'){
          console.log(adminInfo)
          this.router.navigate(['/signinadmin']);
            return false;
        }
        this.router.navigate(['/']);
        return false;
      }
      console.log(adminInfo)
    this.router.navigate(['/signinadmin']);
      return false;
  }
}
