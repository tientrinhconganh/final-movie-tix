import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeModule } from '../pipe/pipe.module';
import { ModalTrailerComponent } from '../component/modal-trailer/modal-trailer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ThemSuaPhimComponent } from './components/them-sua-phim/them-sua-phim.component';
import { ThemSuaLichChieuComponent } from './components/them-sua-lich-chieu/them-sua-lich-chieu.component';
import { WarningComponent } from './components/warning/warning.component';
import { ConfirmComponent } from './components/confirm/confirm.component'
@NgModule({
  declarations: [
    ModalTrailerComponent, 
    ThemSuaPhimComponent, 
    ThemSuaLichChieuComponent, 
    WarningComponent, 
    ConfirmComponent],
  imports: [
    CommonModule,
    PipeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ModalTrailerComponent,
    ThemSuaPhimComponent, 
    ThemSuaLichChieuComponent, 
    WarningComponent, 
    ConfirmComponent
  ]
})
export class SharingModule { }
