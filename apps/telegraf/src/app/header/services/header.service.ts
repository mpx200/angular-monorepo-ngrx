import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Kategorije, TelegrafStruktura } from '@a-m-ngrx/models';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(private httpClient: HttpClient) { }

  getHeaderContent(): Observable<TelegrafStruktura> {
    return this.httpClient.get<TelegrafStruktura>('https://www.telegraf.rs/api/navigation/main');
  }
}
