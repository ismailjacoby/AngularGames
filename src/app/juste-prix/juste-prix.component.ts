import { Component } from '@angular/core';
import {ScoreService} from "../Service/score.service";

@Component({
  selector: 'app-juste-prix',
  templateUrl: './juste-prix.component.html',
  styleUrl: './juste-prix.component.css'
})
export class JustePrixComponent {
  guessedNumber!: number;
  randomNumber:number = this.generateRandomNumber();
  userAttempts:number=0;
  maxAttempts:number=10;
  isGameOver: boolean = false;
  isHigher:boolean=false;
  isLower: boolean=false;
  hasWon: boolean=false;
  isDisabled:boolean=false;

  constructor(private score:ScoreService) {}

  getVictories(){
    return this.score.getVictories();
  }
  getDefeats(){
    return this.score.getDefeats()
  }

  generateRandomNumber():number {
    return Math.floor(Math.random()*1000+1);
  }

  checkWin(){
    console.log(this.randomNumber)

    //Increment Attempts
    this.userAttempts++

    //Checks if player won
    if(this.guessedNumber == this.randomNumber){
      this.isGameOver=true;
      this.hasWon=true;
      this.isDisabled=true;
      this.score.setVictories();
    }

    //Instructions
    if(this.userAttempts >= this.maxAttempts && !this.hasWon){
      this.isGameOver = true;
      this.isDisabled = true;
      this.score.setDefeat();
    } else if (this.guessedNumber<this.randomNumber){
      this.isHigher = true;
      this.isLower = false;
    } else if(this.guessedNumber>this.randomNumber){
      this.isHigher = false;
      this.isLower = true;
    }

  }

  playAgain(){
    this.hasWon=false;
    this.userAttempts=0;
    this.isDisabled=false;
    this.isGameOver=false;
    this.isHigher=false;
    this.isLower=false;
    this.randomNumber = this.generateRandomNumber();
  }
  resetGame(){
    this.playAgain();
    this.score.clearScore();
  }


}
