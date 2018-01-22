import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {
  pokemon: Array<any>
  constructor(private _dataService: DataService) {
    this.pokemon = [];
  }

  getAllCurrent(){
    this.pokemon = this._dataService.getAllCurrent();
  }

  getPoke(){
    this._dataService.getPoke(()=>{
      this.getAllCurrent();
    })
  }

  ngOnInit() {
  }

}
