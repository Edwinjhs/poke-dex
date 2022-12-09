import { Component, OnInit } from '@angular/core';
import { PokeapiserviceService } from 'src/app/services/pokeapiservice.service';

@Component({
  selector: 'app-yourteam',
  templateUrl: './yourteam.component.html',
  styleUrls: ['./yourteam.component.sass']
})
export class YourteamComponent implements OnInit{
  allPokemons: any[] = [];
  pokemonsTeam: any []= [];
  mostrar: boolean = false

    constructor(private pokeapiservice: PokeapiserviceService){  }

    ngOnInit(): void {

    this.allPokemons = this.pokeapiservice.getAllPokemons(),

    setTimeout(() => {
      this.pokemonsTeam.push(this.allPokemons.filter(x => x.id==17)[0]);
      this.pokemonsTeam.push(this.allPokemons.filter(x => x.id==34)[0]);
      this.pokemonsTeam.push(this.allPokemons.filter(x => x.id==42)[0]);
      this.pokemonsTeam.push(this.allPokemons.filter(x => x.id==44)[0]);
      this.pokemonsTeam.push(this.allPokemons.filter(x => x.id==95)[0]);
      this.pokemonsTeam.push(this.allPokemons.filter(x => x.id==146)[0]);
      // console.log(this.pokemonsTeam);

        }, 2000);

  }
}




