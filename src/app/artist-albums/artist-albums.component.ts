import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LastfmService } from '../lastfm.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-artist-albums',
  templateUrl: './artist-albums.component.html',
})
export class ArtistAlbumsComponent implements OnInit {
  artist: string = '';
  albums: any[] = [];

  constructor(private route: ActivatedRoute, private lastfmService: LastfmService, private location: Location) {}

  ngOnInit() {
    this.artist = this.route.snapshot.paramMap.get('artist') || '';
    if (this.artist) {
      this.lastfmService.getAlbumsByArtist(this.artist).subscribe((response) => {
        this.albums = response.topalbums.album;
      });
    }
  }

  goBack(): void {
    this.location.back();
  }
}
