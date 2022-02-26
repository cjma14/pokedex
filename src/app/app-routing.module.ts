import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizatedGuard } from './core/guards/authorizated.guard';
import { LayoutComponent } from './layout/layout.component';
LayoutComponent
const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'pokemons'
  },
  // Auth routes
  {
    path: '',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  // App routes
  {
    path: '',
    canActivate: [AuthorizatedGuard],
    canActivateChild: [AuthorizatedGuard],
    component: LayoutComponent,
    children: [
      {
        path: 'pokemons',
        loadChildren: () => import('./modules/pokemons/pokemons.module').then(m => m.PokemonsModule)
      },
    ]
  },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
