import { Component, OnInit } from '@angular/core';
import { LastfmService } from '../lastfm.service';
import { Router } from '@angular/router';

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
  limit: number = 10;

  constructor(private lastfmService: LastfmService, private router: Router) {}

  ngOnInit() {
    this.filterByCategory(this.selectedCategory);
  }
  
  filterByCategory(newCategory: string, page: number = 1, limit: number = this.limit) {
    if (this.selectedCategory !== newCategory) {
      page = 1; 
    }
    this.selectedCategory = newCategory; 
    this.currentPage = page; 
    this.lastfmService.getArtistsByCategory(this.selectedCategory, this.currentPage, this.limit).subscribe(artists => {
      this.artists = artists;
    });
  }
  
  
  changePage(page: number) {
    this.currentPage = page;
    this.filterByCategory(this.selectedCategory, this.currentPage); 
  }

  viewAlbums(artist: Artist) {
    this.router.navigate(['/albums', artist.name]);
  }
}
