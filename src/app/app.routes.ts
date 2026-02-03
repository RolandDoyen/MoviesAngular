import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { MoviesComponent } from './pages/movies/movies';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail';
import { CreateMovieComponent } from './pages/create-movie/create-movie';
import { EditMovieComponent } from './pages/edit-movie/edit-movie';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'movies',
    component: MoviesComponent
  },
  {
    path: 'movies/create',
    component: CreateMovieComponent
  },
  {
    path: 'movies/edit/:id',
    component: EditMovieComponent
  },
  {
    path: 'movies/:id',
    component: MovieDetailComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];