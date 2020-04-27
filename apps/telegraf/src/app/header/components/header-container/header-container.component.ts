import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TelegrafStruktura, Kategorije } from '@a-m-ngrx/models';
import { Store, select } from '@ngrx/store';
import { AppState } from '@telegraf/app/state';
import { getHeaderContentStarted } from '../../state/actions';
import { getHeaderContent } from '../../state/selectors';

@Component({
  selector: 'a-m-ngrx-header-container',
  templateUrl: './header-container.component.html',
  styleUrls: ['./header-container.component.scss']
})
export class HeaderContainerComponent implements OnInit {

  headerContent$: Observable<TelegrafStruktura>;

  constructor(private store$: Store<AppState>) { }

  ngOnInit(): void {
    this.store$.dispatch(getHeaderContentStarted());
    this.headerContent$ = this.store$.pipe(select(getHeaderContent));
  }
}
