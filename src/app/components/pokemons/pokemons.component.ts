import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css'],
})
export class PokemonsComponent implements OnInit {
  select: any;
  pokemons:any;
  count = 0;
  
  constructor(private servicePokemons: PokemonsService) {}

  ngOnInit(): void {
    this.pokemons = this.servicePokemons.getPokemons()
    this.count = this.servicePokemons.countPokemons()
  }
}
