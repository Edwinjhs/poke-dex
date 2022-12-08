import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeapiserviceService {


  constructor(private http:HttpClient) { }

  getTypesPokemons(limit: number=151, offset: number=0){
    return this.http.get(`https://pokeapi.co/api/v2/types?limit=${limit}&offset=${offset}`)

  }

  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  //================ GET ONLY THE NAME OF POKEMONS FROM THE API ===========================
  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

  getPokemons(limit: number, offset: number){
      return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    }
  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  // ============== GET DATA OF POKEMONS FROM THE API =============================
  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

  getMoreData(name:string){
      return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    }
  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  // ================== GET NAME AND DATA OF 151 POKEMONS in VAR POKEMONS ===================
    // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

  getAllPokemons() {
      var pokemons: any[]=[];
      this.getPokemons(151, 0).subscribe((response:any)=>{
        // Get 151 pokemons, and start from 0
        // console.log(response) //show me 151 pokemons (only name)
        response.results.forEach((result: {name:string;}) => {
          this.getMoreData(result.name).subscribe((uniqResponse:any)=>{
            pokemons.push(uniqResponse);
        //  console.log(uniqResponse); // show me 151 pokemons with name and with data
          })
        })
      })
      return pokemons;
    }
    // getCategories(){
    //   var typesPokemons: any [] = [];
    //   this.getTypesPokemons(151,0).subscribe((response: any) =>{
    //     response.results.forEach(response);
    //     typesPokemons.push(response)

    // })
    // return typesPokemons;
    // // console.log(typesPokemons);
    // }
}



