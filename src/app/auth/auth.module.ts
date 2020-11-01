import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RouterModule, Routes } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import {SignUpGuard} from '../core/guards/sign-up.guard'
 import {SignInAdminComponent} from './sign-in-admin/sign-in-admin.component'
const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {path: 'signinadmin',component:SignInAdminComponent},
      {path: 'signin', component: SignInComponent},
      {path: 'signup', component: SignUpComponent, 
      canDeactivate: [SignUpGuard]
    }
    ]
  }
]


@NgModule({
  declarations: [AuthComponent, SignInComponent, SignUpComponent, SignInAdminComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    RouterModule,
    FormsModule,
  ],
  exports: [
    AuthComponent,SignInComponent
  ]
})
export class AuthModule { }
