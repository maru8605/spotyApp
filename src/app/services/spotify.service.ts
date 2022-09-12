import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
        'Bearer BQBD2bxiU7mW_y25mHbE1qH3WlQUbvv0nQe5HDJbhtZGeN16vF2TU7DXIRf0Ij7g2lSMhrOH1nO6AtAz14FWdYh-IJEGSbMoQ1MKQcca3Zc5a2PFfXE',
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
      
  }
}


