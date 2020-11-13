import { Component } from '@angular/core';
import { title } from 'process';


export interface Card {
  title:string,
  text:string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toggle = true;
cards: Card[] = [
  {title: "Card 1", text: "Text"},
  {title: "Card 2", text: "Text"},
  {title: "Card 3", text: "Text"},
]
  title = 'first-angular-app';

  showCards() {
    this.toggle = !this.toggle;
  }
}
