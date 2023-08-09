import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

interface Artist {
  name: string;
  listeners: number;
  playcount: number;
  url: string;
  genre?: string; 
  tags?: string[];
  description?: string;
}

interface TopArtistsResponse {
  topartists: {
    artist: Artist[];
  };
}

@Injectable({
  providedIn: 'root',
})
export class LastfmService {
  private readonly apiKey = '91a17ca5e06dcb38afda4664c93f3c22'; 
  private readonly apiUrl = 'http://ws.audioscrobbler.com/2.0/';

  constructor(private http: HttpClient) {}

  searchArtists(query: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?method=artist.search&artist=${query}&api_key=${this.apiKey}&format=json`);
  }

  getTopArtists(limit: number = 10): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?method=chart.gettopartists&limit=${limit}&api_key=${this.apiKey}&format=json`);
  }
  getTopAlbums(): Observable<any> {
    const url = `${this.apiUrl}?method=album.gettopalbums&format=json&api_key=${this.apiKey}`;
    return this.http.get(url);
  }

  getTopTracks(limit: number = 10): Observable<any> {
    const url = `${this.apiUrl}?method=chart.gettoptracks&limit=${limit}&api_key=${this.apiKey}&format=json`;
    return this.http.get(url);
  }

  getArtistsByCategory(category: string, page: number = 1, limit: number = 10): Observable<Artist[]> {
    const url = `${this.apiUrl}?method=tag.gettopartists&tag=${category}&api_key=${this.apiKey}&format=json&page=${page}&limit=${limit}`;
    return this.http.get<TopArtistsResponse>(url).pipe(
      map(response => response.topartists.artist)
    );
  }  

  getAlbumInfo(artist: string, album: string): Observable<any> {
    const url = `${this.apiUrl}?method=album.getinfo&api_key=${this.apiKey}&artist=${artist}&album=${album}&format=json`;
    return this.http.get<any>(url);
  }

  getAlbumsByArtist(artist: string): Observable<any> {
    const url = `${this.apiUrl}?method=artist.gettopalbums&api_key=${this.apiKey}&artist=${artist}&format=json`;
    return this.http.get<any>(url);
  }
}
