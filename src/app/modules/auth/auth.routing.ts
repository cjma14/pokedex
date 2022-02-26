import { Routes } from '@angular/router';
import { LoginComponent } from "../auth/pages/login/login.component";
import { RegisterComponent } from "../auth/pages/register/register.component";

export const routes: Routes = [
    { path: "login", component: LoginComponent, pathMatch: "full" },
    { path: "register", component: RegisterComponent, pathMatch: "full" },
];
