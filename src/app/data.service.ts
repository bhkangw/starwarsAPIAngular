import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DataService {
  pokemon: Array<any>
  constructor(private _http: Http) {
    this.pokemon = [];
  }

  getPoke(cb){
    console.log("in service")
    var rand = Math.floor(Math.random() * 152) + 1
    this._http.get(`https://pokeapi.co/api/v2/pokemon/${rand}`).subscribe((res)=>{
      cb(this.pokemon.push(res.json()))
    })
  }

  getAllCurrent(){
    return this.pokemon;
  }
}
