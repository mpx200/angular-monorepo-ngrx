import { Component, OnInit } from "@angular/core";
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from '@telegraf/app/state';
import { BiznisNavigation } from '@a-m-ngrx/models';
import { getBiznisNavigationContentStarted, getBiznisNavigationContent } from '@telegraf/app/biznisNavigation/state';

@Component({
  selector: 'a-m-ngrx-biznisNavigation-container',
  templateUrl: './biznisNavigation-container.component.html',
  styleUrls: ['./biznisNavigation-container.component.css']
})

export class BiznisNavigationContainerComponent implements OnInit {

  biznisNavigationContent$: Observable<BiznisNavigation[]>;
  constructor(private store$: Store<AppState>) {}

  ngOnInit(): void {
    this.store$.dispatch(getBiznisNavigationContentStarted());
    this.biznisNavigationContent$ = this.store$.pipe(select(getBiznisNavigationContent));
    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAA ", this.biznisNavigationContent$);
  }
}