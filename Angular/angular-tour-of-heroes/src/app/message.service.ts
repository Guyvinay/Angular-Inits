import { Injectable } from '@angular/core';
import { HeroService } from './hero.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(){}

  messages:string[] = [];

  add(message:string){
    this.messages.push(message);
  }
  clear(){
    this.messages=[];
  }
  // numberOfHeroes():number{
  //   const x =  this.heroService.getHeroes().pipe.length;
  //   console.log(x);
  //    return 0;
  // }

  
}
