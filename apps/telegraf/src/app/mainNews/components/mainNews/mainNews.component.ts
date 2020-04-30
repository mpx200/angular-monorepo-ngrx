import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Popularno } from '@a-m-ngrx/models';

@Component({
  selector: 'a-m-ngrx-mainNews',
  templateUrl: './mainNews.component.html',
  styleUrls: ['./mainNews.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainNewsComponent {

  @Input() mainNewsContent: Popularno
  objectKeys = Object.keys;

}
