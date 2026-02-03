import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MovieService } from '../../services/movie';
import { Movie } from '../../models/movie.model';
import { LoadingComponent } from '../../components/ui/loading/loading';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule, RouterModule, LoadingComponent],
  templateUrl: './movies.html',
  styleUrls: ['./movies.css']
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  loading: boolean = true;
  error: string | null = null;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies(): void {
    this.loading = true;
    this.error = null;

    this.movieService.getAllMovies().subscribe({
      next: (data) => {
        this.movies = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = err.message || 'Error loading movies';
        this.loading = false;
      }
    });
  }
}