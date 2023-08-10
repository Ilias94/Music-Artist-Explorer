import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../favourites.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
})
export class FavouritesComponent implements OnInit {
  favoriteTracks: any[] = [];
  private subscription!: Subscription;
  viewMode: string = 'artists';

  constructor(public favoritesService: FavoritesService) {}

  ngOnInit(): void {
    this.subscription = this.favoritesService.favoriteTracks$.subscribe(
      tracks => {
        this.favoriteTracks = tracks;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
