import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heros';
import {Observable,of} from 'rxjs'
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

   hero: Hero | undefined;

  getHero(id: number) : Observable<Hero>  {
     this.hero = HEROES.find((hero)=>hero.id==id) !;
     this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(this.hero);
    
  }

  constructor(private messageService:MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add("HeroService: fetched heroes");
    return heroes;
  }
}
