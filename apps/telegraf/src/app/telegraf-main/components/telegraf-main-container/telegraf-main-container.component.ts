import { Observable } from 'rxjs';
import { TelegrafMainService } from './../../services/telegraf-main.service';
import { Component, OnInit } from '@angular/core';
import { Popular, Comment } from '@a-m-ngrx/models';

@Component({
  selector: 'a-m-ngrx-telegraf-main-container',
  templateUrl: './telegraf-main-container.component.html',
  styleUrls: ['./telegraf-main-container.component.scss']
})
export class TelegrafMainContainerComponent implements OnInit {

  constructor(private telegrafMainService: TelegrafMainService) { }
  mainContent$: Observable<Popular[]>;
  commentsContent$: Observable<Comment[]>;

  ngOnInit(): void {
    this.mainContent$ = this.telegrafMainService.getMainContent();
    this.commentsContent$ = this.telegrafMainService.getCommentsContent();
  }

}
