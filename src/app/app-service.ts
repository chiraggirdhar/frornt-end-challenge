import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private readonly httpclient: HttpClient) {
    this.getgames();
   }

  getgames() {
    return this.httpclient.get('http://starlord.hackerearth.com/gamesext');
  }
}

// http://starlord.hackerearth.com/gamesext
