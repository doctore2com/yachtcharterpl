import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

interface AuthResponse {
  token: string;
  id: number;
  username: string;
  email: string;
  roles: string[];
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth';
  private currentUser: AuthResponse | null = null;

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/signin`, {
      username,
      password
    }).pipe(
      tap(response => {
        if (response.token) {
          localStorage.setItem('token', response.token);
          this.currentUser = response;
        }
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    this.currentUser = null;
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getUser(): AuthResponse | null {
    return this.currentUser;
  }

  isLoggedIn(): boolean {
    console.log('Token:', this.getToken());
    return !!this.getToken();
  }

  getUserId(): number {
    const user = this.getUser();
    return user ? user.id : 0;
  }
}