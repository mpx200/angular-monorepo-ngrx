import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { TelegrafStruktura, Kategorije } from '@a-m-ngrx/models';

@Component({
  selector: 'a-m-ngrx-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  @Input() headerContent: TelegrafStruktura;
  objectKeys = Object.keys;

  constructor() { }

  ngOnInit(): void {
  }

}
