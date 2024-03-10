import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from "./child.component";

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
    <!-- <h1>Hello WOlf</h1> -->
    
  `,
    imports: [RouterOutlet, ChildComponent]
})
export class AppComponent {
  title = 'D-04';
  count:number=0;
  message:any = "";
  handleChildEmit(message:any) {
  // alert(message);
  this.message = message;
  }
}
