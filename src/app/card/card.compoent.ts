import { Card } from './../app.component';
import { Component, Input, OnInit } from '@angular/core';

@Component ({
selector: 'app-card',
templateUrl: './card.component.html',
styleUrls: ['./card.compoent.css'],
})
export class CardComponent implements OnInit {
  @Input() card: Card
  @Input() index:number
title = 'MyTitile';
text = 'Text';
number = Math.random();
textColor:string = 'blue';
getinfo () {
  return 'My info';
}

cardDate:Date = new Date()

imageUrl:string = "https://www.inpows.com/media/2020/04/Angular.png";
disabled:boolean = false;

ngOnInit () {
  setTimeout(() => {
    this.imageUrl = "https://cdn.onlinewebfonts.com/svg/img_411853.png";
  }, 2000);
}

changeTitle () {
  this.card.title = "New title";
}
RemaneTitle (value) {
this.card.title = value;
}
}
