import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
  <fieldset>
    <legend>*ngFor Directive</legend>
    <div>
      <div *ngFor="let hero of avengers; index as ind; first as fst; last as lst; odd as od; even as ev" >
      
      {{ind  }}~ 
      <span *ngIf="fst">First Avanger:</span>  
      <span *ngIf="lst">Last Avanger:</span>  
      <span *ngIf="od">Odd Avanger:</span>  
      <span *ngIf="ev">Even Avanger:</span>  
      <span *ngIf="!lst&&!fst">In  Between Avanger:</span>  
      {{hero}} 
    </div>
    </div>

    <ng-template ngFor let-hero [ngForOf]="avengers">
      {{hero}}
    </ng-template>

  </fieldset>
    <fieldset>
      <legend>*NgSwitch Directive</legend>

      <input #rng type="range"  min="0" max="5" [value]="rating" (input)="rating=rng.value"  />
      {{rating}}
      <br>
      <!-- <input #rng type="range"  min="0" max="5" [value]="rating" (change)="rating=rng.value" > 
      {{rating}}
      -->
      <div [ngSwitch]="rating" >
        <h3 class="rating" *ngSwitchCase="'1'" >*</h3>
        <h3 class="rating" *ngSwitchCase="'2'" >**</h3>
        <h3 class="rating" *ngSwitchCase="'3'" >***</h3>
        <h3 class="rating" *ngSwitchCase="'4'" >****</h3>
        <h3 class="rating" *ngSwitchCase="'5'" >*****</h3>
        <h3 class="rating" *ngSwitchDefault >No rating</h3>
      </div>

    </fieldset>
    <fieldset>
      <legend>*ngNonBindable</legend>

      <h3 ngNonBindable >{{Hello Wolf}}</h3>

    </fieldset>
  `,
  styles: [`
    .rating{
      margin:0px;
      font-family:arial;
      color:goldenrod;
    }
  `],
})
export class AppComponent {
  title = 'directives';
  avengers=["Ironman", "Captain America", "Thor", "Black Widow", "Hulk", "Nick Fury", "Doctor Strange","Antman", "Iron Machine"];
  rating:any;
}
