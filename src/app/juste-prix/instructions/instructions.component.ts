import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrl: './instructions.component.css'
})
export class InstructionsComponent {
  @Input()
  guessedNumber!: number;
  @Input()
  randomNumber!: number;
  @Input()
  isLower!:boolean;
  @Input()
  isHigher!:boolean;
  @Input()
  hasWon!: boolean;
  @Input()
  isGameOver!: boolean;


}
