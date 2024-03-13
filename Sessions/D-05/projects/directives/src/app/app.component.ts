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
    <fieldset>
      <legend>
        Ng-Style
      </legend>

      <div [style]="styleProp" >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt similique voluptatem recusandae adipisci blanditiis laborum voluptatibus amet vero odit maxime omnis, tempore odio dicta facilis eveniet nostrum vel a reiciendis!
      </div>
      <div [style.backgroundColor]="bgcol1" >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt similique voluptatem recusandae adipisci blanditiis laborum voluptatibus amet vero odit maxime omnis, tempore odio dicta facilis eveniet nostrum vel a reiciendis!
      </div>

      <div [ngStyle]="{'background-color':bgcol2, 'color':'darkblue'}" >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt similique voluptatem recusandae adipisci blanditiis laborum voluptatibus amet vero odit maxime omnis, tempore odio dicta facilis eveniet nostrum vel a reiciendis!
      </div>

      <div [ngStyle]="{'background-color':bgcol2, 'color':rating>3?'red':'green'}" >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt similique voluptatem recusandae adipisci blanditiis laborum voluptatibus amet vero odit maxime omnis, tempore odio dicta facilis eveniet nostrum vel a reiciendis!
      </div>
    </fieldset>
    <fieldset>
      <legend>NgCLass</legend>
      <div [ngClass]="{redbox:rating>2, bluebox:rating>4}" >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt similique voluptatem recusandae adipisci blanditiis laborum voluptatibus amet vero odit maxime omnis, tempore odio dicta facilis eveniet nostrum vel a reiciendis!
      </div>
    </fieldset>
  `,
  styles: [`
    .rating{
      margin:0px;
      font-family:arial;
      color:goldenrod;
    }
    .redbox{
      width:330px;
      background-color:red;
      text-align:center;
      margin:auto;
    }
    .bluebox{
      width:330px;
      background-color:blue;
      text-align:center;
      margin:auto;
    }
  `],
})
export class AppComponent {
  title = 'directives';
  avengers=["Ironman", "Captain America", "Thor", "Black Widow", "Hulk", "Nick Fury", "Doctor Strange","Antman", "Iron Machine"];
  rating:any;
  styleProp="width:400px; padding:15px; margin:auto; font-family:arial; text-align:justify; background-color:silver; border:1px solid darkslategrey"
  bgcol1="yellow"
  bgcol2="cyan"
}
