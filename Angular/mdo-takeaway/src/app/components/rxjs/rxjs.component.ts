import { Component } from '@angular/core';
import { map, of } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.scss'
})
export class RxjsComponent {

  constructor(){}

  // ** source observable of integers. */
  nums = of(1, 2, 3);


}
