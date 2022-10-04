import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent  {
  
  newReleases: any[] = [];
  loading: boolean;
  error: boolean;
  mensajeError: string | undefined;

  constructor(private spotify: SpotifyService) {
    this.loading = true;
    this.error = false;
    this.spotify.getNewReleases()
      .subscribe((data: any) => {
        console.log(data);
        this.newReleases = data;
        this.loading = false;
      }, (errorService) => {
        this.loading = false;
        this.error = true;
        console.log('err:', errorService)
        // this.mensaje = errorService.error.error.message
        this.mensajeError = errorService.error.error.message;
      })

   }

 

}
