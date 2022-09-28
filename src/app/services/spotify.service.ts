import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {
    console.log('servicio listo');

  }

  getQuery( query: string) {
    const URL = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQBzUYYI5O2QL7QHmrcaB8fNMPSA6kPAWre-nqnfQKtO0MGB4XgXr8H8ZhJ1Iz3eB6tSyCbcqthy99EBcwKUuk9QQEhJQTZB8LyOA400tUNGXuv3ok0',
    });

    return this.http.get(URL, { headers });
  }

  getNewReleases() {

    return this.getQuery('browse/new-releases')
      .pipe( map((data: any) => {
        console.log(data.albums.items);
        return data.albums.items;
      })
    );
  
      
  }

  getArtist(termino:string) {

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(
      map((data: any) => {
        console.log(data.artists.items);
        return data.artists.items;
      })
    );
  }
}


