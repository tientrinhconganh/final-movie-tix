import { Component, OnInit,Output,ElementRef,EventEmitter } from "@angular/core";
import { AuthService } from "../../core/services/auth.service";
import { Router } from "@angular/router";
import { DomSanitizer } from "@angular/platform-browser";
import { MatIconRegistry } from "@angular/material/icon";
import { ChangeThemeService } from "../../core/services/change-theme.service";
import { UserService } from "../../core/services/user.service";
import { GheService } from "../../core/services/ghe.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  currentUser: any = {};
  active: string;
  url: any;
  isLogin: boolean = true;
  isInfo: boolean = true;
  isTogggle: boolean = false;
  @Output() ShowLogin = new EventEmitter();

  constructor(
    private auth: AuthService,
    private router: Router,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private data: ChangeThemeService,
    private user: UserService,
    private ghe:GheService
  ) {
    iconRegistry.addSvgIcon(
      "thumbs-up",
      sanitizer.bypassSecurityTrustResourceUrl(
        "../../../assets/img/iconUser.jpg"
      )
    );
  }

  ngOnInit(): void {
    this.auth.initCurrentUser();
    this.auth.currentUser.subscribe({
      next: (result) => {
        // console.log(result);
        this.currentUser = result;
      },
    });

    this.data.shareActiveHeader.subscribe((data) => {
      this.active = data;
    });
    this.auth.currentUser.subscribe({
      next: (result) => {
        this.currentUser = result;
      },
    });

    this.user.avatarUser.subscribe({
      next: (data) => {
        this.url = data;
      },
    });
  }
  lognOutUser() {
    localStorage.removeItem("userInfo"); // xóa local storage
    this.auth.dangXuat("taiKhoan"); // cập nhật lại giá trị của current User
    this.isLogin = false;
  }
  thongTinUser() {
    // click vào nav-item kho phim
    this.isInfo = false;
    this.ghe.getLichDatVe("thongTin");
  }

  toggle() {
    // thay đổi button toggle khi ở màn hình nhỏ
    this.isTogggle = !this.isTogggle;
  }
  changeActive(value:string) {
    // click vào các nav-item sẽ active 
    this.isInfo=false;
    this.data.shareDataActiveHeader(value);
  }
  showLogin() {
    // ẩn hiện login khi click button đăng nhập
    this.isLogin = !this.isLogin;
    this.ShowLogin.emit(this.isLogin);
  }
  
}
