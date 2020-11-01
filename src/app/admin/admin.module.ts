import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { UsersComponent } from './users/users.component';
import { MoviesComponent } from './movies/movies.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import {MaterialModule} from '../core/material/material.module'
import {SharingModule} from '../core/share/sharing.module';
import { CreateUpdateUserComponent } from './create-update-user/create-update-user.component';
import { CreateUpdateMovieComponent } from './create-update-movie/create-update-movie.component';
import { CreateUpdateShowtimesComponent } from './create-update-showtimes/create-update-showtimes.component'
import {AdminGuard} from '../core/guards/admin.guard';
const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'users', pathMatch: 'full' },
      { path: 'users', component: UsersComponent, data: { title: 'Users' } },
      { path: 'movies', component: MoviesComponent, data: { title: 'Movies' } },
    ],
  },
];

@NgModule({
  declarations: [
    AdminComponent,
    UsersComponent, 
    MoviesComponent, 
    CreateUpdateUserComponent, 
    CreateUpdateMovieComponent, 
    CreateUpdateShowtimesComponent,],
  imports: [
    CommonModule, 
    RouterModule.forChild(routes), 
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    SharingModule
],
})
export class AdminModule { }
