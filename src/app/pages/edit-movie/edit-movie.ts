import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../services/movie';
import { Movie } from '../../models/movie.model';
import { MovieFormComponent } from '../../components/movies/movie-form/movie-form';
import { AlertComponent } from '../../components/ui/alert/alert';
import { LoadingComponent } from '../../components/ui/loading/loading';

@Component({
  selector: 'app-edit-movie',
  standalone: true,
  imports: [CommonModule, MovieFormComponent, AlertComponent, LoadingComponent],
  templateUrl: './edit-movie.html',
  styleUrls: ['./edit-movie.css']
})
export class EditMovieComponent implements OnInit {
  movie: Movie | null = null;
  loading: boolean = true;
  alertMessage: string = '';
  alertType: 'success' | 'error' = 'success';
  movieId!: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      this.alertMessage = 'Movie ID is missing';
      this.alertType = 'error';
      this.loading = false;
      return;
    }

    this.movieId = id;
    this.loadMovie();
  }

  loadMovie(): void {
    if (!this.movieId) return;

    this.loading = true;
    this.alertMessage = '';

    this.movieService.getMovieById(this.movieId).subscribe({
      next: movie => {
        this.movie = movie;
        this.loading = false;
      },
      error: err => {
        this.alertMessage = err.message || 'Error loading movie';
        this.alertType = 'error';
        this.loading = false;
      }
    });
  }

  onSubmit(movieData: any): void {
    this.movieService.updateMovie(this.movieId, movieData).subscribe({
      next: () => {
        this.alertMessage = 'Movie updated successfully!';
        this.alertType = 'success';

        setTimeout(() => this.alertMessage = '', 5000);
      },
      error: (err) => {
        this.alertMessage = err.message || 'Error updating movie';
        this.alertType = 'error';
        
        setTimeout(() => this.alertMessage = '', 10000);
      }
    });
  }

  onDelete(): void {
    if (!confirm('Are you sure you want to delete this movie?')) {
      return;
    }

    this.movieService.deleteMovie(this.movieId).subscribe({
      next: () => {
        this.router.navigate(['/movies']);
      },
      error: (err) => {
        this.alertMessage = err.message || 'Error deleting movie';
        this.alertType = 'error';
        
        setTimeout(() => this.alertMessage = '', 10000);
      }
    });
  }

  onCancel(): void {
    this.router.navigate(['/movies']);
  }

  closeAlert(): void {
    this.alertMessage = '';
  }
}