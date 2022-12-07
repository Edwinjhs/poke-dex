import { Component, OnInit } from '@angular/core';
import { PokeapiserviceService } from 'src/app/services/pokeapiservice.service';
@Component({
  selector: 'app-myteam',
  templateUrl: './myteam.component.html',
  styleUrls: ['./myteam.component.sass']
})
export class MyteamComponent  implements OnInit{
  // pokemonArcanine: any =[]

  constructor(private pokeapiservice: PokeapiserviceService){}

  ngOnInit(): void {
    // this.pokemonArcanine = this.getArcanine();
  }

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



