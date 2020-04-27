import { HeaderService } from './../../services/header.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Kategorije } from '@a-m-ngrx/models';

@Component({
  selector: 'a-m-ngrx-header-container',
  templateUrl: './header-container.component.html',
  styleUrls: ['./header-container.component.scss']
})
export class HeaderContainerComponent implements OnInit {

  constructor(private headerService: HeaderService) { }
  headerContent$:Observable<Kategorije[]>;

  ngOnInit(): void {
    this.headerContent$ = this.headerService.getHeaderContent();
  }

}
