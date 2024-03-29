import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicTacToeComponent } from './ticTacToe/ticTacToe.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { JustePrixComponent } from './juste-prix/juste-prix.component';
import { InstructionsComponent } from './juste-prix/instructions/instructions.component';
import {FormsModule} from "@angular/forms";
import { RockPaperScissorComponent } from './rock-paper-scissor/rock-paper-scissor.component';

@NgModule({
  declarations: [
    AppComponent,
    TicTacToeComponent,
    NavbarComponent,
    JustePrixComponent,
    InstructionsComponent,
    RockPaperScissorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
