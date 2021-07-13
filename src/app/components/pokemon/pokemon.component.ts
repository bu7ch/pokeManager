import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PokemonAPI } from 'src/app/models/pokemon-api';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
@Input() pokemonInput: any
@Output() select = new EventEmitter();

pokemon!: PokemonAPI
  constructor(private servicePokemons: PokemonsService) { }

  ngOnInit(): void {
    this.servicePokemons.getPokemon(this.pokemonInput['url']).subscribe(resultat => {
      this.pokemon = resultat
    })
  }
  clicSurImage(){
    this.select.emit(this.pokemonInput)
  }

}
