import {HttpClient} from "@angular/common/http";
import { Injectable } from '@angular/core';
import {map, Observable, tap, throwError} from "rxjs";
import {Charter} from "../models/charter.model";
import {AuthService} from "./auth.service";


@Injectable({
  providedIn: 'root'
})
export class CharterService{
  private apiUrl = '/api/charters';

  constructor(private http:HttpClient, private authService: AuthService) {
    this.http = http;
  }

  createCharter(charter: Charter): Observable<Charter> {
    if (!this.authService.isLoggedIn()) {
      return throwError(() => new Error('Musisz być zalogowany, aby utworzyć rezerwację'));
    }
    return this.http.post<Charter>(this.apiUrl, charter);
  }

  getAllCharters(): Observable<Charter[]> {
    return this.http.get<Charter[]>(this.apiUrl).pipe(
      tap(response => console.log('Surowa odpowiedź z serwera:', response)),
      map(response => {
        if (!Array.isArray(response)) {
          console.error('Odpowiedź nie jest tablicą:', response);
          return [];
        }
        return response;
      }),
      tap(charters => console.log('Przetworzone rezerwacje:', charters))
    );
  }

  getCharters(): Observable<Charter[]> {
    return this.http.get<Charter[]>(this.apiUrl);
  }

  getChartersByUserId(userId: number): Observable<Charter[]> {
    return this.http.get<Charter[]>(`${this.apiUrl}/user/${userId}`);
  }
}
