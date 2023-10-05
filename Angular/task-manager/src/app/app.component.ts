import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template:`<h1>Hello World</h1>`,
  // styles:[`h1{color:red}`]
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task-manager';
  role = 'Admin';
}
