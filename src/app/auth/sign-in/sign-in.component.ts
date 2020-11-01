import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router'
import { FormGroup, FormControl, Validators} from '@angular/forms'
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
@Input() isLogin;
  signinForm: FormGroup

  constructor(private auth: AuthService, private router : Router) {
    this.signinForm = new FormGroup({
      taiKhoan: new FormControl('',[Validators.required]),
      matKhau: new FormControl('',[
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
      ]),
    })
   }
  ngOnInit(): void {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo) {
      if (userInfo.maLoaiNguoiDung === 'KhachHang') {
      }
    }
  }

  dangNhap(){
    this.signinForm.markAllAsTouched()
    if(this.signinForm.invalid) return;

    // console.log(this.signinForm.value);
    this.auth.dangNhap(this.signinForm.value).subscribe({
      next: res => {
        localStorage.setItem('userInfo',JSON.stringify(res))
      },
      error: err => console.log(err.error),
      complete: () => {
        console.log('Đăng nhập thành công');
        this.router.navigate(['/'])
      }
    });
  }

}
