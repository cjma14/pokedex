import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BoostrapModule } from '../../shared/boostrap/boostrap.module';
import { FormsModule } from '@angular/forms';


import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';




@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    BoostrapModule,
    FormsModule,
    RouterModule
  ]
})
export class AuthModule { }
