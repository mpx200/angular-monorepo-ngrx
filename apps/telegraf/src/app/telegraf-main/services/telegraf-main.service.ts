import { PopularneVesti, Popular, Comment, Comments } from './../../../../../../libs/models/src/lib/models';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TelegrafMainService {

  constructor(private httpClient: HttpClient) { }

  getMainContent(): Observable <Popular[]> {
    return this.httpClient.get("https://www.telegraf.rs/api/timeline/popular/naslovna").pipe(
      map((a: PopularneVesti) => a.popular));
  }

  getCommentsContent(): Observable <Comment[]> {
    return this.httpClient.get("https://www.telegraf.rs/api/timeline/comments/naslovna").pipe(
      map((a: Comments) => a.comments));
  }

}
