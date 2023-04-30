import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { PokeApiService } from 'src/app/services/pokeapi.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  private url: string = 'https://pokeapi.co/api/v2/pokemon';
  private urlSpecie: string = 'https://pokeapi.co/api/v2/pokemon-species';
  public pokemon: any;
  public isLoading: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: PokeApiService
  ) {}

  ngOnInit(): void {
    this.getPokemon;
  }

  get getPokemon() {
    const id = this.activatedRoute.snapshot.params['id'];
    const pokemon = this.service.getPokemons(`${this.url}/${id}`);
    const specie = this.service.getPokemons(`${this.urlSpecie}/${id}`);

    forkJoin([pokemon, specie]).subscribe((res) => {
      this.pokemon = res;
      this.isLoading = true;
    });
    return this.pokemon;
  }
}
