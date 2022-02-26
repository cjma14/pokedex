import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonsComponent } from './pages/pokemons/pokemons.component';
import { RouterModule } from '@angular/router';
import { routes } from './pokemons.routing';
import { BoostrapModule } from 'src/app/shared/boostrap/boostrap.module';
import { PokemonsService } from './services/pokemons.service';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { ControlNavigationComponent } from './components/control-navigation/control-navigation.component';
import { PokemonCardDetailComponent } from './components/pokemon-card-detail/pokemon-card-detail.component';
import { PokemonDetailComponent } from './pages/pokemon-detail/pokemon-detail.component';
import { PokemonResolver } from './resolver/pokemon.resolver';

@NgModule({
  declarations: [
    PokemonsComponent,
    PokemonCardComponent,
    ControlNavigationComponent,
    PokemonCardDetailComponent,
    PokemonDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BoostrapModule
  ],
  providers: [
    PokemonsService,
    PokemonResolver
  ]
})
export class PokemonsModule { }
