import { Component } from '@angular/core';
import {ScoreService} from "../Service/score.service";

enum Player{
  None = '',
  X='X',
  O='O'
}

@Component({
  selector: 'app-game',
  templateUrl: './ticTacToe.component.html',
  styleUrl: './ticTacToe.component.css'
})

export class TicTacToeComponent {

  cells:Player[]=new Array(9).fill(Player.None)
  currentPlayer: Player= Player.X;
  winner:Player|null=null;
  gameOver:boolean=false;

  constructor(private score:ScoreService) {
  }

  makeMove(index:number){
    if(!this.cells[index] && !this.gameOver){
      this.cells[index]=this.currentPlayer;
      this.checkWinner();
      this.currentPlayer=this.currentPlayer===Player.X ? Player.O: Player.X;
    }

    if(this.winner){
      alert(`Player ${this.winner} wins!`);
    } else if (this.gameOver){
      alert('Its a draw!')
    }
  }
  checkWinner():void{
    const winnerPositions: number [][]=[
      [0,1,2],[3,4,5],[6,7,8], //Horizontal
      [0,3,6],[1,4,7],[2,5,8], //Vertical
      [0,4,8],[2,4,6] //Diagonal
    ];
    for(const [a,b,c] of winnerPositions){
      if (
        this.cells[a] != Player.None &&
        this.cells[a] === this.cells[b] && this.cells[a] === this.cells[c]){
        this.winner=this.cells[a];

        if(this.winner==Player.X){
          this.score.setVictories();
        } else if(this.winner==Player.O){
          this.score.setDefeat();
        }

        this.gameOver=true;
        break;
      }
    }
  }

  reset():void{
    this.cells.fill(Player.None);
    this.currentPlayer=Player.X;
    this.winner=null;
    this.gameOver=false;
  }

}
