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

  getNewReleases() {

    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQBTyST41Lf0wbmseU6v-OH77JNMXzh0d-4Jl7TLoyXQCjwnU1plvkFk3wNdMzhfA284bDbUFBCvm-Eq1w86ih88AfTUx_Zm-VCdxc_4Q_wO7F-fUoY',
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
      .pipe(map((data: any) => {
        console.log(data.albums.items)
        return data.albums.items;
      }))
      
  }

  getArtist(termino:string) {

    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQBTyST41Lf0wbmseU6v-OH77JNMXzh0d-4Jl7TLoyXQCjwnU1plvkFk3wNdMzhfA284bDbUFBCvm-Eq1w86ih88AfTUx_Zm-VCdxc_4Q_wO7F-fUoY',
    });

    return this.http
      .get(
        `https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`,
        { headers }
      )
      .pipe(
        map((data: any) => {
          console.log(data.artists.items);
          return data.artists.items;
        })
      );
  }
}


