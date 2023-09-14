import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent {
  movies: any[] = [
    {
      name: "avengers",
      release_date: "2020",
      posterUrl: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
    },
    {
      name:"avengers1",
      release_date:"2020",
      posterUrl:"https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
    },
    {
      name:"avengers2",
      release_date:"2020",
      posterUrl:"https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
    },
    {
      name:"avengers3",
      release_date:"2020",
      posterUrl:"https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
    }
  ];

  openMovieWebsite(index: number) {
   
    const websites = [
      'https://en.wikipedia.org/wiki/The_Avengers_(2012_film)',
      'https://example.com/link2',
      'https://example.com/link3',
      'https://example.com/link4'
    ];

    window.open(websites[index], '_blank');
  }
}
