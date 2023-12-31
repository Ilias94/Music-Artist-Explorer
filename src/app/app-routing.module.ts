import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopArtistsComponent } from './top-artists/top-artists.component';
import { TopTracksComponent } from './top-tracks/top-tracks.component';
import { SearchComponent } from './search/search.component';
import { AlbumsComponent } from './albums/albums.component';
import { ArtistAlbumsComponent } from './artist-albums/artist-albums.component';
import { FavouritesComponent } from './favourites/favourites.component';

const routes: Routes = [
  { path: 'top-artists', component: TopArtistsComponent },
  { path: 'top-tracks', component: TopTracksComponent },
  { path: 'search', component: SearchComponent },
  { path: 'artist-albums/:artist', component: ArtistAlbumsComponent },
  { path: 'albums/:artist/:album', component: AlbumsComponent },
  { path: 'favourites', component: FavouritesComponent }, 
  { path: '', redirectTo: '/top-artists', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
