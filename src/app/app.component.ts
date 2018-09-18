import { Component } from '@angular/core';
import { resolve } from 'url';
import { reject } from 'q';
import { callbackify } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

appareils = [
  {
    name : 'Mon premier post',
    content: 'Voici mon tout mais vraiment mon tout premier poste, ainsi que mes premières lignes en TS'
  },
  {
    name: 'Mon deuxième post',
    content: 'Sinon ça va ?'
  },
  {
    name: 'Encore un post',
    content: 'Oui'
  }
];

}

