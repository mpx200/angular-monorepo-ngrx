import { Post, PostoviStruktura } from './../../../../../../../libs/models/src/lib/models';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'a-m-ngrx-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  @Input()
  postoviStruktura: PostoviStruktura;

  constructor() { }

  ngOnInit(): void {
  }

  getIcon(article: Post): string {
    return article.thumbs['620x350'];
  }
}
