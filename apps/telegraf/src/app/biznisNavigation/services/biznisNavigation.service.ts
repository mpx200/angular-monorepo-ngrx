import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { BiznisNavigation, Category } from '@a-m-ngrx/models';

@Injectable({
  providedIn: 'root'
})
export class BiznisNavigationService {

  constructor(private httpClient: HttpClient) { }

  getBiznisNavigationContent(): Observable<BiznisNavigation[]> {
    return this.httpClient.get('https://biznis.telegraf.rs/api/navigation/main').pipe(
      map((a: Category) => a.kategorije));
  }
}
