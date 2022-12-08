import { Component, OnInit } from '@angular/core';
import { PokeapiserviceService } from 'src/app/services/pokeapiservice.service';
@Component({
  selector: 'app-myteam',
  templateUrl: './myteam.component.html',
  styleUrls: ['./myteam.component.sass']
})
export class MyteamComponent  implements OnInit{
allPokemons: any[] = [];
pokemonsTeam: any []= [];
mostrar: boolean = false

  constructor(private pokeapiservice: PokeapiserviceService){  }

  ngOnInit(): void {

  this.allPokemons = this.pokeapiservice.getAllPokemons();

  setTimeout(() => {
    this.pokemonsTeam.push(this.allPokemons.filter(x => x.id==17)[0]);
    this.pokemonsTeam.push(this.allPokemons.filter(x => x.id==34)[0]);
    this.pokemonsTeam.push(this.allPokemons.filter(x => x.id==42)[0]);
    this.pokemonsTeam.push(this.allPokemons.filter(x => x.id==44)[0]);
    this.pokemonsTeam.push(this.allPokemons.filter(x => x.id==95)[0]);
    this.pokemonsTeam.push(this.allPokemons.filter(x => x.id==146)[0]);
    // console.log(this.pokemonsTeam);

      }, 2000);


    // this.allPokemons = this.pokeapiservice.getAllPokemons();
    // this.pokemonsTeam.push(this.allPokemons[0])
    // // this.loadpage();
    // console.log(this.allPokemons);

    // // this.allPokemons = this.pokeapiservice.getAllPokemons();
    // // console.log(this.allPokemons);

    // // // FILTRAR MIS POKEMONS
    // this.pokemonsTeam.push(this.allPokemons.filter(x => x.id=20));
    // console.log(this.allPokemons.filter(x => x.name == "pikachu"));
    // this.pokemonsTeam.push(this.allPokemons.filter(x => x.id==70));
    // this.pokemonsTeam.push(this.allPokemons.filter(x => x.id==120));
    // this.pokemonsTeam.push(this.allPokemons.filter(x => x.id==24));
    // this.pokemonsTeam.push(this.allPokemons.filter(x => x.id==6));
    // this.pokemonsTeam.push(this.allPokemons.filter(x => x.id==3));
    // console.log(this.pokemonsTeam);

  }




//  async loadpage (){
//   this.allPokemons = await this.pokeapiservice.getAllPokemons();
//   this.pokemonsTeam.push(this.allPokemons.find(x => x.id==20));

//  }


  // getArcanine(){
  //   // var pokemonArcanine: any[]=[];
  //   this.pokeapiservice.getPokemons(1,58).subscribe((response:any)=>{
  //     response.results.forEach((result: {name:string;}) => {
  //       this.pokeapiservice.getMoreData(result.name).subscribe((uniqResponse:any)=>{
  //         this.pokemonArcanine.push(uniqResponse);
  //       });
  //     })
  //   })
  //   return this.pokemonArcanine;
  // }
}



