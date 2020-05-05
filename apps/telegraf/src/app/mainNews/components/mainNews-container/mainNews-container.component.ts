import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Popularno } from '@a-m-ngrx/models';
import { Store, select } from '@ngrx/store';
import { AppState } from '@telegraf/app/state';
import { getMainNewsContentStarted, getMainNewsContent } from '@telegraf/app/mainNews/state';

@Component({
  selector: 'a-m-ngrx-mainNews-container',
  templateUrl: './mainNews-container.component.html',
  styleUrls: ['./mainNews-container.component.css']
})
export class MainNewsContainerComponent implements OnInit {

  mainNewsContent$: Observable<Popularno[]>;
  constructor(private store$: Store<AppState>) { }

  ngOnInit(): void {
    this.store$.dispatch(getMainNewsContentStarted());
    this.mainNewsContent$ = this.store$.pipe(select(getMainNewsContent));
  }

}
