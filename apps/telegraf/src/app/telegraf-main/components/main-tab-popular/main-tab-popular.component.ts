import { Popular } from './../../../../../../../libs/models/src/lib/models';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'a-m-ngrx-main-tab-popular',
  templateUrl: './main-tab-popular.component.html',
  styleUrls: ['./main-tab-popular.component.scss']
})
export class MainTabPopularComponent implements OnInit {

  constructor() { }

  @Input() popularNews: Popular[];
  ngOnInit(): void {
  }

}
