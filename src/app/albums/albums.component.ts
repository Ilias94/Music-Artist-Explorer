import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LastfmService } from '../lastfm.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
})
export class AlbumsComponent implements OnInit {
  album: any = null;

  constructor(private route: ActivatedRoute, private lastfmService: LastfmService, private location: Location) {}

  ngOnInit() {
    const artist = this.route.snapshot.paramMap.get('artist');
    const album = this.route.snapshot.paramMap.get('album');
    if (artist && album) {
      this.lastfmService.getAlbumInfo(artist, album).subscribe((response) => {
        this.album = response.album;
      });
    }
  }

  goBack(): void {
    this.location.back();
  }
}
