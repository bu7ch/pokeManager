import { Component, OnInit } from '@angular/core';
import { FormSearchPokemon } from 'src/app/models/form-search-pokemon';
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
  formSearchPokemon = new FormSearchPokemon('');
  
  constructor(private servicePokemons: PokemonsService) {}

  ngOnInit(): void {
    this.pokemons = this.servicePokemons.getPokemons()
    this.count = this.servicePokemons.countPokemons()
  }
  rechercher(nomDuPokemon: any){
    this.pokemons = this.servicePokemons.rechercherPokemon(nomDuPokemon)
    
  }

  annuler(){
    this.pokemons = this.servicePokemons.getPokemons()
    this.formSearchPokemon.setNom('')
  }

}
