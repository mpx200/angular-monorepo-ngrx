import { Comment } from './../../../../../../../libs/models/src/lib/models';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'a-m-ngrx-main-tab-comments',
  templateUrl: './main-tab-comments.component.html',
  styleUrls: ['./main-tab-comments.component.scss']
})
export class MainTabCommentsComponent implements OnInit {

  constructor() { }

  @Input() comments: Comment[];
  ngOnInit(): void {
  }

}
