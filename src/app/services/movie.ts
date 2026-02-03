import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, from } from 'rxjs';
import { catchError, switchMap, timeout } from 'rxjs/operators';
import { TokenService, AUTO_BASE_URL } from './token';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private readonly baseUrl = `${AUTO_BASE_URL}/movie`;

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) {}

  /** Get all movies */
  getAllMovies(): Observable<Movie[]> {
    return from(this.tokenService.init()).pipe(
      switchMap(() => {
        const headers = this.getHeaders();
        return this.http.get<Movie[]>(this.baseUrl, { headers })
          .pipe(catchError(this.handleError));
      })
    );
  }

  /** Get movie by ID */
  getMovieById(id: string): Observable<Movie> {
    return from(this.tokenService.init()).pipe(
      switchMap(() => {
        const headers = this.getHeaders(); // probablement Authorization header
        return this.http.get<Movie>(`${this.baseUrl}/${id}`, { headers })
          .pipe(catchError(this.handleError));
      })
    );
  }
  
  /** Create a new movie */
  createMovie(movie: any): Observable<void> {
    return from(this.tokenService.init()).pipe(
      switchMap(() => {
        const headers = this.getHeaders();
        return this.http.post<void>(this.baseUrl, movie, { headers })
          .pipe(catchError(this.handleError));
      })
    );
  }

  /** Update an existing movie */
  updateMovie(id: string, movie: any): Observable<void> {
    return from(this.tokenService.init()).pipe(
      switchMap(() => {
        const headers = this.getHeaders();
        return this.http.put<void>(`${this.baseUrl}/${id}`, movie, { headers })
          .pipe(catchError(this.handleError));
      })
    );
  }

  /** Delete a movie */
  deleteMovie(id: string): Observable<void> {
    return from(this.tokenService.init()).pipe(
      switchMap(() => {
        const headers = this.getHeaders();
        return this.http.delete<void>(`${this.baseUrl}/${id}`, { headers })
          .pipe(catchError(this.handleError));
      })
    );
  }

  /** Get headers with JWT token */
  private getHeaders(): HttpHeaders {
    const authHeaders = this.tokenService.getAuthHeaders();
    return new HttpHeaders({
      'Content-Type': 'application/json',
      ...authHeaders
    });
  }

  /** Handle HTTP errors */
  private handleError(error: HttpErrorResponse) {
    let errorMessage = `Error ${error.status}: `;

    if (error.error) {
      if (error.error.errors) {
        errorMessage += Object.values(error.error.errors).flat().join(' | ');
      } else if (error.error.message) {
        errorMessage += error.error.message;
      } else if (typeof error.error === 'string') {
        errorMessage += error.error;
      } else {
        errorMessage += 'An unexpected error occurred.';
      }
    } else {
      errorMessage += error.statusText || 'Communication failed with the server.';
    }

    return throwError(() => new Error(errorMessage));
  }
}