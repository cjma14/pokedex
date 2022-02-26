import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../../../core/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  public passwordError: boolean = false;
  public registerForm!: FormGroup;
  public error: any = "";
  public isOpenALert: boolean = false;
  public alertText: string = "";
  public typeAlert: string = "";

  constructor(
    public userService: UsersService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: [null, [
        Validators.required,
        Validators.email
      ]
      ],
      password: [null,
        Validators.required
      ],
      confirmPassword: [null,
        Validators.required
      ]
    })
  }

  register() {
    const user = this.registerForm.value;
    if (user.password != user.confirmPassword){
      this.alert("danger","Passwords do not match")
      return;
    }
    this.userService.register(user).subscribe({
      next: (res: any) => this.alert("success", "Registered user successfully"),
      error: (err: any) => this.alert("danger", err.error.error)
       
    });

  }

  alert(type: string = "", text: string = "") {
    this.isOpenALert = true;
    this.alertText   = text;
    this.typeAlert   = type;
    setTimeout(() => this.isOpenALert = false, 5000);

  }


}
