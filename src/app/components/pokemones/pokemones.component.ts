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
pokemonsalltypes: any[] = [];
pokemonstypes: any[] = [];
mostrar: boolean = true;

  //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  // ========= CONSTRUCTOR FROM THE SERVICE WHAT HAVE THE API =========
  //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

  constructor(private pokeapiserviceservice: PokeapiserviceService){}
  ngOnInit(): void {
      this.allPokemons =this.pokeapiserviceservice.getAllPokemons();
      this.pokemons = this.allPokemons
      this.pokemonstypes = this.allPokemons
  }
  //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  // ====================== FILTER FOR TYPES ===========================
  //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  filtertypes(value:string){
    this.pokemons= []
    this.allPokemons.forEach((element) => {
      element.types.forEach((type:any) => {
        if (type.type.name ==value){
          this.pokemons.push(element)
        }
      })
    });
  }
  //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  // ================ SEARCH BAR AND FILTER SERACH FROM POKEMONS =======
  //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  searchPokemon(value:any){
    if(value){
      this.pokemons = this.allPokemons.filter(x => x.name.includes (value.toLowerCase()));
      // filter by name all pokemons what are in POKEMONS length =======
      this.pokemonnotfound=false;
      if (this.pokemons.length==0){
        this.pokemonnotfound=true;
      }
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
  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  // ================== FILTER FOR TYPE ===============
  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

  guardarLocalStorage(){

  }


}


