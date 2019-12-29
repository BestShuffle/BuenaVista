import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ArboreaRegisterComponent} from './arborea-register/arborea-register.component';
import {ArboreaHomeComponent} from './arborea-home/arborea-home.component';
import {ArboreaLoginComponent} from './arborea-login/arborea-login.component';
import {ArboreaPlayersRankingComponent} from './arborea-players-ranking/arborea-players-ranking.component';
import {ArboreaGuildsRankingComponent} from './arborea-guilds-ranking/arborea-guilds-ranking.component';

const routes: Routes = [
  { path: 'login', component: ArboreaLoginComponent },
  { path: 'register', component: ArboreaRegisterComponent },
  { path: 'players-ranking', component: ArboreaPlayersRankingComponent },
  { path: 'guilds-ranking', component: ArboreaGuildsRankingComponent },
  { path: '', component: ArboreaHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
