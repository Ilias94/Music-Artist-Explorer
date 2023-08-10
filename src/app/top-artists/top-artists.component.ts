import { Component, OnInit } from '@angular/core';
import { LastfmService } from '../lastfm.service';
import { Router } from '@angular/router';
import { FavoritesService } from '../favourites.service';

interface Artist {
  name: string;
  url: string;
}

@Component({
  selector: 'app-top-artists',
  templateUrl: './top-artists.component.html',
})
export class TopArtistsComponent implements OnInit {
  artists: Artist[] = [];
  selectedCategory: string = 'rock';
  currentPage: number = 1;
  totalPages: number = 0; // Add this property for the total number of pages
  limit: number = 10;
  directPage: number | null = null; // Add this property for the page number entered in the input box

  constructor(private lastfmService: LastfmService, private router: Router,private favoritesService: FavoritesService) {}

  ngOnInit() {
    this.filterByCategory(this.selectedCategory);
  }
  
  filterByCategory(newCategory: string, page: number = 1, limit: number = this.limit) {
    if (this.selectedCategory !== newCategory) {
      page = 1; 
    }
    this.selectedCategory = newCategory; 
    this.currentPage = page; 
    this.lastfmService.getArtistsByCategory(this.selectedCategory, this.currentPage, this.limit).subscribe(response => {
      this.artists = response.artists;
      this.totalPages = Math.ceil(response.totalCount / this.limit);
    });
  }
  
  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.filterByCategory(this.selectedCategory, this.currentPage); 
    }
  }

  goToDirectPage() { // Add this method to navigate to the page number entered in the input box
    if (this.directPage !== null && this.directPage >= 1 && this.directPage <= this.totalPages) {
      this.changePage(this.directPage);
    }
  }

  viewAlbums(artist: Artist) {
    this.router.navigate(['/albums', artist.name]);
  }

  addFavoriteArtist(artist: Artist) {
    this.favoritesService.addToFavoriteArtists(artist);
  }

  removeFavoriteArtist(artist: Artist) {
    this.favoritesService.removeFromFavoriteArtists(artist);
  }

  isFavoriteArtist(artist: Artist): boolean {
    return this.favoritesService.isFavoriteArtist(artist);
  }
}
