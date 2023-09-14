import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MovieDetailsComponent],
  templateUrl: './home.component.html', // Reference the external HTML file
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}