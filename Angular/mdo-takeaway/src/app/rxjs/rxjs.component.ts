import { Component } from '@angular/core';
import { Subject, takeUntil, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.scss'
})
export class RxjsComponent {
  private unsubscribe$: Subject<void> = new Subject<void>();
  user: any;
  error: string | null = null;

  constructor(private githubService: GithubService) {}

  search(event: any): void {
    const target = event.target as HTMLInputElement;
    const username = target.value;
    if (!username) {
      this.user = null;
      return;
    }


    this.githubService.getUser(username)
      .pipe(
        takeUntil(this.unsubscribe$),
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((user: any) => {
          this.error = null;
          this.user = null;
          return this.githubService.getUser(username);
        })
      )
      .subscribe(
        (user: any) => {
          this.user = user;
        },
        (error: any) => {
          this.error = error;
        }
      );
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
