import { NgModule } from '@angular/core';
import { ActivationStart, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MyteamComponent } from './components/myteam/myteam.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { PokemonesComponent } from './components/pokemones/pokemones.component';
import { YourteamComponent } from './components/yourteam/yourteam.component';

const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: 'full'},
  {path: 'home', component:HomeComponent},
  {path: 'myteam', component: MyteamComponent},
  {path: 'yourteam', component: YourteamComponent},
  {path: 'pokemones', component:PokemonesComponent},
  {path: '**',component: PagenotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
