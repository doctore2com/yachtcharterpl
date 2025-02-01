import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Boat } from '../models/boat.model';
import { AuthService } from './auth.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BoatService {
  private apiUrl = '/api/boats';

  constructor(private http: HttpClient, private authService: AuthService) { }

  getBoats(): Observable<Boat[]> {
    console.log('Wysyłam żądanie GET /api/boats');
    console.log('Token:', this.authService.getToken());

    return this.http.get<Boat[]>(this.apiUrl).pipe(
      tap({
        next: (boats) => console.log('Otrzymano odpowiedź:', boats),
        error: (error) => {
          console.error('Błąd podczas pobierania łodzi:', error);
          console.error('Status:', error.status);
          console.error('Wiadomość:', error.message);
          console.error('Pełny błąd:', error);
        }
      })
    );
  }

  getBoat(id: number): Observable<Boat> {
    return this.http.get<Boat>(`${this.apiUrl}/${id}`);
  }

  createBoat(boat: Boat): Observable<Boat> {
    return this.http.post<Boat>(this.apiUrl, boat);
  }

  updateBoat(id: number, boat: Boat): Observable<Boat> {
    return this.http.put<Boat>(`${this.apiUrl}/${id}`, boat);
  }

  deleteBoat(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}