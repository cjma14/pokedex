import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/core/services/storage.service';
import { UsersService } from 'src/app/core/services/user.service';
import { Session } from "../../../../core/interfaces/auth.interface";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  public loginForm!: FormGroup;
  public error: any = "";
  public isOpen: boolean = false;

  constructor(
    private usersService: UsersService,
    private storageService: StorageService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [null, [
          Validators.required, 
          Validators.email
        ]
      ],
      password: [null, 
        Validators.required
      ]
    })
  }

  login() {
    const user = this.loginForm.value;

    this.usersService.login(user).subscribe({
      next: (res: any) => {
        const Session = { ...user, ...res };
        this.correctLogin(Session);
      },
      error: (err: any) => {
        this.isOpen = true;
        this.error = err.error.error;

        setTimeout(() => {
          this.isOpen = false;
        }, 5000);

      }
      
    });
    
  }
  
  private correctLogin(data: Session): void {
    this.storageService.setCurrentSession(data);
    this.router.navigate(['/pokemons']);
  }

  

}
