import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from "./child.component";

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
  <h1>From AppComponent</h1>
  <!-- <app-child quantity="{{count}}" > -->
  <app-child [quantity]="count" (childEvent)="handleChildEmit($event)" >
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <button>Click</button>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sapiente molestias culpa dolor atque magnam in autem sint maxime? Beatae.</p>
    <p class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sapiente molestias culpa dolor atque magnam in autem sint maxime? Beatae.</p>
    <div>
      {{title}}
    </div>
    <div id="title">
      {{title}}
    </div>
    <ul>
      <li>List Item 1 </li>
      <li>List Item 2 </li>
      <li>List Item 3 </li>
      <li>List Item 4 </li>
      <li>List Item 5 </li>
    </ul>
  </app-child>
  <button (click)="count=count+1">Count Button : {{count}} </button>
  `,
    imports: [RouterOutlet, ChildComponent]
})
export class AppComponent {
  title = 'D-04';
  count:number=0;
  handleChildEmit(message:any) {
  alert(message);
  }
}
