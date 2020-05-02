import { Component, OnInit, Input } from '@angular/core';
import { Kategorije } from '@a-m-ngrx/models';

@Component({
  selector: 'a-m-ngrx-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

 @Input() headerContent: Kategorije[];
 objectKeys = Object.keys;

}
