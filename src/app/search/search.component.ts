import { Component } from '@angular/core';
import { LastfmService } from '../lastfm.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {
  query: string = '';
  artists: any[] = []; // Added to store the artists

  constructor(private lastfmService: LastfmService) {}

  searchArtists() {
    this.lastfmService.searchArtists(this.query).subscribe((data) => {
      this.artists = data.results.artistmatches.artist; // Update the artists array
    });
  }
}
