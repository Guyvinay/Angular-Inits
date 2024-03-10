import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
  <label for="terms">Show Terms and Conditions</label>
  <input id="terms" type="checkbox" (change)="show = !show">
  <!-- <input id="terms" type="checkbox" (click)="show = !show"> -->
    <fieldset *ngIf="show">
      <legend>Terms and Conditions</legend>
      <hr>
      <p>1st Term </p>
      <p>2st Term </p>
      <p>3st Term </p>
      <p>4st Term </p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos labore ullam voluptates totam fugit dolorum vitae aliquam voluptatibus architecto aperiam!</p>
    </fieldset>

    <div *ngIf="!show" >
      {{title}}
    </div>

    <ng-template [ngIf]="show" >
       ng-template: {{title}}
    </ng-template>

    <ol>
      <li *ngFor="let hero of avengers" >{{hero}}</li>
    </ol>

  `,
  styles: [],
})
export class AppComponent {
  title = 'directives';
  show=true;
avengers=["Ironman", "Captain America", "Thor", "Black Widow", "Hulk", "Nick Fury", "Doctor Strange","Antman", "Iron Machine"];
}
