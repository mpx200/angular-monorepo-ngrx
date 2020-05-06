import { PostoviStruktura } from './../../../../../../../libs/models/src/lib/models';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from '@telegraf/app/state';
import { getNewsContentStarted } from '../../state/actions';
import { getNewsContent } from '../../state/selectors';

@Component({
  selector: 'a-m-ngrx-news-container',
  templateUrl: './news-container.component.html',
  styleUrls: ['./news-container.component.scss']
})
export class NewsContainerComponent implements OnInit {

  newsContent$: Observable<PostoviStruktura>;

  constructor(private store$: Store<AppState>) { }

  ngOnInit(): void {
    this.store$.dispatch(getNewsContentStarted());
    this.newsContent$ = this.store$.pipe(select(getNewsContent));
  }

}
