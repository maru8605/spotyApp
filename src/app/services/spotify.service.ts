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

  getQuery(query: string) {
    const URL = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQBGrTo7dI5J9O9K9eBeUwwU7111L1UUdcu6QSW2bvcZe7bJruOyZCwaVisxi2kKXZD3nlxOYDClNBZTRYl3uZZRnIhoAwLaD8O9gv4AGGH9NwF0DRI',
    });

    return this.http.get(URL, { headers });
  }

  getNewReleases() {
    
  
    return this.getQuery('browse/new-releases').pipe(
      map((data: any) => {
        console.log(data.albums.items);
        return data.albums.items;
      })
    );
  }

  getArtists(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(
      map((data: any) => {
        console.log(data.artists.items);
        return data.artists.items;
      })
    );
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?market=US`)
      .pipe(
      map((data: any) => {

        return data.tracks;
      })
    );
  }
}


