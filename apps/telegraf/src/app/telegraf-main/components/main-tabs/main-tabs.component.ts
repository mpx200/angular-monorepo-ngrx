import { Observable } from 'rxjs';
import { TelegrafMainService } from './../../services/telegraf-main.service';
import { Comment, Popular } from './../../../../../../../libs/models/src/lib/models';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'a-m-ngrx-main-tabs',
  templateUrl: './main-tabs.component.html',
  styleUrls: ['./main-tabs.component.scss']
})
export class MainTabsComponent implements OnInit {

  chosenList = 'najcitanije';
  @Input() popularNewsContent: Popular[];
  @Input() commentsContent: Comment[];

  constructor(private tmService: TelegrafMainService) { }

  onClick(chosen: string) {
    this.chosenList = chosen;
  }

  ngOnInit(): void {
  }

}
