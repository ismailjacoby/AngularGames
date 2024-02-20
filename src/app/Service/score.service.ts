import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  score:number[]=[0,0];

  getVictories():number{
    return this.score[0];
  }

  getDefeats():number{
    return this.score[1];
  }
  setVictories(){
    this.score[0]++
  }
  setDefeat(){
    this.score[1]++
  }
  clearScore():void{
    this.score=[0,0]
  }

  constructor() { }
}
