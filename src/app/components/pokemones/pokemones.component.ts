import { Component, OnInit } from '@angular/core';
import { PokeapiserviceService } from 'src/app/services/pokeapiservice.service';

@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.component.html',
  styleUrls: ['./pokemones.component.sass']
})
export class PokemonesComponent implements OnInit {

pokemons: any []=[];
pokemonnotfound: boolean = false;
allPokemons: any[] = [];
page: number = 1;


  //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  // ================ CONSTRUCTOR FROM THE SERVICE WHAT HAVE THE API =======
  //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

  constructor(private pokeapiserviceservice: PokeapiserviceService){}
  ngOnInit(): void {
      this.allPokemons =this.pokeapiserviceservice.getAllPokemons();
      this.pokemons = this.allPokemons
  }
  //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  // ================ SEARCH BAR AND FILTER SERACH FROM POKEMONS =======
  //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

  searchPokemon(value:any){
    if(value){
      this.pokemons = this.allPokemons.filter(x => x.name.includes (value));
      // filter by name all pokemons what are in POKEMONS length =======

      (error:any)=>{
        this.pokemons = [];
        this.pokemonnotfound=true;
      };
    }else{
      this.pokeapiserviceservice.getAllPokemons();
      this.pokemonnotfound = false;
    }
  }

  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  // ================== FOR THE NAVEGATION ===============
  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  OnchangePages(event:any){
    this.page=event;
  }
}
