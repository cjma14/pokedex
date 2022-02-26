import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { PokemonNamesResource, PokemonPagination } from '../../interfaces/pokemon.interface';
import { PokemonsService } from '../../services/pokemons.service';


@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {

  public title: string = "Pokemones";
  public total: number = 0;
  public pokemonResources$: Observable<PokemonNamesResource[]> = of([]);
  public pagination: PokemonPagination = {
    offset: 0,
    limit: 9
  }

  constructor(
    private pokemonsService: PokemonsService
  ) { }

  ngOnInit(): void {   
    this.paginate();
  }

  /**
 * Paginate records
 */
  paginate(): void {
    this.pokemonResources$ = this.pokemonsService.pokemons(this.pagination).pipe(
      tap(response => this.total = response.count),
      map(response => response.results)
    )
  }

  /**
  * Change page
  */
  changePage(params: any) {
    this.pagination = params;
    this.paginate()
  }


}
