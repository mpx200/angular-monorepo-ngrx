import { PostoviStruktura } from './../../../../../../libs/models/src/lib/models';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private httpClient: HttpClient) { }

  getNewsContent(): Observable<PostoviStruktura> {
    return this.httpClient.get<PostoviStruktura>('https://www.telegraf.rs/api/timeline/hot/putovanja/vesti');
  }
}
