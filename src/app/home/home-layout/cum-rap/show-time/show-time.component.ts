
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-show-time',
  templateUrl: './show-time.component.html',
  styleUrls: ['./show-time.component.scss']
})
export class ShowTimeComponent implements OnInit {
  @Input() isTheme;
  @Input() mangGioXem;
  warning:string;
  currentUser: any ={}
  constructor(private router :Router,private auth:AuthService) { }
  datVe(value){
    if(this.currentUser.taiKhoan){
      this.router.navigate([`/datve/${value}`]) // Nếu đã đăng nhập thì router tới trang mua vé
    }else{
      Swal.fire({
        title:"Đăng Nhập!",
        text:"Vui lòng đăng nhập để mua vé",
        icon:'warning'
      })
    }
  }
  ngOnInit(): void {
    this.auth.currentUser.subscribe({
      next: (result) => {
        this.currentUser = result;
      },
    });
  }
}
