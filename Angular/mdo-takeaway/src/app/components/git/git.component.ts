import { Component, OnInit } from '@angular/core';
import { EMPTY, Subject, Subscription, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-git',
  templateUrl: './git.component.html',
  styleUrl: './git.component.scss'
})
export class GitComponent implements OnInit {
  
  searchFieldSub: Subject<string> = new Subject();
  subscription !: Subscription;
  user: any;

  constructor(
    private service:AppService
  ){}
  
  ngOnInit(): void {
      this.subscription = this.searchFieldSub.pipe(
                            debounceTime(800),
                            distinctUntilChanged(),
                            switchMap((searchStr)=>{
                              if(searchStr){
                                this.getUserInfo(searchStr);
                                return EMPTY;
                              }
                              return EMPTY;
                            })
                          ).subscribe((res)=>{});
  }

  getUserInfo(username:any):void{
    console.log(username);
    this.service.getUserInfo(username).pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((user)=>{
        this.user=user;
        console.log(user);
        // return this.getUserInfo(username);
        return EMPTY;
      })
    )
    .subscribe((res)=>{})
  }

}

