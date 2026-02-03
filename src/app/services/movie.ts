import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, from } from 'rxjs';
import { catchError, switchMap, map } from 'rxjs/operators';
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
          .pipe(catchError(this.parseErrorResponse));
      })
    );
  }

  /** Get movie by ID */
  getMovieById(id: string): Observable<Movie> {
    return from(this.tokenService.init()).pipe(
      switchMap(() => {
        const headers = this.getHeaders(); // probablement Authorization header
        return this.http.get<Movie>(`${this.baseUrl}/${id}`, { headers })
          .pipe(catchError(this.parseErrorResponse));
      })
    );
  }
  
  /** Create a new movie */
  createMovie(movie: any): Observable<void> {
    return from(this.tokenService.init()).pipe(
      switchMap(() => {
        const headers = this.getHeaders();
        return this.http.post(this.baseUrl, movie, { 
          headers,
          observe: 'response',
          responseType: 'text'
        }).pipe(
          map(response => {
            if (response.status >= 200 && response.status < 300) {
              return undefined as void;
            }
            throw new Error(`Unexpected status: ${response.status}`);
          }),
          catchError(this.parseErrorResponse)
        );
      })
    );
  }

  /** Update an existing movie */
updateMovie(id: string, movie: any): Observable<void> {
  return from(this.tokenService.init()).pipe(
    switchMap(() => {
      const headers = this.getHeaders();
      // Observe: 'response' pour avoir accès au statut HTTP
      return this.http.put(`${this.baseUrl}/${id}`, movie, { 
        headers,
        observe: 'response',
        responseType: 'text'
      }).pipe(
        map(response => {
          // Si statut 200-299, c'est bon
          if (response.status >= 200 && response.status < 300) {
            return undefined as void;
          }
          throw new Error(`Unexpected status: ${response.status}`);
        }),
        catchError(this.parseErrorResponse)
      );
    })
  );
}

  /** Delete a movie */
  deleteMovie(id: string): Observable<void> {
    return from(this.tokenService.init()).pipe(
      switchMap(() => {
        const headers = this.getHeaders();
        return this.http.delete<void>(`${this.baseUrl}/${id}`, { headers })
          .pipe(catchError(this.parseErrorResponse));
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
  private parseErrorResponse(error: HttpErrorResponse) {
    let errorMessage = `Error ${error.status}: `;
    if (error.error) {
      let errorObj = error.error;
      if (typeof error.error === 'string') {
        try {
          errorObj = JSON.parse(error.error);
        } catch {
          errorObj = { message: error.error };
        }
      }

      if (errorObj.errors) {
        errorMessage += Object.values(errorObj.errors).flat().join(' | ');
      } else if (errorObj.title) {
        errorMessage += errorObj.title;
      } else if (errorObj.message) {
        errorMessage += errorObj.message;
      } else {
        errorMessage += 'An unexpected error occurred.';
      }
    } else {
      errorMessage += error.statusText || 'Communication failed with the server.';
    }

    return throwError(() => new Error(errorMessage));
  }
}