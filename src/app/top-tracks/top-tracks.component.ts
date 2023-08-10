import { Component, OnInit } from '@angular/core';
import { LastfmService } from '../lastfm.service';
import { FavoritesService } from '../favourites.service';

@Component({
  selector: 'app-top-tracks',
  templateUrl: './top-tracks.component.html',
})
export class TopTracksComponent implements OnInit {
  tracks: any[] = [];
  currentPage: number = 1;
  totalPages: number = 0;
  directPage: number = 1;
  itemsPerPage: number = 50; 


  constructor(
    private lastfmService: LastfmService,
    private favoritesService: FavoritesService
    ) {}

  ngOnInit() {
    this.loadTracks(this.currentPage);
  }

  loadTracks(page: number) {
    this.tracks = []; // Clear the array before loading new tracks
    this.lastfmService.getTopTracks(page).subscribe((data) => {
      this.totalPages = +data?.tracks?.['@attr']?.totalPages || 0; 
      data?.tracks?.track.forEach((track: any) => {
        this.lastfmService.getTrackInfo(track.artist.name, track.name).subscribe(trackInfo => {
          console.log('Track Info:', trackInfo);
          this.tracks.push(trackInfo);
        });
      });
    });
  }
  
  
  

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.loadTracks(page);
    }
  }

  get pages(): number[] {
    return new Array(this.totalPages).fill(null).map((_, i) => i + 1);
  }

  goToDirectPage() {
    if (this.directPage >= 1 && this.directPage <= this.totalPages) {
      this.currentPage = this.directPage;
      this.loadTracks(this.currentPage);
    }
  }

  addFavoriteTrack(track: any) {
    this.favoritesService.addToFavoriteTracks(track);
  }
  
  removeFavoriteTrack(track: any) {
    this.favoritesService.removeFromFavoriteTracks(track);
  }
  isFavoriteTrack(track: any): boolean {
    return this.favoritesService.isFavoriteTrack(track);
  }
  
}
