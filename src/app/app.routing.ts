import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./modules/auth/login/login.component";
import { RegisterComponent } from "./modules/auth/register/register.component";


const appRoutes = [
    { path: "", component: LoginComponent, pathMatch: "full" },
    { path: "login", component: LoginComponent, pathMatch: "full" },
    { path: "register", component: RegisterComponent, pathMatch: "full" },
];
export const routing = RouterModule.forRoot(appRoutes);