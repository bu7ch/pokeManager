import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
@Input() pokemon: any
@Output() select = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  clicSurImage(){
    this.select.emit(this.pokemon)
  }

}
