import { Component, OnInit } from '@angular/core';
import { LastfmService } from '../lastfm.service';

@Component({
  selector: 'app-top-tracks',
  templateUrl: './top-tracks.component.html',
})
export class TopTracksComponent implements OnInit {
  tracks: any[] = [];

  constructor(private lastfmService: LastfmService) {}

  ngOnInit() {
    this.lastfmService.getTopTracks().subscribe((data) => {
      this.tracks = data?.tracks?.track || [];
    });
  }

  getImage(track: any): string | null {
    const mediumImage = track.image.find((img: any) => img.size === 'medium');
    return mediumImage ? mediumImage['#text'] : null;
  }
}
