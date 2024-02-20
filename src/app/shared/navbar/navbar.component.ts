import { Component } from '@angular/core';
import {ScoreService} from "../../Service/score.service";

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

}
