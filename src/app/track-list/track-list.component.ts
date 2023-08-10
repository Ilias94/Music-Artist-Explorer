import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.css']
})
export class TrackListComponent {
  @Input() tracks: { name: string, artist: string, url: string }[] = [];
}


