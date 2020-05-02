import { Component, Input } from '@angular/core';
import { Popular } from '@a-m-ngrx/models';

@Component({
  selector: 'a-m-ngrx-telegraf-main',
  templateUrl: './telegraf-main.component.html',
  styleUrls: ['./telegraf-main.component.scss']
})
export class TelegrafMainComponent{

  constructor() { }

  @Input() mainContent: Popular[];
  @Input() commentsContent: Comment[];

  getRandomNumber() {
    return (Math.floor(Math.random()*10));
  }
}
