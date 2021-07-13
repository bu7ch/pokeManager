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

  getPokemons(limit: number, offset:number) {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    return this.http.get<PokemonsAPI>(url)
  }
  getPokemon(url:any) {
    return this.http.get<PokemonAPI>(url)
  }

  // countPokemons() {
  //   return this.pokemons.length;
  // }
  
}

