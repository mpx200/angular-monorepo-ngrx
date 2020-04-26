import { Component, OnInit } from '@angular/core';
import { FooterService } from '@telegraf/footer/services';
import { Observable } from 'rxjs';
import { Redakcija } from '@a-m-ngrx/models';

@Component({
  selector: 'a-m-ngrx-footer-container',
  templateUrl: './footer-container.component.html',
  styleUrls: ['./footer-container.component.css']
})
export class FooterContainerComponent implements OnInit {

  footerContent$:Observable<Redakcija>;
  constructor(private footerService: FooterService) { }

  ngOnInit(): void {
    this.footerContent$ = this.footerService.getFooterContent();
  }

}
