import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './components/compte/connexion/connexion.component';
import { CreationComponent } from './components/compte/creation/creation.component';
import { GenerationsComponent } from './components/generations/generations.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';

const routes: Routes = [
  { path: 'generations', component: GenerationsComponent},
  { path: 'pokemons', component: PokemonsComponent},
  { path: 'creerCompte', component: CreationComponent},
  { path: 'seConnecter', component: ConnexionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
