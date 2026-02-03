import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav class="navbar navbar-expand-sm navbar-light bg-white border-bottom box-shadow mb-3">
      <div class="container-fluid">
        <a class="navbar-brand" routerLink="/">Movies Angular</a>

        <button 
          class="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarMovies"
          aria-controls="navbarMovies" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarMovies">
          <ul class="navbar-nav flex-grow-1">
            <li class="nav-item">
              <a 
                class="nav-link text-dark" 
                id="nav-movies"
                routerLink="/movies"
                routerLinkActive="active"
              >
                Movies
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: []
})
export class NavbarComponent {}