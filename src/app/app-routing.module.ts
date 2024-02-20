import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TicTacToeComponent} from "./ticTacToe/ticTacToe.component";
import {JustePrixComponent} from "./juste-prix/juste-prix.component";

const routes: Routes = [
  {path:'justeprix', component:JustePrixComponent},
  {path:'tictactoe', component:TicTacToeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
