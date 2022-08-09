import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RedditGet } from '../models/redditPost';

@Injectable({
  providedIn: 'root'
})
export class RedditService {
  private redditUrl = 'https://www.reddit.com/r/golf.json'

  constructor(private http: HttpClient) { }

  getPosts(params: {before?: string, after?: string, count?: number}) : Observable<RedditGet> {

    return  this.http.get<RedditGet>(this.redditUrl, {params: {...params, limit: 10}});
  }
}


