import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

/** Dynamic base URL detection for the API based on the hosting environment. */
const AUTO_BASE_URL = window.location.hostname.includes("localhost")
  ? "https://localhost:7242/api/v2"
  : "https://moviesapi-rd.azurewebsites.net/api/v2";

export { AUTO_BASE_URL };

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private token: string | null = null;
  private readonly tokenKey = 'movie_api_token';
  private readonly tokenUrl = `${AUTO_BASE_URL}/token`;

  constructor(private http: HttpClient) {}

  async init(): Promise<void> {
    this.token = localStorage.getItem(this.tokenKey);
    if (!this.token) {
      await this.refreshToken();
    }
  }

  async refreshToken(): Promise<void> {
    try {
      const response = await firstValueFrom(
        this.http.get<{ token: string }>(this.tokenUrl)
      );
      this.token = response.token;
      localStorage.setItem(this.tokenKey, this.token);
    } catch (error) {
      console.error('Token refresh failed:', error);
      this.token = null;
    }
  }

  getToken(): string | null {
    return this.token;
  }

  getAuthHeaders(): { [key: string]: string } {
    return this.token ? { 'Authorization': `Bearer ${this.token}` } : {};
  }
}