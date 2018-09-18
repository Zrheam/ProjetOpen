import { Component,Input,OnInit } from '@angular/core';
import { Button } from 'protractor';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName : string;
  @Input() appareilStatus : string;
  lastUpdate = new Date();
  @Input() content : string;
  bPlus  = 0;
  bMoins = 0;
  cptBoutton = 0;
 
  getPlus(){
    this.bPlus += 1;
    return this.bPlus;
  }

  getMoins(){
    this.bMoins -= 1;
    return this.bMoins;
  }

  getTot(){   
    this.cptBoutton = this.bPlus + this.bMoins;
    return this.cptBoutton; 
  }

  constructor() { }

  ngOnInit() {
  }

  getColorBouton(){
    if( this.getTot() > 0 ){
      return 'green';
    }
    else if(this.getTot() < 0 ) {
      return 'red';
    }
    else {
      return 'white';
    }
  }

}
