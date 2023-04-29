import { Component, OnInit } from '@angular/core';
import { PokeapiService } from 'src/app/services/pokeapi.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public getAllPokemons: any;

  constructor(private service: PokeapiService) {}

  ngOnInit(): void {
    this.service.allPokemons.subscribe((res) => {
      this.getAllPokemons = res.results;
    });
  }
}
