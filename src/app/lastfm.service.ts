import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LastfmService {
  private readonly apiKey = '91a17ca5e06dcb38afda4664c93f3c22'; // Replace with your Last.fm API key
  private readonly apiUrl = 'http://ws.audioscrobbler.com/2.0/';

  constructor(private http: HttpClient) {}

  searchArtists(query: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?method=artist.search&artist=${query}&api_key=${this.apiKey}&format=json`);
  }

  // Additional methods for albums, tracks, etc.
}
