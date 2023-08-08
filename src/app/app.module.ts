import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { ArtistDetailComponent } from './artist-detail/artist-detail.component';
import { LastfmService } from './lastfm.service';
import { TopArtistsComponent } from './top-artists/top-artists.component';
import { TopAlbumsComponent } from './top-albums/top-albums.component';
import { TopTracksComponent } from './top-tracks/top-tracks.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ArtistListComponent,
    ArtistDetailComponent,
    TopArtistsComponent,
    TopAlbumsComponent,
    TopTracksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [LastfmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
