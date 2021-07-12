import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generations',
  templateUrl: './generations.component.html',
  styleUrls: ['./generations.component.css']
})
export class GenerationsComponent implements OnInit {

generations = [
  'Génératrion I',
  'Génératrion II',
  'Génératrion III',
  'Génératrion IV',
  'Génératrion V',
  'Génératrion VI',
  'Génératrion VII'
];

  constructor() { }

  ngOnInit(): void {
  }

}
