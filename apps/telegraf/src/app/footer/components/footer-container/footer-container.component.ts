import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Redakcija } from '@a-m-ngrx/models';
import { Store, select } from '@ngrx/store';
import { AppState } from '@telegraf/app/state';
import { getFooterContentStarted, getFooterContent } from '@telegraf/app/footer/state';

@Component({
  selector: 'a-m-ngrx-footer-container',
  templateUrl: './footer-container.component.html',
  styleUrls: ['./footer-container.component.css']
})
export class FooterContainerComponent implements OnInit {

  footerContent$: Observable<Redakcija>;
  constructor(private store$: Store<AppState>) { }

  ngOnInit(): void {
    this.store$.dispatch(getFooterContentStarted());
    this.footerContent$ = this.store$.pipe(select(getFooterContent));
  }

}
