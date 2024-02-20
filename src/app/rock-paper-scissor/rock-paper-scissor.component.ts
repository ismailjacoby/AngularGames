import { Component } from '@angular/core';
import {ScoreService} from "../services/score.service";

enum Choice{
  Rock,Paper,Scissor
}
@Component({
  selector: 'app-rock-paper-scissor',
  templateUrl: './rock-paper-scissor.component.html',
  styleUrl: './rock-paper-scissor.component.css'
})

export class RockPaperScissorComponent {

  userChoice!: Choice;
  computerChoice!: Choice;
  message!:string;

  constructor(private score:ScoreService) {
  }

  rock(){
    this.userChoice = Choice.Rock;
    this.computerChoice = this.generateComputerChoice();
    this.checkWinner();
  };

  paper(){
    this.userChoice = Choice.Paper;
    this.computerChoice = this.generateComputerChoice();
    this.checkWinner();
  }

  scissor(){
      this.userChoice = Choice.Scissor;
      this.computerChoice = this.generateComputerChoice();
      this.checkWinner();
  }

  generateComputerChoice(){
    const choices = [Choice.Rock, Choice.Paper, Choice.Scissor];
    return choices[Math.floor(Math.random() * choices.length)];
  }

  checkWinner(){
    if(this.userChoice === this.computerChoice){
      this.message = "It's a tie";
    } else if (
      (this.userChoice === Choice.Rock && this.computerChoice === Choice.Scissor) ||
      (this.userChoice === Choice.Scissor && this.computerChoice === Choice.Paper) ||
      (this.userChoice === Choice.Paper && this.computerChoice === Choice.Rock)
    ) {
      this.message = "You win!";
      this.score.setVictories()
    } else {
      this.message = "You lose!";
      this.score.setDefeat();
    }
  }


}
