import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistAlbumsComponent } from './artist-albums.component';

describe('ArtistAlbumsComponent', () => {
  let component: ArtistAlbumsComponent;
  let fixture: ComponentFixture<ArtistAlbumsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtistAlbumsComponent]
    });
    fixture = TestBed.createComponent(ArtistAlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
