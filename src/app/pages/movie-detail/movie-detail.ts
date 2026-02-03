import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MovieService } from '../../services/movie';
import { Movie } from '../../models/movie.model';
import { LoadingComponent } from '../../components/ui/loading/loading';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, LoadingComponent],
  templateUrl: './movie-detail.html',
  styleUrls: ['./movie-detail.css']
})
export class MovieDetailComponent implements OnInit {
  movie: Movie | null = null;
  loading: boolean = true;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadMovie(id);
    }
  }

  loadMovie(id: string): void {
    this.loading = true;
    this.error = null;

    this.movieService.getMovieById(id).subscribe({
      next: (data) => {
        this.movie = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = err.message || 'Error loading movie details';
        this.loading = false;
      }
    });
  }
}