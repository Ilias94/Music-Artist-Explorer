import { Component } from '@angular/core';
import { LastfmService } from '../lastfm.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})

export class SearchComponent {
  query: string = '';
  searchType: string = 'artist';
  artists: any[] = [];
  tracks: any[] = [];

  constructor(private lastfmService: LastfmService) {}

  search() {
    if (this.searchType === 'artist') {
      this.searchArtists();
    } else {
      this.searchTracks();
    }
  }

  searchArtists() {
    this.lastfmService.searchArtists(this.query).subscribe((data) => {
      this.artists = data.results.artistmatches.artist;
    });
  }

  searchTracks() {
    this.lastfmService.searchTracks(this.query).subscribe((data) => {
      this.tracks = data.results.trackmatches.track;
    });
  }
}
