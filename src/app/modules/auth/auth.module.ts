import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BoostrapModule } from '../../shared/boostrap/boostrap.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routes } from './auth.routing';

import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';




@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    BoostrapModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    RouterModule
  ]
})
export class AuthModule { }
