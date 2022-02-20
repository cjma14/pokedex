import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  public email: string = "";
  public password: string = "";
  public confirmPassword: string = "";
  

  register() {
    console.log(this.email);
    console.log(this.password);
    console.log(this.confirmPassword);
  }
}
