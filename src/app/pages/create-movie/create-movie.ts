import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MovieService } from '../../services/movie';
import { MovieFormComponent } from '../../components/movies/movie-form/movie-form';
import { AlertComponent } from '../../components/ui/alert/alert';

@Component({
  selector: 'app-create-movie',
  standalone: true,
  imports: [CommonModule, MovieFormComponent, AlertComponent],
  templateUrl: './create-movie.html',
  styleUrls: ['./create-movie.css']
})
export class CreateMovieComponent {
  alertMessage: string = '';
  alertType: 'success' | 'error' = 'success';

  constructor(
    private movieService: MovieService,
    private router: Router
  ) {}

  onSubmit(movieData: any): void {
    this.movieService.createMovie(movieData).subscribe({
      next: () => {
        this.alertMessage = 'Movie created successfully!';
        this.alertType = 'success';
        setTimeout(() => this.router.navigate(['/movies']), 2000);
      },
      error: (err) => {
        this.alertMessage = err.message || 'Error creating movie';
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