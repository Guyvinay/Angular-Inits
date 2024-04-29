import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserData } from './UserData';
import { HtmlTagDefinition } from '@angular/compiler';
import { EMPTY, Subject, Subscription, debounceTime, distinctUntilChanged, of, switchMap } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  alertType:string='alert-success';
  /*
  ngOnInit(): void {
    this.subscription = this.searchFieldSub.pipe(
      debounceTime(1300),
      distinctUntilChanged(),
      switchMap((searchStr)=>{
        console.log(searchStr);
        this.text = searchStr;
        return EMPTY;
      })
    ).subscribe(() => {});
  }
  */
  ngOnInit(): void {
    this.subscription = this.searchFieldSub.pipe(
      debounceTime(1300),
      distinctUntilChanged(),
      switchMap((searchStr)=> of(searchStr))
    ).subscribe((searchStr) => {
      console.log(searchStr);
      this.text = searchStr;
    });
  }
  
  subscription!: Subscription;
  title = 'mdo-takeaway';
  items = Array.from({length: 100000}).map((_, i) => `Item---> ${i}`);
  searchFieldSub: Subject<string> = new Subject();

  displayedColumns: string[] = ['name', 'age'];
  dataSource = new MatTableDataSource<UserData>([
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
  ]);

  

  text:string='';

  // search(event: string){
  //   this.text=event;
  // }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  

}
