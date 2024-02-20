import { Component } from '@angular/core';
import {ScoreService} from "../../services/score.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private score:ScoreService) {}

  getVictories(){
    return this.score.getVictories();
  }
  getDefeats(){
    return this.score.getDefeats()
  }

  clearScore(){
      this.score.clearScore();
  }
}
