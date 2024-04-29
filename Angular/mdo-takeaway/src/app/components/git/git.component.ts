import { Component, OnInit } from '@angular/core';
import { EMPTY, Subject, Subscription, debounceTime, distinctUntilChanged, switchMap, takeUntil } from 'rxjs';
import { AppService } from '../../services/app.service';
import { GithubService } from '../../services/github.service';
import { User } from '../../modals/user';

@Component({
  selector: 'app-git',
  templateUrl: './git.component.html',
  styleUrl: './git.component.scss'
})
export class GitComponent implements OnInit {
  
  private unsubscribe$: Subject<void> = new Subject<void>();
  searchFieldSub: Subject<string> = new Subject();
  subscription !: Subscription;
  user: any;
  messages:string='Message to be passed from GitComponent';

  constructor(
    private service:AppService,
    private gitService:GithubService
  ){
    this.gitService.getUserSubject().pipe(takeUntil(this.unsubscribe$))
    .subscribe((user)=>{
      this.user=user;
    })
  }
  
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

  getUserGitInfo(username:any):void{
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

