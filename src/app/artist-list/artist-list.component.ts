import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
})
export class ArtistListComponent {
  @Input() artists: any[] = [];
}
