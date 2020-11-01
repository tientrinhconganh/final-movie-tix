import {  Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild,} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PatternService } from '../../core/services/pattern.service';
import {AuthService} from '../../core/services/auth.service'
import {UserService} from '../../core/services/user.service'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-update-user',
  templateUrl: './create-update-user.component.html',
  styleUrls: ['./create-update-user.component.scss']
})
export class CreateUpdateUserComponent implements OnInit,OnChanges {

  @ViewChild('btnClose') btnClose: ElementRef;
  @Output() updateUser = new EventEmitter();
  @Input() objectSuaUser: any;
  isThemNguoiDung: boolean;
  formUser: FormGroup;
  button: string = '';
  isShowPass: boolean = false;
  header: string;

  sweetAlert(text: string, value: string, method: string) {
    // text = 'Thêm' hoặc 'cập nhật' , value = 'tên tài khoản', method ='success' hoặc 'error'
    if (method == 'success') {
      Swal.fire({
        title: `${text}`,
        text: `${text} ${value} thành công`,
        icon: 'success',
      }).then((data) => {
        if (text == 'Thêm Người Dùng') {
          Swal.fire({
            title: `Thêm Người Dùng`,
            text: `Bạn có muốn tiếp tục thêm người dùng.`,
            icon: 'question',
            reverseButtons: true,
            showCancelButton: true,
            showConfirmButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'OK!',
            cancelButtonText: 'Hủy',
          }).then((result) => {
            if (!result.isConfirmed) {
              this.btnClose.nativeElement.click();
            }
            this.formUser.reset();
          });
        } else {
          // Cập nhật người dùng
          if (data.isConfirmed) {
            // đóng modal khi click ok
            this.btnClose.nativeElement.click();
          }
        }
      });
    } else if (method == 'error') {
      Swal.fire({
        title: `${text}  không thành công`,
        text: `${value}`,
        icon: 'warning',
      });
    }
  }

  constructor(
    private pattern: PatternService,
    private auth:AuthService,
    private user: UserService, 
  ) { 
    this.formUser = new FormGroup({
      taiKhoan: new FormControl({ value: '' }, [
        Validators.required,
        Validators.pattern(this.pattern.Pattern.taiKhoan),
      ]),
      matKhau: new FormControl(null, Validators.required),
      hoTen: new FormControl(null, Validators.required),
      soDt: new FormControl(null, Validators.required),
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern(
          this.pattern.Pattern.email
        ),
      ]),
      maLoaiNguoiDung: new FormControl(null, Validators.required),
    });
  }

  ngOnInit(): void {
  }

  updateNguoiDung() {
    // Cập nhật lại table khi thêm và cập nhật người dùng thành công
this.updateUser.emit();
}

  addUser(value) {
    this.formUser.markAllAsTouched(); 
    if (this.formUser.invalid) {
      return;
    }
    if (this.objectSuaUser) { 
      const updateUser = { ...value, maNhom: 'GP03' };
      this.auth.capNhat(updateUser).subscribe({
        next: () => {
          this.sweetAlert('Cập Nhật', value.taiKhoan, 'success');
          this.updateUser.emit();
        },
        error: (err) => {
          this.sweetAlert('Cập Nhật', err.error, 'error');
        },
      });
    } else {
      this.user.themUser(value).subscribe({
        next: () => {
          this.sweetAlert('Thêm Người Dùng', value.taiKhoan, 'success');
          this.updateNguoiDung();
          this.formUser.reset();
        },
        error: (err) => {
          this.sweetAlert('Thêm', err.error, 'error');
        },
      });
    }
  }

  ngOnChanges() {
    if (this.objectSuaUser) {
      this.formUser.setValue({
        //set giá trị cho input
        taiKhoan: this.objectSuaUser.taiKhoan,
        matKhau: this.objectSuaUser.matKhau,
        hoTen: this.objectSuaUser.hoTen,
        email: this.objectSuaUser.email,
        maLoaiNguoiDung: this.objectSuaUser.maLoaiNguoiDung,
        soDt: this.objectSuaUser.soDt,
      });
      this.formUser.controls['taiKhoan'].disabled;
      this.isThemNguoiDung = false;
      this.button = 'Cập Nhật'; // Tiêu đề nút button
      this.header = 'Cập Nhật Người Dùng'; // Tiêu đề của modal Header
    } else {
      this.formUser.reset();
      this.formUser.patchValue({
        maLoaiNguoiDung : 'KhachHang', //Set giá trị ban đầu là khách hàng
      })
      this.isThemNguoiDung = true;
      this.button = 'Cập Nhật'; // Tiêu đề nút button
      this.header = 'Cập Nhật Người Dùng'; // Tiêu đề của modal Header
    }
  }
}
