import { Component, OnInit } from '@angular/core';
import { faOptinMonster } from '@fortawesome/free-brands-svg-icons';
import { FormSearchPokemon } from 'src/app/models/form-search-pokemon';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css'],
})
export class PokemonsComponent implements OnInit {
  select: any;
  pokemons: any;
  count = 0;
  limit = 25;
  page = 1;
  formSearchPokemon = new FormSearchPokemon('');
  faOptinMonster = faOptinMonster;
  easterEggs = false;

  constructor(private servicePokemons: PokemonsService) {}

  ngOnInit(): void {
    this.servicePokemons
      .getPokemons(this.limit, this.page)
      .subscribe((result) => {
        this.pokemons = result.results;
        this.count = result.count;
      });
  }
  rechercher(nomDuPokemon: any) {
    const regex = new RegExp(nomDuPokemon, 'gi');
    this.pokemons = this.servicePokemons
      .getPokemons(this.limit, this.page)
      .subscribe((res) => {
        this.pokemons = res.results.filter((pokemon) =>
          pokemon.name.match(regex)
        );
      });
    this.easterEggs = false;
    if (nomDuPokemon === 'C3PO') {
      this.easterEggs = true;
    }
  }
  annuler(){
    this.pokemons = this.servicePokemons.getPokemons(this.limit, this.page).subscribe( res => {
      this.pokemons = res.results
    })
    this.formSearchPokemon.setNom('')
  }
}
