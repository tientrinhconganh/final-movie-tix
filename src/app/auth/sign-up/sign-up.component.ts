import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { PatternService } from '../../core/services/pattern.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  public formDangKy: FormGroup;
  loading: boolean = false; // canDeactivate cho component
  errors: any = {};
  isShowPass: boolean = false; // show Pass
  DangKy(val) {
    this.formDangKy.markAllAsTouched();
    if (this.formDangKy.invalid) {
      return;
    }
    this.loading = true; // Bằng true --> không alert khi rời trang 
    this.errors = [];
    this.auth.dangKy(val).subscribe({
      next: () => {
        this.loading = true;
        Swal.fire('', 'Đăng ký thành công', 'success').then((result) => {
          if (result.isConfirmed) {
            this.router.navigate(['/']);
          }
        });
      },
      error: (err) => {
        this.errors = err;
        this.loading = false;
      },
      complete: () => {},
    });
  }
  constructor(
    private auth: AuthService,
    private router: Router,
    private pattern: PatternService
  ) {
    this.formDangKy = new FormGroup({
      taiKhoan: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(this.pattern.Pattern.taiKhoan),
      ]),
      matKhau: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      hoTen: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.pattern.Pattern.email),
      ]),
      soDt: new FormControl(
        null,
        Validators.pattern(this.pattern.Pattern.soDt)
      ),
    });
  }

  ngOnInit(): void {}
}
