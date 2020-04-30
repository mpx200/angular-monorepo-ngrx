import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Popular, Popularno } from '@a-m-ngrx/models';

@Injectable({
  providedIn: 'root'
})
export class MainNewsService {

  constructor(private httpClient: HttpClient) { }

  getMainNewsContent(): Observable<Popularno[]> {
    return this.httpClient.get('https://www.telegraf.rs/api/timeline/popular/naslovna').pipe(
      map((a: Popular) => a.popular));
  }
}
