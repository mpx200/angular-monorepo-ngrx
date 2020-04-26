import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Redakcija, TelegrafStruktura } from '@a-m-ngrx/models';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  constructor(private httpClient: HttpClient) { }

  getFooterContent(): Observable<Redakcija> {
    return this.httpClient.get('https://www.telegraf.rs/api/navigation/main').pipe(
      map((a: TelegrafStruktura) => a.redakcija));
  }
}
