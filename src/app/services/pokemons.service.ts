import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenerationAPI } from '../models/generation-api';
import { PokemonAPI } from '../models/pokemon-api';
import { PokemonsAPI } from '../models/pokemons-api';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  
  constructor(private http: HttpClient) { }

getGenerations() {
  let url = 'https://pokeapi.co/api/v2/generation';
  return this.http.get<GenerationAPI>(url)
}

  getPokemons() {
    let url = 'https://pokeapi.co/api/v2/pokemon/'
    return this.http.get<PokemonsAPI>(url)
  }
  getPokemon(url:any) {
    return this.http.get<PokemonAPI>(url)
  }

  // countPokemons() {
  //   return this.pokemons.length;
  // }

  // rechercherPokemon(nomDuPokemon:string){
  //   let regex = new RegExp(nomDuPokemon, 'gi');
  //   return this.pokemons.filter(pokemon => pokemon.nom.match(regex))
  //   console.log()
  // }
}
