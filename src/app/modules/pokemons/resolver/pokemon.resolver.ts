import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Pokemon } from '../interfaces/pokemon.interface';
import { PokemonsService } from '../services/pokemons.service';

@Injectable({
    providedIn: 'root'
})
export class PokemonResolver implements Resolve<any>
{
    constructor(
        private pokemonService: PokemonsService,
        private router: Router
    ) {
    }

    /**
     * Obtiene los datos de un pokemon
     *
     * @param route
     * @param state
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        const id = route.paramMap.get('id')

        return this.pokemonService.pokemon(id).pipe(
            catchError((err) => {

                this.router.navigateByUrl('/pokemons')

                return throwError(err);
            })
        )
    }
}
