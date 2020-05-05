import { Component, ChangeDetectionStrategy, Input } from "@angular/core";
import { BiznisNavigation } from '@a-m-ngrx/models';

@Component({
  selector: 'a-m-ngrx-biznisNavigation',
  templateUrl: './biznisNavigation.component.html',
  styleUrls: ['./biznisNavigation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class BiznisNavigationComponent {
  @Input() biznisNavigationContent: BiznisNavigation
  objectKeys = Object.keys;
}