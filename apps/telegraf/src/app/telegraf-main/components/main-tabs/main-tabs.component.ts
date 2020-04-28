import { Comment } from './../../../../../../../libs/models/src/lib/models';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'a-m-ngrx-main-tabs',
  templateUrl: './main-tabs.component.html',
  styleUrls: ['./main-tabs.component.scss']
})
export class MainTabsComponent implements OnInit {

  constructor() { }
  @Input() commentsContent: Comment[];

  ngOnInit(): void {
  }

}
