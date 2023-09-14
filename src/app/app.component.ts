import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
//import { MovieDetailsComponent } from './movie-details/movie-details.component';

@Component({
  selector: 'app-root',
  template: `<main>
  <header class="brand-name">
    <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
  </header>
  <section class="content">
    <app-home></app-home>
  </section>
</main>`,
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent {
  title = 'homes';
}
