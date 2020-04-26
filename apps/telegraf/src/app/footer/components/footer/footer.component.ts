import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Redakcija } from '@a-m-ngrx/models';

@Component({
  selector: 'a-m-ngrx-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {

  @Input() footerContent: Redakcija
  objectKeys = Object.keys;

}
