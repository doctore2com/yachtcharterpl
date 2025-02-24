import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { Boat } from "../../models/boat.model";

@Injectable({providedIn:'root'})
export class BoatService {
  private apiUrl = '/api/boats';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Boat[]> {
    console.log('Wywołanie getAll, URL:', `${this.apiUrl}/`);
    return this.http.get<Boat[]>(this.apiUrl);
  }
  get(id: string): Observable<Boat> {
    return this.http.get<Boat>(`${this.apiUrl}/${id}`);
  }

  save(boat: Boat): Observable<Boat> {
    console.log('=== Rozpoczęcie zapisywania łodzi ===');
    console.log('Dane łodzi:', boat);

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');

    return this.http.post<Boat>(this.apiUrl, boat, {
      headers: headers
    }).pipe(
      tap(response => console.log('Odpowiedź:', response)),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('=== Błąd podczas zapisu ===');
    if (error.error instanceof ErrorEvent) {
      // Błąd po stronie klienta
      console.error('Błąd klienta:', error.error.message);
    } else {
      // Błąd po stronie serwera
      console.error(
        `Kod błędu: ${error.status}, ` +
        `Treść: ${error.error}`);
    }
    console.error('Pełny obiekt błędu:', error);
    return throwError(() => new Error('Wystąpił problem podczas zapisywania łodzi. Spróbuj ponownie później.'));
  }

  remove(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  deleteBoat(id: number): Observable<void>{
      return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
          tap(() => console.log(`Usunieto łódź o id: ${id}`)),
          catchError(error=> {
          console.error('Błąd podczas usuwania łodzi:', error);
          return throwError(() => error);
      })
  );
  }

  updateBoat(id: number, boat: Boat): Observable<Boat> {
    return this.http.put<Boat>(`${this.apiUrl}/${id}`, boat).pipe(
      tap(response => console.log('Zaktualizowano łódź:', response)),
      catchError(error => {
        console.error('Błąd podczas aktualizacji łodzi:', error);
        return throwError(() => error);
      })
    );
  }
}
