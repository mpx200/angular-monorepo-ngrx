import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Kategorije, TelegrafStruktura} from '@a-m-ngrx/models'
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(private httpClient : HttpClient) { }

  getHeaderContent(): Observable<Kategorije[]> {
    return this.httpClient.get('https://www.telegraf.rs/api/navigation/main').pipe(
      map((a: TelegrafStruktura) => a.kategorije));
  }
}
