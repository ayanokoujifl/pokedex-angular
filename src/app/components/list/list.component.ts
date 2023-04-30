import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/services/pokeapi.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public getAllPokemons: any;
  private setAllPokemons: any;

  constructor(private service: PokeApiService) {}

  ngOnInit(): void {
    this.service.allPokemons.subscribe((res: any) => {
      this.setAllPokemons = res.results;
      this.getAllPokemons = this.setAllPokemons;
    });
  }

  public getSearchPokemon(pokemom: string) {
    const filter = this.setAllPokemons.filter((res: any) => {
      return !res.name.indexOf(pokemom.toLowerCase());
    });
    this.getAllPokemons = filter;
  }
}
