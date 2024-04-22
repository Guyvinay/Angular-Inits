import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserData } from './UserData';
import { HtmlTagDefinition } from '@angular/compiler';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    // console.log(this.items);
  }
  title = 'mdo-takeaway';
  items = Array.from({length: 100000}).map((_, i) => `Item---> ${i}`);
  

  displayedColumns: string[] = ['name', 'age'];
  dataSource = new MatTableDataSource<UserData>([
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    // Add more data as needed
  ]);

  text:string='';

  search(event: string){
    this.text=event;
  }

}
