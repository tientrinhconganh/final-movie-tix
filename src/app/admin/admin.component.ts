import {AuthService} from '../core/services/auth.service'
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../core/services/user.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  isShowController: boolean; // show-hide controller
  currentAdmin: any = {};
  dieuKien: string = 'user'; // active 'quản lý người dùng' hoặc 'quản lý phim'
  avatar: any;
  public currentWindowWidth: number; // reponsive
  constructor(private router: Router, private auth: AuthService,private admin : UserService) {}

  logOutUser() {
    // console.log(123)
    // localStorage.removeItem('adminInfo');
    // this.auth.dangXuat('admin');
    localStorage.clear();
    location.reload()
  }
  ngOnInit(): void {
    this.auth.initCurrentUser();
    this.auth.currentUser.subscribe({
      next: (result) => {
        // console.log(result);
        this.currentAdmin = result;
      },
    });

  }

}
