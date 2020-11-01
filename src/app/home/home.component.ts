import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import {PhimService} from '../core/services/phim.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loading: boolean=true;
  constructor(private spinner: NgxSpinnerService,private PhimService:PhimService ){ }

  ngOnInit(): void {
this.loading=true;
this.spinner.show();
setTimeout(() => {
  this.spinner.hide();
}, 3000);
    this.PhimService.layDanhSachPhim().subscribe({
      next: (result) => {
        // this.danhSachPhim = result;
        this.loading = false;

      },
      error: (err) => {
        console.log(err);
        // this.error = true;
        // this.loading = false;
      },
    });
   
  }

  

}
