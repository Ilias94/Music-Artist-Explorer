import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  private favoriteTracksSubject = new BehaviorSubject<any[]>([]);
  favoriteTracks$ = this.favoriteTracksSubject.asObservable();
  
  favoriteArtists: any[] = [];
  favoriteTracks: any[] = [];
  favoriteTrackIds: string[] = [];

  addToFavoriteArtists(artist: any) {
    if (!this.isFavoriteArtist(artist)) {
      this.favoriteArtists.push(artist);
    }
  }

  removeFromFavoriteArtists(artist: any) {
    const index = this.favoriteArtists.findIndex(favArtist => favArtist.url === artist.url);
    if (index > -1) {
      this.favoriteArtists.splice(index, 1);
    }
  }

  isFavoriteArtist(artist: any): boolean {
    const isFavorite = this.favoriteArtists.some(favArtist => favArtist.url === artist.url);
    return isFavorite;
  }

  addToFavoriteTracks(track: any) {
    if (!this.isFavoriteTrack(track)) {
      const favoriteTracks = [...this.favoriteTracksSubject.value, track];
      this.favoriteTracksSubject.next(favoriteTracks);
    }
  }
  
  removeFromFavoriteTracks(track: any) {
    const favoriteTracks = this.favoriteTracksSubject.value.filter(favTrack => favTrack.url !== track.url); // Use URL instead of ID
    this.favoriteTracksSubject.next(favoriteTracks);
  }
  
  
  isFavoriteTrack(track: any): boolean {
    const favoriteTracks = this.favoriteTracksSubject.value; // get the value from BehaviorSubject
    console.log('Favorite Tracks:', favoriteTracks);
    const isFavorite = favoriteTracks.some(favTrack => favTrack.url === track.url); // assuming URL is the unique identifier
    console.log('Checking if favorite', track, 'Result:', isFavorite);
    return isFavorite;
  }
  
  getFavoriteArtists() {
  return this.favoriteArtists;
}

  
  getFavoriteTracks() {
    return this.favoriteTracks;
  }
  
}
