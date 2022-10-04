import { Component} from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent {
  artistas : any[] = [];
  loading : boolean | undefined;
  constructor(private spotify: SpotifyService) {}

  buscar(termino: string) {
    console.log(termino);
    this.loading = true;

    this.spotify.getArtists(termino).subscribe((data: any) => {
      console.log();
      this.artistas = data;
      this.loading = false;
    });
  }
}
